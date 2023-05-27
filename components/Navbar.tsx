import ContactMe from "./ContactMe";
import ThemePicker from "./ThemePicker";
import LanguagePicker from "./LanguagePicker";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-16 py-2 px-4 flex items-center bg-gradient-to-t from-primary/50 to-slate-700/50 justify-end gap-4 backdrop-blur-sm border-bottom ">
      <ThemePicker />
      <LanguagePicker />
      <ContactMe />
      <Link
        className="button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener"
      >
        Resume
      </Link>
    </nav>
  );
}
