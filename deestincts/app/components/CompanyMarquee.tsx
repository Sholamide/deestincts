'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const companies = [
  { name: 'Apple', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Google', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Microsoft', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Tesla', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Netflix', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Spotify', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Airbnb', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Uber', logo: '/placeholder.svg?height=60&width=120' },
]

export default function CompanyMarquee() {
  return (
    <section className="py-16 bg-black  border-gray-200">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-wider text-gray-600 mb-12"
        >
          Trusted by industry leaders
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * companies.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
            style={{ width: `${200 * companies.length}%` }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
