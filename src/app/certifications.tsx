import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Certifications() {
  return (
    <div>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title">
            IBM Full Stack Software Developer
          </CardTitle>
          <CardDescription id="card-description">IBM | Coursera</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://coursera.org/share/760f5ffd421bb16a3893a25957aaa8c0" target="_blank"><u>View Certificate</u></Link>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Aug 2023</p>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">SQL</Badge>
            <Badge variant="outline">Django</Badge>
            <Badge variant="outline">Flask</Badge>
            <Badge variant="outline">Express.js</Badge>
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
          <CardTitle className="card-title">
            C++ Certified Associate Programmer
          </CardTitle>
          <CardDescription id="card-description">C++ Institute</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://www.credly.com/badges/08d22961-8d77-4302-abec-46e5ab157ec0" target="_blank"><u>View Certificate</u></Link>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Aug 2022</p>
            <Badge variant="outline">C++</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title">
            C Certified Associate Programmer
          </CardTitle>
          <CardDescription id="card-description">C++ Institute</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://www.credly.com/badges/923e4688-ea7c-485c-8078-46858f051e0d" target="_blank"><u>View Certificate</u></Link>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Jun 2022</p>
            <Badge variant="outline">C</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="card-title">
            Python for Everybody Specialization
          </CardTitle>
          <CardDescription id="card-description">University of Michigan | Coursera</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://coursera.org/share/c85ce58df474a9d0dcd4aa13d996d4ed" target="_blank"><u>View Certificate</u></Link>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>Jun 2022</p>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">SQL</Badge>
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}