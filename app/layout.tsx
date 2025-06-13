import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bursa Trading Academy - Master Malaysian Stock Market Trading",
  description:
    "Learn to trade Bursa Malaysia (KLSE) with proven strategies, personalized coaching, and comprehensive courses. Achieve consistent profits with expert guidance.",
  keywords: "Bursa Malaysia, KLSE trading, stock market education, trading academy, Malaysia trading course",
  authors: [{ name: "Bursa Trading Academy" }],
  openGraph: {
    title: "Bursa Trading Academy - Master Malaysian Stock Market Trading",
    description: "Learn to trade Bursa Malaysia (KLSE) with proven strategies and expert guidance",
    url: "https://bursatradingacademy.com",
    siteName: "Bursa Trading Academy",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/logo.png", type: "image/png" }
    ]
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
