"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { urlForImage } from "@/sanity/lib/utils"
import type { Image as SanityImage } from "@sanity/types"
import { useMemo } from "react"

interface ProjectCardProps {
  title: string
  excerpt: string
  client?: string
  projectType: string[]
  featuredImage: string | SanityImage
  slug?: string
  heroMediaType?: "image" | "video"
  featuredVideo?: any
}

export function ProjectCard({
  title,
  excerpt,
  client,
  projectType,
  featuredImage,
  slug = "#",
  heroMediaType = "image",
  featuredVideo,
}: ProjectCardProps) {
  const imageUrl = useMemo(() => {
    if (typeof featuredImage === "string") {
      return featuredImage
    }

    const builder = urlForImage(featuredImage)
    return builder?.url() ?? "/placeholder.svg?height=600&width=800" // Fallback placeholder
  }, [featuredImage])

  const displayCategory = projectType && projectType.length > 0 ? projectType[0] : "Uncategorized"

  return (
    // <Link href={`/projects/${slug}`} className="group block">
    <Link href={`/projects`} className="group block">
      <div className="relative w-full aspect-[4/3] overflow-hidden transition-all duration-300 grid grid-rows-[3fr_1fr] rounded-2xl">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {heroMediaType === "video" && featuredVideo ? (
            <video
              src={featuredVideo}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
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
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform rounded-2xl duration-500 group-hover:scale-105"
              priority
            />
          )}
        </div>

        <div className="p-4 flex flex-col justify-center">
          <div className="mb-2 inline-block rounded-full  px-3 py-1 text-xs font-medium">
            {displayCategory}
          </div>
          <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
          <p className="mb-2 text-sm text-white/90 line-clamp-2">{excerpt}</p> {/* line-clamp for consistent height */}
          {client && <p className="mb-4 text-xs text-white/70">Client: {client}</p>}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            View Project <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}