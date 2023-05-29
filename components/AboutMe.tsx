import React from "react";
import { Italianno } from "next/font/google";

const dancingFont = Italianno({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});

export default function AboutMe() {
  return (
    <figure id="about" className="flex flex-col gap-6">
      <figcaption
        className={`${dancingFont.className} text-5xl font-bold text-slate-200 sm:text-slate-100  text-center"`}
      >
        Przekuwam swoją pasję w coś pozytywnego dla świata
      </figcaption>
      <blockquote className="w-[90%] mx-auto text-slate-300">
        Jestem studentem informatyki a w przeszłości miałem przyjemność być
        profesjonalnym graczem oraz reprezentować różne organizacje na wielu
        zawodach w całym kraju. Zmieniłem profesję, bo zobaczyłem, że
        umiejetność programowania to niesamowita siła - praktycznie nic nas
        tutaj nie ogranicza. <br />
        <br />
        Lubię tworzyć - zwłaszcza gdy może to pomagać ludziom. Oceniłbym siebie
        jako poszukiwacza-perfekcjonistę, z każdej sytuacji w której się znajdę,
        staram się wyciągnąć wszystko co do ostatniego ziarnka. Pracę traktuję
        jako szansę na rozwój, a ten jest według mnie czymś niezbędnym w życiu.
        <br />
        <br />
        Obecnie rozbudowuje aplikacje w oparciu o technologie Next.js oraz
        TailwindCss. W najbliższej przyszłości planuję poszerzyć swoje horyzonty
        o projektowanie w Figmie, pracę z WebSockets oraz naukę frameworka
        Svelte.
      </blockquote>
    </figure>
  );
}
