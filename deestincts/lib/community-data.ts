export interface Training {
    id: string
    title: string
    description: string
    instructor: string
    instructorImage: string
    duration: string
    level: "Beginner" | "Intermediate" | "Advanced"
    status: "active" | "archived" | "upcoming"
    registrations: number
    maxCapacity: number
    price: number
    originalPrice?: number // For discounted trainings
    startDate: string
    endDate: string
    category: string
    image: string
    slug: string
    rating: number
    totalReviews: number
    syllabus: string[]
    prerequisites: string[]
    whatYouWillLearn: string[]
  }
  
  export interface Publication {
    id: string
    title: string
    description: string
    author: string
    publishDate: string
    readTime: string
    category: string
    image: string
    slug: string
    downloadUrl?: string
    isPremium: boolean
  }
  
  export interface Review {
    id: string
    trainingId: string
    author: string
    authorImage: string
    rating: number
    comment: string
    date: string
    verified: boolean
  }
  
  export const trainings: Training[] = [
    {
      id: "1",
      title: "Ctrl + Chill",
      description:
        "Not another design class. Learn as you have fun, analyse projects real-time, and pitch & secure an internship role. Only 25 spots available at CR8TIVE SPACE in Lagos.",
      instructor: "deostincts",
      instructorImage: "/skilluplogo.png",
      duration: "1 day",
      level: "Beginner",
      status: "upcoming",
      registrations: 0,
      maxCapacity: 25,
      price: 25000,
      startDate: "2026-02-26",
      endDate: "2026-02-26",
      category: "Design Workshop",
      image: "/ctrlchill.jpeg",
      slug: "ctrl-chill",
      rating: 4.9,
      totalReviews: 0,
      syllabus: [
        "Learn as you have fun",
        "Analyse Projects Real time",
        "Pitch & Secure an internship Role",
        "Interactive Design Sessions",
        "Real-time Project Critique",
        "Portfolio Review & Feedback",
        "Networking with Designers",
        "Industry Insights & Best Practices",
      ],
      prerequisites: [
        "Basic computer skills",
        "Laptop with internet connection",
        "Interest in design",
      ],
      whatYouWillLearn: [
        "Learn design principles while having fun",
        "Analyse real-world projects in real-time",
        "Develop confidence in presenting your work",
        "Network with fellow designers and professionals",
        "Pitch effectively to secure internship opportunities",
      ],
    },
    {
      id: "1",
      title: "SkillUp 50",
      description:
        " Join Nigeria's most exclusive tech bootcamp. Only 50 spots available for this intensive program in Lagos.",
      instructor: "Multiple Instructors",
      instructorImage: "/skilluplogo.png",
      duration: "7 days",
      level: "Beginner",
      status: "archived",
      registrations: 50,
      maxCapacity: 50,
      price: 0,
      startDate: "2025-12-01",
      endDate: "2025-12-07",
      category: "Upskill Training",
      image: "/skilluplogo.png",
      slug: "skill-up-50",
      rating: 4.9,
      totalReviews: 156,
      syllabus: [
        "Illustrator Interface & Essential Tools",
        "Vector Design Fundamentals",
        "Web Fundamentals",
        "Typography in Logo Design",
        "Color Theory & Brand Colors",
        "Logo Construction Techniques",
        "Creating Scalable Brand Marks",
        "Logo Variations & Applications",
        "Exporting for Different Media",
      ],
      prerequisites: [
        "Basic computer skills",
        "Laptop with internet connection",
        "Interest in logo design",
      ],
      whatYouWillLearn: [
        "Create professional logos from concept to completion",
        "Master advanced Illustrator tools and techniques",
        "Develop scalable brand mark systems",
        "Export logos for print and digital use",
        "Build a professional logo portfolio",
      ],
    },
  ]
  
  export const publications: Publication[] = [
    {
      id: "1",
      title: "The Future of Design Systems",
      description: "A comprehensive guide to building scalable design systems that evolve with your product and team.",
      author: "Chioma Adebayo",
      publishDate: "2024-01-15",
      readTime: "12 min read",
      category: "Design Systems",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "future-of-design-systems",
      downloadUrl: "/downloads/design-systems-guide.pdf",
      isPremium: false,
    },
    {
      id: "2",
      title: "Accessibility in Modern Web Design",
      description: "Essential practices for creating inclusive digital experiences that work for everyone.",
      author: "Emeka Okafor",
      publishDate: "2024-01-08",
      readTime: "8 min read",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "accessibility-modern-web-design",
      downloadUrl: "/downloads/accessibility-guide.pdf",
      isPremium: true,
    },
    {
      id: "3",
      title: "Brand Identity Trends 2024",
      description: "Explore the latest trends shaping brand identity design and visual communication.",
      author: "Aisha Bello",
      publishDate: "2023-12-20",
      readTime: "15 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "brand-identity-trends-2024",
      isPremium: false,
    },
    {
      id: "4",
      title: "Performance Optimization for Designers",
      description: "Technical guide to optimizing design assets and improving website performance.",
      author: "Kemi Adeyemi",
      publishDate: "2023-12-10",
      readTime: "10 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1555066931-4365d9b9354c?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "performance-optimization-designers",
      downloadUrl: "/downloads/performance-guide.pdf",
      isPremium: true,
    },
  ]
  
  export const reviews: Review[] = [
    {
      id: "1",
      trainingId: "1",
      author: "Bukola Adekunle",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      comment:
        "This masterclass completely transformed my approach to UX design. Chioma's teaching style is exceptional, and the practical exercises were incredibly valuable. I've already implemented several techniques in my current projects.",
      date: "2024-01-20",
      verified: true,
    },
    {
      id: "2",
      trainingId: "1",
      author: "Chukwudi Nwachukwu",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      comment:
        "Outstanding course! The depth of content and real-world applications made this worth every penny. The design system module alone was worth the entire course fee.",
      date: "2024-01-18",
      verified: true,
    },
    {
      id: "3",
      trainingId: "1",
      author: "Zainab Yusuf",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      comment:
        "Great course with comprehensive content. The instructor is knowledgeable and the community support is fantastic. Would recommend to anyone serious about UX design.",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: "4",
      trainingId: "2",
      author: "Folake Ojo",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      comment:
        "Emeka is an incredible instructor! The bootcamp structure is perfect for learning modern frontend development. The projects were challenging but rewarding.",
      date: "2024-01-22",
      verified: true,
    },
    {
      id: "5",
      trainingId: "2",
      author: "Aisha Bello",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      comment:
        "This bootcamp exceeded my expectations. The curriculum is up-to-date with industry standards, and the hands-on approach really helped solidify the concepts.",
      date: "2024-01-19",
      verified: true,
    },
  ]
  
  export function getTrainingBySlug(slug: string): Training | undefined {
    return trainings.find((training) => training.slug === slug)
  }
  
  export function getReviewsByTrainingId(trainingId: string): Review[] {
    return reviews.filter((review) => review.trainingId === trainingId)
  }
  
  export function getCommunityStats() {
    return {
      totalMembers: 2847,
      activeTrainings: trainings.filter((t) => t.status === "active").length,
      totalPublications: publications.length,
      averageRating: 4.8,
      totalGraduates: 1256,
      countriesReached: 47,
    }
  }
  