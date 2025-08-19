"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, Clock, Crown } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Publication } from "@/lib/community-data"

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={publication.image || "/placeholder.svg"}
          alt={publication.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge variant="secondary" className="bg-[#C3122B]/20 text-[#C3122B]">
            {publication.category}
          </Badge>
          {publication.isPremium && (
            <Badge variant="outline" className="border-yellow-500/30 bg-yellow-500/20 text-yellow-400">
              <Crown className="mr-1 h-3 w-3" />
              Premium
            </Badge>
          )}
        </div>

        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#C3122B] transition-colors">
          {publication.title}
        </h3>

        <p className="mb-4 text-sm text-white/70 line-clamp-3">{publication.description}</p>

        <div className="mb-4 flex items-center justify-between text-xs text-white/60">
          <div>By {publication.author}</div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {publication.readTime}
          </div>
        </div>

        <div className="mb-4 text-xs text-white/50">
          {new Date(publication.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="flex gap-2">
          <Link href={`/community/publications/${publication.slug}`} className="flex-1">
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
              Read More
            </Button>
          </Link>
          {publication.downloadUrl && (
            <Button
              size="sm"
              className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white"
              onClick={() => window.open(publication.downloadUrl, "_blank")}
            >
              <Download className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
