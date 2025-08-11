// import Image from "next/image"
// import Link from "next/link"
// import { Search, ArrowRight } from "lucide-react"
// import { Button } from "../components/ui/button"
// import { BlogCard } from "../components/blog-card"
// import { Input } from "../components/ui/input"

// export default function BlogPage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-[#161519] text-white">
//       <main className="flex-1">
//         <section className="relative py-20 md:py-28">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-[#161519] opacity-90"></div>
//             <div className="absolute left-0 top-0 h-full w-1/3 bg-[#C3122B] opacity-10 blur-3xl"></div>
//           </div>
//           <div className="container relative z-10 px-4 md:px-6">
//             <div className="mx-auto max-w-4xl text-center">
//               <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                 Our <span className="text-[#C3122B]">Blog</span>
//               </h1>
//               <p className="mb-8 text-xl text-white/70">
//                 Insights, trends, and thoughts on design, technology, and creative processes from our team.
//               </p>
//               <div className="mx-auto max-w-md">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
//                   <Input
//                     type="search"
//                     placeholder="Search articles..."
//                     className="pl-10 border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="mb-12">
//               <h2 className="text-2xl font-bold">Featured Articles</h2>
//             </div>
//             <div className="grid gap-8 md:grid-cols-2">
//               <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#C3122B]/50">
//                 <div className="aspect-[16/9] w-full overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=500&width=900"
//                     alt="Featured blog post"
//                     width={900}
//                     height={500}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium">
//                     Design Trends
//                   </div>
//                   <h3 className="mb-2 text-2xl font-bold">The Evolution of Web Design: Trends to Watch in 2023</h3>
//                   <p className="mb-4 text-white/70">
//                     Exploring the latest design trends that are shaping the digital landscape and how to implement them
//                     in your projects.
//                   </p>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="h-8 w-8 overflow-hidden rounded-full">
//                       <Image
//                         src="/placeholder.svg?height=100&width=100"
//                         alt="Author"
//                         width={100}
//                         height={100}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Alex Morgan</p>
//                       <p className="text-xs text-white/50">May 15, 2023 · 8 min read</p>
//                     </div>
//                   </div>
//                   <Link
//                     href="#"
//                     className="inline-flex items-center gap-1 text-sm font-medium text-[#C3122B] hover:text-[#C3122B]/80 transition-colors"
//                   >
//                     Read Article <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#C3122B]/50">
//                 <div className="aspect-[16/9] w-full overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=500&width=900"
//                     alt="Featured blog post"
//                     width={900}
//                     height={500}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium">
//                     UX Design
//                   </div>
//                   <h3 className="mb-2 text-2xl font-bold">Designing for Accessibility: A Comprehensive Guide</h3>
//                   <p className="mb-4 text-white/70">
//                     How to create inclusive digital experiences that work for everyone, regardless of ability or
//                     circumstance.
//                   </p>
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="h-8 w-8 overflow-hidden rounded-full">
//                       <Image
//                         src="/placeholder.svg?height=100&width=100"
//                         alt="Author"
//                         width={100}
//                         height={100}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Samantha Chen</p>
//                       <p className="text-xs text-white/50">April 28, 2023 · 10 min read</p>
//                     </div>
//                   </div>
//                   <Link
//                     href="#"
//                     className="inline-flex items-center gap-1 text-sm font-medium text-[#C3122B] hover:text-[#C3122B]/80 transition-colors"
//                   >
//                     Read Article <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 md:py-24 bg-black/30">
//           <div className="container px-4 md:px-6">
//             <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
//               <h2 className="text-2xl font-bold">Latest Articles</h2>
//               <div className="mt-4 flex gap-4 md:mt-0">
//                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
//                   All
//                 </Button>
//                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
//                   Design
//                 </Button>
//                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
//                   Development
//                 </Button>
//                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
//                   Business
//                 </Button>
//               </div>
//             </div>
//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               <BlogCard
//                 title="The Psychology of Color in Web Design"
//                 excerpt="Understanding how color choices affect user perception and behavior on your website."
//                 category="Design"
//                 author="Alex Morgan"
//                 date="May 10, 2023"
//                 readTime="6 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//               <BlogCard
//                 title="Optimizing Website Performance for Core Web Vitals"
//                 excerpt="Practical tips to improve your site's loading speed, interactivity, and visual stability."
//                 category="Development"
//                 author="David Wilson"
//                 date="May 5, 2023"
//                 readTime="7 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//               <BlogCard
//                 title="Creating Effective User Personas for Your Projects"
//                 excerpt="How to develop and utilize user personas to guide your design decisions."
//                 category="UX Design"
//                 author="Samantha Chen"
//                 date="April 28, 2023"
//                 readTime="5 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//               <BlogCard
//                 title="The Rise of Motion Design in User Interfaces"
//                 excerpt="Exploring how animation and motion enhance user experience and engagement."
//                 category="Design"
//                 author="Alex Morgan"
//                 date="April 20, 2023"
//                 readTime="8 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//               <BlogCard
//                 title="Building Scalable Design Systems"
//                 excerpt="Best practices for creating design systems that grow with your product."
//                 category="Design Systems"
//                 author="Olivia Martinez"
//                 date="April 15, 2023"
//                 readTime="9 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//               <BlogCard
//                 title="The Business Value of Good Design"
//                 excerpt="How investing in quality design translates to tangible business outcomes."
//                 category="Business"
//                 author="David Wilson"
//                 date="April 8, 2023"
//                 readTime="6 min read"
//                 image="/placeholder.svg?height=400&width=600"
//               />
//             </div>
//             <div className="mt-12 flex justify-center">
//               <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
//                 Load More Articles
//               </Button>
//             </div>
//           </div>
//         </section>

//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
//               <div className="text-center">
//                 <h2 className="mb-4 text-2xl font-bold">Subscribe to Our Newsletter</h2>
//                 <p className="mb-6 text-white/70">
//                   Get the latest design insights, trends, and tips delivered straight to your inbox.
//                 </p>
//                 <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
//                   />
//                   <Button className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white">Subscribe</Button>
//                 </div>
//                 <p className="mt-4 text-xs text-white/50">We respect your privacy. Unsubscribe at any time.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

import { Search } from "lucide-react"
import { getPosts } from "@/lib/sanity"
import { Input } from "../components/ui/input"
import { BlogCard } from "../components/blog-card"
import { Button } from "../components/ui/button"

export default async function BlogPage() {
  const allPosts = await getPosts() // Fetch all blog posts

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#f5f3f3] opacity-10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-4xl mt-12">
              <h1 className="mb-8 text-3xl lg:text-4xl text-white/70">
                Explore what&apos;s new in our universe. Dive into stories, insights and behind-the-scenes perspectives on our latest work.
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
            </div>
            {/* Masonry Grid Implementation */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
              {allPosts.map((post: any) => (
                <div key={post._id} className="mb-8 break-inside-avoid-column">
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    author={post.author.name}
                    authorImage={post.author.image}
                    date={new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    readTime={post.readTime}
                    image={post.mainImage}
                    slug={post.slug.current}
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button className="bg-transparent border border-[#ffffff] text-white hover:bg-[#f5f5f5] hover:text-[#1d1b1b]">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-center">
                <p className="mb-6 text-white/70">
                  Get the latest design insights, trends, and tips delivered straight to your inbox.
                </p>
                <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
                  />
                  <Button className="bg-[#ffffff] hover:bg-[#f5f5f5]/90 text-black">Subscribe</Button>
                </div>
                <p className="mt-4 text-xs text-white/50">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
