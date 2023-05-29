import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="justify-center lg:justify-start flex gap-4 text-slate-400 [&>a:hover]:brightness-150">
      <Link href="https://twitter.com/RETOVSKEJ">
        <FaTwitter size="24" className="top-navigation-icon" />
      </Link>
      <Link href="https://www.instagram.com/retolicious/">
        <FaInstagram size="24" className="top-navigation-icon" />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100002115508902">
        <FaFacebook size="24" className="top-navigation-icon" />
      </Link>
      <Link href="https://www.Github.com/RETOVSKEJ">
        <FaGithub size="24" className="top-navigation-icon" />
      </Link>
      <Link href="https://www.linkedin.com/in/micha%C5%82-silski-093a1b278/">
        <FaLinkedin size="24" className="top-navigation-icon" />
      </Link>
    </div>
  );
}
