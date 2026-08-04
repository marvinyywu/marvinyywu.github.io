import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ExperienceItem {
  company: string
  logo: { src: string; alt: string }
  role: string
  period: string
  location: string
  bullets?: string[]
  tags?: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Redwood Software",
    logo: { src: "/redwood-logo.png", alt: "Redwood Software Logo" },
    role: "Entry level Full Stack Developer",
    period: "August 2026 - Present",
    location: "Markham, Ontario",
    tags: ["Java", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "React", "Spring Boot", "Docker", "Kubernetes", "AWS"],
  },
  {
    company: "Ontario Power Generation",
    logo: { src: "/opg-logo.png", alt: "Ontario Power Generation Logo" },
    role: "Software Engineering Intern",
    period: "May 2024 - August 2025",
    location: "Bowmanville, Ontario",
    tags: ["Python", "HTML", "CSS", "JavaScript", "SQL", "Django", "Bootstrap", "Microsoft Excel", "Power BI"],
    bullets: [
      "Developed a Django web application that reduced the time spent on reporting plant reliability metrics by 75% (from two weeks to three days per month) by consolidating key information from five independent sources onto one web page.",
      "Devised a web browser automation tool using Playwright Python and MS Excel VBA scripting that completes work form submissions over 10 times faster than the original manual process while minimizing the need of human oversight.",
      "Designed a work rescheduling algorithm in Python that processes SQL queries, calculates weekly plant resource availability, and identifies the ideal time slots for tasks, further optimizing the current work scheduling process.",
      "Initiated and directed the development and deployment of four new software applications to boost the operational efficiency and user convenience of daily workflows for the entire Darlington Work Management department.",
      "Created and refactored over 50 SQL tables and views to fulfill ad-hoc data requests from managers and to document trends regarding industry operations and safety standards.",
    ],
  },
  {
    company: "Tim Hortons Foundation Camps",
    logo: { src: "/thfc-logo.png", alt: "Tim Hortons Foundation Camps Logo" },
    role: "Camp Counselor",
    period: "June 2023 - August 2023",
    location: "Brant, Ontario",
    bullets: [
      "Supervised and mentored groups of six to nine campers from grades 6-12 over the course of 2 months.",
      "Adapted to various responsibilities such as writing progress reports, facilitating camp activities, and traveling outside of Canada for escort.",
      "Learned and improved interpersonal skills such as active listening, de-escalating conflicts, and showing empathy.",
    ],
  },
]

export function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-[13px] top-8 bottom-8 w-px bg-border" />
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-5">
            <div className="relative z-10 shrink-0 mt-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>

            <Card className="flex-1 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="card-title relative pr-16">
                  {exp.company}
                  <Image
                    src={exp.logo.src}
                    alt={exp.logo.alt}
                    width={48}
                    height={48}
                    className="absolute right-0 top-0 object-contain"
                  />
                </CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">{exp.role}</CardDescription>
              </CardHeader>
              {exp.bullets && exp.bullets.length > 0 && (
                <CardContent>
                  <ul className="list-description">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
              <CardFooter>
                <div className="space-y-2 w-full">
                  <p className="mt-0 text-sm text-muted-foreground">{exp.period} | {exp.location}</p>
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="font-mono">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
