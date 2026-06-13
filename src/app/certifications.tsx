import Link from "next/link"
import { ExternalLink } from "lucide-react"
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

interface Certification {
  title: string
  issuer: string
  date: string
  link: string
  tags: string[]
}

const certifications: Certification[] = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM | Coursera",
    date: "August 2023",
    link: "https://coursera.org/share/760f5ffd421bb16a3893a25957aaa8c0",
    tags: ["Python", "HTML", "CSS", "JavaScript", "SQL", "Django", "Flask", "Express.js", "React", "Bootstrap", "Docker", "Kubernetes", "Git", "GitHub", "IBM Cloud"],
  },
  {
    title: "C++ Certified Associate Programmer",
    issuer: "C++ Institute",
    date: "August 2022",
    link: "https://www.credly.com/badges/08d22961-8d77-4302-abec-46e5ab157ec0",
    tags: ["C++"],
  },
  {
    title: "C Certified Associate Programmer",
    issuer: "C++ Institute",
    date: "June 2022",
    link: "https://www.credly.com/badges/923e4688-ea7c-485c-8078-46858f051e0d",
    tags: ["C"],
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan | Coursera",
    date: "June 2022",
    link: "https://coursera.org/share/c85ce58df474a9d0dcd4aa13d996d4ed",
    tags: ["Python", "SQL"],
  },
]

export function Certifications() {
  return (
    <div className="grid grid-cols-1  gap-6">
      {certifications.map((cert, index) => (
        <AnimatedSection key={cert.title} delay={index * 80} className="h-full">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="card-title relative pr-14">
                {cert.title}
                <Button variant="outline" size="icon" className="absolute right-0 top-0" asChild>
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-base font-semibold text-foreground">{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mt-0 text-sm text-muted-foreground">{cert.date}</p>
            </CardContent>
            <CardFooter>
              <div className="space-y-2 w-full">
                {cert.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="font-mono">{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  )
}
