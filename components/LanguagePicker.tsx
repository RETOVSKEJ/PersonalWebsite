"use client";
import { useState, useRef } from "react";
import { Pl, Gb } from "react-flags-select";
import { Locale } from "@/dictionaries/i18n-config";
import Link from "next/link";

export default function LanguagePicker({ lang }: { lang: Locale }) {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex relative flex-col">
      <label
        tabIndex={0}
        aria-label="Change language"
        id="label-language"
        onKeyUp={(e) => {
          e.key === "Enter" ? setChecked((prev) => !prev) : null;
        }}
        className="cursor-pointer"
        htmlFor="language-checkbox"
      >
        {lang === "en" ? <Gb fontSize={24} /> : <Pl fontSize={24} />}
      </label>
      <input
        className="hidden"
        aria-labelledby="label-language"
        id="language-checkbox"
        type="checkbox"
        onChange={() => setChecked((prev) => !prev)}
      />
      {checked ? (
        <div
          aria-expanded={checked}
          id="dropdown"
          className="button-transparent -translate-x-1/4 hover:brightness-100 dark:hover:brightness-100 p-3 py-2.5 absolute top-[135%] flex justify-between gap-1.5 flex-col"
        >
          <Link
            href="/pl"
            className="hover:brightness-110 dark:hover:brightness-110"
          >
            <Pl fontSize={24} />
          </Link>
          <Link
            href="/en"
            className="hover:brightness-110 dark:hover:brightness-110"
          >
            <Gb fontSize={24} />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
