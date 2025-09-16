
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SanityImage from "./sanity-image"
import { calculateReadTime, getSmartDateFormat } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt: string
  author: any
  content: any
  coverImage: any
  authorImage?: any
  date: string
  slug?: string
}

export function BlogCard({
  title,
  excerpt,
  author,
  coverImage,
  content,
  authorImage,
  date,
  slug,
}: BlogCardProps) {
  return (
    <div className="group rounded-xl border border-gray-800 overflow-hidden transition-all duration-300">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <SanityImage
          image={coverImage}
          alt={title}
          aspectRatio="auto"
          className="h-40 w-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white mb-3 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="mb-4 text-sm text-white/70">{excerpt}</p>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <SanityImage
              image={authorImage}
              alt={author}
              aspectRatio="auto"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-white font-medium">{author}</p>
            <p className="text-xs text-white/50">
              {getSmartDateFormat(date)} · {calculateReadTime(content || '')}
            </p>
          </div>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#8c8c8c] group-hover:translate-x-2 transition-transform duration-300 hover:text-[#8c8c8c]/80 transition-colors"
        >
          Read Article
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
