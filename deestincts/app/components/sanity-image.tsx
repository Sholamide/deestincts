"use client";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/sanity/lib/utils";

interface SanityImageProps {
  image: any;
  className?: string;
  aspectRatio?: "square" | "4:3" | "16:9" | "3:2" | "auto";
  alt?: string;
  grayscale?: boolean
}

export default function SanityImage({
  image,
  className,
  aspectRatio = "auto",
  alt,
  grayscale = false,
}: SanityImageProps) {
  if (!image) return null;

  // const { width: originalWidth, height: originalHeight } =
  //   getImageDimensions(image);
  
  const imageAlt = alt || image.alt || "Image without alt text";

  const aspectRatioClass = getAspectRatioClass(aspectRatio);

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${aspectRatio === 'auto' ? 'h-full w-full' : ''}`}>
      <Image
        src={urlForImage(image)?.url() ?? ''}
        alt={imageAlt}
        fill
        placeholder="blur"
        blurDataURL={urlForImage(image)?.width(20).height(20).quality(10).url() ?? ''}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        className={`${grayscale ? "grayscale" : ""} object-cover contrast-110 brightness-90  ${className || ''}`}
      />
    </div>
  );
}


// Helper function to get the appropriate aspect ratio class
function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2" | "auto") {
  switch (aspectRatio) {
    case "square": return "aspect-square";
    case "4:3": return "aspect-4/3";
    case "16:9": return "aspect-video";
    case "3:2": return "aspect-3/2";
    case "auto": return "";
    default: return "aspect-3/2";
  }
}