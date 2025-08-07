import { client } from "@/sanity/lib/client";
import { AboutQuery, AllPostsQuery, projectQuery } from "@/sanity/lib/queries";


export const getProjects = async () => {
  const projects = await client.fetch(projectQuery);
  return projects;
}

export const getPosts = async () => {
  const posts = await client.fetch(AllPostsQuery);
  return posts;
}

export const getAboutInfo = async () => {
  const about = await client.fetch(AboutQuery);
  return about;
}