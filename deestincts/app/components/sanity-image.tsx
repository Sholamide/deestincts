"use client";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/sanity/lib/utils";

interface SanityImageProps {
  image: any;
  className?: string;
  aspectRatio?: "square" | "4:3" | "16:9" | "3:2";
}

export default function SanityImage({
  image,
  className,
  aspectRatio = "3:2",
}: SanityImageProps) {
  if (!image) return null;

  const { width: originalWidth, height: originalHeight } =
    getImageDimensions(image);
  const alt = image.alt || "Image without alt text";

  const aspectRatioClass = getAspectRatioClass(aspectRatio);

  return (
    <div className={`overflow-hidden ${aspectRatioClass}`}>
    <Image
      src={urlForImage(image)?.url() ?? ''}
      alt={alt}
      width={originalWidth}
      height={originalHeight}
      placeholder="blur"
      blurDataURL={urlForImage(image)?.url() ?? ''}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      className={`w-full h-full object-cover ${className || ''}`}
    />
  </div>
  );
}


// Helper function to get the appropriate aspect ratio class
function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2") {
  switch (aspectRatio) {
    case "square": return "aspect-square";
    case "4:3": return "aspect-4/3";
    case "16:9": return "aspect-video";
    case "3:2": return "aspect-3/2";
    default: return "aspect-3/2";
  }
}


// 'use client';
// import Image from 'next/image';
// import { getImageDimensions } from '@sanity/asset-utils';
// import { urlForImage } from '@/sanity/lib/utils';

// interface SanityImageProps {
//   image: any;
//   className?: string;
//   aspectRatio?: "square" | "4:3" | "16:9" | "3:2";
//   fill?: boolean;
// }

// export default function SanityImage({
//   image,
//   className,
//   aspectRatio = "3:2",
//   fill = false
// }: SanityImageProps) {
//   if (!image?.asset) return null;

//   const { width: originalWidth, height: originalHeight } = getImageDimensions(image);
//   const alt = image.alt || 'Image without alt text';

//   // Use fill mode for consistent container sizing
//   if (fill) {
//     return (
//       <div className={`relative ${getAspectRatioClass(aspectRatio)}`}>
//         <Image
//           src={urlForImage(image)?.url() ?? ''}
//           alt={alt}
//           fill
//           placeholder="blur"
//           blurDataURL={urlForImage(image)?.url() ?? ''}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//           className={`object-cover ${className || ''}`}
//         />
//       </div>
//     );
//   }

//   // Non-fill mode (original implementation with aspect ratio class)
//   return (
//     <div className={`overflow-hidden ${getAspectRatioClass(aspectRatio)}`}>
//       <Image
//         src={urlForImage(image)?.url() ?? ''}
//         alt={alt}
//         width={originalWidth}
//         height={originalHeight}
//         placeholder="blur"
//         blurDataURL={urlForImage(image)?.url() ?? ''}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
//         className={`object-cover w-full h-full ${className || ''}`}
//       />
//     </div>
//   );
// }

// // Helper function to get the appropriate aspect ratio class
// function getAspectRatioClass(aspectRatio: "square" | "4:3" | "16:9" | "3:2") {
//   switch (aspectRatio) {
//     case "square": return "aspect-square";
//     case "4:3": return "aspect-4/3";
//     case "16:9": return "aspect-video";
//     case "3:2": return "aspect-3/2";
//     default: return "aspect-3/2";
//   }
// }
