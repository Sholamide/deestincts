import Link from "next/link";

import { ProcessStep } from "./components/process-step";
import { TestimonialCard } from "./components/testimonial-card";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import { ImageSlider } from "./components/imageslider";
import { FeaturedProjects } from "./components/Projects";

export default async function Page() {
  return (
    <>
      <div className="relative">
        <div className="flex-1">
          <section className="relative overflow-hidden py-20 md:py-32">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[#161519] opacity-90"></div>
              <div className="absolute left-0 top-0 h-full w-1/2 bg-[#C3122B] opacity-10 blur-3xl"></div>
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm w-fit">
                    <span className="text-[#C3122B] font-medium">
                      Premium Design Agency
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    We craft <span className="text-[#C3122B]">digital</span>{" "}
                    experiences that{" "}
                    <span className="text-[#C3122B]">inspire</span>
                  </h1>
                  <p className="max-w-[600px] text-white/70 md:text-xl">
                    Transforming visions into exceptional digital realities. We
                    blend creativity with strategy to deliver designs that drive
                    results.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C3122B] opacity-20 blur-3xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
                    <ImageSlider />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-6xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  About Deestincts
                </h2>
                <p className="mb-8 text-white/70 md:text-lg">
                  We are a team of passionate designers and developers dedicated
                  to creating exceptional digital experiences. With years of
                  industry expertise, we bring creativity and technical
                  excellence to every project.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">10+</h3>
                    <p className="text-white/70">Years of Experience</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">200+</h3>
                    <p className="text-white/70">Projects Completed</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xl font-bold">50+</h3>
                    <p className="text-white/70">Happy Clients</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/about">
                    <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-black/30">
            <div className="container px-4 md:px-6">
              <FeaturedProjects />
              {/* <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Featured Projects
                </h2>
                <p className="mx-auto max-w-3xl text-white/70 md:text-lg">
                  Explore our portfolio of award-winning designs and successful
                  client projects that showcase our expertise and creativity.
                </p>
              </div>
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
              </div>
              <div className="mt-12 text-center">
                <Link href="/projects">
                  <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div> */}
            </div>
          </section>

          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Client Testimonials
                </h2>
                <p className="mx-auto max-w-3xl text-white/70 md:text-lg">
                  Don&apos;t just take our word for it. Here&apos;s what our
                  clients have to say about working with Deestincts.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  quote="Deestincts transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations."
                  author="Sarah Johnson"
                  position="Marketing Director"
                  company="TechVision Inc."
                />
                <TestimonialCard
                  quote="Working with the Deestincts team was a game-changer for our brand. They understood our vision and executed it flawlessly."
                  author="Michael Chen"
                  position="CEO"
                  company="Innovate Solutions"
                />
                <TestimonialCard
                  quote="The redesign of our e-commerce platform led to a 40% increase in conversions. Deestincts delivers results, not just designs."
                  author="Emma Rodriguez"
                  position="E-commerce Manager"
                  company="StyleHouse"
                />
              </div>
            </div>
          </section>

          <section className="py-20 bg-black/30">
            <div className="container px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Our Design Process
                </h2>
                <p className="mx-auto max-w-3xl text-white/70 md:text-lg">
                  We follow a proven methodology that ensures every project
                  delivers exceptional results and meets your business
                  objectives.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <ProcessStep
                  number="01"
                  title="Discovery"
                  description="We dive deep into understanding your brand, goals, and target audience to establish a solid foundation."
                />
                <ProcessStep
                  number="02"
                  title="Strategy"
                  description="Based on research, we develop a comprehensive strategy that aligns with your business objectives."
                />
                <ProcessStep
                  number="03"
                  title="Design"
                  description="Our creative team crafts visually stunning designs that embody your brand and engage your audience."
                />
                <ProcessStep
                  number="04"
                  title="Delivery"
                  description="We implement, test, and refine to ensure the final product exceeds expectations and drives results."
                />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-[#27272a] text-primary-foreground px-3 py-1 text-sm">
                    Performance
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Traffic spikes should be exciting, not scary.
                  </h2>
                  <Link
                    href="/projects"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Our Work
                  </Link>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-[#27272a] text-primary-foreground px-3 py-1 text-sm">
                    Security
                  </div>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Fully managed infrastructure designed to scale dynamically
                    with your traffic, a global edge to ensure your site is fast
                    for every customer, and the tools to monitor every aspect of
                    your app.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-black/30">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mb-8 text-white/70 md:text-lg">
                  Let&apos;s discuss how we can help transform your brand with
                  exceptional design that drives real business results.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className=" text-md leading-6 prose uppercase">
                A starter template for
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                <Link className="text-red-500 " href="https://sanity.io/">
                  Sanity
                </Link>{" "}
                +{" "}
                <Link className="text-[#000] " href="https://nextjs.org/">
                  Next.js
                </Link>
              </h1>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                This starter is a statically generated site that uses Next.js
                for the frontend and Sanity to handle its content. It comes with
                a standalone Sanity Studio that offers features like real-time
                collaboration, instant side-by-side content previews, and
                intuitive editing.
              </p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <GetStartedCode />
              <Link
                href="https://www.sanity.io/docs"
                className="inline-flex text-red-500 text-xs md:text-sm underline hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sanity Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-1 inline"
                  fill="currentColor"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div> */}
    </>
  );
}
