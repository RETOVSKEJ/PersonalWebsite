import "server-only";
import type { Locale } from "@/dictionaries/i18n-config";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export type DictType = {
  accessibility: {
    pictureAlt: string;
    taniezarcieAlt: string;
    fragfeedAlt: string;
    portfolioAlt: string;
  };
  timeline: {
    about: string;
    projects: string;
    contact: string;
  };
  aboutMe: {
    title: string;
    text: string;
  };
  projects: {
    title: string;
    titlespan: string;
    taniezarcie: string;
    fragfeed: string;
    portfolio: string;
  };
  contact: {
    title: string;
    titlespan1: string;
    titlespan2: string;
    cveng: string;
    cvpl: string;
    linkedinBtn: string;
    btn: string;
    download: string;
  };
  modal: {
    title: string;
    titlespan: string;
    name: string;
    email: string;
    message: string;
    btn: string;
    btnSending: string;
  };
  toast: {
    copied: string;
    error: string;
    success: string;
  };
};
