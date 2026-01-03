"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const languageComponents = [
  {
    src: "/c-logo.svg",
    title: "C",
    alt: "C logo",
  },
  {
    src: "/cpp-logo.svg",
    title: "C++",
    alt: "C++ logo",
  },
  {
    src: "/python-logo.svg",
    title: "Python",
    alt: "Python logo",
  },
  {
    src: "/html-logo.svg",
    title: "HTML",
    alt: "HTML logo",
  },
  {
    src: "/css-logo.svg",
    title: "CSS",
    alt: "CSS logo",
  },
  {
    src: "/javascript-logo.svg",
    title: "JavaScript",
    alt: "JavaScript logo",
  },
  {
    src: "/sql-logo.svg",
    title: "SQL",
    alt: "SQL logo",
  },
];
const frameworksComponents = [
  {
    src: "/django-logo.svg",
    title: "Django",
    alt: "Django logo",
  },
  {
    src: "/flask-logo.svg",
    title: "Flask",
    alt: "Flask logo",
  },
  {
    src: "/expressjs-logo.webp",
    title: "Express.js",
    alt: "Express.js logo",
  },
  {
    src: "/react-logo.svg",
    title: "React",
    alt: "React logo",
  },
  {
    src: "/bootstrap-logo.svg",
    title: "Bootstrap",
    alt: "Bootstrap logo",
  },
];
const otherComponents = [
  {
    src: "/docker-logo.svg",
    title: "Docker",
    alt: "Docker logo",
  },
  {
    src: "/kubernetes-logo.svg",
    title: "Kubernetes",
    alt: "Kubernetes logo",
  },
  {
    src: "/git-logo.svg",
    title: "Git",
    alt: "Git logo",
  },
  {
    src: "/github-logo.svg",
    title: "GitHub",
    alt: "GitHub logo",
  },
  {
    src: "/excel-logo.svg",
    title: "MS Excel",
    alt: "MS Excel logo",
  },
  {
    src: "/powerbi-logo.svg",
    title: "Power BI",
    alt: "Power BI logo",
  },
  {
    src: "/ibmcloud-logo.svg",
    title: "IBM Cloud",
    alt: "IBM Cloud logo",
  }
];

export function LanguagesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-16"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {languageComponents.map((item) => (
          <CarouselItem
            key={item.title}
            className="sm:basis-1/3 lg:basis-1/5"
          >
            <Card className="card">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
                <div className="text-lg font-semibold pt-4">{item.title}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <span className="absolute top-1/2 left-2 flex items-center justify-center">
        <CarouselPrevious className="relative left-0" />
      </span>
      <span className="absolute top-1/2 right-2 flex items-center justify-center">
        <CarouselNext className="relative right-0" />
      </span>
    </Carousel>
  )
}

export function FrameworksCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-16"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {frameworksComponents.map((item) => (
          <CarouselItem
            key={item.title}
            className="sm:basis-1/3 lg:basis-1/5"
          >
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6 gap-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
                <div className="text-lg font-semibold pt-4">{item.title}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <span className="absolute top-1/2 left-2 flex items-center justify-center">
        <CarouselPrevious className="relative left-0" />
      </span>
      <span className="absolute top-1/2 right-2 flex items-center justify-center">
        <CarouselNext className="relative right-0" />
      </span>
    </Carousel>
  )
}

export function OtherCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-16"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {otherComponents.map((item) => (
          <CarouselItem
            key={item.title}
            className="sm:basis-1/3 lg:basis-1/5"
          >
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 gap-3">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                <div className="text-lg font-semibold pt-4">{item.title}</div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <span className="absolute top-1/2 left-2 flex items-center justify-center">
        <CarouselPrevious className="relative left-0" />
      </span>
      <span className="absolute top-1/2 right-2 flex items-center justify-center">
        <CarouselNext className="relative right-0" />
      </span>
    </Carousel>
  )
}