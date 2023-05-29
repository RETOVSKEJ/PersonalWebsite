"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function ThemePicker() {
  const [darkTheme, setDarkTheme] = useDarkMode();

  useEffect(() => {
    const pointerPosition = { x: 0, y: 0 };
    document.body.style.backgroundAttachment = "scroll";
    var throttled = false;
    document.addEventListener("pointermove", (e) => {
      if (!throttled) {
        throttled = true;
        pointerPosition.x = e.pageX;
        pointerPosition.y = e.pageY;
        document.body.style.backgroundImage = `radial-gradient(circle at ${pointerPosition.x}px ${pointerPosition.y}px, #132149 0%, #0F172A 50%)`;
        setTimeout(() => {
          throttled = false;
        }, 20);
      }
    });
  }, []);

  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </div>
  );
}
