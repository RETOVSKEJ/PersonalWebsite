import React from "react";
import Image from "next/image";
import TimeLine from "./TimeLine";
import profilePic from "../public/photo.jpg";

export default function Header() {
  return (
    <div className="flex flex-col gap-6 items-center sm:items-stretch relative">
      <div className="overflow-hidden aspect-square max-w-[270px] w-full sm:aspect-[6/7] sm:max-w-[333px] min-h-[150px] max-h-[45vh] rounded-full">
        <Image className="object-cover" src={profilePic} alt="Moje Zdjęcie" />
      </div>
      <div>
        <h2 className="text-4xl text-slate-200 sm:text-slate-300 mb-1">
          Michał Silski
        </h2>
        <p className="text-center sm:text-start text-base">
          Fullstack Web Developer
        </p>
      </div>
      <TimeLine />
    </div>
  );
}
