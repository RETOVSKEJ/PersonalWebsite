//prawdopodobnie dialog z formularzem
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function ContactMe() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);

  return (
    <div id="contact">
      <motion.button onClick={() => setModalOpen(true)}>
        Contact Me
      </motion.button>
      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen ? <Modal handleClose={handleClose} /> : null}
      </AnimatePresence>
    </div>
  );
}
