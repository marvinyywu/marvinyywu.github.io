import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { type IconType } from "react-icons";

interface ContactLink {
  href: string
  icon: IconType
  label: string
  external?: boolean
}

const contacts: ContactLink[] = [
  { href: "mailto:mwu0614@gmail.com", icon: MdMail, label: "Email" },
  { href: "https://www.linkedin.com/in/marvinyywu/", icon: FaLinkedin, label: "LinkedIn", external: true },
  { href: "https://github.com/marvinyywu", icon: FaGithub, label: "GitHub", external: true },
  { href: "/Resume_Marvin_Wu.pdf", icon: IoDocumentText, label: "Resume", external: true },
]

export function Contact() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {contacts.map(({ href, icon: Icon, label, external }) => (
        <Link
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-200"
        >
          <Icon className="size-4 shrink-0" />
          <span className="text-sm font-medium">{label}</span>
        </Link>
      ))}
    </div>
  )
}
