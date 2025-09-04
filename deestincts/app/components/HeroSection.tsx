'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Project } from '@/lib/types'
import SanityImage from './sanity-image'

interface HeroSectionProps {
    projects: Project[]
}

export default function HeroSection({ projects }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const [isHovered, setIsHovered] = useState<boolean>(false)

    useEffect(() => {
        if (isHovered) return

        const slideInterval: NodeJS.Timeout = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % projects.length)
            setProgress(0)
        }, 5000)

        const progressInterval: NodeJS.Timeout = setInterval(() => {
            setProgress((prev: number) => (prev >= 100 ? 0 : prev + 2))
        }, 100)

        return () => {
            clearInterval(slideInterval)
            clearInterval(progressInterval)
        }
    }, [projects.length, isHovered])

    if (!projects || projects.length === 0) return null

    const currentProject: Project = projects[currentIndex]

    // Animation variants for text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.5,
            },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    // Handle navigation
    const handleNext = () => {
        setCurrentIndex((prev: number) => (prev + 1) % projects.length)
        setProgress(0)
    }

    const handlePrevious = () => {
        setCurrentIndex((prev: number) => (prev - 1 + projects.length) % projects.length)
        setProgress(0)
    }

    return (
        <section
            className="relative min-h-screen h-[100dvh] overflow-hidden bg-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute inset-0 z-0"
                >
                    <div className="relative h-full">
                        {currentProject.heroMediaType === 'video' && currentProject.featuredVideo ? (
                            <video
                                src={currentProject.featuredVideo}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                playsInline
                                preload="auto"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <SanityImage
                                aspectRatio="auto"
                                image={currentProject.featuredImage}
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        {currentProject.featuredImage ? <div className="absolute inset-0 bg-black/40" /> : null}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between px-4 py-6 md:p-16 z-10 pointer-events-none">
                <div className="flex-1" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-3 pointer-events-auto">
                    <motion.div
                        key={`content-${currentIndex}`}
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-2xl"
                    >
                        <h1 className="text-2xl sm:text-4xl md:text-4xl text-white leading-tight">
                            {currentProject.title.split(' ').map((word, i) => (
                                <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="text-base text-gray-300 font-light leading-relaxed">
                            {currentProject.excerpt.split(' ').map((word, i) => (
                                <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-right"
                    >
                        <div className="text-white text-lg mb-4">
                            {String(currentIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                        </div>
                        <div className="w-32 h-0.5 bg-white/30 relative">
                            <motion.div
                                className="h-full bg-white absolute left-0 top-0"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
                onClick={handlePrevious}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 z-20 pointer-events-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
                onClick={handleNext}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300 z-20 pointer-events-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 pointer-events-auto">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index)
                            setProgress(0)
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}