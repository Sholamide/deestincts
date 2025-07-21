import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  client: string;
  category: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  client,
  category,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#C3122B]/50 hover:bg-white/10">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {category}
        </div>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <p className="mb-2 text-sm text-white/70">{description}</p>
        <p className="mb-4 text-xs text-white/50">Client: {client}</p>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#C3122B] transition-colors"
        >
          View Project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="p-6">
        <div className="mb-1 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
          {category}
        </div>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <p className="mb-2 text-sm text-white/70">{description}</p>
        <p className="text-xs text-white/50">Client: {client}</p>
      </div>
    </div>
  );
}
