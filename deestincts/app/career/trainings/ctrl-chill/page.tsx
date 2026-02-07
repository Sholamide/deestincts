'use client';

import { CountdownTimer } from "@/app/components/countdowntimer";
import { EventRegistrationForm } from "@/app/components/event-registration-form";
import { Users, Trophy, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
  
      <div className="relative container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mt-32 md:mt-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-pink-400 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Ctrl + Chill
            </h1>
          </div>

          <p className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-gray-200">
            Not Another Design Class
          </p>

          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto mb-10">
            Networking + Games + Live Brand Case Study Review + Pitch Competition → Winner gets an internship at Deestincts
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="bg-gray-900/70 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border border-gray-800 transform hover:scale-105 transition">
              <p className="text-4xl font-black text-green-400">₦25,000</p>
              <p className="text-lg text-gray-400">Ticket Price</p>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border border-gray-800 transform hover:scale-105 transition">
              <p className="text-4xl font-black text-pink-400">Only 25 Spots</p>
              <p className="text-lg text-gray-400">Limited Capacity 🔥</p>
            </div>
          </div>

          <p className="text-xl font-semibold text-gray-300">
            26th February 2026 • 10:00 AM • Cre8tive Space, Surulere, Lagos
          </p>

          <p className="text-lg mt-4 bg-gradient-to-r from-pink-400 via-yellow-300 bg-clip-text text-transparent to-green-400">#CtrlChill</p>
        </header>

        {/* Why It's Different */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
            Why This Isn&apos;t Just Another Design Class
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-pink-500/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-pink-900/40 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Live Brand Case Study</h3>
              <p className="text-gray-300 text-center">
                Deep dive into a real brand&apos;s design decisions and execution – no theory fluff.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-900/40 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Games & Challenges</h3>
              <p className="text-gray-300 text-center">
                Interactive activities that test your skills in real-time – fun, competitive, collaborative.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-900/40 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Pitch Competition</h3>
              <p className="text-gray-300 text-center">
                Pitch your best idea/work – winner lands an internship at Deestincts.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-900/40 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Real Networking</h3>
              <p className="text-gray-300 text-center">
                Connect with peers, Deestincts team & creatives – opportunities start here.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details + Urgency */}
        <section className="text-center mb-20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-gray-800">
          <h2 className="text-4xl font-bold mb-8 text-gray-100">
            Hands-On Learning That Leads to Real Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            For aspiring brand designers, students, and juniors (18-28) who want more than certificates. Invest in experiences that bridge learning and career growth.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
            <div className="text-2xl font-semibold text-pink-400">
              Date: 26th February 2026
            </div>
            <div className="text-2xl font-semibold text-green-400">
              Time: 10:00 AM
            </div>
            <div className="text-2xl font-semibold text-yellow-400">
              Venue: Cre8tive Space, Surulere, Lagos
            </div>
          </div>

          <CountdownTimer />
        </section>

        {/* Registration Section */}
        <section>
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Secure Your Spot Now
          </h2>

          <div className="max-w-2xl mx-auto backdrop-blur-xl p-5  rounded-3xl shadow-2xl">
            <EventRegistrationForm />
          </div>

        </section>
      </div>
    </div>
  );
}