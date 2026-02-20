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

export function Projects() {
  return (
    <div>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title relative">
            Audio-Visual Authentication System
            <Button variant="outline" className="absolute right-0 top-0 w-12 h-12">
              <Link href="https://github.com/marvinyywu/Audio-Visual-Authentication-System" target="_blank">
                <FaGithub/>
              </Link>
            </Button>
          </CardTitle>
          <CardDescription id="card-description">Co-Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Engineered a multi-factor authentication system on an STM32 microcontroller, integrating audio signal processing and camera-based visual verification.</li>
            <li>Implemented image capture and pipeline buffering in C to support real-time visual recognition and authentication workflows.</li>
            <li>Developed embedded firmware modules coordinating camera input, audio processing, and system control logic across multiple peripherals.</li>
            <li>Contributed to LCD-based user interface development to display configuration settings, authentication status, and system feedback.</li>
            <li>Integrated and debugged embedded communication protocols like SPI, I2C, and UART, ensuring reliable cross-peripheral data transfer and system stability.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>January 2024 - April 2024</p>
            <Badge variant="outline">C</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title relative">
            Fast Float Library
            <Button variant="outline" className="absolute right-0 top-0 w-12 h-12">
              <Link href="https://github.com/fastfloat/fast_float/pull/231" target="_blank">
                <FaGithub/>
              </Link>
            </Button>
          </CardTitle>
          <CardDescription id="card-description">Contributor</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Collaborated with a team of three to contribute to the fast_float open-source C++ library by diagnosing reported issues, implementing fixes, and submitting production-ready pull requests.</li>
            <li>Designed and implemented comprehensive unit tests for the from_chars integer parser, validating correctness across edge cases including boundary values, overflow scenarios, and malformed inputs.</li>
            <li>Improved parser reliability and robustness by systematically identifying failure cases and expanding automated test coverage.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>November 2023 - December 2023</p>
            <Badge variant="outline">C++</Badge>
            <Badge variant="outline">Git</Badge>
            <Badge variant="outline">GitHub</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title relative">
            Full Stack Cloud Development Capstone
            <Button variant="outline" className="absolute right-0 top-0 w-12 h-12">
              <Link href="https://github.com/marvinyywu/agfzb-CloudAppDevelopment_Capstone" target="_blank">
                <FaGithub/>
              </Link>
            </Button>
          </CardTitle>
          <CardDescription id="card-description">Student</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Built a real-world web application serving as the portal for car dealership branches and customer reviews in the United States, achieving a 100% grade and earning my IBM Full Stack Software Developer online professional certificate.</li>
            <li>Created and stylized six web pages with static and dynamic elements using HTML, CSS, and React components.</li>
            <li>Processed RESTful API results, produced data models, and established proxy services with JavaScript, Django, and SQL.</li>
            <li>Constructed a DevOps pipeline by integrating CI/CD action flows and automated code linting with GitHub Actions, containerizing the application with Docker, and automating the deployment process with Kubernetes.</li>
            <li>Utilized database, AI, and storage products from IBM Cloud to implement CRUD cloud functions and to analyze customer review sentiments.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>June 2023 - August 2023</p>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">Django</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Bootstrap</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">Kubernetes</Badge>
            <Badge variant="outline">Git</Badge>
            <Badge variant="outline">GitHub</Badge>
            <Badge variant="outline">IBM Cloud</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title">Geographic Information System Software Program</CardTitle>
          <CardDescription id="card-description">Team Member</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Worked in a team of three to create a C++ mapping program that displays the streets, intersections, and points of interests of 10 major international cities using the OpenStreetMap database and EZGL graphics package.</li>
            <li>Adopted an Agile methodology by iteratively adding and revising features like local language support, auto-filling searches, and path finding functionality after receiving feedback from teammates and teaching assistants.</li>
            <li>Strengthened design and communication skills by coordinating and distributing work among teammates with Git.</li>
            <li>Tackled the Traveling Salesman Problem through a combination of Dijkstra&apos;s algorithm, 2-opt heuristics, and parallel multi-threading to score the rank of 5th fastest solution out of 91 competing teams.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>January 2023 - April 2023</p>
            <Badge variant="outline">C++</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">Kubernetes</Badge>
            <Badge variant="outline">Git</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title">Engineering Strategies and Practice Design Project</CardTitle>
          <CardDescription id="card-description">Team Leader</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Collaborated in a team of six to create a technological design that improves the ways of communication for a patient with Cerebral Palsy.</li>
            <li>Led team discussions and ensured equal team participation by giving everyone a chance to be heard and taking initiative in discussions when no one else will.</li>
            <li>Motivated team members with encouraging words and bringing a positive attitude to every meeting.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <p>January 2022 - April 2022</p>
        </CardFooter>
      </Card>
    </div>
  )
}