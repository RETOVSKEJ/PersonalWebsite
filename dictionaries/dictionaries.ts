import "server-only";
import type { Locale } from "@/dictionaries/i18n-config";

// ✅ 1) en.json = źródło prawdy dla typów
import en from "./en.json";
export type DictType = typeof en;

// ✅ 2) pilnuj, żeby pl.json miał dokładnie te same klucze (compile-time)
import pl from "./pl.json";
const _plMustMatchEn: DictType = pl;

// ✅ 3) runtime loader
const dictionaries: Record<Locale, () => Promise<DictType>> = {
  en: async () => (await import("./en.json")).default as DictType,
  pl: async () => (await import("./pl.json")).default as DictType,
};

export const getDictionary = async (locale: Locale): Promise<DictType> => {
  return dictionaries[locale]();
};
