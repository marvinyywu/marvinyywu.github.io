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

export function Experience() {
  return (
    <div>
      <Card className="card">
        <CardHeader>
        <CardTitle className="card-title relative">
          Ontario Power Generation
            <Image
              src="/opg-logo.png"
              alt="Ontario Power Generation Logo"
              width={64}
              height={64}
              className="absolute right-0 top-0 -translate-y-2"
            />
        </CardTitle>
        <CardDescription id="card-description">PEY Intern</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="list-description">
          <li>Developed a Django-based executable program serving as the central platform for navigating and reviewing daily work processes within Darlington Work Management.</li>
          <li>Designed and implemented data visualizers and automation tools using Power BI and MS Excel VBA scripting that increased departmental efficiency and streamlined workflows by up to 50%.</li>
          <li>Reported metrics and prepared memorandums on equipment reliability to support compliance with industry regulations and organizational standards.</li>
          <li>Participated and took initiative in discussions within high-impact teams, contributing to the safe and efficient operation of the plant.</li>
          <li>Adapted to evolving priorities by pulling ad-hoc data using SQL queries and taking on additional technical and operational tasks as required.</li>
        </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>May 2024 - Aug 2025 | Bowmanville, Ontario </p>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">SQL</Badge>
            <Badge variant="outline">Django</Badge>
            <Badge variant="outline">Bootstrap</Badge>
            <Badge variant="outline">MS Excel</Badge>
            <Badge variant="outline">Power BI</Badge>
          </span>
        </CardFooter>
      </Card>
      <Card className="card">
        <CardHeader>
        <CardTitle className="card-title relative">
          Tim Hortons Foundation Camps
          <Image
            src="/thfc-logo.png"
            alt="Tim Hortons Foundation Camps Logo"
            width={64}
            height={64}
            className="absolute right-0 top-0"
          />
        </CardTitle>
        <CardDescription id="card-description">Camp Counselor</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="list-description">
          <li>Supervised and mentored groups of six to nine campers from grades 6-12 over the course of 2 months.</li>
          <li>Adapted to various responsibilities such as writing progress reports, facilitating camp activities, and traveling outside of Canada for escort.</li>
          <li>Learned and improved social skills such as active listening, de-escalating conflicts, and showing empathy.</li>
        </ul>
        </CardContent>
        <CardFooter>
          <p>Jun 2023 - Aug 2023 | Brant, Ontario</p>
        </CardFooter>
      </Card>
    </div>
  )
}