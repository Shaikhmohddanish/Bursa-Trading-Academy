"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-400">See Trading in Action</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch how real-time market data flows and learn to identify profitable opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <video
                  src="/video/video.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setIsPlaying(false)}
                ></video>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Trading Environment</h3>
                <p className="text-white/70 leading-relaxed">
                  Experience the dynamic world of stock trading with live market data, price movements, and trading
                  indicators. This 10-second glimpse shows you what professional traders see every day.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-green-400 font-bold text-lg mb-2">Live Data</div>
                  <div className="text-white/70 text-sm">Real-time market information</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-blue-400 font-bold text-lg mb-2">Price Movements</div>
                  <div className="text-white/70 text-sm">Track stock performance</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-purple-400 font-bold text-lg mb-2">Trading Signals</div>
                  <div className="text-white/70 text-sm">Identify opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
