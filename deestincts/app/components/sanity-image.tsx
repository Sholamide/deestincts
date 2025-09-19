// "use client";

// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/utils";

// interface SanityImageProps {
//   image: any;
//   className?: string;
//   aspectRatio?: "square" | "4:3" | "16:9" | "3:2" | "auto";
//   alt?: string;
//   grayscale?: boolean
// }

// export default function SanityImage({
//   image,
//   className,
//   aspectRatio = "auto",
//   alt,
//   grayscale = false,
// }: SanityImageProps) {
//   if (!image) return null;

//   const imageAlt = alt || image.alt || "Deestincts Image";

//   const aspectRatioClass = getAspectRatioClass(aspectRatio);

//   return (
//     <div className={`relative overflow-hidden ${aspectRatioClass} ${aspectRatio === 'auto' ? 'h-full w-full' : ''}`}>
//       <Image
//         src={urlForImage(image)?.url() ?? ""}
//         alt={imageAlt}
//         fill 
//         quality={100}
//         placeholder="blur"
//         blurDataURL={urlForImage(image)?.width(20).height(20).quality(10).url() ?? ''}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//         className={`${grayscale ? "grayscale" : ""} object-cover contrast-110 brightness-90  ${className || ''}`}
//       />
//     </div>
//   );
// }

// // Helper function to get the appropriate aspect ratio class
// function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2" | "auto") {
//   switch (aspectRatio) {
//     case "square": return "aspect-square";
//     case "4:3": return "aspect-4/3";
//     case "16:9": return "aspect-video";
//     case "3:2": return "aspect-3/2";
//     case "auto": return "";
//     default: return "aspect-3/2";
//   }
// }

// "use client";

// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/utils";

// interface SanityImageProps {
//   image: any;
//   className?: string;
//   aspectRatio?: "square" | "4:3" | "16:9" | "3:2" | "auto";
//   alt?: string;
//   grayscale?: boolean;
//   priority?: boolean;
// }

// export default function SanityImage({
//   image,
//   className,
//   aspectRatio = "auto",
//   alt,
//   grayscale = false,
//   priority = false,
// }: SanityImageProps) {
//   if (!image) return null;

//   const imageAlt = alt || image.alt || "Deestincts Image";
//   const aspectRatioClass = getAspectRatioClass(aspectRatio);

//   // Build optimized image URLs for different screen sizes
//   const baseUrl = urlForImage(image);
//   if (!baseUrl) return null;

//   // For hero section, we want high quality images
//   const imageUrl = baseUrl
//     .width(1920)
//     .height(1080)
//     .quality(90)
//     .format('webp')
//     .url();

//   // Generate responsive srcSet for better quality control
//   const srcSet = [
//     `${baseUrl.width(640).height(360).quality(85).format('webp').url()} 640w`,
//     `${baseUrl.width(1024).height(576).quality(90).format('webp').url()} 1024w`,
//     `${baseUrl.width(1920).height(1080).quality(90).format('webp').url()} 1920w`,
//   ].join(', ');

//   // Better blur placeholder
//   const blurDataURL = baseUrl
//     .width(10)
//     .height(10)
//     .blur(50)
//     .quality(20)
//     .url();

//   return (
//     <div className={`relative overflow-hidden ${aspectRatioClass} ${aspectRatio === 'auto' ? 'h-full w-full' : ''}`}>
//       <Image
//         src={imageUrl}
//         srcSet={srcSet}
//         alt={imageAlt}
//         fill 
//         quality={90} // Reduced from 100 to avoid unnecessary file size
//         priority={priority}
//         placeholder="blur"
//         blurDataURL={blurDataURL}
//         sizes={
//           aspectRatio === 'auto' 
//             ? "(max-width: 768px) 100vw, 100vw" // Full viewport for hero images
//             : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//         }
//         className={`${grayscale ? "grayscale" : ""} object-cover ${className || ''}`}
//         style={{
//           objectPosition: 'center center', // Ensure proper centering
//         }}
//         onError={(e) => {
//           console.warn('Image failed to load:', imageUrl);
//         }}
//       />
//     </div>
//   );
// }

// // Helper function to get the appropriate aspect ratio class
// function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2" | "auto") {
//   switch (aspectRatio) {
//     case "square": return "aspect-square";
//     case "4:3": return "aspect-[4/3]"; // Fixed: was aspect-4/3
//     case "16:9": return "aspect-video";
//     case "3:2": return "aspect-[3/2]"; // Fixed: was aspect-3/2
//     case "auto": return "";
//     default: return "aspect-[3/2]";
//   }
// }
"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface SanityImageProps {
  image: any;
  className?: string;
  aspectRatio?: "square" | "4:3" | "16:9" | "3:2" | "auto";
  alt?: string;
  grayscale?: boolean;
  priority?: boolean;
}

export default function SanityImage({
  image,
  className,
  aspectRatio = "auto",
  alt,
  grayscale = false,
  priority = false,
}: SanityImageProps) {
  if (!image) return null;

  const imageAlt = alt || image.alt || "Deestincts Image";
  const aspectRatioClass = getAspectRatioClass(aspectRatio);

  // Build optimized image URL
  const baseUrl = urlForImage(image);
  if (!baseUrl) return null;
  
  // Build optimized image URL
  const imageUrl = baseUrl
    .width(1920)
    .height(1080)
    .quality(90)
    .format('webp')
    .url();

  // Better blur placeholder
  const blurDataURL = baseUrl
    .width(10)
    .height(10)
    .blur(50)
    .quality(20)
    .url();

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${aspectRatio === 'auto' ? 'h-full w-full' : ''}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill 
        quality={90}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes={
          aspectRatio === 'auto' 
            ? "(max-width: 768px) 100vw, 100vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        }
        className={`${grayscale ? "grayscale" : ""} object-cover ${className || ''}`}
        style={{
          objectPosition: 'center center',
        }}
        onError={(e) => {
          console.warn('Image failed to load:', imageUrl);
        }}
      />
    </div>
  );
}

// Helper function to get the appropriate aspect ratio class
function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2" | "auto") {
  switch (aspectRatio) {
    case "square": return "aspect-square";
    case "4:3": return "aspect-[4/3]"; // Fixed: was aspect-4/3
    case "16:9": return "aspect-video";
    case "3:2": return "aspect-[3/2]"; // Fixed: was aspect-3/2
    case "auto": return "";
    default: return "aspect-[3/2]";
  }
}