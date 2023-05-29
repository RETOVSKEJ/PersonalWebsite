import Image from "next/image";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import TimeLine from "@/components/TimeLine";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" grid sm:grid-cols-[250px_1fr] lg:grid-cols-2 relative my-20 w-[95%] sm:w-full lg:w-[82%] sm:pl-10 sm:pr-7 lg:p-0 xl:w-[1200px] m-auto gap-16">
      <div className="max-w-4xl sm:h-[calc(100vh-160px)] flex flex-col justify-between sm:sticky top-20 gap-8 self-start">
        <Header />
        <Socials />
      </div>
      <div className=" scroll-smooth flex flex-col sm:overflow-x-hidden gap-16">
        <AboutMe />
        <div id="projects" className="hide">
          <h2 className="text-2xl sm:text-3xl  text-center mb-6">
            Checkout my
            <span className="text-2xl sm:text-3xl text-accent"> Projects</span>:
          </h2>
          <Projects />
        </div>
        <ContactMe />
      </div>
    </main>
  );
}
