import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Bursa Trading Academy" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-white">Bursa Trading Academy</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Malaysia's premier trading education institution, empowering traders with knowledge and strategies for
              consistent market success.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-white/70 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-white/70 hover:text-purple-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-purple-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/70">+60 14-233 3436</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/70 break-all">bursatradingacademy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/70">Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2024 Bursa Trading Academy. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/disclaimer" className="text-white/60 hover:text-purple-400 transition-colors">
                Disclaimer
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
