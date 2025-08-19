import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Clock, Users, Star, Calendar } from "lucide-react"
import type { Training } from "@/lib/community-data"

interface TrainingCardProps {
  training: Training
}

export function TrainingCard({ training }: TrainingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "upcoming":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "archived":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-400"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400"
      case "Advanced":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="aspect-[16/9] overflow-hidden">
        <Image
          src={training.image || "/placeholder.svg"}
          alt={training.title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge className={getStatusColor(training.status)} variant="outline">
            {training.status.charAt(0).toUpperCase() + training.status.slice(1)}
          </Badge>
          <Badge className={getLevelColor(training.level)} variant="secondary">
            {training.level}
          </Badge>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#bebbbb] transition-colors">
          {training.title}
        </h3>

        <p className="mb-4 text-sm text-white/70 line-clamp-2">{training.description}</p>

        <div className="mb-4 flex items-center gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {training.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {training.registrations}/{training.maxCapacity}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {training.rating} ({training.totalReviews})
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-white/60">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(training.startDate).toLocaleDateString()}
            </div>
          </div>
          <div className="text-right">
            {training.price === 0 ? (
              <div className="text-lg font-bold text-green-400">FREE</div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  {training.originalPrice && (
                    <div className="text-sm text-white/50 line-through">₦{training.originalPrice}</div>
                  )}
                  <div className="text-lg font-bold text-white">₦{training.price}</div>
                </div>
                {training.originalPrice && (
                  <div className="text-xs text-green-400">Save ₦{training.originalPrice - training.price}</div>
                )}
              </>
            )}
            <div className="text-xs text-white/60">per person</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/community/trainings/${training.slug}`} className="flex-1">
            <Button
              className="w-full bg-[#060606] hover:bg-[#060606]/90 text-white"
              disabled={training.status === "archived"}
            >
              {training.status === "archived" ? "Archived" : "Learn More"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
