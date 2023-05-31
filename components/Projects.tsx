import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TanieZarcie from "../public/taniezarcie.png";
import FragFeed from "../public/fragfeed.png";
import Portfolio from "../public/portfolio.png";
import { FiArrowUpRight } from "react-icons/fi";
import { DictType } from "@/dictionaries/dictionaries";

export default function Projects({ dict }: { dict: DictType }) {
  return (
    <div className="flex flex-col gap-5 [&:hover>a:not(:hover)]:opacity-50">
      <Project
        name={"TanieZarcie"}
        year={2023}
        desc={dict.projects.taniezarcie}
        image={TanieZarcie}
        technologies={[
          "TypeScript",
          "Next.js 13",
          "React",
          "CSS Modules",
          "Prisma",
          "PostgreSQL",
          "Puppeteer",
        ]}
        alt={dict.accessibility.taniezarcieAlt}
        link={" https://taniezarcie-retovskej.vercel.app/"}
      />
      <Project
        name={"FragFeed"}
        year={2023}
        desc={dict.projects.fragfeed}
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
        alt={dict.accessibility.fragfeedAlt}
        link={"https://fragfeed.lm.r.appspot.com/"}
      />
      <Project
        name={"Portfolio"}
        year={2023}
        desc={dict.projects.portfolio}
        image={Portfolio}
        technologies={[
          "Typescript",
          "Next.js 13",
          "React",
          "TailwindCSS",
          "Framer-motion",
          "Nodemailer",
        ]}
        alt={dict.accessibility.portfolioAlt}
        link={"/"}
      />
    </div>
  );
}

type projectProps = {
  name: string;
  year: number;
  desc: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
  alt: string;
};

export function Project({
  name,
  year,
  desc,
  image,
  technologies,
  link,
  alt,
}: projectProps) {
  return (
    <Link
      className="transition-opacity duration-200"
      href={link}
      rel="noopener"
      target="_blank"
    >
      <div className="group flex gap-4 rounded-lg border border-transparent p-0 py-1 hover:border-slate-400/20 hover:bg-white/20  hover:shadow-lg dark:hover:border-slate-700/30 dark:hover:bg-slate-700/30 md:p-4 [&:hover>div>h5]:text-accent">
        <div className="w-[34%] pt-[5px]">
          <Image
            className="shadow-xl"
            width={250}
            height={200}
            src={image}
            alt={alt}
          />
        </div>
        <div className="flex w-[66%] flex-col gap-2">
          <h5 className="flex items-center gap-1 text-base">
            {name}
            <span className="self-end pb-[2px] text-base transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-[2px]  group-hover:text-accent ">
              <FiArrowUpRight />
            </span>
          </h5>
          <p className="font-semibold text-slate-500 dark:text-slate-400">
            {year}
          </p>
          <p className="text-slate-500 dark:text-slate-400">{desc}</p>
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
