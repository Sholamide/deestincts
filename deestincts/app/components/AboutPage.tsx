"use client"

import { easeOut, motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import InfinityPattern from "./InfinityPattern"
import type { About } from "@/lib/types"
import {
  Lightbulb,
  Palette,
  TrendingUp,
  Zap,
  Package,
  Megaphone,
  Type,
  PlayCircle,
  Globe,
  Layout,
  Smartphone,
} from "lucide-react"
import SanityImage from "./sanity-image"
import Image from "next/image"

interface AboutPageProps {
  about: About | null
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const serviceItems = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Crafting unique visual identities that resonate with your audience and stand out.",
  },
  {
    icon: Lightbulb,
    title: "Graphic Design & Communication",
    description: "Creating compelling visuals for all your marketing and communication needs.",
  },
  {
    icon: TrendingUp,
    title: "Strategy & Positioning",
    description: "Developing clear strategies to position your brand effectively in the market.",
  },
  {
    icon: Package, // Using Package for Product & Packaging
    title: "Product & Packaging Design",
    description: "Designing intuitive and appealing products and packaging solutions.",
  },
  {
    icon: Megaphone, // Using Megaphone for Advertising & Campaign
    title: "Advertising & Campaign Development",
    description: "Building impactful campaigns that capture attention and drive engagement.",
  },
  {
    icon: Type, // Using Type for Typography
    title: "Typography & Custom Typefaces",
    description: "Expert typography and custom font creation for distinctive brand voice.",
  },
  {
    icon: PlayCircle, // Using PlayCircle for Animation & Motion Graphics
    title: "Animation & Motion Graphics",
    description: "Bringing your brand to life with dynamic and engaging motion design.",
  },
  {
    icon: Globe, // Using Globe for Website Design & Development
    title: "Website Design & Development",
    description: "Building responsive, high-performance websites that deliver exceptional user experiences.",
  },
  {
    icon: Layout, // Using Layout for UI/UX Design
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly interfaces for seamless digital interactions.",
  },
  {
    icon: Smartphone, // Using Smartphone for Web & Mobile App Development
    title: "Web & Mobile App Development",
    description: "Developing robust and scalable web and mobile applications tailored to your needs.",
  },
]

const philosophyBlends = [
  "Global design standards",
  "Strategic insight",
  "Emotional storytelling",
  "Cultural intelligence",
  "Technical excellence",
]

export default function AboutContent({ about }: AboutPageProps) {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], ["1", "0"])

  return (
    <section className="relative py-24 bg-[#000000] text-white overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/abstract-pattern1.jpg"
          alt="Abstract background pattern"
          className="object-cover opacity-10 grayscale"
          fill
          priority
        />
      </div>
      {/* <InfinityPattern isDark className="opacity-20" /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section (Animated Intro) */}
        <motion.div
          ref={heroRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col items-center justify-center min-h-[calc(60vh-100px)] mb-24"
        >
          <motion.h1
            style={{ y: yText, opacity: opacityText }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter"
          >
            <motion.span variants={itemVariants} className="text-[#858585]">
              About
            </motion.span>{" "}
            <motion.span variants={itemVariants}>Deestincts</motion.span>
          </motion.h1>
          <motion.p
            style={{ y: yText, opacity: opacityText }}
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Deestincts is a cross-disciplinary, privately-owned creative and digital design agency committed to helping
            brands express their uniqueness with clarity, strategy, and emotional depth. We build standout brands and
            digital experiences that move people and grow businesses.
          </motion.p>
        </motion.div>

        {/* Reel */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 rounded-xl overflow-hidden border border-white/10 shadow-lg"
        >
          <div className="relative h-full">
            {about?.featuredVideo && (
              <video
                src={about.featuredVideo}
                className={`w-full h-full object-cover`}
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                playsInline
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          className="mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            What We <span className="text-[#858585]">Do</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-8 flex flex-col items-start text-left ${index < serviceItems.length - 1 ? "border-r border-white/10" : ""
                  }`}
              >
                {/* <div className="w-8 h-8 rounded-full bg-[#C3122B] mb-6" /> */}
                <item.icon className="h-8 w-8 mb-6 text-[#858585] group-hover:text-white transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-white group-hover:text-[#858585] transition-colors duration-300 mb-4">
                  {item.title}
                </h3>
                {/* <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3> */}
                {/* <p className="text-gray-300 text-base leading-relaxed">{item.description}</p> */}
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-12 text-center"
          >
            Whether you’re launching something new or reinventing an existing brand, we partner with you from concept to
            execution, designing every touchpoint to feel intentional, inspired, and impactful.
          </motion.p>
        </motion.div>

        {/* Our Philosophy Section */}
        <motion.div className="my-24"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Our <span className="text-[#858585]">Philosophy</span>
          </motion.h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Ingredients */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">The Ingredients</h3>
              <ul className="list-none p-0 m-0 space-y-4">
                {philosophyBlends.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 text-lg text-gray-300"
                  >
                    <Zap className="h-6 w-6 text-[#858585]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side: Results */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">The Results</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At Deestincts, design isn’t just about looking good, it’s about feeling right and working smart. We
                approach each project with a deep understanding of the brand’s purpose, audience, and potential.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our blend of these core ingredients consistently leads to innovative, impactful, and truly distinct
                solutions that drive real business growth and connect deeply with audiences.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Members Section (from previous implementation) */}
        {about?.teamMembers && about.teamMembers.length > 0 && (
          <motion.div
            className="mt-24"
          >
            <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
              Meet Our <span className="text-[#858585]">Team</span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {about.teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="text-center group rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#858585]"
                >
                  <div className="relative aspect-square mb-6 overflow-hidden">
                    <SanityImage
                      image={member.image}
                      alt={member.name}
                      aspectRatio="auto"
                      className={`object-cover group-hover:scale-105 group-hover:rotate-y-3 transition-transform duration-700`}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
