import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ScrollProgress } from "./scroll-progress"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Marvin Wu - Software Developer",
  description: "Computer Engineering student at the University of Toronto specializing in software engineering with experience in Python, C++, Django, and full-stack development. Open to full-time Software Engineering roles.",
  openGraph: {
    title: "Marvin Wu - Software Developer",
    description: "Computer Engineering student at the University of Toronto specializing in software engineering.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
