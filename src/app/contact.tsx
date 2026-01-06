import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import {
  Item,
  ItemContent,
  ItemActions,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function Contact() {
  return (
    <div className="flex flex-row justify-center gap-6">
      <Item variant="outline" asChild>
        <Link href="mailto:mwu0614@gmail.com">
          <ItemMedia>
            <MdMail className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Email</ItemTitle>
          </ItemContent>
        </Link>
      </Item>
      <Item variant="outline" asChild>
        <Link href="https://www.linkedin.com/in/marvin-wu-693991248/" target="_blank">
          <ItemMedia>
            <FaLinkedin className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Linkedin</ItemTitle>
          </ItemContent>
        </Link>
      </Item>
      <Item variant="outline" asChild>
        <Link href="https://github.com/marvinyywu" target="_blank">
          <ItemMedia>
            <FaGithub className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>GitHub</ItemTitle>
          </ItemContent>
          <ItemActions>
          </ItemActions>
        </Link>
      </Item>
      <Item variant="outline" asChild>
        <Link href="/resume.pdf" target="_blank">
          <ItemMedia>
            <IoDocumentText className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Resume</ItemTitle>
          </ItemContent>
          <ItemActions>
          </ItemActions>
        </Link>
      </Item>
    </div>
  )
}