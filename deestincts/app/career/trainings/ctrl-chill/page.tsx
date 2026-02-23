// 'use client';

// import { CountdownTimer } from "@/app/components/countdowntimer";
// import { EventRegistrationForm } from "@/app/components/event-registration-form";
// import { Users, Trophy, Sparkles } from "lucide-react";
// import Image from 'next/image';

// const colors = {
//   mint: "#d5e6b4",
//   pink: "#ffcaf7",
//   yellow: "#f8e386",
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
//       {/* Hero Flyer – full-width at top */}
//       <div className="relative w-full overflow-hidden">
//         <div className="
//           relative mt-32 w-full 
//           h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] 
//           min-h-[360px] max-h-[880px]
//           overflow-hidden
//         ">
//           <Image
//             src="/ctrlflyer.PNG"
//             alt="Ctrl + Chill Event Flyer"
//             fill
//             priority
//             quality={82}
//             className="
//               object-contain sm:object-cover
//               brightness-[0.78] contrast-[1.08]
//               transition-transform duration-1000
//             "
//             sizes="100vw"
//           />

//           {/* Subtle bottom fade for smooth transition to content */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />
//         </div>

//         {/* Floating promo badge on flyer (mobile only) */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden">
//           <div className="
//             bg-[#0f0f17]/80 backdrop-blur-md 
//             px-5 py-2.5 rounded-full 
//             text-white text-sm font-medium 
//             shadow-lg border border-white/10
//           ">
//             Limited to 25 spots ↓
//           </div>
//         </div>
//       </div>

//       {/* Main content – starts right after flyer */}
//       <div className="relative container mx-auto px-5 sm:px-6 py-12 md:py-16 max-w-6xl -mt-12 md:-mt-16">
//         {/* Intro / Title Block */}
//         <header className="text-center mb-16 md:mb-20">
//           <div className="inline-flex items-center gap-3 mb-5">
//             <Sparkles className="w-9 h-9 md:w-11 md:h-11" style={{ color: colors.pink }} />
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ color: colors.mint }}>
//               Ctrl + Chill
//             </h1>
//           </div>

//           <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.yellow }}>
//             Not Another Design Class
//           </p>

//           <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
//             Networking + Games + Live Brand Case Study Review + Pitch Competition → Winner gets an internship at Deestincts
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
//             <div className="
//               bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl 
//               border border-white/10 shadow-xl
//             ">
//               <p className="text-3xl font-black" style={{ color: colors.mint }}>₦25,000</p>
//               <p className="text-base text-gray-400 mt-1">Ticket Price</p>
//             </div>

//             <div className="
//               bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl 
//               border border-white/10 shadow-xl
//             ">
//               <p className="text-3xl font-black" style={{ color: colors.pink }}>Only 25 Spots</p>
//               <p className="text-base text-gray-400 mt-1">Limited Capacity 🔥</p>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-center gap-5 text-lg md:text-xl font-medium">
//             <span style={{ color: colors.pink }}>26th February 2026</span>
//             <span style={{ color: colors.mint }}>10:00 AM</span>
//             <span style={{ color: colors.yellow }}>Cre8tive Space, Surulere, Lagos</span>
//           </div>

//           <p className="mt-8 text-xl md:text-2xl font-medium" style={{ color: colors.pink }}>
//             #CtrlChill
//           </p>
//         </header>

//         {/* Why It's Different */}
//         <section className="mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colors.yellow }}>
//             Why This Isn&apos;t Just Another Design Class
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             <div className="
//               bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
//               border border-white/10 shadow-xl hover:border-[#ffcaf7]/30 transition-all duration-300
//             ">
//               <div className="w-14 h-14 mx-auto mb-5 bg-[#ffcaf7]/10 rounded-full flex items-center justify-center">
//                 <Sparkles className="w-7 h-7" style={{ color: colors.pink }} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-center text-white">Live Brand Case Study</h3>
//               <p className="text-gray-300 text-center text-sm">
//                 Deep dive into a real brand&apos;s design decisions and execution – no theory fluff.
//               </p>
//             </div>

