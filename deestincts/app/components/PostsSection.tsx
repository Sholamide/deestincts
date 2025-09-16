// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { Post } from '@/lib/types'
// import SanityImage from './sanity-image'

// interface PostsSectionProps {
//   posts: Post[]
// }

// export default function PostsSection({ posts }: PostsSectionProps) {
//   return (
//     <section className="py-10 bg-black">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl  text-white mb-6">
//             Latest Insights
//           </h2>
//           <p className="text-lg text-white max-w-2xl mx-auto">
//             Thoughts, ideas, and perspectives on design, technology, and the creative process.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {posts.slice(0, 6).map((post, index) => (
//             <motion.article
//               key={post.slug}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* <Link href={`/blog/${post.slug}`}> */}
//               <Link href={`/blog`}>
//                 <div className="relative overflow-hidden aspect-[4/3]">
//                   <SanityImage
//                     image={post.coverImage}
//                     aspectRatio="auto"
//                     className="object-contain transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <time className="text-xs uppercase tracking-wider text-gray-500 mb-3 block">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric'
//                     })}
//                   </time>
//                   <h3 className="text-xl  text-white mb-3 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
//                     {post.title}
//                   </h3>
//                   <p className="text-white text-sm leading-relaxed mb-3 line-clamp-3">
//                     {post.excerpt}
//                   </p>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="h-8 w-8 overflow-hidden rounded-full">
//                       <SanityImage
//                         image={post.author.picture}
//                         alt={post.author.firstName}
//                         aspectRatio="auto"
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-sm text-white font-medium">{post.author.firstName}</p>
//                     </div>
//                   </div>
//                   <motion.div
//                     className="mt-4 text-white text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
//                   >
//                     Read More
//                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </Link>
//             </motion.article>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <Link
//             href="/blog"
//             className="inline-block px-8 py-3 bg-white text-black transition-colors duration-300 font-medium tracking-wide"
//           >
//             View All Posts
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Post } from '@/lib/types'
import SanityImage from './sanity-image'
import { calculateReadTime, getSmartDateFormat } from '@/lib/utils'
import { BlogCard } from './blog-card'

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
            <BlogCard key={index}
            title={post.title}
            excerpt={post.excerpt}
            author={`${post.author.firstName} ${post.author.lastName}`}
            content={post.content}
            coverImage={post.coverImage}
            authorImage={post.author.picture}
            date={post.date}
            // date={new Date(post.date).toLocaleDateString("en-US", {
            //   year: "numeric",
            //   month: "long",
            //   day: "numeric",
            // })}
            slug={post.slug}
          />
            // <motion.article
            //   key={post.slug}
            //   initial={{ opacity: 0, y: 30 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6, delay: index * 0.1 }}
            //   className="group border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-2xl"
            // >
            //   <Link href={`/blog/${post.slug}`}>
            //     <div className="relative overflow-hidden aspect-[4/3]">
            //       <SanityImage
            //         image={post.coverImage}
            //         aspectRatio="auto"
            //         className="object-contain transition-transform duration-500 group-hover:scale-105"
            //       />
            //     </div>
            //     <div className="p-6">
            //       <div className="flex items-center justify-between mb-3">
            //         <time className="text-xs tracking-wider text-white">
            //           {getSmartDateFormat(post.date)}
            //         </time>
            //         <span className="text-xs uppercase tracking-wider text-gray-500">
            //           {calculateReadTime( post.content || '')}
            //         </span>
            //       </div>
            //       <h3 className="text-xl text-white mb-3 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
            //         {post.title}
            //       </h3>
            //       <p className="text-white text-sm leading-relaxed mb-3 line-clamp-3">
            //         {post.excerpt}
            //       </p>
            //       <div className="mb-4 flex items-center gap-2">
            //         <div className="h-8 w-8 overflow-hidden rounded-full">
            //           <SanityImage
            //             image={post.author.picture}
            //             alt={post.author.firstName}
            //             aspectRatio="auto"
            //             className="h-full w-full object-cover"
            //           />
            //         </div>
            //         <div>
            //           <p className="text-sm text-white font-medium">{post.author.firstName}</p>
            //         </div>
            //       </div>
            //       <motion.div
            //         className="mt-4 text-white text-sm font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
            //       >
            //         Read Article
            //         <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            //         </svg>
            //       </motion.div>
            //     </div>
            //   </Link>
            // </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-white text-black transition-colors duration-300 font-medium tracking-wide"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}