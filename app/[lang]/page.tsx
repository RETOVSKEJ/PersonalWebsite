import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Locale } from "@/dictionaries/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="grid sm:grid-cols-[250px_1fr] lg:grid-cols-2 relative my-20 w-[95%] sm:w-full lg:w-[82%] sm:pl-10 sm:pr-7 lg:p-0 xl:w-[1200px] m-auto gap-16">
      <div className="max-w-4xl sm:h-[calc(100vh-160px)] flex flex-col justify-between sm:sticky top-20 gap-8 self-start">
        <Header dict={dict} />
        <Socials />
      </div>
      <div className=" scroll-smooth flex flex-col sm:overflow-x-hidden gap-16">
        <AboutMe dict={dict}>
          <Text lang={lang} />
        </AboutMe>
        <div id="projects" className="hide">
          <h2 className="text-2xl sm:text-3xl  text-center mb-6">
            {dict.projects.title}
            <span className="text-2xl sm:text-3xl text-accent">
              {" "}
              {dict.projects.titlespan}
            </span>
          </h2>
          <Projects dict={dict} />
        </div>
        <ContactMe dict={dict} />
      </div>
    </main>
  );
}

function Text({ lang }: { lang: Locale }) {
  const textPl = (
    <>
      {" "}
      Jestem <strong>studentem</strong> informatyki a w przeszłości miałem
      przyjemność być profesjonalnym graczem oraz reprezentować różne
      organizacje na wielu zawodach w całym kraju. Zmieniłem profesję, bo
      zobaczyłem, że umiejetność programowania to niesamowita{" "}
      <strong>siła</strong> - praktycznie nic nas tutaj nie ogranicza. <br />
      <br />
      Lubię <strong>tworzyć</strong> - zwłaszcza gdy może to pomagać ludziom.
      Oceniłbym siebie jako poszukiwacza-perfekcjonistę bo w każdej sytuacji w
      której się znajdę, staram się wyciągnąć wszystko co do ostatniego ziarnka.
      Pracę traktuję jako szansę na rozwój, a ten jest według mnie czymś
      niezbędnym w życiu.
      <br />
      <br />
      Obecnie rozbudowuje aplikacje w oparciu o technologie{" "}
      <strong>Next.js</strong> oraz <strong>TailwindCss</strong>. W najbliższej
      przyszłości planuję poszerzyć swoje horyzonty o projektowanie w{" "}
      <strong>Figmie</strong>, pracę z WebSockets oraz naukę frameworka Svelte.
    </>
  );
  const textEng = (
    <>
      I am a computer science <strong>student</strong> who had the pleasure of
      being a professional gamer in the past, representing various organizations
      in numerous competitions nationwide. I switched professions when I
      realized that programming is an incredible <strong>power</strong> - there
      are virtually no limits here.
      <br />
      <br />I have a passion for <strong>creating</strong>, especially when it
      can make a positive difference in people's lives. I would describe myself
      as an explorer-perfectionist; in every situation, I strive to extract
      everything to the last grain. I see work as an opportunity for growth,
      which I consider essential in life.
      <br />
      <br />
      Currently, I am expanding applications based on <strong>
        Next.js
      </strong>{" "}
      and <strong>TailwindCSS</strong>. In the near future, I plan to broaden my
      horizons by delving into <strong>Figma</strong> design, working with
      WebSockets, and learning the Svelte framework.
    </>
  );

  return <>{lang === "pl" ? textPl : textEng}</>;
}
