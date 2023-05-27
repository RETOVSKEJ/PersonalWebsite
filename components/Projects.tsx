import Image from "next/image";
import Link from "next/link";
import TanieZarcie from "../public/taniezarcie.png";
import FragFeed from "../public/fragfeed.png";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-4">
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
        technologies={["Typescript", "Next.js 13", "React", "Tailwind"]}
        link={"localhost:3000"}
      />
    </div>
  );
}

export function Project({ name, year, desc, image, technologies, link }) {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <div className="flex gap-4 p-4 border border-transparent rounded-md hover:border-all hover:bg-slate-800 hover:shadow-xl">
        <div className="w-[34%]">
          <Image width={250} height={200} src={image} alt={name} />
        </div>
        <div className="w-[66%] flex flex-col gap-2">
          {name}
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
