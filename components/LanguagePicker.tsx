"use client";
import { useState } from "react";
import { Pl, Gb } from "react-flags-select";
import { Locale } from "@/dictionaries/i18n-config";
import Link from "next/link";

export default function LanguagePicker({ lang }: { lang: Locale }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex relative flex-col">
      <label className="cursor-pointer" htmlFor="language-checkbox">
        {lang === "en" ? <Gb fontSize={24} /> : <Pl fontSize={24} />}
      </label>
      <input
        className="hidden"
        id="language-checkbox"
        type="checkbox"
        onChange={() => setChecked((prev) => !prev)}
      />
      {checked ? (
        <div
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
