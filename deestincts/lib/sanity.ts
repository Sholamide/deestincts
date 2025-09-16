import { client } from "@/sanity/lib/client";
import { AboutQuery, AllPostsQuery, AllProjectsQuery, AllTeamMembersQuery } from "@/sanity/lib/queries";


export const getProjects = async () => {
  const projects = await client.fetch(AllProjectsQuery);
  return projects;
}

export async function getPosts({ limit = 6, offset = 0 }: { limit?: number; offset?: number } = {}) {
  const start = offset;
  const end = offset + limit;
  const posts = await client.fetch(AllPostsQuery, { start, end });
  return posts;
}


export const getAboutInfo = async () => {
  const about = await client.fetch(AboutQuery);
  return about;
}

export const getMembers = async () => {
  const members = await client.fetch(AllTeamMembersQuery);
  return members;
}

