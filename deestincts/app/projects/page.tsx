import Link from "next/link"
import { getProjects } from "@/lib/sanity"
import { ProjectCard } from "../components/project-card"
import { Button } from "../components/ui/button"

export default async function ProjectsPage() {
  // Fetch all projects
  const allProjects = await getProjects()
  // Helper to determine col-span for the "two projects, then one big project on the next line" pattern
  const getProjectColSpan = (index: number) => {
    if (index % 3 === 2) {
      return "sm:col-span-2"
    }
    return "sm:col-span-1"
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#161519] text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#000000] opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#8b8a8a] opacity-10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 mt-12 md:px-6">
            <div className="max-w-4xl">
              <p className="mb-8 text-lg md:text-2xl text-white">
                From global brands to game-changing startups, we design the future at pivotal moments.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {allProjects.map((project: any, index: any) => (
                <div key={project._id} className={getProjectColSpan(index)}>
                  <ProjectCard
                    title={project.title}
                    excerpt={project.excerpt}
                    client={project.client}
                    projectType={project.projectType}
                    featuredImage={project.featuredImage}
                    slug={project.slug}
                    heroMediaType={project.heroMediaType}
                    featuredVideo={project.featuredVideo}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Ready to start your project?</h2>
              <p className="mb-8 text-white/70 md:text-lg">
                Let&apos;s discuss how we can help transform your brand with exceptional design that drives real business
                results.
              </p>
              <Link href="/contact">
                <Button className="bg-[#9a1212] hover:bg-[#9a1212]/90 text-white">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
