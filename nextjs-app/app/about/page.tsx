import Image from "next/image";
import Link from "next/link";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import { TeamMember } from "../components/team-member";
import { Button } from "../components/ui/button";

const clients = [
  {
    name: "Youtube",
    logo: "/images/youtube.jpg",
  },
  {
    name: "Spotify",
    logo: "/images/spotify.jpg",
  },
  {
    name: "Discord",
    logo: "/images/discord.jpg",
  },
  {
    name: "Snapchat",
    logo: "/images/snapchat.jpg",
  },
  {
    name: "Tiktok",
    logo: "/images/tiktok.jpg",
  },
  {
    name: "Instagram",
    logo: "/images/instagram.jpg",
  },
  {
    name: "Tesla",
    logo: "/images/tesla.jpg",
  },
  {
    name: "Random",
    logo: "/images/random.jpg",
  },
  {
    name: "Twitter",
    logo: "/images/twitter.jpg",
  },

];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#161519] text-white">
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#161519] opacity-90"></div>
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#C3122B] opacity-10 blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                We are <span className="text-[#C3122B]">Deestincts</span>
              </h1>
              <p className="mb-8 text-xl text-white/70">
                A team of passionate designers and developers dedicated to
                creating exceptional digital experiences that inspire and drive
                results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                  <span className="text-[#C3122B] font-medium">Our Story</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Crafting digital excellence since 2012
                </h2>
                <p className="text-white/70">
                  Founded with a vision to bridge the gap between aesthetics and
                  functionality, Deestincts has evolved into a leading design
                  agency serving clients across the globe. Our journey began
                  with a small team of passionate designers who believed in the
                  power of thoughtful design to transform businesses.
                </p>
                <p className="text-white/70">
                  Today, we&apos;re a diverse team of creatives, strategists,
                  and developers working together to deliver exceptional digital
                  experiences. We&apos;ve grown, but our core values remain the
                  same: creativity, precision, and a relentless focus on
                  results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#C3122B]/10 p-2">
                      <Award className="h-5 w-5 text-[#C3122B]" />
                    </div>
                    <span className="font-medium">15+ Industry Awards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#C3122B]/10 p-2">
                      <Users className="h-5 w-5 text-[#C3122B]" />
                    </div>
                    <span className="font-medium">25+ Creative Experts</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C3122B] opacity-20 blur-2xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80"
                    alt="Our team at work"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-[#C3122B] font-medium">Our Values</span>
              </div>
              <h2 className="mb-12 mt-4 text-3xl font-bold tracking-tighter md:text-4xl">
                The principles that guide our work
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 rounded-full bg-[#C3122B]/10 p-3 w-fit">
                  <Target className="h-6 w-6 text-[#C3122B]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Precision</h3>
                <p className="text-white/70">
                  We believe in meticulous attention to detail. Every pixel,
                  every interaction, every line of code is crafted with purpose
                  and precision.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 rounded-full bg-[#C3122B]/10 p-3 w-fit">
                  <Lightbulb className="h-6 w-6 text-[#C3122B]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Innovation</h3>
                <p className="text-white/70">
                  We constantly push boundaries and explore new possibilities.
                  Innovation is at the heart of everything we do, driving us to
                  create unique solutions.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 rounded-full bg-[#C3122B]/10 p-3 w-fit">
                  <Users className="h-6 w-6 text-[#C3122B]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Collaboration</h3>
                <p className="text-white/70">
                  We believe great work happens through partnership. We work
                  closely with our clients, fostering transparent communication
                  and shared vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-[#C3122B] font-medium">Our Team</span>
              </div>
              <h2 className="mb-12 mt-4 text-3xl font-bold tracking-tighter md:text-4xl">
                Meet the creative minds behind Deestincts
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMember
                name="Alex Morgan"
                position="Creative Director"
                image="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80"
                socialLinks={{
                  twitter: "#",
                  linkedin: "#",
                  dribbble: "#",
                }}
              />
              <TeamMember
                name="Samantha Chen"
                position="Lead UI/UX Designer"
                image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80"
                socialLinks={{
                  twitter: "#",
                  linkedin: "#",
                  dribbble: "#",
                }}
              />
              <TeamMember
                name="David Wilson"
                position="Technical Director"
                image="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80"
                socialLinks={{
                  twitter: "#",
                  linkedin: "#",
                  github: "#",
                }}
              />
              <TeamMember
                name="Olivia Martinez"
                position="Project Manager"
                image="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80"
                socialLinks={{
                  twitter: "#",
                  linkedin: "#",
                }}
              />
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-transparent border border-[#C3122B] text-white hover:bg-[#C3122B]">
                Join Our Team
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-[#C3122B] font-medium">Recognition</span>
              </div>
              <h2 className="mb-12 mt-4 text-3xl font-bold tracking-tighter md:text-4xl">
                Awards & Recognition
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-[#C3122B]" />
                </div>
                <h3 className="mb-1 text-xl font-bold">Webby Awards</h3>
                <p className="mb-2 text-sm text-white/70">
                  Best User Experience, 2023
                </p>
                <p className="text-white/50">
                  Recognized for our exceptional user experience design on the
                  GlobalTech platform.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-[#C3122B]" />
                </div>
                <h3 className="mb-1 text-xl font-bold">Awwwards</h3>
                <p className="mb-2 text-sm text-white/70">
                  Site of the Day, 2022
                </p>
                <p className="text-white/50">
                  Our work for Luxury Brand Redesign was featured as Site of the
                  Day for its innovative design.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-[#C3122B]" />
                </div>
                <h3 className="mb-1 text-xl font-bold">CSS Design Awards</h3>
                <p className="mb-2 text-sm text-white/70">
                  Best UI Design, 2023
                </p>
                <p className="text-white/50">
                  Honored for our outstanding UI design work on the Financial
                  App interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="text-[#C3122B] font-medium">Our Clients</span>
              </div>
              <h2 className="mb-12 mt-4 text-3xl font-bold tracking-tighter md:text-4xl">
                Trusted by industry leaders
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {clients.map((client) => (
                <div 
                  key={client.name} 
                  className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain filter-none hover:brightness-110 transition-all duration-300"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to work with us?
              </h2>
              <p className="mb-8 text-white/70 md:text-lg">
                Let&apos;s discuss how we can help transform your brand with
                exceptional design that drives real business results.
              </p>
              <Link href="/contact">
                <Button className="bg-[#C3122B] hover:bg-[#C3122B]/90 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
