import Link from "next/link"
import { trainings, publications, getCommunityStats } from "@/lib/community-data"
import { Search, ArrowRight, Users, BookOpen, Award } from "lucide-react"
import { ShaderBackground } from "../components/shader-background"
import { Button } from "../components/ui/button"
import { CommunityStats } from "../components/commuity-stats"
import { TrainingCard } from "../components/training-card"
import { PublicationCard } from "../components/publication-card"
import { Input } from "../components/ui/input"

export default function CommunityPage() {
  const activeTrainings = trainings.filter((t) => t.status === "active")
  const upcomingTrainings = trainings.filter((t) => t.status === "upcoming")
  const archivedTrainings = trainings.filter((t) => t.status === "archived")
  const featuredPublications = publications.slice(0, 4)
  const communityStats = getCommunityStats()

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section with Shader Background */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <ShaderBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <span className="text-white/90">Join Our Growing Community</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Learn. <span className="text-white">Create.</span> <span className="text-white">Inspire.</span>
              </h1>
              <p className="mb-8 text-xl text-white/80 md:text-2xl">
                Connect with designers, developers, and creatives from around the world. Access exclusive trainings,
                publications, and resources to elevate your craft.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="bg-white text-black hover:bg-white/90">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Explore Trainings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Community Impact</h2>
              <p className="mx-auto max-w-2xl text-white/70">
                Our community continues to grow and make an impact across the globe
              </p>
            </div>
            <CommunityStats stats={communityStats} />
          </div>
        </section>

        {/* Active Trainings */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <Users className="mr-3 inline h-8 w-8 text-green-400" />
                  Active Trainings
                </h2>
                <p className="text-white/70">Join our live training sessions and learn from industry experts</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeTrainings.map((training) => (
                <TrainingCard key={training.id} training={training} />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Trainings */}
        {upcomingTrainings.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <BookOpen className="mr-3 inline h-8 w-8 text-blue-400" />
                  Upcoming Trainings
                </h2>
                <p className="text-white/70">Get early access to our upcoming training sessions</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingTrainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Publications */}
        {/* <section className="py-16 md:py-24 bg-white/5">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <Award className="mr-3 inline h-8 w-8 text-purple-400" />
                  Featured Publications
                </h2>
                <p className="text-white/70">Dive deep into industry insights and best practices</p>
              </div>
              <Link href="/community/publications">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  View All Publications
                </Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredPublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Archived Trainings */}
        {archivedTrainings.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white/60">Archived Trainings</h2>
                <p className="text-white/50">Browse our collection of past training sessions for reference</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {archivedTrainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-white/10 to-white/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold">Stay Connected</h2>
              <p className="mb-6 text-white/80">
                Get notified about new trainings, publications, and community updates
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <Button className="bg-white text-black hover:bg-white/90">Subscribe</Button>
              </div>
              <p className="mt-4 text-xs text-white/50">Join 2,847+ community members. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
