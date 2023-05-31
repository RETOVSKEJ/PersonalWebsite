import { useEffect, useState } from "react";

function getSavedValue(key: string, initialValue: string | Function) {
  if (typeof window === "undefined") return initialValue; // dla ssr
  const savedValue = JSON.parse(localStorage.getItem(key)!);
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue(); // obliczanie expression, jesli uzytkownik poda zamiast gotowego wyniku
  return initialValue;
}

export default function useLocalStorage(
  key: string,
  initialValue: string | Function
) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
