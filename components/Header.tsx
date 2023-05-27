import React from "react";
import Image from "next/image";
import TimeLine from "./TimeLine";
import profilePic from "../public/photo.jpg";

export default function Header() {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden w-[330px] h-[380px] rounded-full">
        <Image className="object-cover" src={profilePic} alt="Moje Zdjęcie" />
      </div>
      <div>
        <h2>Michał Silski</h2>
        <p>Fullstack Web Developer</p>
      </div>
      <TimeLine />
    </div>
  );
}
