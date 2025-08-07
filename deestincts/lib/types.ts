export interface Project {
    _id: string
    title: string
    excerpt: string
    featuredImage?:any;
    // featuredImage?: {
    //   _type: 'image';
    //   alt: string;
    //   asset: any;
    // };
    slug: string
    projectType: string[];
    featured?: boolean
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
    slug:string
    title:string
    content: any
    teamMembers?: TeamMember[]
  }
  
  export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
  }
  