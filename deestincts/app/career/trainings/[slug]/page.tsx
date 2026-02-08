import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { ArrowLeft, Clock, Users, Star, Calendar, CheckCircle, Play, Download } from "lucide-react"
import { getTrainingBySlug, getReviewsByTrainingId } from "@/lib/community-data"
import { Progress } from "@/app/components/ui/progress"

interface TrainingPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TrainingPage({ params }: TrainingPageProps) {
  const { slug } = await params
  const training = getTrainingBySlug(slug)
  const reviews = getReviewsByTrainingId(training?.id || "")

  if (!training) {
    notFound()
  }

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

  const progressPercentage = (training.registrations / training.maxCapacity) * 100

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-white opacity-5 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <Link
                href="/community"
                className="mb-6 inline-flex items-center text-sm text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Community
              </Link>

              <div className="grid gap-12 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <Badge className={getStatusColor(training.status)} variant="outline">
                      {training.status.charAt(0).toUpperCase() + training.status.slice(1)}
                    </Badge>
                    {training.level && (
                      <Badge className={getLevelColor(training.level)} variant="secondary">
                        {training.level}
                      </Badge>
                    )}
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {training.category}
                    </Badge>
                  </div>

                  <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{training.title}</h1>

                  <p className="mb-8 text-xl text-white/80">{training.description}</p>

                  <div className="mb-8 aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={training.image || "/placeholder.svg"}
                      alt={training.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>

                  {/* What You'll Learn */}
                  <div className="mb-12 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-4 text-2xl font-bold">What You&apos;ll Learn</h2>
                    <ul className="space-y-3">
                      {training.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus */}
                  <div className="mb-12 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-4 text-2xl font-bold">Course Syllabus</h2>
                    <div className="space-y-3">
                      {training.syllabus.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                            {index + 1}
                          </div>
                          <span className="text-white/80">{item}</span>
                          <Play className="ml-auto h-4 w-4 text-white/40" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-12 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h2 className="mb-4 text-2xl font-bold">Prerequisites</h2>
                    <ul className="space-y-2">
                      {training.prerequisites.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reviews */}
                  <div className="mb-12">
                    <h2 className="mb-6 text-2xl font-bold">Student Reviews</h2>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
                          <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <Image
                                src={review.authorImage || "/placeholder.svg"}
                                alt={review.author}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium text-white">{review.author}</h4>
                                  {review.verified && (
                                    <Badge
                                      variant="outline"
                                      className="border-green-500/30 bg-green-500/20 text-green-400 text-xs"
                                    >
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm text-white/60">
                                  {new Date(review.date).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-white/80">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Instructor */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <h3 className="mb-4 text-lg font-bold">Your Instructor</h3>
                      <div className="flex items-center gap-3">
                        <Image
                          src={training.instructorImage || "/placeholder.svg"}
                          alt={training.instructor}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-white">{training.instructor}</h4>
                          <p className="text-sm text-white/60">Senior Design Lead</p>
                        </div>
                      </div>
                    </div>

                    {/* Training Details */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <h3 className="mb-4 text-lg font-bold">Training Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/60">
                            <Clock className="h-4 w-4" />
                            Duration
                          </div>
                          <span className="font-medium">{training.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/60">
                            <Calendar className="h-4 w-4" />
                            Start Date
                          </div>
                          <span className="font-medium">{new Date(training.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/60">
                            <Users className="h-4 w-4" />
                            Enrolled
                          </div>
                          <span className="font-medium">
                            {training.registrations}/{training.maxCapacity}
                          </span>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-white/60">Capacity</span>
                            <span className="text-white/80">{progressPercentage.toFixed(0)}%</span>
                          </div>
                          <Progress value={progressPercentage} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/60">
                            <Star className="h-4 w-4" />
                            Rating
                          </div>
                          <span className="font-medium">
                            {training.rating} ({training.totalReviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <div className="mb-4 text-center">
                        {training.price === 0 ? (
                          <>
                            <div className="text-3xl font-bold text-green-400">FREE</div>
                            <div className="text-sm text-white/60">No cost to enroll</div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-center gap-2">
                              {training.originalPrice && (
                                <div className="text-lg text-white/50 line-through">₦{training.originalPrice}</div>
                              )}
                              <div className="text-3xl font-bold text-white">₦{training.price}</div>
                            </div>
                            {training.originalPrice && (
                              <div className="text-sm text-green-400 mb-1">
                                Save ${training.originalPrice - training.price}(
                                {Math.round(((training.originalPrice - training.price) / training.originalPrice) * 100)}
                                % off)
                              </div>
                            )}
                            <div className="text-sm text-white/60">per person</div>
                          </>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-white text-black hover:bg-white/90"
                          disabled={training.status === "archived"}
                        >
                          {training.status === "archived"
                            ? "Training Ended"
                            : training.price === 0
                              ? "Enroll for Free"
                              : "Enroll Now"}
                        </Button>
                        {/* <Button
                          variant="outline"
                          className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Syllabus
                        </Button> */}
                      </div>
                    </div>

                    {/* Money Back Guarantee */}
                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                      <div className="text-center">
                        <CheckCircle className="mx-auto mb-2 h-8 w-8 text-green-400" />
                        <h4 className="mb-2 font-medium text-green-400">30-Day Money Back Guarantee</h4>
                        <p className="text-sm text-white/70">
                          Not satisfied? Get a full refund within 30 days of enrollment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
