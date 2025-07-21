import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Merriweather } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Digi Shelf",
  description: "A group-based academic note-sharing platform for students and faculty.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <div className="min-h-screen bg-digi-background text-digi-foreground">{children}</div>
      </body>
    </html>
  )
}
