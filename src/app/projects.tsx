import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"

interface Project {
  title: string
  role: string
  period: string
  bullets: string[]
  tags: string[]
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "Mobile 3D Facial Reconstruction Design Project",
    role: "Co-Developer",
    period: "September 2025 - March 2026",
    githubUrl: "https://github.com/y2k3n/ece496-face-recon",
    tags: ["Java", "Android Studio"],
    bullets: [
      "Engineered an 3D face reconstruction mobile application in Java using camera-only input and a 3D Morphable Model approach, broadening accessibility to AR/VR, digital avatar, and biometric use for general consumers at no cost.",
      "Designed a multi-stage reconstruction pipeline that includes landmark detection, shape/pose fitting with joint optimization, and texture mapping to achieve a sub-5-minute model generation with meshes exceeding 1,000 triangles.",
      "Validated model accuracy across multiple devices and datasets to achieve a mean facial landmark error of 3.92 mm.",
      "Contributed to LCD-based user interface development to display configuration settings, authentication status, and system feedback.",
      "Identified delta from the 2.0 mm target and defined a roadmap for future accuracy and mesh quality improvements.",
    ],
  },
  {
    title: "Audio-Visual Authentication System",
    role: "Co-Developer",
    period: "January 2024 - April 2024",
    githubUrl: "https://github.com/marvinyywu/Audio-Visual-Authentication-System",
    tags: ["C"],
    bullets: [
      "Engineered a multi-factor authentication system on an STM32 microcontroller, integrating audio signal processing and camera-based visual verification.",
      "Implemented image capture and pipeline buffering in C to support real-time visual recognition and authentication workflows.",
      "Developed embedded firmware modules coordinating camera input, audio processing, and system control logic across multiple peripherals.",
      "Contributed to LCD-based user interface development to display configuration settings, authentication status, and system feedback.",
      "Integrated and debugged embedded communication protocols like SPI, I2C, and UART, ensuring reliable cross-peripheral data transfer and system stability.",
    ],
  },
  {
    title: "Fast Float Library",
    role: "Contributor",
    period: "November 2023 - December 2023",
    githubUrl: "https://github.com/fastfloat/fast_float/pull/231",
    tags: ["C++", "Git", "GitHub"],
    bullets: [
      "Collaborated with a team of three to contribute to the fast_float open-source C++ library by diagnosing reported issues, implementing fixes, and submitting production-ready pull requests.",
      "Designed and implemented comprehensive unit tests for the from_chars integer parser, validating correctness across edge cases including boundary values, overflow scenarios, and malformed inputs.",
      "Improved parser reliability and robustness by systematically identifying failure cases and expanding automated test coverage.",
    ],
  },
  {
    title: "Full Stack Cloud Development Capstone",
    role: "Student",
    period: "June 2023 - August 2023",
    githubUrl: "https://github.com/marvinyywu/agfzb-CloudAppDevelopment_Capstone",
    tags: ["Python", "HTML", "CSS", "JavaScript", "Django", "React", "Bootstrap", "Docker", "Kubernetes", "Git", "GitHub", "IBM Cloud"],
    bullets: [
      "Built a real-world web application serving as the portal for car dealership branches and customer reviews in the United States, achieving a 100% grade and earning my IBM Full Stack Software Developer online professional certificate.",
      "Created and stylized six web pages with static and dynamic elements using HTML, CSS, and React components.",
      "Processed RESTful API results, produced data models, and established proxy services with JavaScript, Django, and SQL.",
      "Constructed a DevOps pipeline by integrating CI/CD action flows and automated code linting with GitHub Actions, containerizing the application with Docker, and automating the deployment process with Kubernetes.",
      "Utilized database, AI, and storage products from IBM Cloud to implement CRUD cloud functions and to analyze customer review sentiments.",
    ],
  },
  {
    title: "Geographic Information System Software Program",
    role: "Team Member",
    period: "January 2023 - April 2023",
    tags: ["C++", "Docker", "Kubernetes", "Git"],
    bullets: [
      "Worked in a team of three to create a C++ mapping program that displays the streets, intersections, and points of interests of 10 major international cities using the OpenStreetMap database and EZGL graphics package.",
      "Adopted an Agile methodology by iteratively adding and revising features like local language support, auto-filling searches, and path finding functionality after receiving feedback from teammates and teaching assistants.",
      "Strengthened design and communication skills by coordinating and distributing work among teammates with Git.",
      "Tackled the Traveling Salesman Problem through a combination of Dijkstra's algorithm, 2-opt heuristics, and parallel multi-threading to score the rank of 5th fastest solution out of 91 competing teams.",
    ],
  },
  {
    title: "Engineering Strategies and Practice Design Project",
    role: "Team Leader",
    period: "January 2022 - April 2022",
    tags: [],
    bullets: [
      "Collaborated in a team of six to create a technological design that improves the ways of communication for a patient with Cerebral Palsy.",
      "Led team discussions and ensured equal team participation by giving everyone a chance to be heard and taking initiative in discussions when no one else will.",
      "Motivated team members with encouraging words and bringing a positive attitude to every meeting.",
    ],
  },
]

export function Projects() {
  return (
    <div className="relative">
      <div className="absolute left-[13px] top-8 bottom-8 w-px bg-border" />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 80}>
            <div className="flex gap-5">
              <div className="relative z-10 shrink-0 mt-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>

              <Card className="flex-1 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="card-title relative pr-14">
                    {project.title}
                    {project.githubUrl && (
                      <Button variant="outline" size="icon" className="absolute right-0 top-0">
                        <Link href={project.githubUrl} target="_blank">
                          <FaGithub />
                        </Link>
                      </Button>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground">{project.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-description">
                    {project.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="space-y-2 w-full">
                    <p className="mt-0 text-sm text-muted-foreground">{project.period}</p>
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="font-mono">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
