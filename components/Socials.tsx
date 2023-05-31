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
    <div
      aria-label="social media links"
      className="justify-center lg:justify-start flex gap-4 text-slate-600 dark:text-slate-400 [&>a:hover]:brightness-150"
    >
      <Link aria-label="link to Twitter" href="https://twitter.com/RETOVSKEJ">
        <FaTwitter size="24" className="top-navigation-icon" />
      </Link>
      <Link
        aria-label="link to Instagram"
        href="https://www.instagram.com/retolicious/"
      >
        <FaInstagram size="24" className="top-navigation-icon" />
      </Link>
      <Link
        aria-label="link to Facebook"
        href="https://www.facebook.com/profile.php?id=100002115508902"
      >
        <FaFacebook size="24" className="top-navigation-icon" />
      </Link>
      <Link aria-label="link to Github" href="https://www.Github.com/RETOVSKEJ">
        <FaGithub size="24" className="top-navigation-icon" />
      </Link>
      <Link
        aria-label="link to LinkedIn"
        href="https://www.linkedin.com/in/micha%C5%82-silski-093a1b278/"
      >
        <FaLinkedin size="24" className="top-navigation-icon" />
      </Link>
    </div>
  );
}
