"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "ℹ️" },
    { name: "Courses", href: "#courses", icon: "📚" },
    { name: "Pricing", href: "#pricing", icon: "💰" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group z-50">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden bg-white rounded-xl shadow-md group-hover:shadow-purple-500/20 transition-all duration-300 p-1.5">
                <Image
                  src="/logo.jpeg"
                  alt="Bursa Trading Academy"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-white tracking-tight">Bursa Trading Academy</h1>
                <div className="text-xs text-purple-300 font-medium">Professional Trading Education</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/90 hover:text-white px-5 py-3 font-medium text-sm transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/90 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">+60 11-3785 0354</span>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 font-semibold rounded-full shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 backdrop-blur-xl border-l border-purple-500/20 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header - Fixed Design */}
          <div className="flex items-center justify-between p-6 bg-slate-800/50 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1 shadow-md">
                <Image
                  src="/logo.jpeg"
                  alt="Bursa Trading Academy"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Bursa Trading</div>
                <div className="text-purple-300 text-xs font-medium">Academy</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-6 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-4 text-white hover:text-purple-300 hover:bg-purple-500/10 rounded-xl transition-all duration-200 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact & CTA */}
          <div className="p-6 bg-slate-800/30 border-t border-purple-500/20 space-y-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Phone className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-white text-sm font-medium">+60 11-3785 0354</div>
                  <div className="text-white/60 text-xs">Call us anytime</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-white text-sm font-medium">bursatradingacademy@gmail.com</div>
                  <div className="text-white/60 text-xs">Send us an email</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl py-4 font-semibold text-base shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started Today
              </Button>

              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-white hover:bg-purple-500/10 rounded-xl py-3"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
