//prawdopodobnie dialog z formularzem
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import Link from "next/link";
import { useState } from "react";
import { BiCopy, BiDownload } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineSend } from "react-icons/ai";
import { useEffectAfterMount } from "@/hooks/useEffectAfterMount";

type StatusEmail = {
  success: boolean;
  message: string;
};

const email = process.env.EMAIL;
const statusInitialDetails: StatusEmail = {
  success: false,
  message: "",
};

export default function ContactMe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<StatusEmail>(statusInitialDetails);
  const [toastOpen, setToastOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleCloseModal = () => setModalOpen(false);
  const handleCloseToast = () => setToastOpen(false);
  const handleCopy = () => {
    setToastOpen(true);
    setCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(() => {
      handleCloseToast();
    }, 2500);
  };

  useEffectAfterMount(() => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 2500);
  }, [status]);

  return (
    <div id="contact" className="flex flex-col gap-8">
      <h2 className="text-3xl  text-center">
        <span className="text-3xl text-accent">Contact Me</span> & Checkout my
        <span className="text-3xl text-accent"> Resume:</span>
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <h5>.pdf resume</h5>
          <Link
            className="button-transparent flex items-center gap-2"
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
          >
            <span>Download</span> <BiDownload />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <h5>.docx resume</h5>
          <Link
            className="button-transparent  flex items-center gap-2"
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
          >
            <span>Download</span> <BiDownload />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <h5>Email:</h5>
          <a
            href="mailto:michal.silski@hotmail.com"
            aria-label={email}
            className="button-transparent"
          >
            <span>{email}</span>
          </a>
          <button onClick={handleCopy} className="button-transparent p-3">
            {copied ? <GiCheckMark className="fill-green-600" /> : <BiCopy />}
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="button-transparent p-6"
          onClick={() => setModalOpen(true)}
        >
          <span className="leading-normal text-3xl text-accent flex items-center gap-4">
            Contact Me <AiOutlineSend />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen ? (
          <Modal handleClose={handleCloseModal} setStatus={setStatus} />
        ) : null}
      </AnimatePresence>
      <AnimatePresence initial={false} mode={"wait"}>
        {toastOpen ? (
          <Toast
            handleClose={handleCloseToast}
            message="Skopiowano email do schowka!"
          />
        ) : null}
        {sent ? (
          <Toast handleClose={() => setSent(false)} message={status.message} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
