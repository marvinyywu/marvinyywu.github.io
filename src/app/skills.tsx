import { Card, CardContent } from "@/components/ui/card"
import type { IconType } from "react-icons"
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaGit, FaGithub, FaAws } from "react-icons/fa"
import {
  SiC, SiCplusplus, SiPython, SiJavascript,
  SiTypescript, SiNextdotjs, SiNodedotjs,
  SiDjango, SiFlask, SiLangchain,
  SiPandas, SiTensorflow, SiScikitlearn, SiJunit5,
  SiKubernetes, SiAndroidstudio, SiAnthropic,
  SiNumpy, SiHuggingface, SiOpencv,
  SiSpring, SiPostgresql, SiStmicroelectronics,
} from "react-icons/si"
import { BsDatabase, BsFillFileExcelFill, BsFillBarChartFill, BsCloudFill } from "react-icons/bs"
import { TbChartLine, TbTestPipe, TbContainer } from "react-icons/tb"

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
  { icon: SiTypescript, title: "TypeScript" },
  { icon: BsDatabase, title: "SQL" },
];

const frameworksComponents: SkillItem[] = [
  { icon: SiDjango, title: "Django" },
  { icon: SiFlask, title: "Flask" },
  { icon: SiNodedotjs, title: "Node.js" },
  { icon: FaReact, title: "React.js" },
  { icon: SiNextdotjs, title: "Next.js" },
  { icon: SiSpring, title: "Spring Boot" },
  { icon: SiLangchain, title: "LangChain" },
];

const librariesComponents: SkillItem[] = [
  { icon: SiPandas, title: "Pandas" },
  { icon: SiNumpy, title: "NumPy" },
  { icon: SiTensorflow, title: "TensorFlow" },
  { icon: SiScikitlearn, title: "Scikit-learn" },
  { icon: TbChartLine, title: "Matplotlib" },
  { icon: SiJunit5, title: "JUnit" },
  { icon: TbTestPipe, title: "Mockito" },
  { icon: TbContainer, title: "Testcontainers" },
  { icon: SiHuggingface, title: "HuggingFace" },
  { icon: SiOpencv, title: "OpenCV" },
];

const otherComponents: SkillItem[] = [
  { icon: FaDocker, title: "Docker" },
  { icon: SiKubernetes, title: "Kubernetes" },
  { icon: FaGit, title: "Git" },
  { icon: FaGithub, title: "GitHub" },
  { icon: SiAndroidstudio, title: "Android Studio" },
  { icon: BsFillFileExcelFill, title: "Microsoft Excel" },
  { icon: BsFillBarChartFill, title: "Power BI" },
  { icon: FaAws, title: "Amazon Web Services" },
  { icon: SiAnthropic, title: "Claude Code" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiStmicroelectronics, title: "STM32" },
  { icon: BsCloudFill, title: "IBM Cloud" },
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
