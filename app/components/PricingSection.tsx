"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { WhatsappIcon } from "@/components/ui/WhatsappIcon"

export default function PricingSection() {
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

    const element = document.getElementById("pricing-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const pricingPlans = [
    {
      name: "KLSE",
      price: "RM4999",
      modules: "11 Module",
      popular: false,
      purchased: true,
      paymentLink: "https://rzp.io/rzp/HaszZtT",
      features: [
        "Complete KLSE Trading Fundamentals",
        "Technical Analysis Mastery",
        "Risk Management Strategies",
        "Live Trading Sessions",
        "Lifetime Access",
        "Community Support",
      ],
    },
    {
      name: "HSI",
      price: "RM4999",
      modules: "8 Module",
      popular: false,
      purchased: false,
      paymentLink: "https://rzp.io/rzp/xmv1l6FJ",
      features: [
        "Hong Kong Stock Index Trading",
        "Advanced Chart Patterns",
        "Market Psychology",
        "Portfolio Management",
        "Lifetime Access",
        "Expert Mentorship",
      ],
    },
    {
      name: "Currency & Commodity",
      price: "RM4999",
      modules: "9 Module",
      popular: false,
      purchased: false,
      paymentLink: "https://rzp.io/rzp/ZSHK5kXW",
      features: [
        "Forex Trading Strategies",
        "Commodity Market Analysis",
        "Global Economic Indicators",
        "Multi-Market Approach",
        "Lifetime Access",
        "Advanced Tools",
        "Crypto market",
        "FCPO market",
      ],
    },
    {
      name: "All-in-one Course",
      price: "RM9999",
      modules: "37 Module",
      popular: true,
      purchased: false,
      paymentLink: "https://rzp.io/rzp/gy1o1GG",
      features: [
        "All Courses Included",
        "Complete Trading Education",
        "Personal Trading Coach",
        "Priority Support",
        "Lifetime Access",
        "Exclusive Resources",
        "Advanced Strategies",
        "Best Value Package",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 relative">
      <div id="pricing-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pricing and Packages
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            All courses offer lifetime access, ensuring continuous learning and support. Our comprehensive All-in-one
            course provides the best value for aspiring traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              {/* Add Best Value label above All-in-one Course */}
              {plan.name === "All-in-one Course" && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1">
                    Best Value
                  </Badge>
                </div>
              )}
              {plan.purchased && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Purchased
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-lg mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-purple-400 mb-2">{plan.price}</div>
                <div className="text-white/60">{plan.modules}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full mt-6 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    <span>Buy Now</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
