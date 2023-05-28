"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const CLASSES_TO_ADD =
  "text-slate-100 [&>span]:bg-slate-100 [&>span]:w-16".split(" ");
console.log(CLASSES_TO_ADD);

export default function TimeLine() {
  const [active, setActive] = useState("about");
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (e: any) => {
    const currentScrollPos = window.pageYOffset;

    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    console.log(
      currentScrollPos,
      about?.offsetTop,
      projects?.offsetTop,
      contact?.offsetTop
    );
    if (currentScrollPos < projects?.offsetTop!) {
      setActive("about");
      return;
    }
    if (
      currentScrollPos > projects?.offsetTop! - 60 &&
      currentScrollPos < contact?.offsetTop! - 500
    ) {
      setActive("projects");
      return;
    }
    if (
      currentScrollPos > projects?.offsetTop! &&
      currentScrollPos > contact?.offsetTop! - 500
    ) {
      setActive("contact");
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (active === "about") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current.classList.add(cls);
        projectsRef.current.classList.remove(cls);
        contactRef.current.classList.remove(cls);
      });
    }
    if (active === "projects") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current.classList.remove(cls);
        projectsRef.current.classList.add(cls);
        contactRef.current.classList.remove(cls);
      });
    }
    if (active === "contact") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current.classList.remove(cls);
        projectsRef.current.classList.remove(cls);
        contactRef.current.classList.add(cls);
      });
    }
  }, [active]);

  return (
    <nav className="flex flex-col gap-4 uppercase text-xs font-semibold tracking-widest text-slate-500 group [&>div:hover]:text-slate-100 [&>div:hover_span]:bg-slate-100 [&>div:hover_span]:w-16">
      <div
        ref={aboutRef}
        className="relative flex items-center gap-4 cursor-pointer"
      >
        <span className="nav-indicator"></span>
        <Link href="#about">About</Link>
      </div>

      <div
        ref={projectsRef}
        className="relative flex items-center gap-4 cursor-pointer"
      >
        <span className="nav-indicator"></span>
        <Link href="#projects">Projects</Link>
      </div>

      <div
        ref={contactRef}
        className="relative flex items-center gap-4 cursor-pointer"
      >
        <span className="nav-indicator"></span>
        <Link href="#contact">Contact & Resume</Link>
      </div>
    </nav>
  );
}
