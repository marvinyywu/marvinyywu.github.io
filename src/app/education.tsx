import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const coursesComponents = [
  "Software Engineering",
  "Software Communication & Design",
  "Algorithms and Data Structures",
  "Introduction to Databases",
  "Operating Systems",
  "Computer Systems Programming",
  "Computer Hardware",
  "Computer Architecture",
  "Applied Fundamentals of Deep Learning",
  "Introduction to Machine Learning",
];

export function Education() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="card-title">University of Toronto - St. George</CardTitle>
        <CardDescription id="card-description">B.A.Sc. in Computer Engineering + PEY Co-op</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Relevant Courseworks</h3>
        <ul className="list-description">
          {coursesComponents.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p>Sep 2021 - May 2026 (expected) | Toronto, Ontario</p>
      </CardFooter>
    </Card>
  )
}