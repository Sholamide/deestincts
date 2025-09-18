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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-60" />
          <Image
            src={imageUrl}
            alt={project.title || "Featured image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        <section className="py-10 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            {/* Mobile: Single Column */}
            <div className="block lg:hidden space-y-2">
              {allMedia.map((media, index) => {
                const isImage = media.type === "image";
                const title = isImage
                  ? media.data.alt?.split(".")[0] || `Image ${index + 1}`
                  : `Video ${index + 1}`;
                let mediaUrl = isImage ? media.data.url : media.data.videoUrl;

                if (isImage && !mediaUrl) {
                  const builder = urlForImage(media.data);
                  mediaUrl = builder?.url();
                }

                if (!mediaUrl) return null;

                return (
                  <div key={index} className="relative group">
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      {isImage ? (
                        <Image
                          src={mediaUrl}
                          alt={media.data.alt || title}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover rounded-md transition-all duration-700"
                          priority={index < 3}
                        />
                      ) : (
                        <video
                          src={mediaUrl}
                          className="w-full h-full object-cover rounded-md transition-transform duration-500"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                          preload="auto"
                          style={{ aspectRatio: '16/9' }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Large Devices: Masonry Grid */}
            <div className="hidden lg:block">
              <div className="columns-1 lg:columns-2 xl:columns-3 gap-4 space-y-2">
                {allMedia.map((media, index) => {
                  const isImage = media.type === "image";
                  const title = isImage
                    ? media.data.alt?.split(".")[0] || `Image ${index + 1}`
                    : `Video ${index + 1}`;
                  let mediaUrl = isImage ? media.data.url : media.data.videoUrl;

                  if (isImage && !mediaUrl) {
                    const builder = urlForImage(media.data);
                    mediaUrl = builder?.url();
                  }

                  if (!mediaUrl) return null;

                  const isLarge = index % 5 === 0;
                  const isMedium = index % 3 === 0;

                  return (
                    <div
                      key={index}
                      className={`
                      relative group break-inside-avoid mb-8
                      ${isLarge ? 'lg:mb-12' : isMedium ? 'lg:mb-10' : 'lg:mb-8'}
                    `}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        {isImage ? (
                          <Image
                            src={mediaUrl}
                            alt={media.data.alt || title}
                            width={1200}
                            height={800}
                            className={`
                            w-full h-auto object-cover rounded-2xl  transition-all duration-700
                            ${isLarge ? 'filter contrast-110 saturate-110' : ''}
                          `}
                            priority={index < 3}
                          />
                        ) : (
                          <video
                            src={mediaUrl}
                            className={`
                            w-full h-auto object-cover rounded-2xl 
                            transition-transform duration-500
                            ${isLarge ? 'filter contrast-110 saturate-110' : ''}
                          `}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            preload="auto"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* No media fallback */}
            {allMedia.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No media found</h3>
                <p className="text-gray-600">Project images and videos will appear here once uploaded.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
