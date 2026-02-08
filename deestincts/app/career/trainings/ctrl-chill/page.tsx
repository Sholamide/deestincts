'use client';

import { CountdownTimer } from "@/app/components/countdowntimer";
import { EventRegistrationForm } from "@/app/components/event-registration-form";
import { Users, Trophy, Sparkles } from "lucide-react";
import Image from 'next/image';

const colors = {
  mint: "#d5e6b4",
  pink: "#ffcaf7",
  yellow: "#f8e386",
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
      {/* Hero Flyer – full-width at top */}
      <div className="relative w-full overflow-hidden">
        <div className="
          relative mt-32 w-full 
          h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] 
          min-h-[360px] max-h-[880px]
          overflow-hidden
        ">
          <Image
            src="/ctrlflyer.PNG"
            alt="Ctrl + Chill Event Flyer"
            fill
            priority
            quality={82}
            className="
              object-contain sm:object-cover
              brightness-[0.78] contrast-[1.08]
              transition-transform duration-1000
            "
            sizes="100vw"
          />

          {/* Subtle bottom fade for smooth transition to content */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating promo badge on flyer (mobile only) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden">
          <div className="
            bg-[#0f0f17]/80 backdrop-blur-md 
            px-5 py-2.5 rounded-full 
            text-white text-sm font-medium 
            shadow-lg border border-white/10
          ">
            Limited to 25 spots ↓
          </div>
        </div>
      </div>

      {/* Main content – starts right after flyer */}
      <div className="relative container mx-auto px-5 sm:px-6 py-12 md:py-16 max-w-6xl -mt-12 md:-mt-16">
        {/* Intro / Title Block */}
        <header className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <Sparkles className="w-9 h-9 md:w-11 md:h-11" style={{ color: colors.pink }} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ color: colors.mint }}>
              Ctrl + Chill
            </h1>
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.yellow }}>
            Not Another Design Class
          </p>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Networking + Games + Live Brand Case Study Review + Pitch Competition → Winner gets an internship at Deestincts
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <div className="
              bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl 
              border border-white/10 shadow-xl
            ">
              <p className="text-3xl font-black" style={{ color: colors.mint }}>₦25,000</p>
              <p className="text-base text-gray-400 mt-1">Ticket Price</p>
            </div>

            <div className="
              bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl 
              border border-white/10 shadow-xl
            ">
              <p className="text-3xl font-black" style={{ color: colors.pink }}>Only 25 Spots</p>
              <p className="text-base text-gray-400 mt-1">Limited Capacity 🔥</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5 text-lg md:text-xl font-medium">
            <span style={{ color: colors.pink }}>26th February 2026</span>
            <span style={{ color: colors.mint }}>10:00 AM</span>
            <span style={{ color: colors.yellow }}>Cre8tive Space, Surulere, Lagos</span>
          </div>

          <p className="mt-8 text-xl md:text-2xl font-medium" style={{ color: colors.pink }}>
            #CtrlChill
          </p>
        </header>

        {/* Why It's Different */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colors.yellow }}>
            Why This Isn&apos;t Just Another Design Class
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="
              bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
              border border-white/10 shadow-xl hover:border-[#ffcaf7]/30 transition-all duration-300
            ">
              <div className="w-14 h-14 mx-auto mb-5 bg-[#ffcaf7]/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7" style={{ color: colors.pink }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Live Brand Case Study</h3>
              <p className="text-gray-300 text-center text-sm">
                Deep dive into a real brand&apos;s design decisions and execution – no theory fluff.
              </p>
            </div>

            <div className="
              bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
              border border-white/10 shadow-xl hover:border-[#d5e6b4]/30 transition-all duration-300
            ">
              <div className="w-14 h-14 mx-auto mb-5 bg-[#d5e6b4]/10 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7" style={{ color: colors.mint }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Games & Challenges</h3>
              <p className="text-gray-300 text-center text-sm">
                Interactive activities that test your skills in real-time – fun, competitive, collaborative.
              </p>
            </div>

            <div className="
              bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
              border border-white/10 shadow-xl hover:border-[#f8e386]/30 transition-all duration-300
            ">
              <div className="w-14 h-14 mx-auto mb-5 bg-[#f8e386]/10 rounded-full flex items-center justify-center">
                <Trophy className="w-7 h-7" style={{ color: colors.yellow }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Pitch Competition</h3>
              <p className="text-gray-300 text-center text-sm">
                Pitch your best idea/work – winner lands an internship at Deestincts.
              </p>
            </div>

            <div className="
              bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
              border border-white/10 shadow-xl hover:border-[#ffcaf7]/30 transition-all duration-300
            ">
              <div className="w-14 h-14 mx-auto mb-5 bg-[#ffcaf7]/10 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7" style={{ color: colors.pink }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Real Networking</h3>
              <p className="text-gray-300 text-center text-sm">
                Connect with peers, Deestincts team & creatives – opportunities start here.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details + Countdown */}
        <section className="text-center mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.mint }}>
            Hands-On Learning That Leads to Real Opportunities
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10">
            For aspiring brand designers, students, and juniors (18-28) who want more than certificates. Invest in experiences that bridge learning and career growth.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-lg font-medium">
            <span style={{ color: colors.pink }}>26th February 2026</span>
            <span style={{ color: colors.mint }}>10:00 AM</span>
            <span style={{ color: colors.yellow }}>Cre8tive Space, Surulere, Lagos</span>
          </div>

          <CountdownTimer />
        </section>

        {/* Registration Section */}
        <section className="pb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10" style={{ color: colors.yellow }}>
            Secure Your Spot Now
          </h2>

          <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
            <EventRegistrationForm />
          </div>

          <p className="text-center mt-8 text-gray-400 text-base">
            ₦25,000 • Pay via Paystack • Limited to 25 participants • #CtrlChill
          </p>
        </section>
      </div>
    </div>
  );
}