//             <div className="
//               bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
//               border border-white/10 shadow-xl hover:border-[#d5e6b4]/30 transition-all duration-300
//             ">
//               <div className="w-14 h-14 mx-auto mb-5 bg-[#d5e6b4]/10 rounded-full flex items-center justify-center">
//                 <Users className="w-7 h-7" style={{ color: colors.mint }} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-center text-white">Games & Challenges</h3>
//               <p className="text-gray-300 text-center text-sm">
//                 Interactive activities that test your skills in real-time – fun, competitive, collaborative.
//               </p>
//             </div>

//             <div className="
//               bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
//               border border-white/10 shadow-xl hover:border-[#f8e386]/30 transition-all duration-300
//             ">
//               <div className="w-14 h-14 mx-auto mb-5 bg-[#f8e386]/10 rounded-full flex items-center justify-center">
//                 <Trophy className="w-7 h-7" style={{ color: colors.yellow }} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-center text-white">Pitch Competition</h3>
//               <p className="text-gray-300 text-center text-sm">
//                 Pitch your best idea/work – winner lands an internship at Deestincts.
//               </p>
//             </div>

//             <div className="
//               bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl 
//               border border-white/10 shadow-xl hover:border-[#ffcaf7]/30 transition-all duration-300
//             ">
//               <div className="w-14 h-14 mx-auto mb-5 bg-[#ffcaf7]/10 rounded-full flex items-center justify-center">
//                 <Users className="w-7 h-7" style={{ color: colors.pink }} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-center text-white">Real Networking</h3>
//               <p className="text-gray-300 text-center text-sm">
//                 Connect with peers, Deestincts team & creatives – opportunities start here.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Event Details + Countdown */}
//         <section className="text-center mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.mint }}>
//             Hands-On Learning That Leads to Real Opportunities
//           </h2>
//           <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10">
//             For aspiring brand designers, students, and juniors (18-28) who want more than certificates. Invest in experiences that bridge learning and career growth.
//           </p>

//           <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-lg font-medium">
//             <span style={{ color: colors.pink }}>26th February 2026</span>
//             <span style={{ color: colors.mint }}>10:00 AM</span>
//             <span style={{ color: colors.yellow }}>Cre8tive Space, Surulere, Lagos</span>
//           </div>

//           <CountdownTimer />
//         </section>

//         {/* Registration Section */}
//         <section className="pb-20">
//           <h2 className="text-4xl md:text-5xl font-black text-center mb-10" style={{ color: colors.yellow }}>
//             Secure Your Spot Now
//           </h2>

//           <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
//             <EventRegistrationForm />
//           </div>

//           <p className="text-center mt-8 text-gray-400 text-base">
//             ₦25,000 • Pay via Paystack • Limited to 25 participants • #CtrlChill
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }


'use client';

import { CountdownTimer } from "@/app/components/countdowntimer";
import { EventRegistrationForm } from "@/app/components/event-registration-form";
import { Users, Trophy, Sparkles, CheckCircle, ChevronDown } from "lucide-react";
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const colors = {
  mint: "#d5e6b4",
  pink: "#ffcaf7",
  yellow: "#f8e386",
};

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Brand Designer, Lagos",
    quote:
      "SkillUp 50 literally changed how I price myself. I left with a clearer strategy and two new clients within the month.",
  },
  {
    name: "Tomiwa K.",
    role: "Visual Strategist",
    quote:
      "I've attended workshops before, but nothing came close to the energy and realness of this room. Real feedback, real connections.",
  },
  {
    name: "Emmanuel D.",
    role: "Creative Director",
    quote:
      "The live case study breakdown alone was worth it ten times all over. I walked out knowing exactly what to fix in my portfolio.",
  },
  {
    name: "Nkechi A.",
    role: "Graphic Designer",
    quote:
      "I got a freelance referral from someone I met at SkillUp 50. That's the kind of networking they promised — and delivered.",
  },
];

