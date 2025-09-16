"use client"

import { useState, useEffect } from 'react';
import { getPosts } from "@/lib/sanity";
import { ArticleCard } from "../components/article-card";
import { Button } from "../components/ui/button";

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  author: {
    firstName: string;
    lastName: string;
    picture: string;
  };
  content: any;
  coverImage: string;
  date: string;
  slug: string;
}

export default function ArticlesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = 6; // Adjust as needed

  const fetchPosts = async (pageNum: number) => {
    setIsLoading(true);
    try {
      const newPosts = await getPosts({ limit: postsPerPage, offset: (pageNum - 1) * postsPerPage });
      if (newPosts.length < postsPerPage) {
        setHasMore(false);
      }
      setPosts((prevPosts:any) =>
        pageNum === 1 ? newPosts : [...prevPosts, ...newPosts]
      );
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch initial posts on mount
  useEffect(() => {
    fetchPosts(1);
  }, []);

  // Handle load more button click
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

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
              {posts.map((post: Post) => (
                <div key={post._id} className="mb-8 break-inside-avoid-column">
                  <ArticleCard
                    title={post.title}
                    excerpt={post.excerpt}
                    author={`${post.author.firstName} ${post.author.lastName}`}
                    content={post.content}
                    coverImage={post.coverImage}
                    authorImage={post.author.picture}
                    date={post.date}
                    slug={post.slug}
                  />
                </div>
              ))}
            </div>
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="bg-transparent border border-[#ffffff] text-white hover:bg-[#f5f5f5] hover:text-[#1d1b1b]"
                >
                  {isLoading ? 'Loading...' : 'Load More Blog Posts'}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

{/* <section className="py-16 md:py-24">
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
        </section> */}