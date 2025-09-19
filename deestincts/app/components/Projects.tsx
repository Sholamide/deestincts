'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SanityImage from './sanity-image'

interface ProjectsSectionProps {
  projects: any[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            A curated collection of our most impactful projects, each crafted with precision and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-6">
                  {project.heroMediaType === "video" && project.featuredVideo ? (
                    <video
                      src={project.featuredVideo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      playsInline
                      controls={false}
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <SanityImage
                      image={project.featuredImage}
                      aspectRatio="auto"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 transition-colors duration-300" />
                </div>
                <motion.h3
                  className="text-xl  text-white mb-2 group-hover:text-gray-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
