"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-purple-400 hover:bg-white/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-4">Terms and Conditions</CardTitle>
            <p className="text-purple-300 text-lg">Bursa Trading Academy</p>
            <p className="text-white/60">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
              <section className="mb-8">
                <p className="text-lg mb-6">
                  Welcome to the official website of Bursa Trading Academy, a Malaysia-based educational institution.
                  Please read the following Terms and Conditions carefully before using our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  These Terms and Conditions apply to all visitors, users, and others who access or use our services. By
                  accessing or using our services, you agree to be bound by these Terms. If you disagree with any part
                  of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  2. Educational Nature of Services
                </h2>
                <p className="mb-4">
                  Bursa Trading Academy provides educational services focused solely on the Financial and Stock Markets.
                  All content and materials on our website are intended for educational purposes only. While we aim to
                  keep the information up-to-date and accurate, we make no warranties regarding completeness, accuracy,
                  or reliability. Any action taken based on our content is strictly at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  3. Eligibility
                </h2>
                <p className="mb-4">
                  If you are between the ages of 13 and 18, you may access our site only under the supervision of a
                  parent or legal guardian who agrees to be bound by these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  4. Copyrights and Trademarks
                </h2>
                <p className="mb-4">
                  Unless otherwise stated, all intellectual property on this website—including text, audio, video, and
                  graphics—belongs solely to Bursa Trading Academy. Any reproduction or distribution without prior
                  written permission is punishable under applicable Malaysian law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  5. Disclaimer
                </h2>
                <p className="mb-4">
                  Nothing on this website should be considered an offer to buy or sell any security. The materials
                  provided do not constitute financial advice or a personal investment recommendation. Bursa Trading
                  Academy disclaims any liability for financial losses incurred as a result of using information
                  provided on our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  6. Social Media Disclaimer
                </h2>
                <p className="mb-4">
                  Information posted on our social media platforms (including but not limited to Facebook, YouTube, and
                  Instagram) is for educational purposes only. We do not take responsibility for the accuracy or
                  outcomes of any financial decisions made based on social media content.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  7. Privacy Policy
                </h2>
                <p className="mb-4">
                  We collect personal information such as name, email, and contact number during account registration or
                  course purchases. Your data will be kept confidential and not sold or rented to any third party. We
                  may use third-party analytics tools like Google Analytics to monitor usage patterns. Users can opt out
                  of tracking through browser add-ons.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  8. User Obligations
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>Login credentials are for personal use only and should not be shared.</li>
                  <li>You may not copy, record, or redistribute any course material without permission.</li>
                  <li>Attendance for all sessions is mandatory unless prior approval is granted.</li>
                  <li>Course platforms and social forums must not be used for advertising or solicitation.</li>
                  <li>No political, religious, or controversial discussions are permitted.</li>
                  <li>
                    Offensive, illegal, or inappropriate content must not be posted. We reserve the right to moderate or
                    remove such content.
                  </li>
                  <li>You must not attempt to hack, scrape, or bypass security measures on the site.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  9. Legal Compliance
                </h2>
                <p className="mb-4">
                  Bursa Trading Academy will cooperate with legal authorities and may disclose user information if
                  required by law. Users are responsible for complying with all applicable laws and regulations in
                  Malaysia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  10. Governing Law
                </h2>
                <p className="mb-4">
                  These Terms shall be governed by the laws of Malaysia. Any disputes shall be resolved under the
                  exclusive jurisdiction of Malaysian courts. If any part of these Terms is deemed invalid, the
                  remaining provisions will still be enforceable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  11. Refund Policy
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>All course fees are non-refundable and non-transferable unless otherwise stated.</li>
                  <li>
                    For select programs, a refund may be considered before a specified session—refer to individual
                    program guidelines.
                  </li>
                  <li>
                    In rare and exceptional cases, a refund may be granted at the sole discretion of the management. Any
                    such case will be confidential between the academy and the student.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  12. Amendments
                </h2>
                <p className="mb-4">
                  Bursa Trading Academy reserves the right to update these Terms and Conditions at any time. Significant
                  changes will be notified through the website.
                </p>
              </section>

              <section className="text-center mt-12 pt-8 border-t border-white/20">
                <p className="text-white/70">
                  If you have any questions or concerns, please contact our administration team through our official
                  channels.
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
