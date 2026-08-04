"use client"

import { ThemeToggle } from "./theme-toggle"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certification' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        // Prefer the entry closest to the top of the observed band — it's the
        // section that has been scrolled furthest into, not one just entering.
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveSection(topmost.target.id)
      },
      { rootMargin: '-130px 0px -70% 0px', threshold: 0 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    (document.activeElement as HTMLElement)?.blur()
    setMobileOpen(false)
  }

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection('')
    setMobileOpen(false)
  }

  return (
    <div className={cn(
      "fixed flex items-center justify-center w-full p-4 z-50 gap-1 bg-background/80 backdrop-blur-sm transition-all duration-300",
      scrolled && "border-b border-border shadow-sm"
    )}>
      <Button variant="ghost" onClick={scrollToTop} className="font-bold text-base text-primary tracking-tight px-3">
        MW
      </Button>

      {/* Desktop nav */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map(({ label, id }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    activeSection === id && "text-primary bg-accent"
                  )}
                >
                  <Button variant="ghost" onClick={() => scrollTo(id)}>{label}</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <Popover open={mobileOpen} onOpenChange={setMobileOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" sideOffset={8} className="w-48 p-2">
            <div className="flex flex-col gap-0.5">
              {navItems.map(({ label, id }) => (
                <Button
                  key={id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    activeSection === id && "text-primary bg-accent"
                  )}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <ThemeToggle />
    </div>
  )
}
