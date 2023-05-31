"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { useEffectAfterMount } from "@/hooks/useEffectAfterMount";

export default function ThemePicker() {
  const [darkTheme, setDarkTheme] = useDarkMode("true");
  const [loaded2, setLoaded2] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const btnRef = useRef<HTMLButtonElement>(null);
  const PRIMARY = "#0F172A";

  // localstorage is not available (in userDarkMode) until mounted
  useEffect(() => {
    setDarkTheme(localStorage.getItem("dark-theme") === "true");
  }, [loaded]);

  useEffectAfterMount(() => {
    setLoaded2(true);
  }, [darkTheme]);

  useEffect(() => {
    document.body.style.backgroundColor = PRIMARY;
    document.body.style.transition = "background-color 0.6s ease-in-out";
    if (!darkTheme) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#e3dfdd";

      return;
    }

    document.body.style.backgroundColor = PRIMARY;
    const pointerPosition = { x: 0, y: 0 };

    var throttled = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!throttled) {
        throttled = true;
        pointerPosition.x = e.pageX;
        pointerPosition.y = e.pageY;

        document.body.style.backgroundAttachment = "scroll";
        document.body.style.backgroundImage = `radial-gradient(circle at ${pointerPosition.x}px ${pointerPosition.y}px, #132149 0%, ${PRIMARY} 46%)`;
        setTimeout(() => {
          throttled = false;
        }, 20);
      }
    };

    const handleTransitionEnd = (e: any) => {
      // dodaje w prawym gornym rogu jasnosc
      if (e.target === document.body) {
        if (loaded2) {
          document.body.style.backgroundImage = `radial-gradient(circle at ${
            btnRef.current?.offsetLeft! + window.scrollX
          }px ${btnRef.current?.offsetTop!}px, #132149 0%, ${PRIMARY} 46%)`;
        }
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
      aria-label="Theme picker"
      className="text-slate-700 dark:text-white"
      ref={btnRef}
      onClick={handleMode}
    >
      {darkTheme ? <FaSun size="24" /> : <FaMoon size="24" />}
    </button>
  );
}
