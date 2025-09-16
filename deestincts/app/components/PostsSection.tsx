'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Post } from '@/lib/types'
import { ArticleCard } from './article-card'

interface PostsSectionProps {
  posts: Post[]
}

export default function PostsSection({ posts }: PostsSectionProps) {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Thoughts, ideas, and perspectives on design, technology, and the creative process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 6).map((post, index) => (
            <ArticleCard key={index}
            title={post.title}
            excerpt={post.excerpt}
            author={`${post.author.firstName} ${post.author.lastName}`}
            content={post.content}
            coverImage={post.coverImage}
            authorImage={post.author.picture}
            date={post.date}
            slug={post.slug}
          />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/articles"
            className="inline-block px-8 py-3 bg-white text-black transition-colors duration-300 font-medium tracking-wide"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}