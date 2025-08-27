"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", subject: "", message: "" }
  })

  const onSubmit = async (values: ContactFormValues) => {
    console.log("values", values)
    setIsSuccess(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Failed to send message")
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      alert("There was an error sending your message. Please try again later.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#161519] text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#161519] opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#a3a2a2] opacity-10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Get in <span className="text-[#c7c4c4]">Touch</span>
              </h1>
              <p className="mb-8 text-xl text-white/70">
                Have a project in mind? Let&apos;s discuss how we can help transform your brand with exceptional design.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <Mail className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Email Us</h3>
                      <p className="text-white/70">contacts@deestincts.com</p>
                      <p className="text-white/70">info@deestincts.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <Phone className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Call Us</h3>
                      <a href="tel:+2349054356854" className="text-white/70">+234 905 435 6854</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <MapPin className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Visit Us</h3>
                      <p className="text-white/70">Ogudu GRA, </p>
                      <p className="text-white/70">Lagos State</p>
                      <p className="text-white/70">Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <Clock className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Office Hours</h3>
                      <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/70">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-white/70">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="mb-4 text-lg font-medium">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-white/5 p-3 text-white/70 hover:bg-[#C3122B]/10 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-white/5 p-3 text-white/70 hover:bg-[#C3122B]/10 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-white/5 p-3 text-white/70 hover:bg-[#C3122B]/10 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-white/5 p-3 text-white/70 hover:bg-[#C3122B]/10 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your name"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
                          })}
                          placeholder="Your email"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject of your message"
                        className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-400">{errors.subject.message}</p>
                      )}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message should be at least 10 characters" } })}
                        placeholder="Your message"
                        className="min-h-[150px] border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-400">{errors.message.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#5b5a5a] hover:bg-[#5b5a5a]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    {isSuccess && (
                      <div className="rounded-md bg-green-500/10 p-4 text-center text-green-400">
                        Thank you for your message! We&apos;ll get back to you soon.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mb-12 text-white/70 md:text-lg">
                Find answers to common questions about our services and process.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">What services do you offer?</h3>
                <p className="text-white/70">
                  We offer a comprehensive range of design services including web design, UI/UX design, branding, and
                  digital strategy. Our team specializes in creating cohesive digital experiences that align with your
                  business goals.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">How long does a typical project take?</h3>
                <p className="text-white/70">
                  Project timelines vary depending on scope and complexity. A typical website design project might take
                  4-8 weeks, while a comprehensive branding project could take 6-12 weeks. We&apos;ll provide a detailed
                  timeline during our initial consultation.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">What is your design process?</h3>
                <p className="text-white/70">
                  Our design process includes discovery, strategy, design, and delivery phases. We begin by
                  understanding your business and goals, develop a strategic approach, create designs based on research
                  and best practices, and then implement and refine until the final product exceeds expectations.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">How do you price your services?</h3>
                <p className="text-white/70">
                  We offer both project-based and retainer pricing models. Our pricing is based on the scope,
                  complexity, and timeline of your project. We provide detailed proposals with transparent pricing after
                  our initial consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold">Ready to start your project?</h2>
              <p className="mb-8 text-white/70 md:text-lg">
                Contact us today to schedule a consultation and discuss your design needs.
              </p>
              <Button className="bg-[#5b5a5a] hover:bg-[#5b5a5a]/90 text-white">Schedule a Consultation</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
