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
          Trusted by Top Brands in various industries
        </motion.p>

        <div className="overflow-hidden">
          <Marquee>
            <Image src="/marquee/spitch.svg" alt="spitch" width={200} height={64} className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/florence.png" alt="florence" width={280} height={96} className="h-40 md:h-40 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/kelvin.svg" alt="kelvin" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/oosha.svg" alt="oosha" width={240} height={80} className="h-20 md:h-24 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/outside.svg" alt="outside" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/beeyond.svg" alt="beeyond" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/chop.svg" alt="chop" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/delani.png" alt="delani" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/figo.svg" alt="figo" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
            <Image src="/marquee/formular.svg" alt="formular" width={200} height={64} className="h-16 md:h-20 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 mx-6 md:mx-8" />
          </Marquee>
        </div>
      </div>
    </section>
  )
}