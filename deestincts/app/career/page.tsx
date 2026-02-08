'use client'

import { trainings, getCommunityStats } from "@/lib/community-data"
import { Search, ArrowRight, Users, BookOpen, Target, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { CommunityStats } from "../components/commuity-stats"
import { TrainingCard } from "../components/training-card"
import { Input } from "../components/ui/input"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"

const colors = {
  mint: "#d5e6b4",
  pink: "#ffcaf7",
  yellow: "#f8e386",
}

export default function CommunityPage() {
  const activeTrainings = trainings.filter((t) => t.status !== "archived")
  const upcomingTrainings = trainings.filter((t) => t.status === "upcoming")
  const archivedTrainings = trainings.filter((t) => t.status === "archived")
  const communityStats = getCommunityStats()
  const router = useRouter()

  // Counter animation state
  const [count, setCount] = useState(0)
  const [targetCount, setTargetCount] = useState(0)

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

  useEffect(() => {
    if (targetCount === 0) return

    const duration = 1800
    const increment = targetCount / (duration / 16)
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
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#0a0a0f" }}>
      <main className="flex-1">
        {/* Hero with flyer */}
        <section className="mt-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              {/* Flyer */}
              <div className="
                relative w-full 
                h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] 
                min-h-[360px] max-h-[880px]
                overflow-hidden rounded-b-3xl
              ">
                <Image
                  src="/ctrlflyer.PNG"
                  alt="Ctrl + Chill Event Flyer"
                  fill
                  priority
                  quality={82}
                  className="
                    object-contain sm:object-cover
                    brightness-[0.78] contrast-[1.08]
                    transition-transform duration-1000
                  "
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Hero CTA block */}
              <div className="relative -mt-16 mb-16 px-5 md:px-0">
                <div className="
                  bg-[#0f0f17]/90 backdrop-blur-md 
                  border border-white/10 rounded-2xl p-6 md:p-8
                  shadow-2xl
                ">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2">
                        <Sparkles className="h-5 w-5" style={{ color: colors.pink }} />
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${colors.mint}`,
                            color: "#000000"
                          }}
                        >
                          Limited Spots
                        </span>
                      </div>
                      <h2 style={{ color: colors.mint }} className="text-2xl md:text-3xl font-bold mb-2">
                        Ctrl + <span style={{ color: colors.yellow }}>Chill</span>
                      </h2>
                      <p className="text-gray-300 text-base">
                        Exclusive hands-on design experience in Lagos
                      </p>
                    </div>

                    <Button
                      onClick={() => router.push('/career/trainings/ctrl-chill')}
                      className="min-w-[180px] text-black font-semibold text-base py-6"
                      style={{
                        backgroundColor: colors.yellow,
                        borderColor: colors.yellow,
                      }}
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-bold" style={{ color: colors.mint }}>
                Community at a Glance
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real impact from real people learning and building together
              </p>
            </div>
            <CommunityStats stats={communityStats} />
          </div>
        </section>

        {/* Upcoming Trainings */}
        {upcomingTrainings.length > 0 && (
          <section className="py-16 md:py-20 bg-white/3">
            <div className="container px-4 md:px-6">
              <div className="mb-10 flex items-center gap-3">
                <BookOpen className="h-7 w-7" style={{ color: colors.pink }} />
                <h2 className="text-3xl text-white md:text-4xl font-bold">
                  Upcoming Trainings
                </h2>
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
        {/* <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-10 flex items-center gap-3">
              <Users className="h-7 w-7" style={{ color: colors.mint }} />
              <h2 className="text-3xl text-white md:text-4xl font-bold">
                Active Trainings
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeTrainings.map((training) => (
                <TrainingCard key={training.id} training={training} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Archived */}
        {archivedTrainings.length > 0 && (
          <section className="py-16 md:py-20 bg-white/3">
            <div className="container px-4 md:px-6">
              <div className="mb-10 flex items-center gap-3 opacity-80">
                <BookOpen className="h-7 w-7" style={{ color: colors.pink }} />
                <h2 className="text-3xl md:text-4xl font-bold text-white/80">
                  Archived Trainings
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-90">
                {archivedTrainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="
              mx-auto max-w-4xl rounded-2xl 
              border border-white/10 bg-white/5 
              p-8 md:p-12 text-center backdrop-blur-sm
            ">
              <h2 className="mb-4 text-3xl font-bold" style={{ color: colors.yellow }}>
                Stay in the Loop
              </h2>
              <p className="mb-6 text-gray-300">
                Get updates on new trainings, events and community highlights
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="
                    bg-white/5 border-white/15 text-white 
                    placeholder:text-white/40 
                    focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[#ffcaf7]/40
                  "
                />
                <Button
                  className="bg-[#ffcaf7] hover:bg-[#ffcaf7]/90 text-black font-medium"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-5 text-xs text-white/50">
                Join 2,847+ members • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}