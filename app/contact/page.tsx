"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { WhatsappIcon } from "@/components/ui/WhatsappIcon"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }).optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showLoader, setShowLoader] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setShowLoader(true)
    try {
      const response = await fetch("/api/contact-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Network response was not ok")
      setSubmitStatus("success")
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setShowLoader(false)
    }
  }

  // Reset status after 5 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "bursatradingacademy@gmail.com",
      action: "mailto:bursatradingacademy@gmail.com",
      actionText: "Email Us",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kuala Lumpur, Malaysia",
      action: "https://maps.google.com/?q=Kuala+Lumpur+Malaysia",
      actionText: "View Map",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM - 6PM",
      secondaryDetails: "Weekends: By appointment",
      action: "#",
      actionText: "Schedule Call",
    },
    {
      icon: WhatsappIcon,
      title: "WhatsApp",
      details: "+60 14-233 3436",
      action: "https://wa.me/60142333436?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20trading%20academy.",
      actionText: "Chat on WhatsApp",
    },
  ]

  const faqItems = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll in any of our courses by clicking the 'Get Started' button on our pricing page. Our team will contact you within 24 hours to guide you through the enrollment process.",
    },
    {
      question: "How long do I have access to course materials?",
      answer:
        "All our courses come with lifetime access to the materials. You can revisit the content anytime to refresh your knowledge or deepen your understanding.",
    },
    {
      question: "Do you offer one-on-one coaching?",
      answer:
        "Yes, we provide personalized 1-on-1 coaching sessions tailored to your specific trading goals and challenges. These can be booked separately or are included in some of our premium packages.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      <main className="pt-32 pb-20">
        {showLoader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-full p-6 shadow-lg animate-spin">
              <svg className="h-10 w-10 text-blue-900" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        )}
        {/* Popup message */}
        {(submitStatus === "success" || submitStatus === "error") && (
          <div
            ref={popupRef}
            className={`fixed top-8 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 transition-all duration-300
              ${submitStatus === "success" ? "bg-green-500/95 text-white border-2 border-green-700" : "bg-red-500/95 text-white border-2 border-red-700"}
            `}
            role="alert"
            style={{ minWidth: 320, maxWidth: 400 }}
          >
            {submitStatus === "success" ? (
              <>
                <CheckCircle className="h-6 w-6 text-white" />
                <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-6 w-6 text-white" />
                <span className="font-semibold">There was an error sending your message. Please try again.</span>
              </>
            )}
            <button
              className="ml-auto text-white/80 hover:text-white focus:outline-none text-2xl px-2"
              onClick={() => setSubmitStatus("idle")}
              aria-label="Dismiss"
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Have questions about our courses or need personalized guidance? Our team is here to help you on your
              trading journey.
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                    {submitStatus === "success" && (
                      <Alert className="mb-6 bg-green-500/10 border-green-500/30">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <AlertDescription className="text-green-200">
                          Your message has been sent successfully! We'll get back to you shortly.
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === "error" && (
                      <Alert className="mb-6 bg-red-500/10 border-red-500/30">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                        <AlertDescription className="text-red-200">
                          There was an error sending your message. Please try again later.
                        </AlertDescription>
                      </Alert>
                    )}

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="your.email@example.com"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Phone (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+60 12 345 6789"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Subject</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Course Inquiry"
                                    className="bg-slate-800/50 border-slate-700 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="How can we help you?"
                                  className="bg-slate-800/50 border-slate-700 text-white min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {contactInfo.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                              <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/70 mb-1">{item.details}</p>
                            {item.secondaryDetails && <p className="text-white/70 mb-3">{item.secondaryDetails}</p>}
                            <a
                              href={item.action}
                              target={item.action.startsWith("http") ? "_blank" : "_self"}
                              rel={item.action.startsWith("http") ? "noopener noreferrer" : ""}
                              className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center"
                            >
                              {item.actionText}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-white/70">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-white/80 mb-6">Still have questions? Our team is ready to assist you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/60142333436?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20trading%20academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-6"
                    type="button"
                  >
                    <span>WhatsApp</span>
                    <WhatsappIcon className="w-6 h-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
