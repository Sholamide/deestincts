"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"


export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          required
          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          required
          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message"
          required
          className="min-h-[120px] border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#C3122B]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#C3122B] hover:bg-[#C3122B]/90 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {isSuccess && (
        <p className="text-center text-sm text-green-400">Thank you for your message! We&apos;ll get back to you soon.</p>
      )}
    </form>
  )
}
