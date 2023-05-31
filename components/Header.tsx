import { Suspense } from "react";
import Image from "next/image";
import TimeLine from "./TimeLine";
import profilePic from "../public/photo.jpg";
import { DictType } from "@/dictionaries/dictionaries";

export default function Header({ dict }: { dict: DictType }) {
  return (
    <div className="select-none flex flex-col gap-6 items-center sm:items-stretch relative">
      <div className="overflow-hidden shadow-img aspect-square max-w-[265px] w-full sm:aspect-[6/7] lg:max-w-[281px] xl:max-w-[333px] min-h-[150px] max-h-[45vh] rounded-full">
        <Image
          className="object-cover"
          priority={true}
          src={profilePic}
          alt={dict.accessibility.pictureAlt}
        />
      </div>
      <div>
        <h2 className="text-4xl text-txt dark:text-slate-200 dark:sm:text-slate-300 mb-1">
          Michał Silski
        </h2>
        <p className="text-center dark:text-slate-400 text-slate-700 sm:text-slate-600 sm:text-start text-base">
          Fullstack Web Developer
        </p>
      </div>

      <TimeLine dict={dict} />
    </div>
  );
}
