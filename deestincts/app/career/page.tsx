'use client'

import { trainings, getCommunityStats } from "@/lib/community-data"
import { Search, ArrowRight, Users, BookOpen, Target, Sparkles } from "lucide-react"
import { ShaderBackground } from "../components/shader-background"
import { Button } from "../components/ui/button"
import { CommunityStats } from "../components/commuity-stats"
import { TrainingCard } from "../components/training-card"
import { Input } from "../components/ui/input"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CommunityPage() {
  const activeTrainings = trainings.filter((t) => t.status === "active")
  const upcomingTrainings = trainings.filter((t) => t.status === "upcoming")
  const archivedTrainings = trainings.filter((t) => t.status === "archived")
  const communityStats = getCommunityStats()
  const router = useRouter()

  // Counter animation state
  const [count, setCount] = useState(0)
  const [targetCount, setTargetCount] = useState(0)

  // Fetch registration count from API
  useEffect(() => {
    const fetchRegistrationCount = async () => {
      try {
        const response = await fetch('/api/skillup-registration/count')
        const data = await response.json()
        setTargetCount(data.count || 0)
      } catch (error) {
        console.error('Error fetching registration count:', error)
        setTargetCount(0)
      }
    }

    fetchRegistrationCount()
  }, [])

  // Animate counter when targetCount changes
  useEffect(() => {
    if (targetCount === 0) return

    const duration = 2000 // 2 seconds
    const increment = targetCount / (duration / 16) // 60fps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetCount])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section with Shader Background - TEMPORARILY COMMENTED OUT FOR SKILLUP50 PROMOTION */}
        {/* <section className="relative overflow-hidden py-20 md:py-32">
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
                <Button className="text-white bg-[#9a1212] hover:bg-[#9a1212]/90">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Explore Trainings
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Ctrl Chill Promotion Video Section */}
        <section className="relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              {/* Video Container - Hero Focus */}
              <div className="
    relative w-full 
    md:mt-24
    h-[50vh]           /* mobile: half screen */
    sm:h-[60vh]        /* small tablets */
    md:h-[70vh]        /* medium screens */
    lg:h-[80vh]        /* large desktops */
    xl:h-[85vh]        /* extra large */
    min-h-[320px]      /* never too small */
    max-h-[900px]      /* prevent insane height on ultra-wide monitors */
  ">
                <Image
                  src="/ctrlflyer.PNG"
                  alt="Ctrl + Chill Event Flyer"
                  fill
                  priority
                  quality={85}
                  className="
        object-contain     /* default: show full flyer without cropping */
        md:object-cover    /* on medium+ screens: fill nicely if flyer is wide */
        brightness-[0.65] 
        contrast-[1.12]    /* slight contrast boost */
        transition-transform duration-700
      "
                  sizes="(max-width: 640px) 100vw, 
             (max-width: 1024px) 100vw, 
             100vw"
                />

                {/* Overlay gradient – stronger on mobile to improve text visibility */}
                <div className="
      absolute inset-0 
      bg-gradient-to-b 
      from-transparent 
      via-black/40 
      md:via-black/50 
      to-black/70 
      pointer-events-none
    " />
              </div>

              {/* Standalone CTA Section */}
              <div className="mt-1">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-[#B98AFA]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#B98AFA] to-[#C7F507] px-4 py-1 text-xs font-semibold">
                        <span className="text-black">🎯 Limited Time</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Ctrl + <span className="text-[#C7F507]">Chill</span>
                      </h2>
                      <p className="text-white/80 text-sm md:text-base">
                        Exclusive design class in Lagos, Nigeria
                      </p>
                    </div>
                    {/* <Button 
                      className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 cursor-not-allowed opacity-75"
                      disabled
                      onClick={() => {
                        router.push('/skillup50')
                      }}
                    >
                      Registration Closed
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </div>

              {/* Below Video Content */}
              <div className="text-center">
                <h1 className="mb-6 text-3xl md:text-4xl font-bold text-white">
                  Transform Your Tech Career
                </h1>
                <p className="mb-8 text-lg text-white/80 max-w-3xl mx-auto">
                  Join Nigeria&apos;s most exclusive tech bootcamp. Only 25 spots available for this intensive program in Lagos.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm p-4 border rounded-xl border-[#B98AFA]/20">
                    <Users className="h-6 w-6 text-[#B98AFA] mx-auto mb-2" />
                    <p className="text-sm text-white/80">25 Spots Only</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border  border-[#C7F507]/20">
                    <Target className="h-6 w-6 text-[#C7F507] mx-auto mb-2" />
                    <p className="text-sm text-white/80">Lagos Based</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-[#3FDB82]/20">
                    <BookOpen className="h-6 w-6 text-[#3FDB82] mx-auto mb-2" />
                    <p className="text-sm text-white/80">Hands-on Learning</p>
                  </div>
                </div>

                {/* Main CTA */}
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    className="text-black bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400  text-lg px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 opacity-75"
                    onClick={() => {
                      router.push('/career/trainings/ctrl-chill')
                    }}
                  >
                    Register
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
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

