"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, DollarSign, Brain, FileText } from "lucide-react"

export default function CurriculumSection() {
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

    const element = document.getElementById("curriculum-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const curriculumItems = [
    {
      icon: TrendingUp,
      title: "Technical Analysis",
      description: "Master chart patterns and indicators to predict market movements.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn to protect your capital and minimize potential losses effectively.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Fundamental Analysis",
      description: "Identify undervalued stocks with high growth potential for long-term gains.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Psychology of Trading",
      description: "Control emotions and make rational decisions under pressure.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Trading Plan Development",
      description: "Create a personalized strategy aligned with your goals and risk tolerance.",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="courses" className="py-20 relative">
      <div id="curriculum-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Curriculum Highlights
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive modules designed to build your trading expertise from ground up
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumItems.map((item, index) => (
            <Card
              key={index}
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} mb-6`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
