"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, TrendingUp, DollarSign, CheckCircle } from "lucide-react"

export default function RoadmapSection() {
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

    const element = document.getElementById("roadmap-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const roadmapSteps = [
    {
      step: "1",
      title: "Complete the Course in 15 Days",
      description:
        "Learn proven trading strategies, risk management, and technical analysis with our step-by-step course designed for quick mastery in just 15 days.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "2",
      title: "Paper Trading for 15 days",
      description:
        "Practice what you learned without risking real money. Build confidence, test strategies, and refine your skills using virtual trades for 15 days.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "3",
      title: "Start Real Trading",
      description:
        "Enter the market with clarity and confidence. Apply your skills in real trades, backed by a strong foundation and practical paper trading experience.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 relative">
      <div id="roadmap-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Profitable Roadmap
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our proven 3-step process takes you from beginner to confident trader in just 45 days
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <img
                  src="/trading lines.jpeg?height=400&width=600"
                  alt="Trading Setup"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/80">Personalized 1-on-1 Coaching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/80">Real-time Market Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/80">Risk Management Strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Side */}
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <Card
                key={index}
                className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                    <div className={`flex-shrink-0 p-3 rounded-full bg-gradient-to-r ${step.color}`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
