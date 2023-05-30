import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type DARK_MODE_TYPES = "true" | "false";

const useDarkMode = (initialValue: string) => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme", initialValue);
  const isEnabled = typeof enabled !== "undefined" && enabled;

  useEffect(() => {
    const className = "dark";
    const body = document.body;

    isEnabled
      ? body.classList.add(className)
      : body.classList.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
