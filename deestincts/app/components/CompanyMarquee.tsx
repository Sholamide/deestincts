'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

export default function CompanyMarquee() {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-bold text-base uppercase tracking-wider text-gray-600 mb-12"
        >
          Trusted by industry leaders
        </motion.p>

        <div className="overflow-hidden">
          <Marquee>
            <Image src="/marquee/spitch.svg" alt="spitch" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/florence.png" alt="florence" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/kelvin.svg" alt="kelvin" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/oosha.svg" alt="oosha" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/outside.svg" alt="outside" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/beeyond.svg" alt="beeyond" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/chop.svg" alt="chop" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/delani.png" alt="delani" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/figo.svg" alt="figo" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/formular.svg" alt="formular" width={160} height={48} className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </Marquee>
        </div>
      </div>
    </section>
  )
}
