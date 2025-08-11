import { getAboutInfo } from "@/lib/sanity"
import type { Metadata } from "next"
import AboutContent from "../components/AboutPage"

export const metadata: Metadata = {
  title: "About Deestincts - Minimalist Portfolio",
  description:
    "Deestincts is a cross-disciplinary, privately-owned creative and digital design agency committed to helping brands express their uniqueness.",
}

export default async function AboutPage() {
  const aboutData = await getAboutInfo()

  return (
    <main className="pt-24 bg-[#161519]">
      {" "}
      {/* Ensure consistent background */}
      <AboutContent about={aboutData} />
    </main>
  )
}
