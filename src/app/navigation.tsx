"use client"
import { ThemeToggle } from "./theme-toggle";
import { FaHome } from "react-icons/fa";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed flex justify-center w-full p-6 z-50 gap-1 bg-background dark:bg-background">
      <Button variant="ghost" size="icon" onClick={scrollToTop}>
        <FaHome />
      </Button>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("about")}>About</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("experience")}>Experience</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("projects")}>Projects</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("skills")}>Skills</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("education")}>Education</Button>
            </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("certification")}>Certifications</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Button variant="ghost" onClick={() => scrollTo("contact")}>Contact</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle/>
    </div>
  )
}
