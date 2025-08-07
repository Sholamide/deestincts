'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { About } from '@/lib/types'
import InfinityPattern from './InfinityPattern'
import SanityImage from './sanity-image'
import CustomPortableText from './PortableText'

interface AboutSectionProps {
  about: About | null
}

export default function AboutSection({ about }: AboutSectionProps) {
  if (!about) return null

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <InfinityPattern isDark className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            About Deestincts
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           We are a collective of designers, developers, and creative thinkers dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <CustomPortableText value={about.content} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20">
              <Image
                src="/images/deestincts-logo-only-white.png"
                alt="Studio workspace"
                fill
                className="object-cover filter grayscale"
              />
            </div>
          </motion.div>
        </div>

        {about.teamMembers && about.teamMembers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif text-white mb-12 text-center">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {about.teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative aspect-square mb-6 overflow-hidden bg-white/10">
                  <SanityImage
                    image={member.image}
                     aspectRatio="auto"
                     className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  </div>
                  <h4 className="text-xl font-serif text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
