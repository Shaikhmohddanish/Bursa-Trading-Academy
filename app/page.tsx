import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import VideoSection from "./components/VideoSection"
import RoadmapSection from "./components/RoadmapSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CurriculumSection from "./components/CurriculumSection"
import PricingSection from "./components/PricingSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CurriculumSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
