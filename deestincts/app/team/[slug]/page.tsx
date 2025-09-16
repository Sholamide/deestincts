import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { getTeammemberQuery, postPagesSlugs, postQuery, teammemberSlugs } from "@/sanity/lib/queries";
import { PageOnboarding } from "@/app/components/Onboarding";
import { Calendar, Clock, X } from "lucide-react";
import Head from "next/head";
import { calculateReadTime, getSmartDateFormat } from "@/lib/utils";
import SanityImage from "@/app/components/sanity-image";
import CustomPortableText from "@/app/components/PortableText";
import { type PortableTextBlock } from "next-sanity";
import { Button } from "@/app/components/ui/button";
import BackButton from "@/app/components/back";

type Props = {
    params: Promise<{ slug: string }>;
};



/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
    const { data } = await sanityFetch({
        query: teammemberSlugs,
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
    const { data: member } = await sanityFetch<any>({
        query: getTeammemberQuery,
        params,
        stega: false,
    });

    return {
        title: member?.name || "Post",
        description: member?.role || "Post description",
    } satisfies Metadata;
}


export default async function Page(props: Props) {
    const params = await props.params;

    const { data: member } = await sanityFetch<any>({
        query: getTeammemberQuery,
        params,
    });
    if (!member?._id) {
        return (
            <div className="py-40">
                <PageOnboarding />
            </div>
        );
    }





    return (
        <article className="min-h-screen py-28 bg-black text-white">
            <Head>
                <title>{member.name}</title>
            </Head>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
                <BackButton />
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Header */}
                        <header className="space-y-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                {member.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 font-medium">
                                {member.role}
                            </p>
                        </header>

                        {/* Bio Content */}
                        <div className="text-gray-300 leading-relaxed text-base md:text-lg">
                            <p>
                                {member.bio && (
                                   <CustomPortableText
                                   className="text-gray-400"
                                   value={member.bio as PortableTextBlock[]}
                               />
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800">
                                <SanityImage
                                    image={member.image}
                                    alt={member.name}
                                    aspectRatio="auto"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Optional decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}