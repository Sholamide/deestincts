"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { urlForImage } from "@/sanity/lib/utils";
import type { Image as SanityImage } from "@sanity/types";
import { useMemo } from "react";

interface ProjectCardProps {
  title: string;
  excerpt: string;
  client?: { name: string };
  projectType: string[];
  featuredImage: string | SanityImage;
  slug?: string;
  heroMediaType?: "image" | "video";
  featuredVideo?: string;
}

export function ProjectCard({
  title,
  excerpt,
  client,
  projectType,
  featuredImage,
  slug,
  heroMediaType = "image",
  featuredVideo,
}: ProjectCardProps) {
  const imageUrl = useMemo(() => {
    if (typeof featuredImage === "string") return featuredImage;
    return urlForImage(featuredImage)?.url() ?? "/placeholder.svg?height=600&width=800";
  }, [featuredImage]);

  const displayCategory =
    projectType && projectType.length > 0 ? projectType[0] : "Uncategorized";

  return (
    <Link href={`/projects/${slug ?? ""}`} className="group block w-full">
      <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-sm transition-all duration-300 flex flex-col">
        {/* Media Section */}
        <div className="relative overflow-hidden  aspect-[4/3]">
          {heroMediaType === "video" && featuredVideo ? (
              <video
                src={featuredVideo}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2 bg-zinc-950 text-white">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium w-fit">
            {displayCategory}
          </span>

          <h3 className="text-lg sm:text-xl font-semibold leading-tight">
            {title}
          </h3>

          <p className="text-sm text-white/80 line-clamp-2">{excerpt}</p>

          {client?.name && (
            <p className="text-xs text-white/60">Client: {client.name}</p>
          )}

          <span className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#C3122B] transition-colors">
            View Project <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
