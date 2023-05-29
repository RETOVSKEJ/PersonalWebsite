import { motion, useDragControls } from "framer-motion";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import { FormEvent, useEffect, useTransition, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Modal({
  handleClose,
  setStatus,
}: {
  handleClose: Function;
  setStatus: Function;
}) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: "10",
        stiffness: "40",
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <motion.div
      id="backdrop"
      className=" bg-black/25 backdrop-blur fixed top-0 left-0 w-full h-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onPointerDown={() => handleClose()}
    >
      <motion.div
        id="modal"
        className="modal cursor-grab bg-primary/50 backdrop-blur-sm shadow-xl border-all fixed z-50 inset-0 h-fit m-auto p-4 sm:p-6 w-[93%] md:p-8 md:w-4/5 lg:w-2/3 rounded-3xl"
        drag
        dragConstraints={{
          top: -225,
          right: 225,
          bottom: 225,
          left: -225,
        }}
        dragElastic={0.5}
        onPointerDown={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ContactForm handleClose={handleClose} setStatus={setStatus} />
      </motion.div>
    </motion.div>
  );
}

const formInitialDetails: FormData = {
  name: "",
  email: "",
  message: "",
};

function ContactForm({
  handleClose,
  setStatus,
}: {
  handleClose: Function;
  setStatus: Function;
}) {
  const [formDetails, setFormDetails] = useState<FormData>(formInitialDetails);
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category: keyof FormData, value: any) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();

    // reset form
    if (result.success) {
      setFormDetails(formInitialDetails);
      handleClose();
      setStatus({
        success: true,
        message:
          "Dziękuje za wiadomość! Postaram się odpowiedzieć na nią jak najszybciej.",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="text-2xl md:text-4xl text-center mb-7 px-8">
        Send me a{" "}
        <span className="text-2xl md:text-4xl text-accent">message!</span>
      </h2>
      <button
        className="text-accent bg-slate-800/20 border border-slate-700 fixed top-0 right-0 rounded-md p-2 m-4"
        onClick={() => handleClose()}
      >
        <AiOutlineClose />
      </button>
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <motion.div
          className="cursor-default flex flex-col gap-4 md:flex-row md:gap-8"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <input
            className="input w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            draggable="false"
            required
            value={formDetails.name}
            onChange={(e) => onFormUpdate("name", e.target.value)}
          />
          <input
            className="input w-full"
            type="email"
            name="email"
            id="email"
            draggable="false"
            required
            placeholder="Your Email"
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
        </motion.div>
        <motion.div
          className="cursor-default relative"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <textarea
            className="input resize-none w-full pb-24 md:pb-16"
            name="message"
            id="message"
            draggable="false"
            rows={5}
            placeholder="Message"
            value={formDetails.message}
            onChange={(e) => onFormUpdate("message", e.target.value)}
            required
          ></textarea>
          <div className="rounded-tl-lg absolute bottom-0 right-0 mb-1 bg-primary/25 p-4">
            <button className="button flexCenter gap-1">
              <AiOutlineSend />
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </motion.div>
      </form>
    </>
  );
}
