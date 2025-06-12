import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
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
            <CardTitle className="text-4xl font-bold text-white mb-4">Disclaimer</CardTitle>
            <p className="text-purple-300 text-lg">Bursa Trading Academy</p>
            <p className="text-white/60">Important Legal Notice</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <Alert className="bg-red-500/10 border-red-500/30 mb-8">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <AlertDescription className="text-red-200 font-medium">
                Please read this disclaimer carefully before using our services or making any investment decisions.
              </AlertDescription>
            </Alert>

            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Educational Purpose Only
                </h2>
                <p className="mb-4">
                  Nothing on this website should be considered an offer to buy or sell any security. The materials
                  provided do not constitute financial advice or a personal investment recommendation. Bursa Trading
                  Academy disclaims any liability for financial losses incurred as a result of using information
                  provided on our platform.
                </p>
                <p className="mb-4">
                  All content, courses, and materials provided by Bursa Trading Academy are for educational purposes
                  only. We aim to teach trading concepts, strategies, and market analysis techniques, but we do not
                  provide personalized investment advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Investment Risks
                </h2>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-4">
                  <h3 className="text-yellow-300 font-semibold mb-3">⚠️ Important Risk Warning</h3>
                  <ul className="list-disc pl-6 space-y-2 text-yellow-100">
                    <li>Trading and investing in financial markets involves substantial risk of loss</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>You may lose some or all of your invested capital</li>
                    <li>Only invest money you can afford to lose</li>
                    <li>Market conditions can change rapidly and unpredictably</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  No Guarantee of Profits
                </h2>
                <p className="mb-4">
                  While our courses and materials are designed to provide valuable education about trading and
                  investing, we make no guarantees about your ability to achieve profits or avoid losses. Trading
                  success depends on many factors including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Individual skill and experience level</li>
                  <li>Market conditions and timing</li>
                  <li>Risk management practices</li>
                  <li>Emotional discipline and psychology</li>
                  <li>Available capital and position sizing</li>
                  <li>Economic and political factors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Professional Advice Recommendation
                </h2>
                <p className="mb-4">Before making any investment decisions, we strongly recommend that you:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Consult with a qualified financial advisor</li>
                  <li>Conduct your own research and due diligence</li>
                  <li>Consider your personal financial situation and risk tolerance</li>
                  <li>Understand the specific risks associated with each investment</li>
                  <li>Start with small amounts while learning</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Accuracy of Information
                </h2>
                <p className="mb-4">
                  While we strive to provide accurate and up-to-date information, we cannot guarantee the completeness,
                  accuracy, or timeliness of any information presented. Market data, prices, and other financial
                  information may be delayed or inaccurate. Always verify information through official sources before
                  making trading decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Regulatory Compliance
                </h2>
                <p className="mb-4">
                  Bursa Trading Academy is an educational institution and is not a licensed investment advisor,
                  broker-dealer, or financial planner. We do not provide investment advisory services as defined by
                  applicable securities laws. Our educational content should not be construed as investment advice.
                </p>
                <p className="mb-4">
                  Students and users are responsible for ensuring their trading activities comply with all applicable
                  laws and regulations in their jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the fullest extent permitted by law, Bursa Trading Academy, its instructors, employees, and
                  affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages
                  arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use of our educational materials or courses</li>
                  <li>Trading or investment decisions made based on our content</li>
                  <li>Technical issues or interruptions to our services</li>
                  <li>Errors or omissions in our educational content</li>
                  <li>Any other use of our website or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-purple-500/30 pb-2">
                  Social Media and Third-Party Content
                </h2>
                <p className="mb-4">
                  Information shared on our social media platforms (Facebook, YouTube, Instagram, etc.) is for
                  educational purposes only. We do not take responsibility for the accuracy or outcomes of any financial
                  decisions made based on social media content. Third-party links and content are provided for
                  convenience only and do not constitute endorsement.
                </p>
              </section>

              <section className="text-center mt-12 pt-8 border-t border-white/20">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
                  <h3 className="text-blue-300 font-semibold mb-3">📚 Remember</h3>
                  <p className="text-blue-100">
                    Education is the foundation of successful trading. Take time to learn, practice with paper trading,
                    and never risk more than you can afford to lose.
                  </p>
                </div>
                <p className="text-white/70 mb-6">
                  By using our services, you acknowledge that you have read, understood, and agree to this disclaimer.
                </p>
                <div className="space-x-4">
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Return to Home
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      View Terms & Conditions
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
