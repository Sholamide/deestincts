// import Link from "next/link";
// import SanityImage from "./sanity-image";
// import { calculateReadTime, getSmartDateFormat } from "@/lib/utils";

// interface MemberCardProps {
//   bio: any;
//   image: string;
//   name: any;
//   role: string;
//   slug?: string;
// }

// export function MemberCard({
//   bio,
//   image,
//   name,
//   role,
//   slug
// }: MemberCardProps) {
//   return (
//     <Link href={`/team/${slug}`}>
//       <div
//         className="group rounded-xl border border-gray-800 overflow-hidden transition-all duration-300"
//         style={{ height: "450px" }} // Fixed total height
//       >
//         <div
//           className="relative aspect-[4/5] overflow-hidden"
//         >
//           <SanityImage
//             image={image}
//             alt={name}
//             aspectRatio="auto"
//             className={`object-cover group-hover:scale-105 group-hover:rotate-y-3 transition-transform duration-700`}
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-semibold text-white group-hover:underline transition-all duration-300 decoration-2 decoration-indigo-500 underline-offset-2">
//             {name}
//           </h3>
//           <p className="text-sm text-white group-hover:underline transition-all duration-300 decoration-2 decoration-purple-500 underline-offset-2">
//             {role}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }
import Link from 'next/link';
import SanityImage from './sanity-image'; // Adjust import path as needed

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: any; // Your Sanity image type
  slug: string | { _type: 'slug'; current: string };
}

export const TeamMemberCard = ({ name, role, image, slug }: TeamMemberCardProps) => {
  const slugString = typeof slug === 'string' ? slug : slug?.current || '';

  return (
    <Link href={`/team/${slugString}`}>
      <div
        className="group rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-600 cursor-pointer flex flex-col"
        style={{ height: "450px" }}
      >
        <div className="relative aspect-square mb-6 overflow-hidden" style={{ height: "320px" }}>
          <SanityImage
            image={image}
            alt={name}
            aspectRatio="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center p-4">
          <h3 className="font-semibold text-gray-400 mb-1 group-hover:underline transition-all duration-300 decoration-white">
            {name}
          </h3>
          <p className="text-sm text-gray-500 group-hover:underline transition-all duration-300 decoration-white">
            {role}
          </p>
        </div>
      </div>
    </Link>
  );
};
