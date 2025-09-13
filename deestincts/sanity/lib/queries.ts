import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const aboutFields = `
 _id,
 title,
 slug,
 content,
 teamMembers[] {
 name,
 role,
 bio,
 image,
 "projectVideos": projectVideos[]{
    title,
    "videoUrl": videoFile.asset->url,
    description,
    videoSettings
  },
 }
`

const projectFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  "featuredVideo": featuredVideo.asset->url,
  heroMediaType,
  projectType,
  isFeatured,
  client,
  "projectImages": projectImages[]{
    "url": asset->url,
    "alt": alt
  },
  description,
  "projectVideos": projectVideos[]{
    title,
    "videoUrl": videoFile.asset->url,
    description,
    videoSettings
  },
  externalVideos
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`);
export const getProjectQuery = defineQuery(`
  *[_type == 'project' && slug.current == $slug][0]{
    _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  "featuredVideo": featuredVideo.asset->url,
  heroMediaType,
  projectType,
  isFeatured,
  client,
  "projectImages": projectImages[]{
    "url": asset->url,
    "alt": alt
  },
  description,
  "projectVideos": projectVideos[]{
    title,
    "videoUrl": videoFile.asset->url,
    description,
    videoSettings
  },
  externalVideos,
  }
`);

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

// Then update the featured projects query
export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current) && isFeatured == true] | order(_updatedAt desc) {
    ${projectFields}
  }
`);

export const AllProjectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(_updatedAt desc) {
    ${projectFields}
  }
`);


export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const AboutQuery = defineQuery(`
  *[_type == "about"][0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${aboutFields}
  }
`);

export const AllPostsQuery = defineQuery(`
  *[_type == "post"] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);
