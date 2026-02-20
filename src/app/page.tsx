import { Navigation } from "./navigation";
import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { LanguagesCarousel, FrameworksCarousel, OtherCarousel } from "./skills";
import { Education } from "./education";
import { Certifications } from "./certifications";
import { Contact } from "./contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center transition-all duration-300">
        <span className="text-center space-y-10">
          <h3>My Website</h3>
          <Contact />
        </span>
      </div>
      <div className="p-6">
        <section id="about">
          <h2>About</h2>
          <About />
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <Experience />
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <h3 className="text-center">Languages</h3>
          <LanguagesCarousel />
          <br />
          <h3 className="text-center">Frameworks</h3>
          <FrameworksCarousel />
          <br />
          <h3 className="text-center" >Other</h3>
          <OtherCarousel />
        </section>
         <section id="education">
          <h2>Education</h2>
          <Education />
        </section>
        <section id="certification">
          <h2>Certifications</h2>
          <Certifications />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <Contact />
        </section>
        <footer>
          <div className="text-sm leading-none font-medium text-center">
            <p>© 2025 Marvin Wu</p>
          </div>
        </footer>
      </div>
    </main>
  );
}