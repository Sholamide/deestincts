'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import Image from 'next/image'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Checkbox } from '../components/ui/checkbox'
import {
    CheckCircle,
    Loader2,
    User,
    Palette,
    MessageSquare,
    ArrowLeft,
    Star,
    Zap,
    Target,
    Users,
    Award,
    Sparkles,
    Rocket,
    TrendingUp,
    Shield,
    Coffee,
    Code,
    Heart
} from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

// Fun error messages with extra personality
const funErrorMessages = {
    required: {
        fullName: "Oops! Even Batman needs a name 🦇",
        email: "Email is like oxygen - we can't live without it! 📧",
        phone: "Phone number? More like 'phone fun-ber'! 📱",
        whatsapp: "WhatsApp is where the magic happens! ✨",
        location: "Location, location, location! 🗺️",
        designPath: "Pick your superpower! 🎨",
        experience: "Tell us your level, Jedi! ⚔️",
        motivation: "We need to know why you're awesome! 💫"
    },
    format: {
        email: "That email looks sus... 🤔",
        phone: "Numbers only, please! No letters in phone numbers! 📞"
    }
}

// Form validation schema
const registrationSchema = z.object({
    fullName: z.string().min(2, funErrorMessages.required.fullName),
    email: z.string().email(funErrorMessages.format.email),
    phone: z.string().min(10, funErrorMessages.required.phone).regex(/^[0-9+\-\s()]+$/, funErrorMessages.format.phone),
    whatsapp: z.string().min(10, funErrorMessages.required.whatsapp).regex(/^[0-9+\-\s()]+$/, funErrorMessages.format.phone),
    sameAsPhone: z.boolean().optional(),
    location: z.string().min(2, funErrorMessages.required.location),
    designPath: z.string().min(1, funErrorMessages.required.designPath),
    experience: z.string().min(1, funErrorMessages.required.experience),
    motivation: z.string().min(20, funErrorMessages.required.motivation)
})

type RegistrationFormData = z.infer<typeof registrationSchema>

const designPaths = [
    { value: 'Brand Design', icon: '🎨', color: 'from-pink-500 to-rose-500' },
    { value: 'UI/UX Design', icon: '✨', color: 'from-purple-500 to-indigo-500' },
    { value: 'Motion Graphics', icon: '🎬', color: 'from-blue-500 to-cyan-500' },
    { value: 'Illustration', icon: '🖌️', color: 'from-green-500 to-emerald-500' },
    { value: 'Web Design', icon: '💻', color: 'from-orange-500 to-red-500' },
    { value: 'Print Design', icon: '📄', color: 'from-yellow-500 to-amber-500' },
    { value: 'Digital Marketing Design', icon: '📱', color: 'from-teal-500 to-cyan-500' },
    { value: 'Product Design', icon: '🎯', color: 'from-violet-500 to-purple-500' }
]

const experienceLevels = [
    { value: 'Beginner', label: 'Beginner', subtitle: 'Just getting started', icon: '🌱' },
    { value: 'Intermediate', label: 'Intermediate', subtitle: 'Know the basics', icon: '🚀' },
    { value: 'Advanced', label: 'Advanced', subtitle: 'Ready to level up', icon: '⚡' }
]

// Floating particles component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 20}s`
                    }}
                >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm" />
                </div>
            ))}
        </div>
    )
}

