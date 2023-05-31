import ThemePicker from "./ThemePicker";
import LanguagePicker from "./LanguagePicker";
import { Locale } from "@/dictionaries/i18n-config";

export default function Navbar({ lang }: { lang: Locale }) {
  return (
    <div className="flex top-0 w-full gap-8 p-6 px-8 z-50 fixed justify-end items-center">
      <ThemePicker />
      <LanguagePicker lang={lang} />
    </div>
  );
}
