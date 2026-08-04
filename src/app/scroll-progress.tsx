"use client"

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const total = document.documentElement.scrollHeight - window.innerHeight
        setProgress(total > 0 ? (scrolled / total) * 100 : 0)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[2px] bg-primary z-[60] transition-[width] duration-100 ease-out"
      style={{ width: `${progress}%` }}
    />
  )
}
