import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function Toast({
  handleClose,
  message,
}: {
  handleClose: Function;
  message?: string;
}) {
  return (
    <motion.div
      id="toast"
      className="flexCenter gap-3 z-[100] fixed bottom-4 right-4 p-6  rounded-lg bg-black/50 text-slate-300"
      initial={{ bottom: "-2rem", opacity: 0 }}
      animate={{ bottom: "1rem", opacity: 1 }}
      exit={{ bottom: "-2rem", opacity: 0 }}
    >
      <p className="text-center">{message} </p>
      <button
        className="text-accent hover:brightness-150"
        onClick={() => handleClose()}
      >
        <AiOutlineClose />
      </button>
    </motion.div>
  );
}
