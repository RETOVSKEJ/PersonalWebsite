import ThemePicker from "./ThemePicker";
import LanguagePicker from "./LanguagePicker";

export default function Navbar() {
  return (
    <div className="flex top-0 w-full gap-8 p-6 px-8 z-50 fixed justify-end items-center">
      <ThemePicker />
      <LanguagePicker />
    </div>
  );
}
