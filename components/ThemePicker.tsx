"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function ThemePicker() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const btnRef = useRef<HTMLButtonElement>(null);
  const PRIMARY = "#0F172A";

  useEffect(() => {
    document.body.style.backgroundColor = PRIMARY;
    document.body.style.transition = "background-color 0.6s ease-in-out";
    if (!darkTheme) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#e2dddd";

      return;
    }

    document.body.style.backgroundColor = PRIMARY;
    document.body.style.backgroundAttachment = "scroll";
    const pointerPosition = { x: 0, y: 0 };

    var throttled = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!throttled) {
        throttled = true;
        pointerPosition.x = e.pageX;
        pointerPosition.y = e.pageY;

        document.body.style.backgroundImage = `radial-gradient(circle at ${pointerPosition.x}px ${pointerPosition.y}px, #132149 0%, ${PRIMARY} 50%)`;
        setTimeout(() => {
          throttled = false;
        }, 20);
      }
    };

    const handleTransitionEnd = (e: any) => {
      if (e.target === document.body) {
        document.body.style.backgroundImage = `radial-gradient(circle at ${
          btnRef.current?.offsetLeft! + window.scrollX
        }px ${btnRef.current?.offsetTop!}px, #132149 0%, ${PRIMARY} 50%)`;
      }
      document.addEventListener("pointermove", handlePointerMove);
    };

    document.body.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [darkTheme]);

  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <button
      className="text-slate-700 dark:text-white"
      ref={btnRef}
      onClick={handleMode}
    >
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </button>
  );
}
