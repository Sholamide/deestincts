export interface Project {
  _id: string
  title: string
  excerpt: string
  slug: string
  featuredImage?: any
  featuredVideo?: any
  heroMediaType: 'image' | 'video'
  projectType: string[];
  isFeatured?: boolean // Updated from 'featured' to match schema
  client?: any
  description?: any[]
  projectImages?: any[]
  projectVideos?: any[]
  externalVideos?: any[]
}

export interface Post {
  _id: string
  author: any,
  title: string
  excerpt: any
  content: any
  coverImage?: any
  slug: string
  date: string
}

export interface NewsItem {
  _id: string
  title: string
  excerpt: string
  content: string
  image?: string
  slug: string
  type: 'registration' | 'cohort' | 'announcement'
  formFields?: FormField[]
}

export interface FormField {
  name: string
  type: 'text' | 'email' | 'select' | 'textarea' | 'date'
  label: string
  required?: boolean
  options?: string[]
}

export interface About {
  _id: string
  slug: string
  title: string
  content: any
  featuredVideo?:any
  teamMembers?: TeamMember[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
}
