"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send message");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error("Contact form error:", err);
      alert(
        `There was an error sending your message: ${err.message || "Please try again later."
        }`
      );
    }
  };

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
                Have a project in mind? Let&apos;s discuss how we can help transform your brand with exceptional
                design.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Left column: Contact Information */}
              <div>
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <Mail className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Email Us</h3>
                      <a
                        href="mailto:contact@deestincts.com"
                        className="text-white/70 hover:underline"
                      >
                        contact@deestincts.com
                      </a>
                    </div>
                  </div>

                  {/* Phone (Call) */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <Phone className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Call Us</h3>
                      <a
                        href="tel:+2348135154634"
                        className="text-white/70 hover:underline"
                      >
                        08135154634
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <MessageCircle className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">WhatsApp</h3>
                      <a
                        href="https://wa.me/2349054356854"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:underline"
                      >
                        09054356854
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#C3122B]/10 p-3">
                      <MapPin className="h-6 w-6 text-[#5b5a5a]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">Visit Us</h3>
                      <p className="text-white/70">Ogudu GRA,</p>
                      <p className="text-white/70">Lagos State</p>
                      <p className="text-white/70">Nigeria</p>
                    </div>
                  </div>

                  {/* Office Hours */}
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

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="mb-4 text-lg font-medium">Connect With Us</h3>
                  <div className="flex space-x-5">
                    <Link href="https://www.facebook.com/share/1FSHbzwvxD/?mibextid=LQQJ4d" target="_blank">
                      <Image src="/socialicons-03.svg" alt="Facebook" width={32} height={32} />
                    </Link>
                    <Link href="https://twitter.com/Deestincts_" target="_blank">
                      <Image src="/socialicons-01.svg" alt="Twitter" width={32} height={32} />
                    </Link>
                    <Link href="https://www.instagram.com/deestincts?igsh=MTZiMzdicGU3NTlwbw%3D%3D&utm_source=qr" target="_blank">
                      <Image src="/socialicons-02.svg" alt="Instagram" width={32} height={32} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/deestincts/" target="_blank">
                      <Image src="/socialicons-04.svg" alt="LinkedIn" width={32} height={32} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right column: Contact Form */}
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
                        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                          })}
                          placeholder="Your email"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                        />
                        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
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
                      {errors.subject && <p className="text-sm text-red-400">{errors.subject.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                          minLength: { value: 10, message: "Message should be at least 10 characters" },
                        })}
                        placeholder="Your message"
                        className="min-h-[150px] border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                      />
                      {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#5b5a5a] hover:bg-[#5b5a5a]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
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
        {/* <section className="py-16 md:py-24">
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
                    <Link href="https://www.facebook.com/share/1FSHbzwvxD/?mibextid=LQQJ4d" target="_blank">
                      <Image src="/socialicons-03.svg" alt="Facebook" width={24} height={24} />
                    </Link>
                    <Link href="https://twitter.com/Deestincts_" target="_blank">
                      <Image src="/socialicons-01.svg" alt="Twitter" width={24} height={24} /></Link>
                    <Link href="https://www.instagram.com/deestincts?igsh=MTZiMzdicGU3NTlwbw%3D%3D&utm_source=qr" target="_blank">
                      <Image src="/socialicons-02.svg" alt="Instagram" width={24} height={24} /></Link>
                    <Link href="https://www.linkedin.com/company/deestincts/" target="_blank">
                      <Image src="/socialicons-04.svg" alt="LinkedIn" width={24} height={24} /></Link>
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
                        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                          })}
                          placeholder="Your email"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                        />
                        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
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
                      {errors.subject && <p className="text-sm text-red-400">{errors.subject.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                          minLength: { value: 10, message: "Message should be at least 10 characters" },
                        })}
                        placeholder="Your message"
                        className="min-h-[150px] border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#5b5a5a]"
                      />
                      {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#5b5a5a] hover:bg-[#5b5a5a]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
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
        </section> */}

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
  );
}