import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import { getAboutInfo, getPosts, getProjects } from "@/lib/sanity";
import ProjectsSection from "./components/Projects";
import PostsSection from "./components/PostsSection";
import AboutSection from "./components/AboutSection";

export default async function Page() {
  const [projects, posts, about] = await Promise.all([
    getProjects(),
    getPosts(),
    getAboutInfo()
  ])

  return (
    <>
      <main className="bg-white text-black">
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <HeroSection projects={projects.slice(0, 5)} />
        </Suspense>
        <AboutSection about={about} />
        <ProjectsSection projects={projects} />
        <PostsSection posts={posts} />
      </main>
    </>
  );
}