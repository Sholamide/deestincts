// 'use client';

// import { CountdownTimer } from "@/app/components/countdowntimer";
// import { EventRegistrationForm } from "@/app/components/event-registration-form";
// import { Users, Trophy, Sparkles } from "lucide-react";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-gray-100">

//       <div className="relative container mx-auto px-6 py-12 max-w-6xl">
//         {/* Hero Section */}
//         <header className="text-center mt-32 md:mt-24">
//           <Image
//             src="/ctrlflyer.PNG"           // ← place in public/ folder
//             alt="Ctrl + Chill Event Flyer"
//             fill
//             className="object-contain brightness-50" // darken so text is readable
//             priority // load fast as hero
//             quality={85}
//           />
//           <div className="inline-flex items-center gap-3 mb-6">
//             <Sparkles className="w-10 h-10 text-pink-400 animate-pulse" />
//             <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
//               Ctrl + Chill
//             </h1>
//           </div>

//           <p className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-gray-200">
//             Not Another Design Class
//           </p>

//           <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto mb-10">
//             Networking + Games + Live Brand Case Study Review + Pitch Competition → Winner gets an internship at Deestincts
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
//             <div className="bg-gray-900/70 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border border-gray-800 transform hover:scale-105 transition">
//               <p className="text-4xl font-black text-green-400">₦25,000</p>
//               <p className="text-lg text-gray-400">Ticket Price</p>
//             </div>

//             <div className="bg-gray-900/70 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border border-gray-800 transform hover:scale-105 transition">
//               <p className="text-4xl font-black text-pink-400">Only 25 Spots</p>
//               <p className="text-lg text-gray-400">Limited Capacity 🔥</p>
//             </div>
//           </div>

//           <p className="text-xl font-semibold text-gray-300">
//             26th February 2026 • 10:00 AM • Cre8tive Space, Surulere, Lagos
//           </p>

//           <p className="text-lg mt-4 bg-gradient-to-r from-pink-400 via-yellow-300 bg-clip-text text-transparent to-green-400">#CtrlChill</p>
//         </header>

//         {/* Why It's Different */}
//         <section className="mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
//             Why This Isn&apos;t Just Another Design Class
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-pink-500/30 transition-all duration-300">
//               <div className="w-16 h-16 mx-auto mb-6 bg-pink-900/40 rounded-full flex items-center justify-center">
//                 <Sparkles className="w-8 h-8 text-pink-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Live Brand Case Study</h3>
//               <p className="text-gray-300 text-center">
//                 Deep dive into a real brand&apos;s design decisions and execution – no theory fluff.
//               </p>
//             </div>

//             <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-yellow-500/30 transition-all duration-300">
//               <div className="w-16 h-16 mx-auto mb-6 bg-yellow-900/40 rounded-full flex items-center justify-center">
//                 <Users className="w-8 h-8 text-yellow-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Games & Challenges</h3>
//               <p className="text-gray-300 text-center">
//                 Interactive activities that test your skills in real-time – fun, competitive, collaborative.
//               </p>
//             </div>

//             <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-green-500/30 transition-all duration-300">
//               <div className="w-16 h-16 mx-auto mb-6 bg-green-900/40 rounded-full flex items-center justify-center">
//                 <Trophy className="w-8 h-8 text-green-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Pitch Competition</h3>
//               <p className="text-gray-300 text-center">
//                 Pitch your best idea/work – winner lands an internship at Deestincts.
//               </p>
//             </div>

//             <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300">
//               <div className="w-16 h-16 mx-auto mb-6 bg-purple-900/40 rounded-full flex items-center justify-center">
//                 <Users className="w-8 h-8 text-purple-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-center text-gray-100">Real Networking</h3>
//               <p className="text-gray-300 text-center">
//                 Connect with peers, Deestincts team & creatives – opportunities start here.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Event Details + Urgency */}
//         <section className="text-center mb-20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-gray-800">
//           <h2 className="text-4xl font-bold mb-8 text-gray-100">
//             Hands-On Learning That Leads to Real Opportunities
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
//             For aspiring brand designers, students, and juniors (18-28) who want more than certificates. Invest in experiences that bridge learning and career growth.
//           </p>

//           <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
//             <div className="text-2xl font-semibold text-pink-400">
//               Date: 26th February 2026
//             </div>
//             <div className="text-2xl font-semibold text-green-400">
//               Time: 10:00 AM
//             </div>
//             <div className="text-2xl font-semibold text-yellow-400">
//               Venue: Cre8tive Space, Surulere, Lagos
//             </div>
//           </div>

//           <CountdownTimer />
//         </section>

//         {/* Registration Section */}
//         <section>
//           <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
//             Secure Your Spot Now
//           </h2>

//           <div className="max-w-2xl mx-auto backdrop-blur-xl p-5  rounded-3xl shadow-2xl">
//             <EventRegistrationForm />
//           </div>

//         </section>
//       </div>
//     </div>
//   );
// }

'use client';

