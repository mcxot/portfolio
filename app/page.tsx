import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="border-t border-neutral-800 bg-black py-8 text-center text-sm text-neutral-400">
        <p>© 2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
