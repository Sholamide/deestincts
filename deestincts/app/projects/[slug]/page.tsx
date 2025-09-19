import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { getProjectQuery, pagesSlugs } from "@/sanity/lib/queries";
import { PageOnboarding } from "@/app/components/Onboarding";
import { SendHorizontal, Tag, User } from "lucide-react";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import CustomPortableText from "@/app/components/PortableText";
import { type PortableTextBlock } from "next-sanity";
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
    query: pagesSlugs,
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
  const { data: project } = await sanityFetch<any>({
    query: getProjectQuery,
    params,
    stega: false,
  });

  return {
    title: project?.title || "Project",
    description: project?.excerpt || "Project description",
  } satisfies Metadata;
}

/**
 * Shuffle an array randomly
 */
function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function Page(props: Props) {
  const params = await props.params;

  const { data: project } = await sanityFetch<any>({
    query: getProjectQuery,
    params,
  });

  if (!project?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  // Compute imageUrl without useMemo
  let imageUrl = "/placeholder.svg?height=600&width=800";
  if (project.featuredImage) {
    if (typeof project.featuredImage === "string") {
      imageUrl = project.featuredImage;
    } else {
      const builder = urlForImage(project.featuredImage);
      if (builder) imageUrl = builder.url();
    }
  }

  // Combine and shuffle images and videos
  const allMedia: MediaItem[] = shuffle([
    ...(project.projectImages ?? []).map((img: any) => ({ type: "image" as const, data: img })),
    ...(project.projectVideos ?? []).map((vid: any) => ({ type: "video" as const, data: vid })),
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src={imageUrl}
            alt={project.title || "Featured image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </section>

        {/* Project Details */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="leading-relaxed">
                    {project.description?.length && (
                      <CustomPortableText
                        className="prose-p:text-gray-800"
                        value={project.description as PortableTextBlock[]}
                        enableExpandable={true}
                        maxLength={300}
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Client</span>
                          {project.client ? <Link href={project.client.url} className="mb-4 text-base  text-gray-500 underline block">
                            {project.client.name}
                          </Link> : null}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <SendHorizontal className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Description</span>
                          <p className="text-gray-500">{project.excerpt || "N/A"}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Tag className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Category</span>
                          <p className="text-gray-500">{project.projectType?.join(", ") || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.projectVideos &&
                project.projectVideos.map((video: any, index: number) => {
                  return (
                    <video key={index}
                      src={video.videoUrl}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      playsInline
                      controls={false}
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                })}
              {project.projectImages && project.projectImages.map((image: any, index: number) => {
                return (
                  <div key={index}>
                    <Image
                      src={image.url}
                      alt={image.alt} width={1200} height={800}
                      className="rounded-xl"
                    />
                  </div>
                )
              })}
            </div>
            {allMedia.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No media found
                </h3>
                <p className="text-gray-600">
                  Project images and videos will appear here once uploaded.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
