import Link from "next/link"
import { Navigation } from "./navigation"
import { About } from "./about"
import { Experience } from "./experience"
import { Projects } from "./projects"
import { SkillGrid, skillCategories } from "./skills"
import { Education } from "./education"
import { Certifications } from "./certifications"
import { Contact } from "./contact"
import { AnimatedSection } from "./animated-section"

export default function Home() {
  return (
    <main>
      <Navigation />
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"/>
        <div className="text-center max-w-2xl relative">
          <AnimatedSection className="mt-6" delay={180}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-[linear-gradient(to_right,hsl(var(--foreground))_20%,hsl(var(--primary))_40%,hsl(var(--primary))_60%,hsl(var(--foreground))_80%)] bg-[length:200%_auto] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] animate-shine">
              Marvin Wu
            </h1>
          </AnimatedSection>
          <AnimatedSection className="mt-8" delay={570}>
            <Contact />
          </AnimatedSection>
        </div>
      </div>

      {/* Sections — full-width so gradient spans the viewport */}
      <section id="about">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>About</h2>
            <About />
          </AnimatedSection>
        </div>
      </section>

      <section id="experience">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Experience</h2>
            <Experience />
          </AnimatedSection>
        </div>
      </section>

      <section id="projects">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Projects</h2>
          </AnimatedSection>
          <Projects />
        </div>
      </section>

      <section id="skills">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Skills</h2>
          </AnimatedSection>
          <AnimatedSection className="pb-8" delay={0}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Languages</p>
            <SkillGrid items={skillCategories.languages} />
          </AnimatedSection>
          <AnimatedSection className="border-t border-border/40 py-8" delay={100}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Frameworks</p>
            <SkillGrid items={skillCategories.frameworks} />
          </AnimatedSection>
          <AnimatedSection className="border-t border-border/40 py-8" delay={200}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Libraries</p>
            <SkillGrid items={skillCategories.libraries} />
          </AnimatedSection>
          <AnimatedSection className="border-t border-border/40 py-8" delay={300}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tools</p>
            <SkillGrid items={skillCategories.other} />
          </AnimatedSection>
        </div>
      </section>

      <section id="education">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Education</h2>
            <Education />
          </AnimatedSection>
        </div>
      </section>

      <section id="certification">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Certifications</h2>
          </AnimatedSection>
          <Certifications />
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6">
        <footer className="border-t py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Link href="mailto:mwu0614@gmail.com" className="hover:text-primary transition-colors">Email</Link>
              <Link href="https://www.linkedin.com/in/marvinyywu/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="https://github.com/marvinyywu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</Link>
              <Link href="/Resume_Marvin_Wu.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resume</Link>
            </div>
            <p className="text-sm text-muted-foreground mt-0">© 2026 Marvin Wu</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
