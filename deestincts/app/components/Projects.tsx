import { sanityFetch } from "@/sanity/lib/live";
import { featuredProjectsQuery } from "@/sanity/lib/queries";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import SanityImage from "./sanity-image";

interface ProjectCardProps {
  title: string;
  excerpt: string;
  client: string;
  category: string;
  image: string;
}

export function ProjectCard({
  title,
  excerpt,
  client,
  category,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#C3122B]/50 hover:bg-white/10">
      <div className="h-full w-full overflow-hidden">
        <SanityImage
          image={image}
          aspectRatio="3:2"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {category}
        </div>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <p className="mb-2 text-sm text-white/70">{excerpt}</p>
        <p className="mb-4 text-xs text-white/50">Client: {client}</p>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#C3122B] transition-colors"
        >
          View Project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-0">
        <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 uppercase text-xs font-medium backdrop-blur-sm">
          {category}
        </div>
        <h3 className="mb-1 z-50 text-xl text-muted font-bold">{title}</h3>
      </div>
    </div>
  );
}

const Projects = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => {
  return (
    <div className="space-y-12 text-center">
      {heading && (
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{heading}</h2>
      )}
      {subHeading && (
        <p className="mx-auto max-w-3xl text-white/70 md:text-lg">
          {subHeading}
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
};

export const FeaturedProjects = async () => {
  const { data } = await sanityFetch({ query: featuredProjectsQuery });
  if (!data || data.length === 0) {
    return <div>No projects found</div>;
  }
  return (
    <>
      <Projects
        heading="Featured Projects"
        subHeading="Explore our portfolio of award-winning designs and successful client projects that showcase our expertise and creativity."
      >
        {data.map((project: any) => (
          <ProjectCard 
            key={project._id}
            title={project.title || "E-commerce Platform"}
            excerpt={
              project.excerpt ||
              "Custom shopping experience with advanced filtering"
            }
            client={project.client || "RetailTech Solutions"}
            category={project.projectType.join(", ") || "Web Development"}
            image={
              project.featuredImage || "/placeholder.svg?height=400&width=600"
            }
            //   key={project._id}
            //   title={project.title}
            //   description={project.description}
            //   client={project.client}
            //   category={project.projectType.join(", ")}
            //   image={project.mainImage.asset.url}
          />
        ))}
      </Projects>
      <div className="mt-12 text-center">
        <Link href="/projects">
          <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  );
  //   return <Projects heading="Featured Projects" subHeading="Explore our portfolio of award-winning designs and successful client projects that showcase our expertise and creativity.">
  //             {data.map((project: any) => (
  //                <ProjectCard title="Luxury Brand Website"
  //                description="Complete website redesign for a premium fashion brand"
  //                client="Fashion House Inc."
  //                category="Web Design"
  //                image="/placeholder.svg?height=400&width=600" />
  //             )}
  //         </Projects>;
};
