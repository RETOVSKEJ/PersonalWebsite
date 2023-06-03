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
        className={`${dancingFont.className}  px-1 text-center text-5xl`}
      >
        {dict.aboutMe.title}
      </figcaption>
      <blockquote className="mx-auto w-[86%] whitespace-pre-line [&>strong]:text-base ">
        {children}
      </blockquote>
    </figure>
  );
}
