"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "96%",
      label: "Student Improvement",
      description: "of our students see improvement in their trading performance within the first month of coaching.",
      color: "text-purple-400",
    },
    {
      icon: Target,
      value: "25%",
      label: "Portfolio Growth",
      description:
        "Average portfolio growth achieved by our students within six months of implementing our strategies.",
      color: "text-blue-400",
    },
    {
      icon: Users,
      value: "3000+",
      label: "Successful Students",
      description: "Traders have transformed their financial future through our comprehensive programs.",
      color: "text-green-400",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Combined expertise in Malaysian stock market analysis and trading strategies.",
      color: "text-orange-400",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-400">Why Choose Bursa Trading Academy?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We focus on empowering you with knowledge, helping you avoid reliance on unreliable tip providers and
            building sustainable trading habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-slate-700 mb-6`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className={`text-lg font-semibold mb-4 ${stat.color}`}>{stat.label}</div>
                <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
