import Link from "next/link"
import { Navigation } from "./navigation"
import { About } from "./about"
import { Experience } from "./experience"
import { Projects } from "./projects"
import { LanguagesGrid, FrameworksGrid, OtherGrid } from "./skills"
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
          <div className="hero-item-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-primary/40 bg-primary/5 text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for roles starting Summer 2026
            </div>
          </div>
          <div className="hero-item-2 mt-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Marvin Wu
            </h1>
          </div>
          <div className="hero-item-5 mt-8">
            <Contact />
          </div>
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
            <LanguagesGrid />
          </AnimatedSection>
          <AnimatedSection className="border-t border-border/40 py-8" delay={100}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Frameworks</p>
            <FrameworksGrid />
          </AnimatedSection>
          <AnimatedSection className="border-t border-border/40 pt-8" delay={200}>
            <p className="mt-0 text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tools</p>
            <OtherGrid />
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

      {/* <section id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2>Contact</h2>
            <Contact />
          </AnimatedSection>
        </div>
      </section>*/}

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6">
        <footer className="border-t py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Link href="mailto:mwu0614@gmail.com" className="hover:text-primary transition-colors">Email</Link>
              <Link href="https://www.linkedin.com/in/marvinyywu/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="https://github.com/marvinyywu" target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
              <Link href="/Resume_Marvin_Wu.pdf" target="_blank" className="hover:text-primary transition-colors">Resume</Link>
            </div>
            <p className="text-sm text-muted-foreground mt-0">© 2026 Marvin Wu</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
