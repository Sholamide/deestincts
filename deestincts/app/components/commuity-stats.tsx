"use client"

import { useEffect, useState } from "react"
import { Users, BookOpen, Award, Globe, Star, GraduationCap } from "lucide-react"

interface CommunityStatsProps {
  stats: {
    totalMembers: number
    activeTrainings: number
    totalPublications: number
    averageRating: number
    totalGraduates: number
    countriesReached: number
  }
}

export function CommunityStats({ stats }: CommunityStatsProps) {
  const [animatedStats, setAnimatedStats] = useState({
    totalMembers: 0,
    activeTrainings: 0,
    // totalPublications: 0,
    averageRating: 0,
    totalGraduates: 0,
    countriesReached: 0,
  })

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedStats({
        totalMembers: Math.floor(stats.totalMembers * progress),
        activeTrainings: Math.floor(stats.activeTrainings * progress),
        // totalPublications: Math.floor(stats.totalPublications * progress),
        averageRating: Number((stats.averageRating * progress).toFixed(1)),
        totalGraduates: Math.floor(stats.totalGraduates * progress),
        countriesReached: Math.floor(stats.countriesReached * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedStats(stats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [stats])

  const statItems = [
    {
      icon: Users,
      label: "Community Members",
      value: animatedStats.totalMembers.toLocaleString(),
      color: "text-blue-400",
    },
    {
      icon: BookOpen,
      label: "Active Trainings",
      value: animatedStats.activeTrainings.toString(),
      color: "text-green-400",
    },
    // {
    //   icon: Award,
    //   label: "Publications",
    //   value: animatedStats.totalPublications.toString(),
    //   color: "text-purple-400",
    // },
    {
      icon: Star,
      label: "Average Rating",
      value: animatedStats.averageRating.toString(),
      color: "text-yellow-400",
    },
    {
      icon: GraduationCap,
      label: "Graduates",
      value: animatedStats.totalGraduates.toLocaleString(),
      color: "text-[#C3122B]",
    },
    {
      icon: Globe,
      label: "Countries Reached",
      value: animatedStats.countriesReached.toString(),
      color: "text-cyan-400",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        >
          <div className={`mb-3 flex justify-center ${item.color}`}>
            <item.icon className="h-8 w-8" />
          </div>
          <div className="mb-1 text-2xl font-bold text-white">{item.value}</div>
          <div className="text-xs text-white/60">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
