"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Home, Info, BookOpen, DollarSign, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
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
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Courses", href: "#courses", icon: BookOpen },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
          scrolled ? "bg-slate-900/95 border-b border-purple-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg p-1.5 shadow-sm">
                <Image
                  src="/logo.jpeg"
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
                  href={item.href}
                  className="text-white/90 hover:text-white px-3 py-2 font-medium text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/90 bg-white/10 px-3 py-2 rounded-full text-sm">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+60 11-3785 0354</span>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-full">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-200 ${
                    isOpen ? "rotate-45 top-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-200 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-200 ${
                    isOpen ? "-rotate-45 top-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-slate-900 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg p-1">
                  <Image
                    src="/logo.jpeg"
                    alt="Bursa Trading Academy"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Bursa Trading</div>
                  <div className="text-purple-300 text-xs">Academy</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 text-white/70 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 p-3 text-white hover:bg-purple-600/20 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Contact & CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 space-y-4">
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+60113785354" className="flex items-center space-x-3 p-3 bg-purple-600/10 rounded-lg">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <div>
                    <div className="text-white text-sm font-medium">+60 11-3785 0354</div>
                    <div className="text-white/60 text-xs">Tap to call</div>
                  </div>
                </a>

                <a
                  href="mailto:bursatradingacademy@gmail.com"
                  className="flex items-center space-x-3 p-3 bg-blue-600/10 rounded-lg"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <div>
                    <div className="text-white text-sm font-medium">Email Us</div>
                    <div className="text-white/60 text-xs">Send us a message</div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg py-3"
                onClick={() => setIsOpen(false)}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
