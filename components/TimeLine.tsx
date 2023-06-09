"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { DictType } from "@/dictionaries/dictionaries";

const CLASSES_TO_ADD =
  "text-accent [&>span]:bg-accent dark:text-slate-100 dark:[&>span]:bg-slate-100 [&>span]:w-16".split(
    " "
  );

export default function TimeLine({ dict }: { dict: DictType }) {
  const [active, setActive] = useState("about");
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: any) => {
    const currentScrollPos = window.pageYOffset;

    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    if (currentScrollPos < projects?.offsetTop! - 180) {
      setActive("about");
      return;
    }
    if (
      currentScrollPos > projects?.offsetTop! - 180 &&
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
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.13,
    };

    const observer = new IntersectionObserver((entries) => {
      let it = 0;
      let delay = 0;
      entries.forEach((entry: any) => {
        it += 1;
        it == 1 ? (delay = 0) : (delay = 0.34);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.style.transitionDelay = `${delay}s`;
        }
      });
    }, options);

    observer.observe(about!);
    observer.observe(projects!);
    observer.observe(contact!);

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (active === "about") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current?.classList.add(cls);
        projectsRef.current?.classList.remove(cls);
        contactRef.current?.classList.remove(cls);
      });
    }
    if (active === "projects") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current?.classList.remove(cls);
        projectsRef.current?.classList.add(cls);
        contactRef.current?.classList.remove(cls);
      });
    }
    if (active === "contact") {
      CLASSES_TO_ADD.forEach((cls) => {
        aboutRef.current?.classList.remove(cls);
        projectsRef.current?.classList.remove(cls);
        contactRef.current?.classList.add(cls);
      });
    }
  }, [active]);

  return (
    <nav className="group  hidden gap-4 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-500 sm:flex sm:flex-col [&>div:hover]:text-accent dark:[&>div:hover]:text-slate-100 [&>div:hover_span]:w-16 [&>div:hover_span]:bg-accent dark:[&>div:hover_span]:bg-slate-100">
      <div
        ref={aboutRef}
        className="relative flex cursor-pointer items-center gap-4"
      >
        <span className="nav-indicator"></span>
        <Link href="#about">{dict.timeline.about}</Link>
      </div>

      <div
        ref={projectsRef}
        className="relative flex cursor-pointer items-center gap-4"
      >
        <span className="nav-indicator"></span>
        <Link href="#projects">{dict.timeline.projects}</Link>
      </div>

      <div
        ref={contactRef}
        className="relative flex cursor-pointer items-center gap-4"
      >
        <span className="nav-indicator"></span>
        <Link href="#contact">{dict.timeline.contact}</Link>
      </div>
    </nav>
  );
}
