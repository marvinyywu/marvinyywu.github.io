import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const courses = [
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
  "Computer Networks",
  "Computer Security"
]

export function Education() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="card-title">University of Toronto - St. George</CardTitle>
        <CardDescription className="text-base font-semibold text-foreground">Bachelor of Applied Science in Computer Engineering + PEY Co-op</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 mt-0">Relevant Coursework</p>
        <div className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <span
              key={course}
              className="px-3 py-1 text-sm rounded-full border border-border bg-muted/50 text-foreground"
            >
              {course}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="mt-0 text-sm text-muted-foreground">September 2021 - May 2026 | Toronto, Ontario</p>
      </CardFooter>
    </Card>
  )
}
