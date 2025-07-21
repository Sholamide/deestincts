'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    alt: "Design team collaborating on a project"
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    alt: "Modern workspace with creative design elements"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    alt: "Designer working on digital interface"
  }
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
      {images.map((image, index) => (
        <Image
          key={image.url}
          src={image.url}
          alt={image.alt}
          width={600}
          height={600}
          className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  )
}