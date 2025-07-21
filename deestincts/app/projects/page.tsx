import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ProjectCard } from "../components/project-card"
import { Button } from "../components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#161519] text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#161519] opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#C3122B] opacity-10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our <span className="text-[#C3122B]">Projects</span>
              </h1>
              <p className="mb-8 text-xl text-white/70">
                Explore our portfolio of award-winning designs and successful client projects that showcase our
                expertise and creativity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="bg-white/5 border border-white/10">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#C3122B] data-[state=active]:text-white">
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger value="web" className="data-[state=active]:bg-[#C3122B] data-[state=active]:text-white">
                    Web Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="branding"
                    className="data-[state=active]:bg-[#C3122B] data-[state=active]:text-white"
                  >
                    Branding
                  </TabsTrigger>
                  <TabsTrigger value="ui" className="data-[state=active]:bg-[#C3122B] data-[state=active]:text-white">
                    UI/UX Design
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  
                  <ProjectCard
                    title="Luxury Brand Website"
                    description="Complete website redesign for a premium fashion brand"
                    client="Fashion House Inc."
                    category="Web Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="E-commerce Platform"
                    description="Custom shopping experience with advanced filtering"
                    client="RetailTech Solutions"
                    category="Web Development"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Mobile Banking App"
                    description="Intuitive financial management application"
                    client="Global Finance"
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Restaurant Branding"
                    description="Complete identity design for an upscale restaurant"
                    client="Gourmet Dining Group"
                    category="Branding"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Travel Platform"
                    description="Booking system with immersive destination previews"
                    client="Wanderlust Travels"
                    category="Web Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Healthcare Dashboard"
                    description="Patient management system with data visualization"
                    client="MedTech Innovations"
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Tech Startup Identity"
                    description="Brand identity for an AI-powered startup"
                    client="NexGen AI"
                    category="Branding"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Educational Platform"
                    description="Interactive learning experience for students"
                    client="EduTech Solutions"
                    category="Web Development"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Fitness App"
                    description="Workout tracking and nutrition planning app"
                    client="FitLife Inc."
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Luxury Brand Website"
                    description="Complete website redesign for a premium fashion brand"
                    client="Fashion House Inc."
                    category="Web Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Travel Platform"
                    description="Booking system with immersive destination previews"
                    client="Wanderlust Travels"
                    category="Web Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Educational Platform"
                    description="Interactive learning experience for students"
                    client="EduTech Solutions"
                    category="Web Development"
                    image="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="branding" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Restaurant Branding"
                    description="Complete identity design for an upscale restaurant"
                    client="Gourmet Dining Group"
                    category="Branding"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Tech Startup Identity"
                    description="Brand identity for an AI-powered startup"
                    client="NexGen AI"
                    category="Branding"
                    image="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="ui" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Mobile Banking App"
                    description="Intuitive financial management application"
                    client="Global Finance"
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Healthcare Dashboard"
                    description="Patient management system with data visualization"
                    client="MedTech Innovations"
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Fitness App"
                    description="Workout tracking and nutrition planning app"
                    client="FitLife Inc."
                    category="UI/UX Design"
                    image="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-[#C3122B] font-medium">Case Studies</span>
              </div>
              <h2 className="mb-12 mt-4 text-3xl font-bold tracking-tighter md:text-4xl">Featured Case Studies</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#C3122B]/50">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=700"
                    alt="E-commerce Redesign"
                    width={700}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium">
                    E-commerce
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Fashion Retailer Conversion Rate Optimization</h3>
                  <p className="mb-4 text-white/70">
                    How we increased online sales by 45% through strategic UX improvements and performance optimization.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#C3122B] hover:text-[#C3122B]/80 transition-colors"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#C3122B]/50">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=700"
                    alt="Banking App"
                    width={700}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-[#C3122B]/90 px-3 py-1 text-xs font-medium">
                    FinTech
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Banking App User Experience Transformation</h3>
                  <p className="mb-4 text-white/70">
                    Redesigning a complex banking application to improve user satisfaction and increase daily active
                    users.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#C3122B] hover:text-[#C3122B]/80 transition-colors"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                <Button className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
