import React from "react";
import Link from "next/link";

export default function TimeLine() {
  return (
    <nav className="flex flex-col gap-4 uppercase text-xs font-semibold tracking-widest text-slate-500 group [&>div:hover]:text-slate-100 [&>div:hover_span]:bg-slate-100 [&>div:hover_span]:w-16">
      <div className="relative flex items-center gap-4 cursor-pointer">
        <span className="nav-indicator"></span>
        <Link href="#about">About</Link>
      </div>

      <div className="relative flex items-center gap-4 cursor-pointer">
        <span className="nav-indicator"></span>
        <Link href="#projects">Projects</Link>
      </div>

      <div className="relative flex items-center gap-4 cursor-pointer">
        <span className="nav-indicator"></span>
        <Link href="#resume">Resume</Link>
      </div>
      <div className="relative flex items-center gap-4 cursor-pointer">
        <span className="nav-indicator"></span>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
