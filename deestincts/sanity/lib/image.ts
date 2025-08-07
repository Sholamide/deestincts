import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { token } from "./token";

export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(publicClient)

export function urlFor(source: any) {
  return builder.image(source)
}
