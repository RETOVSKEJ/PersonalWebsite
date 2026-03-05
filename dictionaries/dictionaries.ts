import "server-only";
import type { Locale } from "@/dictionaries/i18n-config";

import en from "./en.json";
import pl from "./pl.json";

export type DictType = typeof en;

// compile-time check: pl musi mieć tę samą strukturę co en
const _plMustMatchEn: DictType = pl;

const dictionaries = {
  en,
  pl,
} satisfies Record<Locale, DictType>;

export const getDictionary = async (locale: Locale): Promise<DictType> => {
  const dict = dictionaries[locale];

  // guard (gdyby locale jednak wyszło poza union)
  if (!dict) return dictionaries.en;

  return dict;
};