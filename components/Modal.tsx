import { motion, useDragControls } from "framer-motion";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import { FormEvent, useEffect, useTransition, useState } from "react";
import { DictType } from "@/dictionaries/dictionaries";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type modalPropsType = {
  handleClose: Function;
  setStatus: Function;
  dict: DictType;
};

export default function Modal(modalProps: modalPropsType) {
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
      className=" fixed left-0 top-0 z-10 h-full w-full bg-black/25 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onPointerDown={() => modalProps.handleClose()}
    >
      <motion.div
        id="modal"
        className="modal fixed inset-0 z-50 m-auto h-fit w-[93%] cursor-grab rounded-3xl border border-slate-400/40 bg-orange-100/70 p-4 shadow-xl saturate-150 backdrop-blur-sm dark:border-slate-800 dark:bg-primary/50 dark:saturate-150 sm:p-6 md:w-4/5 md:p-8 lg:w-2/3"
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
        <ContactForm {...modalProps} />
      </motion.div>
    </motion.div>
  );
}

const formInitialDetails: FormData = {
  name: "",
  email: "",
  message: "",
};

function ContactForm({ handleClose, setStatus, dict }: modalPropsType) {
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
        Host: window.location.host,
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
        message: dict.toast.success,
      });
    } else {
      setStatus({
        success: false,
        message: dict.toast.error,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="mb-7 px-8 text-center text-2xl md:text-4xl">
        {dict.modal.title}{" "}
        <span className="text-2xl text-accent md:text-4xl">
          {dict.modal.titlespan}
        </span>
      </h2>
      <button
        aria-label="Close Modal"
        className="fixed right-0 top-0 m-4 rounded-md border border-slate-300/30 bg-white/20 p-2 text-accent hover:brightness-125 dark:border-slate-700 dark:bg-slate-800/20"
        onClick={() => handleClose()}
      >
        <AiOutlineClose />
      </button>
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <motion.div
          className="flex cursor-default flex-col gap-4 md:flex-row md:gap-8"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <input
            className="input w-full"
            type="text"
            name="name"
            id="name"
            placeholder={dict.modal.name}
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
            placeholder={dict.modal.email}
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
        </motion.div>
        <motion.div
          className="relative cursor-default"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <textarea
            className="input w-full resize-none pb-24 md:pb-16"
            name="message"
            id="message"
            draggable="false"
            rows={5}
            placeholder={dict.modal.message}
            value={formDetails.message}
            onChange={(e) => onFormUpdate("message", e.target.value)}
            required
          ></textarea>
          <div className="absolute bottom-0  right-0 m-4 rounded-br-md rounded-tl-lg bg-transparent">
            <button className="button flexCenter gap-1 bg-primary/50 shadow-md dark:border dark:border-slate-700/80 dark:bg-primary/30">
              <AiOutlineSend />
              {isLoading ? dict.modal.btnSending : dict.modal.btn}
            </button>
          </div>
        </motion.div>
      </form>
    </>
  );
}