export default function SkillUpRegistrationPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formProgress, setFormProgress] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema)
    })

    const sameAsPhone = watch('sameAsPhone')
    const phoneValue = watch('phone')
    const formValues = watch()

    // Calculate form progress
    useEffect(() => {
        const fields = Object.keys(formValues)
        const filledFields = fields.filter(key => {
            const value = formValues[key as keyof RegistrationFormData]
            return value && value !== ''
        }).length
        setFormProgress((filledFields / fields.length) * 100)
    }, [formValues])

    // Track mouse position for gradient effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Auto-fill WhatsApp when "same as phone" is checked
    const handleSameAsPhoneChange = (checked: boolean) => {
        setValue('sameAsPhone', checked)
        if (checked && phoneValue) {
            setValue('whatsapp', phoneValue)
        }
    }

    const onSubmit = async (data: RegistrationFormData) => {
        setIsSubmitting(true)

        try {
            const submissionData = {
                ...data,
                timestamp: new Date().toISOString(),
                source: 'SkillUp50 Registration'
            }

            const response = await fetch('/api/skillup-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            })

            if (response.ok) {
                setIsSubmitted(true)
                toast.success("🎉 Registration successful! Check your email for confirmation.")
            } else {
                throw new Error('Registration failed')
            }
        } catch (error) {
            console.error('Registration error:', error)
            toast.error("😅 Oops! Something went wrong. Please try again or contact us directly.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-[#B98AFA]/20 to-black text-[#FFFFF2] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,138,250,0.2),transparent_50%)] animate-pulse" />
                <FloatingParticles />

                <Card className="w-full max-w-lg mx-auto bg-[#FFFFF2]/10 backdrop-blur-2xl border border-[#B98AFA]/30 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B98AFA]/30 via-[#C7F507]/20 to-[#3FDB82]/30 blur-xl" />

                    <CardContent className="pt-12 pb-8 relative z-10">
                        <div className="text-center">
                            {/* Success animation */}
                            <div className="mb-8 relative">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#3FDB82] via-[#C7F507] to-[#B98AFA] rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500 shadow-2xl shadow-[#3FDB82]/50">
                                    <CheckCircle className="h-12 w-12 text-black animate-bounce" />
                                </div>

                                {/* Confetti effect */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full animate-confetti"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: `rotate(${i * 30}deg) translateY(-60px)`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="text-5xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 animate-in slide-in-from-top duration-700">
                                    You&apos;re In! 🎉
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-white animate-in slide-in-from-left duration-700 delay-100">
                                Welcome to SkillUp50!
                            </h3>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed animate-in slide-in-from-right duration-700 delay-200">
                                Your registration has been received. We&apos;ll be in touch soon with next steps.
                            </p>

                            <div className="text-left bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl mb-8 backdrop-blur-xl border border-white/10 animate-in slide-in-from-bottom duration-700 delay-300">
                                <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                    What&apos;s Next?
                                </h4>
                                <ul className="text-sm text-gray-300 space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                                        Screening interview invitation
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-red-400" />
                                        WhatsApp community access
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-orange-400" />
                                        Lagos, Nigeria program details
                                    </li>
                                </ul>
                            </div>

                            <Button
                                onClick={() => router.push('/career')}
                                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-semibold py-6 rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group"
                            >
                                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Career Page
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <style jsx>{`
          @keyframes confetti {
            0% { transform: rotate(0deg) translateY(0); opacity: 1; }
            100% { transform: rotate(360deg) translateY(-200px); opacity: 0; }
          }
          .animate-confetti {
            animation: confetti 2s ease-out forwards;
          }
        `}</style>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#B98AFA]/10 to-black text-[#FFFFF2] relative overflow-hidden">
            {/* Dynamic gradient background that follows mouse */}
            <div
                className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-700 ease-out"
                style={{
                    background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(185,138,250,0.2), transparent 40%)`
                }}
            />

            {/* Animated grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(185,138,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(185,138,250,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <FloatingParticles />

            {/* Progress bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
                <div
                    className="h-full bg-gradient-to-r from-[#B98AFA] via-[#C7F507] to-[#3FDB82] transition-all duration-300 ease-out"
                    style={{ width: `${formProgress}%` }}
                />
            </div>

            {/* Hero Banner */}
            <div className="relative overflow-hidden">
                {/* Header */}
                <div className="relative pt-32 z-10 container mx-auto px-4 py-8">
                    <div className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-top duration-700">
                        <Button
                            variant="ghost"
                            onClick={() => router.back()}
                            className="text-[#FFFFF2] hover:bg-[#B98AFA]/10 backdrop-blur-sm border border-[#B98AFA]/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#B98AFA]/40 group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back
                        </Button>

                        {/* Fun stats */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFF2]/5 backdrop-blur-sm rounded-full border border-[#B98AFA]/20">
                                <Users className="w-4 h-4 text-[#B98AFA]" />
                                <span className="text-sm text-[#FFFFF2]">Only 50 spots</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFF2]/5 backdrop-blur-sm rounded-full border border-[#C7F507]/20">
                                <Coffee className="w-4 h-4 text-[#C7F507]" />
                                <span className="text-sm text-[#FFFFF2]">Lagos-based</span>
                            </div>
                        </div>
                    </div>

                    {/* SkillUp50 Hero Banner */}
                    <div className="text-center mb-20">
                        {/* Logo with glow effect */}

                        <div className="mb-12 relative flex justify-center">
                            <div className="relative inline-flex items-center justify-center w-48 h-48 rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/skilluplogo.PNG"
                                    alt="SkillUp50 Logo"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#B98AFA]/40 via-[#C7F507]/40 to-[#3FDB82]/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                            </div>
                        </div>
                        

                        {/* Main Heading with text gradient animation */}
                        <h1 className="text-5xl md:text-8xl font-black mb-8 bg-gradient-to-r from-[#B98AFA] via-[#C7F507] to-[#3FDB82] bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            Transform Your
                            <br />
                            <span className="bg-gradient-to-r from-[#3FDB82] via-[#C7F507] to-[#B98AFA] bg-clip-text text-transparent">
                                Design Career
                            </span>
                        </h1>

                        {/* Subtitle with stagger animation */}
                        <p className="text-xl md:text-3xl text-[#FFFFF2]/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
                            Join Nigeria&apos;s most <span className="text-transparent bg-gradient-to-r from-[#B98AFA] to-[#C7F507] bg-clip-text font-semibold">exclusive</span> design bootcamp.
                            <br />
                            <span className="text-2xl text-[#FFFFF2]/60">Unlimited potential. Infinite possibilities.</span>
                        </p>

                        {/* Feature Highlights with hover effects */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
                            {[
                                { icon: Users, title: 'Exclusive Cohort', desc: 'Only 50 selected participants', color: 'from-[#B98AFA] to-[#C7F507]', delay: '300' },
                                { icon: Award, title: 'Expert Mentorship', desc: 'Learn from industry leaders', color: 'from-[#C7F507] to-[#3FDB82]', delay: '400' },
                                { icon: Rocket, title: 'Hands-on Learning', desc: 'Real projects, real results', color: 'from-[#3FDB82] to-[#B98AFA]', delay: '500' }
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className={`bg-[#FFFFF2]/5 backdrop-blur-xl rounded-2xl p-8 border border-[#B98AFA]/20 hover:border-[#B98AFA]/40 transition-all hover:scale-105 hover:shadow-2xl group animate-in slide-in-from-bottom duration-700 delay-${feature.delay} cursor-pointer`}
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <feature.icon className="h-8 w-8 text-black" />
                                    </div>
                                    <h3 className="font-bold text-[#FFFFF2] mb-3 text-lg">{feature.title}</h3>
                                    <p className="text-sm text-[#FFFFF2]/70">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Eligibility Notice with pulse effect */}
                        <div className="bg-gradient-to-r from-[#C7F507]/10 via-[#3FDB82]/10 to-[#B98AFA]/10 backdrop-blur-xl rounded-2xl p-8 border border-[#C7F507]/20 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-700 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C7F507]/5 to-[#3FDB82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-4 gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#C7F507] to-[#3FDB82] rounded-full flex items-center justify-center">
                                        <Target className="h-6 w-6 text-black" />
                                    </div>
                                    <span className="font-bold text-[#FFFFF2] text-xl">Program Location</span>
                                </div>
                                <p className="text-[#FFFFF2]/90 text-lg leading-relaxed">
                                    This intensive program takes place in <span className="font-bold text-[#C7F507]">Lagos, Nigeria</span>.
                                    <br />Physical attendance is required for the full experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Form Section */}
            <div className="relative z-10 container mx-auto px-4 pb-24">
                <div className="max-w-5xl mx-auto">
                    <Card className="bg-[#FFFFF2]/5 backdrop-blur-2xl border border-[#B98AFA]/20 shadow-2xl rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                        {/* Gradient accent line */}
                        <div className="h-1 bg-gradient-to-r from-[#B98AFA] via-[#C7F507] to-[#3FDB82]" />

                        <CardHeader className="text-center pb-8 pt-12 px-8">
                            <div className="mb-6 flex items-center justify-center gap-3">
                                <Shield className="w-8 h-8 text-[#B98AFA]" />
                                <CardTitle className="text-4xl md:text-5xl font-black text-[#FFFFF2]">
                                    Secure Your Spot
                                </CardTitle>
                                <Code className="w-8 h-8 text-[#C7F507]" />
                            </div>
                            <CardDescription className="text-xl text-[#FFFFF2]/80 max-w-2xl mx-auto leading-relaxed">
                                Fill out the form below to join the SkillUp50 initiative
                                <br />
                                <span className="text-sm text-[#FFFFF2]/60 flex items-center justify-center gap-2 mt-2">
                                    <Heart className="w-4 h-4 text-[#3FDB82]" />
                                    Application takes ~3 minutes
                                </span>
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="px-8 pb-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                                {/* Personal Information Section */}
                                <div className="space-y-8 relative">
                                    <div className="flex items-center gap-4 mb-8 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#B98AFA] to-[#C7F507] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <User className="h-6 w-6 text-[#FFFFF2]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#FFFFF2]">Personal Information</h3>
                                            <p className="text-sm text-[#FFFFF2]/60">Tell us who you are</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3 group">
                                            <Label htmlFor="fullName" className="text-[#FFFFF2] font-semibold flex items-center gap-2">
                                                Full Name *
                                                <span className="text-xs text-gray-400 font-normal">(as it appears on ID)</span>
                                            </Label>
                                            <Input
                                                id="fullName"
                                                {...register('fullName')}
                                                placeholder="John Doe"
                                                className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl h-12 ${errors.fullName ? 'border-red-400 animate-shake' : ''} hover:border-white/30`}
                                            />
                                            {errors.fullName && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.fullName?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-3 group">
                                            <Label htmlFor="email" className="text-[#FFFFF2] font-semibold flex items-center gap-2">
                                                Email Address *
                                                <span className="text-xs text-gray-400 font-normal">(we&apos;ll send updates here)</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register('email')}
                                                placeholder="your.email@example.com"
                                                className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl h-12 ${errors.email ? 'border-red-400 animate-shake' : ''} hover:border-white/30`}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.email?.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="phone" className="text-[#FFFFF2] font-semibold">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                {...register('phone')}
                                                placeholder="+234 801 234 5678"
                                                className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl h-12 ${errors.phone ? 'border-red-400 animate-shake' : ''} hover:border-white/30`}
                                            />
                                            {errors.phone && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.phone?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="whatsapp" className="text-[#FFFFF2] font-semibold">WhatsApp Number *</Label>
                                            <Input
                                                id="whatsapp"
                                                {...register('whatsapp')}
                                                placeholder="+234 801 234 5678"
                                                className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl h-12 ${errors.whatsapp ? 'border-red-400 animate-shake' : ''} ${sameAsPhone ? 'opacity-50' : ''} hover:border-white/30`}
                                                disabled={sameAsPhone}
                                            />
                                            {errors.whatsapp && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.whatsapp?.message}
                                                </p>
                                            )}
                                            <div className="flex items-center space-x-3 group cursor-pointer">
                                                <Checkbox
                                                    id="sameAsPhone"
                                                    checked={sameAsPhone}
                                                    onCheckedChange={handleSameAsPhoneChange}
                                                    className="border-white/30 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500 transition-all duration-300"
                                                />
                                                <Label htmlFor="sameAsPhone" className="text-sm text-gray-300 cursor-pointer group-hover:text-white transition-colors">
                                                    Same as phone number
                                                </Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="location" className="text-[#FFFFF2] font-semibold">Current Location *</Label>
                                        <Input
                                            id="location"
                                            {...register('location')}
                                            placeholder="Lagos, Nigeria"
                                            className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl h-12 ${errors.location ? 'border-red-400 animate-shake' : ''} hover:border-white/30`}
                                        />
                                        {errors.location && (
                                            <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                <span className="text-lg">⚠️</span> {errors.location?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Design Information Section */}
                                <div className="space-y-8 relative">
                                    <div className="flex items-center gap-4 mb-8 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#C7F507] to-[#3FDB82] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Palette className="h-6 w-6 text-[#FFFFF2]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#FFFFF2]">Design Information</h3>
                                            <p className="text-sm text-[#FFFFF2]/60">Choose your path to greatness</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="designPath" className="text-[#FFFFF2] font-semibold flex items-center gap-2">
                                                Preferred Design Path *
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                            </Label>
                                            <Select onValueChange={(value) => setValue('designPath', value)}>
                                                <SelectTrigger className={`bg-white/5 border-white/20 text-white focus:border-purple-400 transition-all duration-300 rounded-xl h-12 hover:border-white/30 ${errors.designPath ? 'border-red-400 animate-shake' : ''}`}>
                                                    <SelectValue placeholder="Select your superpower 🎨" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-white/20 rounded-xl">
                                                    {designPaths.map((path) => (
                                                        <SelectItem
                                                            key={path.value}
                                                            value={path.value}
                                                            className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer transition-all duration-200 rounded-lg my-1"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-2xl">{path.icon}</span>
                                                                <span className="font-medium">{path.value}</span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.designPath && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.designPath?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="experience" className="text-[#FFFFF2] font-semibold flex items-center gap-2">
                                                Level of Experience *
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                            </Label>
                                            <Select onValueChange={(value) => setValue('experience', value)}>
                                                <SelectTrigger className={`bg-white/5 border-white/20 text-white focus:border-purple-400 transition-all duration-300 rounded-xl h-12 hover:border-white/30 ${errors.experience ? 'border-red-400 animate-shake' : ''}`}>
                                                    <SelectValue placeholder="Choose your level ⚡" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-white/20 rounded-xl">
                                                    {experienceLevels.map((level) => (
                                                        <SelectItem
                                                            key={level.value}
                                                            value={level.value}
                                                            className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer transition-all duration-200 rounded-lg my-1"
                                                        >
                                                            <div className="flex items-center gap-3 py-2">
                                                                <span className="text-2xl">{level.icon}</span>
                                                                <div>
                                                                    <div className="font-medium">{level.label}</div>
                                                                    <div className="text-xs text-gray-400">{level.subtitle}</div>
                                                                </div>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.experience && (
                                                <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                    <span className="text-lg">⚠️</span> {errors.experience?.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Motivation Section */}
                                <div className="space-y-8 relative">
                                    <div className="flex items-center gap-4 mb-8 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#3FDB82] to-[#B98AFA] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <MessageSquare className="h-6 w-6 text-[#FFFFF2]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#FFFFF2]">Tell Us Your Story</h3>
                                            <p className="text-sm text-[#FFFFF2]/60">What drives you? What&apos;s your vision?</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="motivation" className="text-[#FFFFF2] font-semibold flex items-center gap-2">
                                            Why do you want to join SkillUp50? *
                                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                                        </Label>
                                        <Textarea
                                            id="motivation"
                                            {...register('motivation')}
                                            placeholder="Share your passion for design, your goals, and what you hope to achieve through SkillUp50. Be authentic - we want to know the real you! ✨"
                                            rows={6}
                                            className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 rounded-xl resize-none ${errors.motivation ? 'border-red-400 animate-shake' : ''} hover:border-white/30`}
                                        />
                                        {errors.motivation && (
                                            <p className="text-sm text-red-300 flex items-center gap-2 animate-in slide-in-from-top duration-300">
                                                <span className="text-lg">⚠️</span> {errors.motivation?.message}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs text-gray-400 flex items-center gap-2">
                                                <Target className="w-3 h-3" />
                                                Minimum 20 characters. Be specific about your goals!
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {watch('motivation')?.length || 0} characters
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-8 space-y-4">
                                    {/* Progress indicator */}
                                    <div className="bg-white/5 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/10">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#B98AFA] via-[#C7F507] to-[#3FDB82] transition-all duration-500 ease-out relative overflow-hidden"
                                            style={{ width: `${formProgress}%` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                                        </div>
                                    </div>
                                    <p className="text-center text-sm text-gray-400">
                                        Form completion: <span className="font-semibold text-[#FFFFF2]">{Math.round(formProgress)}%</span>
                                    </p>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#B98AFA] via-[#C7F507] to-[#3FDB82] hover:from-[#B98AFA]/90 hover:via-[#C7F507]/90 hover:to-[#3FDB82]/90 text-black text-lg py-8 rounded-2xl font-bold shadow-2xl hover:shadow-[#B98AFA]/50 transition-all duration-500 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                                        <div className="relative z-10 flex items-center justify-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-6 w-6 animate-spin" />
                                                    <span>Securing Your Spot...</span>
                                                    <div className="flex gap-1">
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <Rocket className="h-6 w-6 transition-transform" />
                                                    <span>Join SkillUp50</span>
                                                    <span className='hidden md:inline'>- Transform Your Future</span>
                                                    <Star className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                                                </>
                                            )}
                                        </div>
                                    </Button>

                                    {/* Trust indicators */}
                                    <div className="flex items-center justify-center gap-8 pt-6 flex-wrap">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Shield className="w-4 h-4 text-green-400" />
                                            Secure & Private
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Zap className="w-4 h-4 text-yellow-400" />
                                            Instant Confirmation
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Heart className="w-4 h-4 text-red-400" />
                                            No Spam Ever
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Footer note */}
                    <div className="text-center mt-12 space-y-4 animate-in fade-in duration-700 delay-500">
                        <p className="text-gray-400 text-sm">
                            Questions? Reach out to us at{' '}
                            <a href="mailto:contact@deestincts.com" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">
                                contact@deestincts.com
                            </a>
                        </p>
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                            <Code className="w-3 h-3" />
                            <span>Crafted with</span>
                            <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                            <span>for future gods</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Animations & Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-shake {
          animation: shake 0.5s;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }

        /* Selection colors */
        ::selection {
          background: rgba(168, 85, 247, 0.3);
          color: white;
        }
      `}</style>
        </div>
    )
}