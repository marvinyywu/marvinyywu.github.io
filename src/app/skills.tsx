import { Card, CardContent } from "@/components/ui/card"

import PythonIcon from "react-devicons/python/original"
import JavaIcon from "react-devicons/java/original"
import CIcon from "react-devicons/c/original"
import CplusplusIcon from "react-devicons/cplusplus/original"
import CsharpIcon from "react-devicons/csharp/original"
import AzuresqldatabaseIcon from "react-devicons/azuresqldatabase/original"
import Html5Icon from "react-devicons/html5/original"
import Css3Icon from "react-devicons/css3/original"
import JavascriptIcon from "react-devicons/javascript/original"
import TypescriptIcon from "react-devicons/typescript/original"
import ReactIcon from "react-devicons/react/original"
import ExpressIcon from "react-devicons/express/original"
import NextjsIcon from "react-devicons/nextjs/plain"
import SpringIcon from "react-devicons/spring/original"
import AngularIcon from "react-devicons/angular/original"
import DjangoIcon from "react-devicons/django/plain"
import FlaskIcon from "react-devicons/flask/original"
import DotnetcoreIcon from "react-devicons/dotnetcore/original"
import PandasIcon from "react-devicons/pandas/original"
import NumpyIcon from "react-devicons/numpy/original"
import TensorflowIcon from "react-devicons/tensorflow/original"
import MatplotlibIcon from "react-devicons/matplotlib/original"
import JunitIcon from "react-devicons/junit/original"
import OpencvIcon from "react-devicons/opencv/original"
import GitIcon from "react-devicons/git/original"
import GithubIcon from "react-devicons/github/original"
import DockerIcon from "react-devicons/docker/original"
import KubernetesIcon from "react-devicons/kubernetes/original"
import AmazonwebservicesIcon from "react-devicons/amazonwebservices/original-wordmark"
import AzureIcon from "react-devicons/azure/original"
import PlaywrightIcon from "react-devicons/playwright/original"
import TailwindIcon from "react-devicons/tailwindcss/original"
import ScikitlearnIcon from "react-devicons/scikitlearn/plain"

type SkillItem = {
  icon: React.ComponentType<{ size?: number | string; className?: string }> | null;
  title: string;
  className?: string;
};

const languageComponents: SkillItem[] = [
  { icon: PythonIcon, title: "Python" },
  { icon: JavaIcon, title: "Java" },
  { icon: CIcon, title: "C" },
  { icon: CplusplusIcon, title: "C++" },
  { icon: CsharpIcon, title: "C#" },
  { icon: AzuresqldatabaseIcon, title: "SQL" },
  { icon: Html5Icon, title: "HTML" },
  { icon: Css3Icon, title: "CSS" },
  { icon: JavascriptIcon, title: "JavaScript" },
  { icon: TypescriptIcon, title: "TypeScript" },
];

const frameworksComponents: SkillItem[] = [
  { icon: ReactIcon, title: "React.js" },
  { icon: ExpressIcon, title: "Express.js", className: "dark:invert" },
  { icon: NextjsIcon, title: "Next.js", className: "dark:invert" },
  { icon: SpringIcon, title: "Spring Boot" },
  { icon: AngularIcon, title: "Angular" },
  { icon: DjangoIcon, title: "Django" },
  { icon: FlaskIcon, title: "Flask", className: "dark:invert" },
  { icon: DotnetcoreIcon, title: "ASP.NET Core" },
  { icon: TailwindIcon, title: "Tailwind CSS" },
];

const librariesComponents: SkillItem[] = [
  { icon: NumpyIcon, title: "NumPy" },
  { icon: PandasIcon, title: "Pandas" },
  { icon: TensorflowIcon, title: "TensorFlow" },
  { icon: MatplotlibIcon, title: "Matplotlib" },
  { icon: ScikitlearnIcon, title: "Scikit-learn" },
  { icon: JunitIcon, title: "JUnit" },
  { icon: PlaywrightIcon, title: "Playwright" },
  { icon: OpencvIcon, title: "OpenCV" },
];

const otherComponents: SkillItem[] = [
  { icon: GitIcon, title: "Git" },
  { icon: GithubIcon, title: "GitHub", className: "dark:invert" },
  { icon: DockerIcon, title: "Docker" },
  { icon: KubernetesIcon, title: "Kubernetes" },
  { icon: AmazonwebservicesIcon, title: "Amazon Web Services" },
  { icon: AzureIcon, title: "Microsoft Azure" },
];

function SkillCard({ icon: Icon, title, className }: SkillItem) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-4 pt-4 gap-2">
        {Icon ? (
          <Icon size={48} className={className} />
        ) : (
          <div className="h-12 w-12 flex items-center justify-center rounded-md bg-muted text-muted-foreground text-lg font-bold border border-dashed border-muted-foreground/40">
            ?
          </div>
        )}
        <span className="text-sm font-medium text-center leading-tight">{title}</span>
      </CardContent>
    </Card>
  )
}

export const skillCategories = {
  languages: languageComponents,
  frameworks: frameworksComponents,
  libraries: librariesComponents,
  other: otherComponents,
}

export function SkillGrid({ items }: { items: SkillItem[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {items.map((item) => (
        <SkillCard key={item.title} {...item} />
      ))}
    </div>
  )
}