const reviewImages = [
  // "/reviews/review1.png",
  "/reviews/review2.png",
  "/reviews/review3.png",
  "/reviews/skillup-reviews-2.png",
  "/reviews/skillup-reviews-3.png",
  "/reviews/skillup-reviews-4.png",
  "/reviews/skillup-reviews-5.png",
  "/reviews/skillup-reviews-6.png",
  "/reviews/skillup-reviews-7.png",
  // "/reviews/skillup-reviews-8.png",
];

const faqs = [
  {
    question: "Who should attend?",
    answer:
      "Any creative serious about growth — designers, strategists, developers, founders. If you're building something or want to, this room is for you.",
  },
  {
    question: "Is this beginner-friendly?",
    answer: "Yes. But you must be ready to grow. Comfort zones don't survive this room.",
  },
  {
    question: "What should I bring?",
    answer: "Your portfolio (digital or physical) and an open mind.",
  },
  {
    question: "Is there a certificate?",
    answer: "Yes. You'll receive a certificate of participation.",
  },
];


function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = reviewImages.length;

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((index + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, total]);

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(current + 1), 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, goTo]);

  const prev = () => { if (timerRef.current) clearTimeout(timerRef.current); goTo(current - 1); };
  const next = () => { if (timerRef.current) clearTimeout(timerRef.current); goTo(current + 1); };

  // Show 3 slides: prev, current, next (with current prominent)
  const indices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <div className="relative w-full select-none">
      {/* Main carousel track */}
      <div className="flex items-center justify-center gap-4 md:gap-6 px-2 py-4">
        {indices.map((imgIdx, pos) => {
          const isCenter = pos === 1;
          return (
            <div
              key={imgIdx}
              onClick={() => !isCenter && goTo(imgIdx)}
              className="relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer flex-shrink-0"
              style={{
                width: isCenter ? "min(480px, 72vw)" : "min(180px, 22vw)",
                height: isCenter ? "min(480px, 72vw)" : "min(180px, 22vw)",
                borderColor: isCenter ? colors.pink : "rgba(255,255,255,0.08)",
                boxShadow: isCenter
                  ? `0 0 60px 8px rgba(255,202,247,0.18), 0 8px 48px rgba(0,0,0,0.7)`
                  : "0 4px 20px rgba(0,0,0,0.4)",
                opacity: isCenter ? 1 : 0.45,
                transform: isCenter ? "scale(1)" : "scale(0.88)",
                zIndex: isCenter ? 10 : 5,
              }}
            >
              <Image
                src={reviewImages[imgIdx]}
                alt={`SkillUp 50 review ${imgIdx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 72vw, 480px"
              />
              {/* Glow overlay on center */}
              {isCenter && (
                <div className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ boxShadow: "inset 0 0 40px rgba(255,202,247,0.06)" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "rgba(15,15,23,0.85)", color: colors.pink }}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "rgba(15,15,23,0.85)", color: colors.pink }}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {reviewImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); goTo(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              backgroundColor: i === current ? colors.pink : "rgba(255,255,255,0.2)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center mt-3 text-sm font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
        {current + 1} / {total}
      </p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-7 py-5">
        <p className="text-base md:text-lg font-semibold text-white">{question}</p>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: colors.mint, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {open && (
        <div className="px-7 pb-5">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
      {/* Hero Flyer */}
      <div className="relative w-full overflow-hidden">
        <div className="relative mt-32 w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] min-h-[360px] max-h-[880px] overflow-hidden">
          <Image
            src="/ctrlflyer.PNG"
            alt="Ctrl + Chill Event Flyer"
            fill
            priority
            quality={82}
            className="object-contain sm:object-cover brightness-[0.78] contrast-[1.08] transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden">
          <div className="bg-[#0f0f17]/80 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-lg border border-white/10">
            Limited to 40 spots ↓
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-5 sm:px-6 py-12 md:py-16 max-w-6xl -mt-12 md:-mt-16">

        {/* Hero Title Block */}
        <header className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-9 h-9 md:w-11 md:h-11" style={{ color: colors.pink }} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ color: colors.mint }}>
              Ctrl + Chill
            </h1>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.yellow }}>
            The Creative Direction Room for Ambitious Creatives
          </p>

          <p className="text-lg sm:text-xl font-medium text-gray-300 mb-6">
            The 1-Day Reset for Creatives
          </p>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Gain clarity, build real connections, and leave ready to level up your creative career.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <div className="bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-3xl font-black" style={{ color: colors.mint }}>₦25,000</p>
              <p className="text-base text-gray-400 mt-1">Ticket Price</p>
            </div>
            <div className="bg-[#0f0f17]/80 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-3xl font-black" style={{ color: colors.pink }}>Only 40 Seats</p>
              <p className="text-base text-gray-400 mt-1">Limited Capacity 🔥</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5 text-lg md:text-xl font-medium">
            <span style={{ color: colors.pink }}>26th February 2026</span>
            <span style={{ color: colors.mint }}>10:00 AM</span>
            <span style={{ color: colors.yellow }}>Cre8tive Space, Surulere, Lagos</span>
          </div>

          <p className="mt-8 text-xl md:text-2xl font-medium" style={{ color: colors.pink }}>#CtrlChill</p>

          <div className="mt-10">
            <a
              href="#register"
              className="inline-block px-4 py-4 rounded-full text-2xl font-black shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: colors.yellow, color: "#0a0a0f" }}
            >
              Secure My Seat
            </a>
          </div>
        </header>

        {/* Inside the Room */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: colors.yellow }}>
            Inside the Room
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Not theory. Not fluff. Real experiences with real impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Sparkles className="w-7 h-7" style={{ color: colors.pink }} />,
                bg: "bg-[#ffcaf7]/10",
                border: "hover:border-[#ffcaf7]/30",
                title: "Live Brand Case Breakdown",
                desc: "Understand real decision-making behind successful projects — no theory fluff.",
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: colors.mint }} />,
                bg: "bg-[#d5e6b4]/10",
                border: "hover:border-[#d5e6b4]/30",
                title: "Interactive Creative Challenges",
                desc: "Apply your thinking in real-time — practical skills you'll use the very next day.",
              },
              {
                icon: <Trophy className="w-7 h-7" style={{ color: colors.yellow }} />,
                bg: "bg-[#f8e386]/10",
                border: "hover:border-[#f8e386]/30",
                title: "Pitch Competition",
                desc: "Stand out. Win real opportunities — including a shot at an internship at Deestincts.",
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: colors.pink }} />,
                bg: "bg-[#ffcaf7]/10",
                border: "hover:border-[#ffcaf7]/30",
                title: "Intentional Networking",
                desc: "Meet creatives building seriously. Connections that turn into collaborations, referrals & gigs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl border border-white/10 shadow-xl ${item.border} transition-all duration-300`}
              >
                <div className={`w-14 h-14 mx-auto mb-5 ${item.bg} rounded-full flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">{item.title}</h3>
                <p className="text-gray-300 text-center text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10" style={{ color: colors.mint }}>
            This Room Is For You If…
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {[
              "You're talented but feel stuck",
              "You're creating but not growing",
              "You're undercharging or unsure how to position yourself",
              "You want real connections, not surface networking",
              'You are ready to move from "creative" to "strategic creative"',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: colors.pink }} />
                <p className="text-gray-200 text-base">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-bold italic" style={{ color: colors.yellow }}>
            If you&apos;re comfortable staying small, this isn&apos;t for you.
          </p>
        </section>

        {/* What You Walk Away With */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colors.yellow }}>
            What You Will Walk Away With
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              "Clarity on direction and next steps",
              "A personal action plan to grow in 30 days",
              "At least one meaningful connection",
              "Real feedback on your portfolio/work",
              "Confidence to command better opportunities",
              "Prizes for Lucky Winners",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#0f0f17]/70 backdrop-blur-lg p-5 rounded-2xl border border-white/10"
              >
                <span className="text-xl">✔</span>
                <p className="text-gray-200 text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Urgency signals */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap text-center">
            {[
              "👉 Only 40 seats ever",
              "👉 Early access pricing ends in 5 days",
              "👉 Limited portfolio review slots",
              "👉 First 15 tickets include a bonus session",
            ].map((note, i) => (
              <span
                key={i}
                className="bg-[#0f0f17]/80 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ color: colors.pink }}
              >
                {note}
              </span>
            ))}
          </div>
        </section>

        {/* Social Proof / Past Program */}
        <section className="mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: colors.mint }}>
            Proven Results from SkillUp 50
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            We&apos;ve done this before. Here&apos;s what happened.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { stat: "50+", label: "Creatives Trained" },
              { stat: "12+", label: "Got Job Offers" },
              { stat: "8+", label: "Freelance Referrals Secured" },
              { stat: "100%", label: "Would Attend Again" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black" style={{ color: colors.yellow }}>{s.stat}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Review Video */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-8">
            <video
              src="/reviews/reviewvideo.mp4"
              controls
              playsInline
              className="w-full max-h-[480px] object-cover"
            />
          </div>

          {/* Review Images Grid */}
          <ReviewCarousel />
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "/reviews/review1.png",
              "/reviews/review2.png",
              "/reviews/review3.png",
              "/reviews/skillup-reviews-2.png",
              "/reviews/skillup-reviews-3.png",
              "/reviews/skillup-reviews-4.png",
              "/reviews/skillup-reviews-5.png",
              "/reviews/skillup-reviews-6.png",
              "/reviews/skillup-reviews-7.png",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={src}
                  alt={`SkillUp 50 review ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div> */}
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colors.yellow }}>
            What Past Attendees Said
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#0f0f17]/70 backdrop-blur-lg p-7 rounded-2xl border border-white/10 shadow-xl"
              >
                <p className="text-gray-200 text-base leading-relaxed mb-5 italic">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm" style={{ color: colors.mint }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Countdown + Details */}
        <section className="text-center mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.mint }}>
            Hands-On Learning That Leads to Real Opportunities
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10">
            For creatives serious about their next move — designers, strategists, developers, founders. Invest in experiences that bridge learning and career growth.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-lg font-medium">
            <span style={{ color: colors.pink }}>Saturday, 28th March 2026</span>
            <span style={{ color: colors.mint }}>10:00 AM</span>
            <span style={{ color: colors.yellow }}>Bridge by Obsidian, 6 University Rd, Onike Lagos, Nigeria</span>
          </div>

          <CountdownTimer />
        </section>

        {/* Urgency Section */}
        <section className="mb-20 text-center p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.pink }}>
            Only 40 Seats. No Replay. No Livestream.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Ctrl + Chill is designed to be intimate. When the seats are filled, registration closes.
          </p>
          <p className="text-xl font-semibold text-white mb-10">
            If you&apos;ve been waiting for a sign to take your creative growth seriously — this is it.
          </p>
          <a
            href="#register"
            className="inline-block px-4 py-4 rounded-full text-xl font-black shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.yellow, color: "#0a0a0f" }}
          >
            Secure Your Seat Now
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colors.mint }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="pb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10" style={{ color: colors.yellow }}>
            Secure Your Seat Now
          </h2>

          <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
            <EventRegistrationForm />
          </div>

          <p className="text-center mt-8 text-gray-400 text-base">
            ₦25,000 • Pay via Paystack • Limited to 40 participants • #CtrlChill
          </p>
        </section>
      </div>
    </div>
  );
}