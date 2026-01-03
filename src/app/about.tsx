//"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/dist/client/link"

export function About() {
  return (
    <div className="flex justify-between gap-6">
      <span>
        <p>
          I am a 4th year Computer Engineering student at the <u><Link href="https://www.utoronto.ca/" target="_blank">University of Toronto</Link></u>. I specialize in software engineering with additional experience in hardware systems, machine learning, and data analysis. I am most proficient with C, C++, and Python, and have developed projects using React, Flask, and Django frameworks. I am driven by a passion for producing high-quality software that demonstrates innovative and thoughtful design.
        </p>
        <p>
          I started my professional engineering career working under a 16 month internship at <u><Link href="https://www.opg.com/" target="_blank">Ontario Power Generation</Link></u>. There I gained valuable exposure to the nuclear industry, and further strengthened my communication and collaboration skills. I was able to apply the technical skills learned from academics into software applications that improved everyday departmental workflows and operational efficiency, making a real-world impact.
        </p>
        <p>  
          Currently I am seeking a full-time position in software engineering or related fields beginning of Summer 2026, where I can coninually learn and apply my technical skills into practical applications and further develop my professional computer engineering career.
        </p>
      </span>
      <Image
        src="/photo.jpg"
        alt="Photo of me"
        width={256}
        height={256}
        className="rounded-lg object-cover max-h-96"
      />
    </div>
  )
}

