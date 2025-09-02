"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/WhatsappIcon"
import Link from "next/link"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div id="cta-section" className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get Started Today!
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                <p className="text-white/80 text-lg">
                  Limited spots available, sign up now to secure your personalized coaching.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                <p className="text-white/80 text-lg">
                  Schedule a free 30-minute consultation to assess your current trading needs and goals.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-3"></div>
                <p className="text-white/80 text-lg">
                  Transform your trading journey and achieve lasting financial success with our expert guidance.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://bursawebinar.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-black hover:bg-white/10 hover:text-white text-lg px-8 py-6 flex items-center justify-center w-full sm:w-auto"
                >
                 Join Webinar
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">30</div>
                <div className="text-sm text-white/60">Days Program</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1:1</div>
                <div className="text-sm text-white/60">Personal Coach</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">∞</div>
                <div className="text-sm text-white/60">Lifetime Access</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <img
                  src="/person-with-laptop.png?height=400&width=500"
                  alt="Success Visualization"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Trading?</h3>
                  <p className="text-white/70 mb-6">
                    Join thousands of successful traders who started their journey with us
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
                    <span>✓ Proven Strategies</span>
                    <span>✓ Expert Mentorship</span>
                    <span>✓ Lifetime Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
