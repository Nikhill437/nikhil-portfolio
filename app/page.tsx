import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { LiveWork } from "@/components/sections/live-work";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { Skills } from "@/components/sections/skills";
import { Statement } from "@/components/sections/statement";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Statement />
        <About />
        <Showcase />
        <Skills />
        <ExperienceSection />
        <Projects />
        <LiveWork />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
