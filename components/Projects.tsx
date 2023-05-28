import Image from "next/image";
import Link from "next/link";
import TanieZarcie from "../public/taniezarcie.png";
import FragFeed from "../public/fragfeed.png";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col gap-4 [&:hover>a:not(:hover)]:opacity-50"
    >
      <Project
        name={"TanieZarcie"}
        year={2023}
        desc={"Lorem Ipsum"}
        image={TanieZarcie}
        technologies={[
          "TypeScript",
          "Next.js 13",
          "CSS Modules",
          "React",
          "Prisma",
          "PostgreSQL",
          "Puppeteer",
        ]}
        link={"https://www.taniezarcie.vercel.app/"}
      />
      <Project
        name={"FragFeed"}
        year={2023}
        desc={"Lorem Ipsum"}
        image={FragFeed}
        technologies={[
          "Vanilla JS",
          "Node.js",
          "Express",
          "EJS",
          "SCSS",
          "Mongoose",
          "MongoDB",
          "Passport",
          "Multer",
        ]}
        link={"https://fragfeed.lm.r.appspot.com/"}
      />
      <Project
        name={"Portfolio Website"}
        year={2023}
        desc={"Lorem Ipsum"}
        image={FragFeed}
        technologies={[
          "Typescript",
          "Next.js 13",
          "React",
          "Tailwind",
          "Framer-motion",
          "Nodemailer",
        ]}
        link={"localhost:3000"}
      />
    </div>
  );
}

export function Project({ name, year, desc, image, technologies, link }) {
  return (
    <Link
      className="transition-opacity duration-200"
      href={link}
      target="_blank"
      rel="noopener"
    >
      <div className="flex gap-4 p-4 border border-transparent rounded-lg [&:hover>div>h5]:text-accent group  hover:border-slate-700/30 hover:bg-slate-700/30 hover:shadow-xl">
        <div className="w-[34%]">
          <Image width={250} height={200} src={image} alt={name} />
        </div>
        <div className="w-[66%] flex flex-col gap-2">
          <h5 className="text-base flex items-center gap-1">
            {name}{" "}
            <span className="text-base self-end group-hover:-translate-y-1 group-hover:translate-x-[2px] transition-all duration-300  pb-[2px] ">
              <FiArrowUpRight />
            </span>
          </h5>
          <p>{desc}</p>
          <p>{year}</p>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology: string) => (
              <li className="button-sm">{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
