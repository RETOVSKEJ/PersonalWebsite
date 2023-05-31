import { Italianno } from "next/font/google";
import { DictType } from "@/dictionaries/dictionaries";

const dancingFont = Italianno({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});

export default function AboutMe({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: DictType;
}) {
  return (
    <figure id="about" className="hide flex flex-col gap-6">
      <figcaption
        className={`${dancingFont.className}  px-1 text-5xl font-bold text-center"`}
      >
        {dict.aboutMe.title}
      </figcaption>
      <blockquote className="w-[90%] mx-auto whitespace-pre-line [&>strong]:text-base ">
        {children}
      </blockquote>
    </figure>
  );
}
