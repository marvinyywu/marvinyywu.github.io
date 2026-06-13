import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
        <p>
          I am a 4th year Computer Engineering student at the{" "}
          <Link href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            University of Toronto
          </Link>
          . I specialize in software engineering with additional experience in hardware systems, machine learning, and data analysis. I am most proficient with C, C++, and Python, and have developed projects using React, Flask, and Django frameworks. I am driven by a passion for producing high-quality software that demonstrates innovative and thoughtful design.
        </p>
        <p>
          I started my professional engineering career working under a 16 month internship at{" "}
          <Link href="https://www.opg.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            Ontario Power Generation
          </Link>
          . There I gained valuable exposure to the nuclear industry, and further strengthened my communication and collaboration skills. I was able to apply the technical skills learned from academics into software applications that improved everyday departmental workflows and operational efficiency, making a real-world impact.
        </p>
        <p>
          Currently I am seeking a full-time position in software engineering or related fields beginning of Summer 2026, where I can continually learn and apply my technical skills into practical applications and further develop my professional career.
        </p>
      </div>
      <div className="relative shrink-0 mx-auto md:mx-0">
        <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-primary/25 pointer-events-none" />
        <Image
          src="/photo.jpg"
          alt="Photo of me"
          width={256}
          height={256}
          className="relative rounded-xl object-cover"
        />
      </div>
    </div>
  )
}
