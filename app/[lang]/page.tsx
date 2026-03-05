import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
    <>
      <Navbar lang={lang} />
      <main className=" relative m-auto my-[4.25rem] grid w-[95%] gap-16 overflow-x-hidden pt-3 sm:w-full sm:grid-cols-[250px_1fr] sm:gap-12 sm:pl-10  sm:pr-7 md:overflow-x-visible lg:w-[82%] lg:grid-cols-[290px_1fr] lg:gap-14 lg:p-0 xl:w-[1200px] xl:grid-cols-2">
        <div className="top-20 flex max-w-4xl flex-col justify-between gap-8 self-start sm:sticky sm:h-[calc(100vh-160px)]">
          <Header dict={dict} />
          <Socials />
        </div>
        <div className="flex flex-col gap-16  scroll-smooth sm:pl-[17px] xl:pl-[0px]">
          <AboutMe dict={dict}>
            <Text lang={lang} />
          </AboutMe>
          <div id="projects" className="hide">
            <h2 className="mb-6 text-center  text-2xl sm:text-3xl">
              {dict.projects.title}
              <span className="text-2xl text-accent sm:text-3xl">
                {" "}
                {dict.projects.titlespan}
              </span>
            </h2>
            <Projects dict={dict} />
          </div>
          <ContactMe dict={dict} />
        </div>
      </main>
    </>
  );
}

function Text({ lang }: { lang: Locale }) {
  const textPl = (
    <>
      Jestem <strong>inżynierem informatyki</strong>, z ponad 2 letnim
      doświadczeniem w programowaniu fullstackowych aplikacji .NET W przeszłości
      miałem także przyjemność być profesjonalnym graczem oraz reprezentować
      różne organizacje na wielu zawodach w całym kraju. <br /> <br /> Lubię{" "}
      <strong>tworzyć</strong> - zwłaszcza, gdy może to pomagać ludziom.
      Oceniłbym siebie jako poszukiwacza-perfekcjonistę, bo z każdej sytuacji w
      której się znajdę, staram się wyciągnąć wszystko co do ostatniego ziarnka.
      Pracę traktuję jako szansę na rozwój, a ten jest według mnie czymś
      niezbędnym w życiu.
      <br />
      <br />
      Obecnie rozbudowuje aplikacje w oparciu o technologie{" "}
      <strong>.NET</strong>,<strong>Vue & Nuxt</strong> oraz rozwiązania
      chmurowe <strong>Azure</strong>. Pracuje także nad kilkoma aplikacjami
      mobilnymi (<strong>Expo & React Native</strong>), które już niedługo będą
      dostępne w sklepach Google Play i App Store. W najbliższej przyszłości
      planuję dalej poszerzać swoje umiejętności w zakresie{" "}
      <strong>DevOps</strong> oraz <strong>AI</strong>
    </>
  );
  const textEng = (
    <>
      I am a <strong>Computer Science engineer</strong> with over{" "}
      <strong>two years of experience</strong> building full-stack applications
      using the <strong>.NET</strong> ecosystem. In the past, I also had the
      opportunity to be a professional esports player — representing various
      organizations in competitions across the country.
      <br />
      <br />I have a passion for <strong>creating</strong> — especially when it
      can make a positive difference in people's lives. I would describe myself
      as an explorer-perfectionist — someone who always tries to extract the
      maximum potential from every situation and continuously learn from
      experience. Work, for me, is an opportunity for growth — something I
      consider essential in life.
      <br />
      <br />
      Currently, I am developing applications using <strong>.NET</strong>,{" "}
      <strong>Vue & Nuxt</strong>, and cloud solutions based on{" "}
      <strong>Azure</strong>. I am also working on several mobile applications
      built with <strong>Expo & React Native</strong>, which will soon be
      released on Google Play and the App Store. In the near future, I plan to
      further expand my expertise in <strong>DevOps</strong> and{" "}
      <strong>AI</strong>.
    </>
  );

  return <>{lang === "pl" ? textPl : textEng}</>;
}
