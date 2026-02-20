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
        <CardDescription id="card-description">Software Engineering Intern</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-description">
            <li>Developed a Django web application that reduced the time spent on reporting plant reliability metrics by 75% (from two weeks to three days per month) by consolidating key information from five independent sources onto one web page.</li>
            <li>Devised a web browser automation tool using Playwright Python and MS Excel VBA scripting that completes work form submissions over 10 times faster than the original manual process while minimizing the need of human oversight.</li>
            <li>Designed a work rescheduling algorithm in Python that processes SQL queries, calculates weekly plant resource availability, and identifies the ideal time slots for tasks, further optimizing the current work scheduling process.</li>
            <li>Initiated and directed the development and deployment of four new software applications to boost the operational efficiency and user convenience of daily workflows for the entire Darlington Work Management department.</li>
            <li>Created and refactored over 50 SQL tables and views to fulfill ad-hoc data requests from managers and to document trends regarding industry operations and safety standards.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <span className="flex overflow-auto gap-4">
            <p>May 2024 - August 2025 | Bowmanville, Ontario</p>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">SQL</Badge>
            <Badge variant="outline">Django</Badge>
            <Badge variant="outline">Bootstrap</Badge>
            <Badge variant="outline">Microsoft Excel</Badge>
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
          <li>Learned and improved interpersonal skills such as active listening, de-escalating conflicts, and showing empathy.</li>
        </ul>
        </CardContent>
        <CardFooter>
          <p>June 2023 - August 2023 | Brant, Ontario</p>
        </CardFooter>
      </Card>
    </div>
  )
}