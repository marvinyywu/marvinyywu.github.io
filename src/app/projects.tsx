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
            <li>Created a multi-factor authentication system integrating audio and visual module components on a STM32 microcontroller.</li>
            <li>Designed image capturing and pipeline buffering functionality to enable visual recognition and verification in C.</li>
            <li>Assisted with programming LCD display user interface to present setup configurations and authentication results.</li>
            <li>Gained hands-on experience with embedded protocols and cross-peripheral integration.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Jan - Apr 2024</p>
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
            <li>Collaborated with two other teammates to contribute to the fast_float library by resolving issues and creating pull requests.</li>
            <li>Provided unit tests for the from_chars integer parser to ensure the correctness of the function for all edge cases.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Nov - Dec 2023</p>
            <Badge variant="outline">C++</Badge>
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
            <li>Developed a web application acting as a central database for car dealership branches and customer reviews.</li>
            <li>Created and stylized navigable pages with static and dynamic elements using HTML, CSS, and JavaScript.</li>
            <li>Processed API results, built data models, and created proxy services using Python, Django, and SQL.</li>
            <li>Containerized the application with Docker and deployed it to Kubernetes.</li>
            <li>Practiced DevOps principles with GitHub actions and code linting.</li>
            <li>Utilized database, AI, and storage products from IBM Cloud to implement CRUD cloud functions and to analyze customer review sentiments.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Jun - Aug 2023</p>
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
            <li>Worked in a team of three to create a mapping program similar to Google Maps in C++.</li>
            <li>Designed a GUI that displays the streets, intersections, points of interests, and features found in various cities around the world using the OpenStreetMap database and EZGL graphics package.</li>
            <li>Implemented local language support, auto-fill search bars, and path finding functionality using the GTK toolkit.</li>
            <li>Containerized the application with Docker and deployed it to Kubernetes.</li>
            <li>Developed design and communication skills by coordinating and distributing work among teammates with Git.</li>
            <li>Tackled the traveling salesman problem using Dijkstra&apos;s algorithm, 2-opt, and parallel multi threading, earning the 5th best solution out of 91 teams.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Jan - Apr 2023</p>
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
          <p>Jan - Apr 2022</p>
        </CardFooter>
      </Card>
    </div>
  )
}