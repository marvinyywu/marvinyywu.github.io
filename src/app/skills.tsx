import { Card, CardContent } from "@/components/ui/card"
import type { IconType } from "react-icons"
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaGit, FaGithub } from "react-icons/fa"
import {
  SiC, SiCplusplus, SiPython, SiJavascript,
  SiDjango, SiFlask, SiExpress, SiBootstrap,
  SiKubernetes, SiAndroidstudio, SiAnthropic,
} from "react-icons/si"
import { BsDatabase, BsFillFileExcelFill, BsFillBarChartFill, BsCloudFill } from "react-icons/bs"

type SkillItem = {
  icon: IconType | null;
  title: string;
};

const languageComponents: SkillItem[] = [
  { icon: SiC, title: "C" },
  { icon: SiCplusplus, title: "C++" },
  { icon: SiPython, title: "Python" },
  { icon: FaJava, title: "Java" },
  { icon: FaHtml5, title: "HTML" },
  { icon: FaCss3Alt, title: "CSS" },
  { icon: SiJavascript, title: "JavaScript" },
  { icon: BsDatabase, title: "SQL" },
];

const frameworksComponents: SkillItem[] = [
  { icon: SiDjango, title: "Django" },
  { icon: SiFlask, title: "Flask" },
  { icon: SiExpress, title: "Express.js" },
  { icon: FaReact, title: "React" },
  { icon: SiBootstrap, title: "Bootstrap" },
];

const otherComponents: SkillItem[] = [
  { icon: FaDocker, title: "Docker" },
  { icon: SiKubernetes, title: "Kubernetes" },
  { icon: FaGit, title: "Git" },
  { icon: FaGithub, title: "GitHub" },
  { icon: SiAndroidstudio, title: "Android Studio" },
  { icon: BsFillFileExcelFill, title: "Microsoft Excel" },
  { icon: BsFillBarChartFill, title: "Power BI" },
  { icon: BsCloudFill, title: "IBM Cloud" },
  { icon: SiAnthropic, title: "Claude Code" },
];

function SkillCard({ icon: Icon, title }: SkillItem) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30">
      <CardContent className="flex flex-col items-center justify-center p-4 pt-4 gap-2">
        {Icon ? (
          <Icon size={48} />
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

export function LanguagesGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {languageComponents.map((item) => (
        <SkillCard key={item.title} {...item} />
      ))}
    </div>
  )
}

export function FrameworksGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {frameworksComponents.map((item) => (
        <SkillCard key={item.title} {...item} />
      ))}
    </div>
  )
}

export function OtherGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {otherComponents.map((item) => (
        <SkillCard key={item.title} {...item} />
      ))}
    </div>
  )
}
