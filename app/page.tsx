import Image from "next/image";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import TimeLine from "@/components/TimeLine";

export default function Home() {
  return (
    <main className="grid grid-cols-2 relative top-20 w-2/3 m-auto gap-16">
      <div className="max-w-4xl flex flex-col justify-between sticky top-20 gap-32 self-start">
        <Header />
        <Socials />
      </div>
      <div className="flex flex-col overflow-y-auto gap-16">
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </main>
  );
}
