import { FaGithub } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"

interface Project {
  title: string
  description: string
  period: string
  tags: string[]
  githubUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Project Scheduler",
    description: "Designed and deployed a full-stack project-scheduling app (ASP.NET Core + Angular) powered by a custom Critical Path Method engine with float and cycle detection, an Earned Value cost module, and an SVG/D3 Gantt chart with critical-path highlighting.",
    period: "July 2026",
    githubUrl: "https://github.com/marvinyywu/project-scheduler",
    tags: ["C#", "TypeScript", "SQL", "ASP.NET", "Angular", "Docker", "Microsoft Azure"],
    image: "/project-scheduler.png"
  },
  {
    title: "RAG Knowledge Base",
    description: "Built a retrieval-augmented generation pipeline that lets users upload documents and ask questions, returning context-grounded answers via vector search instead of generic LLM responses, deployed on AWS.",
    period: "June 2026",
    githubUrl: "https://github.com/marvinyywu/rag-knowledge-base",
    tags: ["Python", "TypeScript", "Next.js", "Amazon Web Services"],
    image: "/rag-knowledge-base.png"
  },
  {
    title: "Personal Finance Manager REST API",
    description: "Designed a production-style Spring Boot REST API with JWT-secured endpoints, category-based spending analytics, and atomic multi-account transfers, validated by a containerized integration test suite using JUnit, Mockito, and Testcontainers.",
    period: "June 2026",
    githubUrl: "https://github.com/marvinyywu/PersonalFinanceManager",
    tags: ["Java", "Spring Boot", "SQL", "JUnit", "Mockito", "Testcontainers", "Docker"],
    image: "/personal-finance-manager.jpeg",
  },
  {
    title: "Toronto Bike Share Demand Predictor",
    description: "Trained a deep learning model to forecast daily bike share demand across Toronto from historical ridership, weather, and calendar features, reaching 85% accuracy on held-out test data.",
    period: "May 2026",
    githubUrl: "https://github.com/marvinyywu/TorontoBikeShareDemandPrediction",
    tags: ["Python", "Pandas", "TensorFlow", "Scikit-learn", "Matplotlib"],
    image: "/toronto-bike-share.jpg",
  },
  {
    title: "Mobile 3D Facial Reconstruction",
    description: "Built an Android app that reconstructs a 3D face mesh from camera-only input using a 3D Morphable Model pipeline, generating results in under 5 minutes on-device.",
    period: "September 2025 - March 2026",
    githubUrl: "https://github.com/y2k3n/ece496-face-recon",
    tags: ["Java", "Android Studio", "OpenCV", "Git", "GitHub"],
    image: "/3d-facial-reconstruction.png",
  },
  {
    title: "Audio-Visual Authentication System",
    description: "Engineered a multi-factor authentication system on an STM32 microcontroller that combines real-time audio signal processing with camera-based face verification to resist single-sensor spoofing.",
    period: "January 2024 - April 2024",
    githubUrl: "https://github.com/marvinyywu/Audio-Visual-Authentication-System",
    tags: ["C", "STM32"],
    image: "/audio-visual-authentication.jpg",
  },
  {
    title: "Faster R-CNN Object Detection",
    description: "Implemented and trained a Faster R-CNN object detection model in TensorFlow, achieving 70% mAP on the COCO dataset and optimizing inference speed for real-time applications.",
    period: "September 2023 - December 2023",
    tags: ["Python", "NumPy", "Pandas", "TensorFlow", "Git", "GitHub"],
    image: "/faster-rcnn-detector.jpg",
  },
  {
    title: "Full Stack Cloud Development Capstone",
    description: "Built a dealership review portal end-to-end with a React frontend and Django REST backend, deployed via a full DevOps pipeline using Docker and Kubernetes on IBM Cloud.",
    period: "June 2023 - August 2023",
    githubUrl: "https://github.com/marvinyywu/agfzb-CloudAppDevelopment_Capstone",
    tags: ["Python", "Django", "React.js", "Docker", "Kubernetes", "IBM Cloud"],
    image: "/full-stack-development.jpg",
  },
  {
    title: "Geographic Information System",
    description: "Developed a C++ mapping application for visualizing streets, intersections, and points of interest across 10 major cities, with a custom path-finding algorithm that ranked 5th fastest out of 91 teams.",
    period: "January 2023 - April 2023",
    tags: ["C++", "Docker", "Git", "GitHub"],
    image: "/gis.jpg",
  },
]

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <AnimatedSection key={project.title} delay={index * 60}>
          <Card className="rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
            {/* Preview area */}
            <div className="relative h-44 shrink-0 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/20 text-white hover:bg-black/35 transition-colors"
                >
                  <FaGithub size={18} />
                </Link>
              ) : (
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/20 text-white text-xs">
                  N/A
                </span>
              )}
            </div>

            {/* Content */}
            <CardContent className="p-5 flex flex-col flex-1">
              <p className="text-xs text-muted-foreground mb-1.5">{project.period}</p>
              <h3 className="font-bold text-base leading-snug mb-2 mt-0">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs">{tag}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  )
}
