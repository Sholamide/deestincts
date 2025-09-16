
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SanityImage from "./sanity-image"
import { calculateReadTime, getSmartDateFormat } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  author: any
  content: any
  coverImage: any
  authorImage?: any
  date: string
  image: any
  slug?: string
}

export function BlogCard({
  title,
  excerpt,
  category,
  author,
  coverImage,
  content,
  authorImage,
  date,
  slug = "#",
}: BlogCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#f5f5f5]/50">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <SanityImage
          image={coverImage}
          alt={title}
          aspectRatio="auto"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 inline-block rounded-full bg-[#f5f5f5]/90 px-3 py-1 text-xs font-medium">{category}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
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
              {getSmartDateFormat(date)} · {calculateReadTime(content[0].children.text || '')}
            </p>
          </div>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#8c8c8c] hover:text-[#8c8c8c]/80 transition-colors"
        >
          Read Article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
