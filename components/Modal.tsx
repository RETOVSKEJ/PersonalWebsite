import { motion } from "framer-motion";

export default function Modal({ handleClose }: { handleClose: Function }) {
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
      className=" bg-black/25 fixed top-0 left-0 w-full h-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => handleClose()}
    >
      <motion.div
        id="modal"
        className="modal bg-primary/50 backdrop-blur-sm shadow-xl border-all [&:backdrop]:bg-white fixed inset-0 m-auto h-[50%] p-8 w-2/3 h-100 rounded-3xl"
        drag
        dragConstraints={{
          top: -225,
          right: 225,
          bottom: 225,
          left: -225,
        }}
        dragElastic={0.5}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ContactForm handleClose={handleClose} />
      </motion.div>
    </motion.div>
  );
}

function ContactForm({ handleClose }: { handleClose: Function }) {
  return (
    <div>
      <h2 className="text-3xl text-accent text-center">Contact Me</h2>
      <button
        className="text-accent border border-slate-600 fixed top-0 right-0 rounded-md p-2 m-4"
        onClick={() => handleClose()}
      >
        X
      </button>
    </div>
  );
}
