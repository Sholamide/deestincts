import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { postPagesSlugs, postQuery } from "@/sanity/lib/queries";
import { PageOnboarding } from "@/app/components/Onboarding";
import { Calendar, Clock } from "lucide-react";
import { urlForImage } from "@/sanity/lib/utils";
import Head from "next/head";
import { calculateReadTime, getSmartDateFormat } from "@/lib/utils";
import SanityImage from "@/app/components/sanity-image";

type Props = {
    params: Promise<{ slug: string }>;
};


interface MediaItem {
    type: "image" | "video";
    data: any; // Replace with specific Sanity schema types if available
}


/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
    const { data } = await sanityFetch({
        query: postPagesSlugs,
        perspective: "published",
        stega: false,
    });
    return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { data: post } = await sanityFetch<any>({
        query: postQuery,
        params,
        stega: false,
    });

    return {
        title: post?.title || "Post",
        description: post?.excerpt || "Post description",
    } satisfies Metadata;
}


export default async function Page(props: Props) {
    const params = await props.params;

    const { data: post } = await sanityFetch<any>({
        query: postQuery,
        params,
    });
    console.log("Post", post)
    if (!post?._id) {
        return (
            <div className="py-40">
                <PageOnboarding />
            </div>
        );
    }

    // Compute imageUrl without useMemo
    let imageUrl = "/placeholder.svg?height=600&width=800";
    if (post.coverImage) {
        if (typeof post.coverImage === "string") {
            imageUrl = post.coverImage;
        } else {
            const builder = urlForImage(post.coverImage);
            if (builder) imageUrl = builder.url();
        }
    }

    const contentText = post.content[0]?.children[0]?.text || post.excerpt;


    return (
        <article className="min-h-screen max-w-5xl mx-auto py-20 md:py-28 bg-black">
            <Head>
                <title>{post.title}</title>
            </Head>
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-white mb-8">
                    <div className="flex items-center text-gray-400 gap-2">
                        <Calendar className="w-4 h-4" />
                        <time>{getSmartDateFormat(post.date)}</time>
                    </div>
                    <div className="flex items-center text-gray-400 gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{calculateReadTime(contentText || '')}</span>
                    </div>
                </div>

                {/* Author Information */}
                <div className="flex items-center gap-4 p-6 rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                        <SanityImage
                            image={post.author.picture}
                            alt={post.author.firstName}
                            aspectRatio="auto"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-white">
                            {post.author.firstName} {post.author.lastName}
                        </p>
                        <p className="text-sm text-white">Author</p>
                    </div>
                </div>
            </header>
            <div className="mb-12">
                <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300">
                    <SanityImage
                        image={post.coverImage}
                        alt={post.title}
                        aspectRatio="auto"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="prose prose-lg prose-gray max-w-none">
                <div className="bg-black rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="text-gray-400 leading-relaxed space-y-6">
                        <p className="text-xl text-white mb-8 font-medium italic border-l-4 border-gray-700 pl-6">
                            {post.excerpt}
                        </p>

                        <div className="text-base leading-8">
                            {contentText}
                        </div>
                        {/* 
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <h2 className="text-2xl font-bold text-white mb-4">Key Design Principles</h2>
                            <div className="rounded-xl p-6 border-l-4 border-gray-800">
                                <p className="text-gray-700">
                                    Visual design patterns transcend mediums and eras. Whether you're designing a website, crafting a poster, or planning an interior space, these fundamental patterns provide the structure and harmony that make designs both beautiful and functional.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <footer className="mt-16 pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold overflow-hidden">
                            <SanityImage
                                image={post.author.picture}
                                alt={post.author.firstName}
                                aspectRatio="auto"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-medium text-white">
                                {post.author.firstName} {post.author.lastName}
                            </p>
                            <p className="text-sm text-gray-400">
                                Published {getSmartDateFormat(post.date)}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </article>
    );
}
