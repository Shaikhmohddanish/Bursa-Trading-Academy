"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award } from "lucide-react"

export default function StatsSection() {
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

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: "96%",
      label: "Student Improvement",
      description: "of our students see improvement in their trading performance within the first month of coaching.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      value: "25%",
      label: "Portfolio Growth",
      description:
        "Average portfolio growth achieved by our students within six months of implementing our strategies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Successful Students",
      description: "Traders have transformed their financial future through our comprehensive programs.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Combined expertise in Malaysian stock market analysis and trading strategies.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div id="stats-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Bursa Trading Academy?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We focus on empowering you with knowledge, helping you avoid reliance on unreliable tip providers and
            building sustainable trading habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-purple-300 mb-4">{stat.label}</div>
                <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
