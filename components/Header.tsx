import { Suspense } from "react";
import Image from "next/image";
import TimeLine from "./TimeLine";
import profilePic from "../public/photo.jpg";
import { DictType } from "@/dictionaries/dictionaries";
import Script from "next/script";

export default function Header({ dict }: { dict: DictType }) {
  return (
    <div className="relative flex select-none flex-col items-center gap-6 sm:items-stretch">
      <Suspense
        fallback={
          <div className="aspect-square max-h-[45vh] min-h-[150px] w-full max-w-[265px] animate-pulse overflow-hidden rounded-full sm:aspect-[6/7] lg:max-w-[281px] xl:max-w-[333px]"></div>
        }
      >
        <div className="aspect-square max-h-[45vh] min-h-[150px] w-full max-w-[265px] overflow-hidden rounded-full sm:aspect-[6/7] lg:max-w-[281px] xl:max-w-[333px]">
          <Image
            id="profilePic"
            className="object-cover"
            priority
            width={333}
            height={500}
            src={profilePic}
            alt={dict.accessibility.pictureAlt}
          />
        </div>
      </Suspense>
      <div>
        <h2 className="mb-1 text-4xl text-txt dark:text-slate-200 dark:sm:text-slate-300">
          Michał Silski
        </h2>
        <p className="text-center text-base text-slate-700 dark:text-slate-400 sm:text-start sm:text-slate-600">
          Fullstack Web Developer
        </p>
      </div>

      <TimeLine dict={dict} />
      <Script>
        {`
          document.getElementById("profilePic").parentElement.classList.add("shadow-img");
        `}
      </Script>
    </div>
  );
}
