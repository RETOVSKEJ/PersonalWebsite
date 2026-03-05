import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import MeetFinderImg from "../public/meetfinder.png";
import RateMyLookImg from "../public/ratemylook.png";

import TanieZarcie from "../public/taniezarcie.png";
import FragFeed from "../public/fragfeed.png";
import Portfolio from "../public/portfolio.png";

import { FiArrowUpRight } from "react-icons/fi";
import type { DictType } from "@/dictionaries/dictionaries";

type ProjectProps = {
  name: string;
  year: number | string;
  desc: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
  alt: string;
  // badge?: string; // np. "BETA", "NEW"
};

export default function Projects({ dict }: { dict: DictType }) {
  return (
    <div className="flex flex-col gap-6">
      {/* ======= Featured (nowe projekty) ======= */}
      <div className="flex flex-col gap-5 [&:hover>a:not(:hover)]:opacity-50">
        <Project
          name={"MeetFinder"}
          year={"2025–2026"}
          // badge={"BETA"}
          desc={dict.projects.meetfinder}
          image={MeetFinderImg}
          technologies={[
            "React Native (Expo)",
            ".NET",
            "PostgreSQL",
            "Azure",
            "Docker",
            "Push (FCM/Expo)",
            "WebSockets / SignalR",
            "Google Maps API",
          ]}
          alt={dict.accessibility.meetfinderAlt}
          link={"https://meetfinder.pl"}
        />

        <Project
          name={"RateMyLook"}
          year={"2025–2026"}
          // badge={"BETA"}
          desc={dict.projects.ratemylook}
          image={RateMyLookImg}
          technologies={[
            "React Native (Expo)",
            ".NET",
            "PostgreSQL",
            "Hangfire",
            "Azure",
            "Docker",
            "Stats / Analytics",
          ]}
          alt={dict.accessibility.ratemylookAlt}
          link={"https://ratemylook.pl"}
        />
      </div>

      {/* ======= Older Projects Card ======= */}
      <OlderProjectsCard dict={dict} />
    </div>
  );
}

function Project({
  name,
  year,
  desc,
  image,
  technologies,
  link,
  alt,
}: // badge,
ProjectProps) {
  return (
    <Link
      className="transition-opacity duration-200"
      href={link}
      rel="noopener"
      target="_blank"
    >
      <div className="group flex gap-4 rounded-lg border border-transparent p-0 py-1 hover:border-slate-400/20 hover:bg-white/20 hover:shadow-lg dark:hover:border-slate-700/30 dark:hover:bg-slate-700/30 md:p-4 [&:hover>div>h5]:text-accent">
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
          <h5 className="flex items-center gap-2 text-base">
            <span className="flex items-center gap-1">
              {name}
              <span className="self-end pb-[2px] text-base transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-[2px] group-hover:text-accent">
                <FiArrowUpRight />
              </span>
            </span>

            {/* {badge ? (
              <span className="rounded-md border border-slate-400/30 bg-white/30 px-2 py-[2px] text-xs font-semibold text-slate-600 dark:border-slate-700/50 dark:bg-slate-900/30 dark:text-slate-300">
                {badge}
              </span>
            ) : null} */}
          </h5>

          <p className="font-semibold text-slate-500 dark:text-slate-400">
            {year}
          </p>

          <p className="text-slate-500 dark:text-slate-400">{desc}</p>

          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li key={`${name}-${technology}`} className="button-sm">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

function OlderProjectsCard({ dict }: { dict: DictType }) {
  const older = [
    {
      name: "TanieZarcie",
      year: 2023,
      desc: dict.projects.taniezarcieShort ?? dict.projects.taniezarcie,
      image: TanieZarcie,
      link: "https://taniezarcie.vercel.app/",
      alt: dict.accessibility.taniezarcieAlt,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer"],
    },
    {
      name: "FragFeed",
      year: 2023,
      desc: dict.projects.fragfeedShort ?? dict.projects.fragfeed,
      image: FragFeed,
      link: "https://fragfeed.lm.r.appspot.com/",
      alt: dict.accessibility.fragfeedAlt,
      technologies: ["Node.js", "Express", "MongoDB", "Passport", "AWS S3"],
    },
    {
      name: "Portfolio",
      year: 2023,
      desc: dict.projects.portfolioShort ?? dict.projects.portfolio,
      image: Portfolio,
      link: "/",
      alt: dict.accessibility.portfolioAlt,
      technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-400/20 bg-white/10 p-5 shadow-sm backdrop-blur dark:border-slate-700/40 dark:bg-slate-900/20 md:p-7">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          {dict.projects.olderTitle}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {dict.projects.olderHint}
        </p>
      </div>

      {/* scroll tylko wewnątrz tej karty */}
      <div
        className="
          older-scroll
          -mx-2 flex
          snap-x snap-mandatory
          gap-4 overflow-x-auto
          overscroll-x-contain
          scroll-smooth px-2
          pb-3
          [scrollbar-gutter:stable]
        "
        role="region"
        aria-label="Starsze projekty — przewijana lista"
      >
        {older.map((p) => (
          <Link
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener"
            className="
              group
              min-w-[350px]
              max-w-[350px] snap-start
              rounded-xl
              border border-transparent
              bg-white/10
              p-3
              transition
              hover:border-slate-400/20 hover:bg-white/20
              dark:bg-slate-800/20 dark:hover:border-slate-700/40
            "
          >
            <div className="flex gap-3">
              <div className="w-24 shrink-0">
                <Image
                  className="rounded-md shadow"
                  width={160}
                  height={120}
                  src={p.image}
                  alt={p.alt}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {p.name}
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    <FiArrowUpRight />
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {p.year}
                </p>

                {/* więcej miejsca pionowo + dłuższy tekst */}
                <p className="line-clamp-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {p.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
