import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

export function BlogCard({ title, excerpt, category, author, date, readTime, image }: BlogCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#C3122B]/50">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium">{category}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-white/70">{excerpt}</p>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt={author}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-white/50">
              {date} · {readTime}
            </p>
          </div>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#C3122B] hover:text-[#C3122B]/80 transition-colors"
        >
          Read Article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