import { CountdownTimer } from "@/app/components/countdowntimer";
import { EventRegistrationForm } from "@/app/components/event-registration-form";
import { Users, Trophy, Sparkles } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Flyer Image – full-width at the very top */}
      {/* <div className="relative w-full mt-32 md:mt-24 h-[60vh] md:h-[80vh] lg:h-[90vh] min-h-[400px] overflow-hidden">
        <Image
          src="/ctrlflyer.PNG"          // Make sure this file is in /public/ folder
          alt="Ctrl + Chill Event Flyer"
          fill
          className="object-contain md:object-cover brightness-[0.65] contrast-110" 
          // Slight darken + contrast boost for text readability
          priority                       // Important for hero image
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 pointer-events-none" />
      </div> */}

<div className="relative w-full overflow-hidden">
  {/* Responsive height: taller on desktop, shorter on mobile to avoid excessive scrolling */}
  <div className="
    relative w-full 
    h-[50vh]           /* mobile: half screen */
    sm:h-[60vh]        /* small tablets */
    md:h-[70vh]        /* medium screens */
    lg:h-[80vh]        /* large desktops */
    xl:h-[85vh]        /* extra large */
    min-h-[320px]      /* never too small */
    max-h-[900px]      /* prevent insane height on ultra-wide monitors */
  ">
    <Image
      src="/ctrlflyer.PNG"
      alt="Ctrl + Chill Event Flyer"
      fill
      priority
      quality={85}
      className="
        object-contain     /* default: show full flyer without cropping */
        md:object-cover    /* on medium+ screens: fill nicely if flyer is wide */
        brightness-[0.65] 
        contrast-[1.12]    /* slight contrast boost */
        transition-transform duration-700
      "
      sizes="(max-width: 640px) 100vw, 
             (max-width: 1024px) 100vw, 
             100vw"
    />

    {/* Overlay gradient – stronger on mobile to improve text visibility */}
    <div className="
      absolute inset-0 
      bg-gradient-to-b 
      from-transparent 
      via-black/40 
      md:via-black/50 
      to-black/70 
      pointer-events-none
    " />
  </div>

  {/* Optional: Small floating badge or text on top of flyer on mobile */}
  {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden">
    <div className="
      bg-black/60 backdrop-blur-md 
      px-6 py-3 rounded-full 
      text-white font-medium text-sm 
      shadow-lg border border-white/10
    ">
      Swipe down for details ↓
    </div>
  </div> */}
</div>

      {/* All other content comes after the flyer */}
      <div className="relative container mx-auto px-6 py-16 md:py-20 max-w-6xl -mt-16 md:-mt-24">
        {/* Hero Text Overlay / Intro */}
        <header className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 my-4 md:my-10">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-pink-400 animate-pulse" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Not Another Design Class
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200 max-w-4xl mx-auto mb-10">
            Networking + Games + Live Brand Case Study Review + Pitch Competition → Winner gets an internship at Deestincts
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="bg-gray-900/80 backdrop-blur-md px-8 py-5 md:px-12 md:py-7 rounded-3xl shadow-2xl border border-gray-700 transform hover:scale-105 transition">
              <p className="text-3xl md:text-4xl font-black text-green-400">₦25,000</p>
              <p className="text-base md:text-lg text-gray-300">Ticket Price</p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-md px-8 py-5 md:px-12 md:py-7 rounded-3xl shadow-2xl border border-gray-700 transform hover:scale-105 transition">
              <p className="text-3xl md:text-4xl font-black text-pink-400">Only 25 Spots</p>
              <p className="text-base md:text-lg text-gray-300">Limited Capacity 🔥</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-xl md:text-2xl font-semibold">
            <span className="text-pink-400">26th February 2026</span>
            <span className="text-green-400">10:00 AM</span>
            <span className="text-yellow-400">Cre8tive Space, Surulere, Lagos</span>
          </div>

          <p className="text-xl md:text-2xl mt-8 font-medium bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            #CtrlChill
          </p>
        </header>

        {/* Rest of the page – Why It's Different */}
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

        {/* Event Details + Countdown */}
        <section className="text-center mb-20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-gray-800">
          <h2 className="text-4xl font-bold mb-8 text-gray-100">
            Hands-On Learning That Leads to Real Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            For aspiring brand designers, students, and juniors (18-28) who want more than certificates. Invest in experiences that bridge learning and career growth.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
            <div className="text-2xl font-semibold text-pink-400">Date: 26th February 2026</div>
            <div className="text-2xl font-semibold text-green-400">Time: 10:00 AM</div>
            <div className="text-2xl font-semibold text-yellow-400">Venue: Cre8tive Space, Surulere, Lagos</div>
          </div>

          <CountdownTimer />
        </section>

        {/* Registration Section */}
        <section>
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Secure Your Spot Now
          </h2>

          <div className="max-w-2xl mx-auto backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800">
            <EventRegistrationForm />
          </div>
        </section>
      </div>
    </div>
  );
}