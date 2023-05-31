"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import Link from "next/link";
import { useState, useRef } from "react";
import { BiCopy, BiDownload } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineSend } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffectAfterMount } from "@/hooks/useEffectAfterMount";
import { DictType } from "@/dictionaries/dictionaries";

type StatusEmail = {
  success: boolean;
  message: string;
};

const EMAIL = process.env.EMAIL;
const statusInitialDetails: StatusEmail = {
  success: false,
  message: "",
};

export default function ContactMe({ dict }: { dict: DictType }) {
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
    navigator.clipboard.writeText(EMAIL!);
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
    <div id="contact" className="hide flex flex-col gap-8">
      <h2 className="text-2xl sm:text-3xl  text-center">
        <span className="text-2xl sm:text-3xl text-accent">
          {dict.contact.titlespan1}
        </span>{" "}
        {dict.contact.title}
        <span className="text-2xl sm:text-3xl text-accent">
          {" "}
          {dict.contact.titlespan2}
        </span>
      </h2>
      <div className="flex flex-col gap-4 sm:[&>div>a]:justify-center sm:[&>div>a]:text-center">
        <div className="flex gap-4 mediaQuery">
          <h5 className="italic">{dict.contact.cvpl}</h5>
          <Link
            className="button-transparent flex items-center gap-2"
            href="/resume_PL.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Download CV (Polskie)"
          >
            <span>{dict.contact.download}</span>{" "}
            <BiDownload className="text-accent text-md" />
          </Link>
        </div>
        <div className="flex gap-4 mediaQuery">
          <h5 className="italic">{dict.contact.cveng}</h5>
          <Link
            className="button-transparent  flex items-center gap-2"
            href="/resume_ENG.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Download Resume (English)"
          >
            <span>{dict.contact.download}</span>{" "}
            <BiDownload className="text-accent text-md" />
          </Link>
        </div>
        <div className="flex gap-4 mediaQuery">
          <h5>Email:</h5>
          <div className="items-center flex gap-2">
            <a
              href="mailto:michal.silski@hotmail.com"
              aria-label={EMAIL}
              className="button-transparent"
            >
              <span>{EMAIL}</span>
            </a>
            <button
              aria-label="Copy email to clipboard"
              onClick={handleCopy}
              className="button-transparent accent p-3"
            >
              {copied ? (
                <GiCheckMark
                  aria-label="email successfully copied"
                  className="fill-green-600"
                />
              ) : (
                <BiCopy aria-label="copy email icon" />
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-4 mediaQuery">
          <h5>LinkedIn:</h5>
          <Link
            aria-label={(dict.contact.linkedinBtn, " button")}
            className="button-transparent px-4 py-3 flex items-center gap-2"
            href="https://www.linkedin.com/in/micha%C5%82-silski-093a1b278/"
            target="_blank"
            rel="noopener"
          >
            <span>{dict.contact.linkedinBtn}</span>
            <FiArrowUpRight className="text-accent text-md" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          aria-haspopup="true"
          className="button-transparent m-2 p-6 sm:p-4 sm:px-5 md:p-6"
          id="contact-btn"
          onClick={() => setModalOpen(true)}
        >
          <span className="leading-normal text-3xl sm:text-2xl md:text-3xl text-accent flex items-center gap-4">
            {dict.contact.btn} <AiOutlineSend />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen ? (
          <Modal
            dict={dict}
            handleClose={handleCloseModal}
            setStatus={setStatus}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence initial={false} mode={"wait"}>
        {toastOpen ? (
          <Toast handleClose={handleCloseToast} message={dict.toast.copied} />
        ) : null}
        {sent ? (
          <Toast handleClose={() => setSent(false)} message={status.message} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
