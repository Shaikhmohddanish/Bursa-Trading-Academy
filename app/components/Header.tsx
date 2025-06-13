"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Home, Info, BookOpen, DollarSign, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none" // for iOS
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Courses", href: "#courses", icon: BookOpen },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ]

  // Smooth scroll for anchor links
  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href === "/contact") {
      window.location.href = "/contact"
      return
    }
    if (href.startsWith("#")) {
      // If already on home page, smooth scroll
      if (window.location.pathname === "/") {
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        // If not on home, go to home with hash
        window.location.href = `/${href}`
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/30" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg p-1.5">
                <Image
                  src="/logo.png"
                  alt="Bursa Trading Academy"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-white">Bursa Trading Academy</h1>
                <div className="text-xs text-purple-300">Professional Trading Education</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.name === "Contact" ? "/contact" : item.href}
                  className="text-white/90 hover:text-white px-3 py-2 font-medium text-sm transition-colors"
                  onClick={() => handleNavClick(item.name === "Contact" ? "/contact" : item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+60142333436">
                <Button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-white text-sm">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span>+60 14-233 3436</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger - only show if menu closed) */}
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-white relative z-60"
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300" />
                  <span className="absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300" />
                  <span className="absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300" />
                </div>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
          id="mobile-menu"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            onClick={() => setIsOpen(false)}
            tabIndex={-1}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-l border-purple-700/40 rounded-l-2xl animate-slideIn z-60">
            {/* X Button in the drawer */}
            <button
              className="absolute top-4 right-4 z-70 text-white bg-slate-800/70 rounded-full p-2 hover:bg-purple-700/40 transition"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Bursa Trading Academy"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Bursa Trading</div>
                  <div className="text-purple-300 text-xs font-medium tracking-wide">Academy</div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-3">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.name === "Contact" ? "/contact" : item.href}
                        className="flex items-center space-x-4 p-4 bg-slate-800/60 hover:bg-purple-700/40 rounded-xl text-white font-medium shadow-sm transition-all duration-200 group"
                        onClick={(e) => {
                          handleNavClick(item.name === "Contact" ? "/contact" : item.href)
                          if ((item.name !== "Contact") && item.href.startsWith("#")) {
                            e.preventDefault()
                          }
                        }}
                      >
                        <IconComponent className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
                        <span className="font-medium text-base tracking-wide group-hover:text-white transition-colors">{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Contact & CTA Section */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700 bg-slate-900/80 rounded-b-2xl space-y-4 shadow-inner">
              <div className="space-y-3">
                <a
                  href="tel:+60142333436"
                  className="flex items-center space-x-4 p-4 bg-slate-800/70 hover:bg-purple-700/40 rounded-xl transition-colors text-white shadow-sm"
                >
                  <Phone className="h-5 w-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">+60 14-233 3436</div>
                    <div className="text-white/60 text-xs">Tap to call</div>
                  </div>
                </a>
                <a
                  href="mailto:bursatradingacademy@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-slate-800/70 hover:bg-purple-700/40 rounded-xl transition-colors text-white shadow-sm"
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-white/60 text-xs">Get in touch</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
