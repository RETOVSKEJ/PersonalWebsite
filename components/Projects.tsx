import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TanieZarcie from "../public/taniezarcie.png";
import FragFeed from "../public/fragfeed.png";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 [&:hover>a:not(:hover)]:opacity-50">
      <Project
        name={"TanieZarcie"}
        year={2023}
        desc={
          "Aplikacja pozwalająca na łatwiejszy wybór zakupu w McDonald. Porównaj wartości odżywcze, ceny oraz rankingi wybranych zestawów. Nie wiesz co kupić? Wylosuj swój zestaw"
        }
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
        desc={
          "Strona internetowa, ułatawiająca śledzenie wydarzeń na światowej scenie e-sportu. Sprawdź najgorętsze wydarzenia ostatniego tygodnia, lub zarejestruj się i opublikuj swój post wraz ze zdjęciem!"
        }
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
        name={"Portfolio"}
        year={2023}
        desc={
          "Prywatne portfolio, umożliwajace pozyskania kilku informacji o mnie, oraz kontakt"
        }
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

type projectProps = {
  name: string;
  year: number;
  desc: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
};

export function Project({
  name,
  year,
  desc,
  image,
  technologies,
  link,
}: projectProps) {
  return (
    <Link
      className="transition-opacity duration-200"
      href={link}
      target="_blank"
      rel="noopener"
    >
      <div className="flex gap-4 p-0 py-1 md:p-4 border border-transparent rounded-lg [&:hover>div>h5]:text-accent group  hover:border-slate-700/30 hover:bg-slate-700/30 hover:shadow-xl">
        <div className="w-[34%]">
          <Image width={250} height={200} src={image} alt={name} />
        </div>
        <div className="w-[66%] flex flex-col gap-2">
          <h5 className="text-base flex items-center gap-1">
            {name}{" "}
            <span className="text-base self-end group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-[2px] transition-all duration-300  pb-[2px] ">
              <FiArrowUpRight />
            </span>
          </h5>
          <p>{year}</p>
          <p>{desc}</p>
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
