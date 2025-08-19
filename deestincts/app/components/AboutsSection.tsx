'use client'

import { motion } from 'framer-motion'
import { About } from '@/lib/types'
import InfinityPattern from './InfinityPattern'
import CompanyMarquee from './CompanyMarquee'

interface AboutSectionProps {
  about: About | null
}

export default function AboutSection({ about }: AboutSectionProps) {
  if (!about) return null

  return (
    <section className="relative py-24 lg:py-40 bg-black text-white overflow-hidden">
      <InfinityPattern isDark className="opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            About Deestincts
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are a collective of designers, developers, and creative thinkers dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>
      </div>
      <CompanyMarquee />
    </section>
  )
}
