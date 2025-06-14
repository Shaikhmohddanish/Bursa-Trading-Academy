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
    images: [
      {
        url: "/preview.jpeg", // your custom preview image
        alt: "Bursa Trading Academy Preview",
      },
    ],
  },
  icons: {
    icon: [{ url: "/logo.jpeg", type: "image/jpeg" }],
    shortcut: [{ url: "/logo.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/logo.jpeg", type: "image/jpeg" }],
  },
  generator: "Next.js",
  applicationName: "Bursa Trading Academy",
};


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
