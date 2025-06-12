"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/chart-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-full">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-purple-400">Unlock Your Trading</span>
                <br />
                <span className="text-white">Potential with Bursa Trading Academy</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Achieve consistent profits trading Bursa Malaysia (KLSE) with personalized 1-on-1 coaching and proven
                strategies to navigate market volatility and maximize returns.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-4 bg-slate-800 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">96%</div>
                <div className="text-xs sm:text-sm text-white/60">Success Rate</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-slate-800 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">25%</div>
                <div className="text-xs sm:text-sm text-white/60">Avg Growth</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-slate-800 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-green-400">1000+</div>
                <div className="text-xs sm:text-sm text-white/60">Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+60113785354">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+60113785354">
                <Button size="lg" variant="outline" className="border-white/20 text-black hover:bg-slate-800 hover:text-white px-6 py-5 w-full sm:w-auto">
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative w-full">
            <div className="bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700 w-full">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">KLSE Performance</h3>
                  <div className="flex items-center space-x-2 text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+25.4%</span>
                  </div>
                </div>

                {/* Mock Chart Bars */}
                <div className="flex items-end space-x-1 sm:space-x-2 h-24 sm:h-32">
                  {[40, 65, 45, 80, 60, 90, 75, 95].map((height, index) => (
                    <div key={index} className="bg-purple-600 rounded-t flex-1" style={{ height: `${height}%` }} />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-white/80">Active Traders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-white/80">Certified Program</span>
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
