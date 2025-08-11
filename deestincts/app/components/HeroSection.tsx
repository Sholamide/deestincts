'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { Project } from '@/lib/types'
import SanityImage from './sanity-image'

interface HeroSectionProps {
    projects: Project[]
}

function FloatingOrb() {
    return (
        <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
            <meshBasicMaterial wireframe color="#ffffff" opacity={0.3} transparent />
        </Sphere>
    )
}

export default function HeroSection({ projects }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length)
            setProgress(0)
        }, 5000)

        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
        }, 100)

        return () => {
            clearInterval(interval)
            clearInterval(progressInterval)
        }
    }, [projects.length])

    if (!projects.length) return null

    const currentProject = projects[currentIndex]

    // Animation variants for text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Stagger words
                delayChildren: 0.5, // Delay before words start animating
            },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }
    return (
        <section className="relative min-h-screen h-[100dvh] overflow-hidden bg-black">
            {/* Three.js Background */}
            <div className="absolute inset-0 opacity-20">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <FloatingOrb />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="relative h-full">
                        {currentProject.heroMediaType === 'video' && currentProject.featuredVideo ? (
                            <video
                                src={currentProject.featuredVideo}
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
                        ) : (
                            <SanityImage
                                aspectRatio='auto'
                                image={currentProject.featuredImage}
                            />
                        )}
                        {currentProject.featuredImage ? (
                            <>

                                <div className="absolute inset-0 bg-black/40" />
                            </>
                        ) : null}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
                <div className="flex-1" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-">
                    {/* Project Info */}
                    <motion.div
                        key={`content-${currentIndex}`} // Key ensures re-animation on slide change
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-2xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-3 sm:mb-4 leading-tight">
                            {currentProject.title.split(' ').map((word, i) => (
                                <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                            {currentProject.excerpt.split(' ').map((word, i) => ( // Use excerpt here
                                <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>

                    {/* Counter and Progress */}
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

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </section >
    )
}
