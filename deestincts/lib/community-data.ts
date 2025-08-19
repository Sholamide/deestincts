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
      title: "Adobe Illustrator Mastery for Logo Design",
      description:
        "Master Adobe Illustrator from basics to advanced techniques specifically for creating professional logos and brand marks. Learn vector design principles, typography integration, and scalable logo systems.",
      instructor: "Chioma Adebayo",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "6 weeks",
      level: "Intermediate",
      status: "active",
      registrations: 247,
      maxCapacity: 300,
      price: 399000,
      startDate: "2024-02-15",
      endDate: "2024-04-10",
      category: "Software Training",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "adobe-illustrator-mastery-logo-design",
      rating: 4.9,
      totalReviews: 156,
      syllabus: [
        "Illustrator Interface & Essential Tools",
        "Vector Design Fundamentals",
        "Typography in Logo Design",
        "Color Theory & Brand Colors",
        "Logo Construction Techniques",
        "Creating Scalable Brand Marks",
        "Logo Variations & Applications",
        "Exporting for Different Media",
      ],
      prerequisites: [
        "Basic computer skills",
        "Adobe Illustrator installed (trial available)",
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
    {
      id: "2",
      title: "Brand Strategy & Identity Development",
      description:
        "Learn to create comprehensive brand strategies and develop complete visual identity systems. From brand positioning to visual guidelines, master the entire brand development process.",
      instructor: "Emeka Okafor",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "8 weeks",
      level: "Advanced",
      status: "active",
      registrations: 189,
      maxCapacity: 250,
      price: 599000,
      startDate: "2024-01-20",
      endDate: "2024-04-15",
      category: "Brand Strategy",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "brand-strategy-identity-development",
      rating: 4.8,
      totalReviews: 203,
      syllabus: [
        "Brand Research & Market Analysis",
        "Brand Positioning & Messaging",
        "Visual Identity Concepts",
        "Logo Design & Brand Marks",
        "Typography & Color Systems",
        "Brand Guidelines Creation",
        "Brand Application Design",
        "Client Presentation Techniques",
      ],
      prerequisites: ["Basic design knowledge", "Understanding of branding concepts", "Adobe Creative Suite access"],
      whatYouWillLearn: [
        "Develop comprehensive brand strategies",
        "Create complete visual identity systems",
        "Build professional brand guidelines",
        "Present brand concepts to clients",
        "Master the brand development process",
      ],
    },
    {
      id: "3",
      title: "Figma for Brand Design Systems",
      description:
        "Master Figma for creating scalable brand design systems, component libraries, and collaborative brand asset management. Perfect for modern brand designers.",
      instructor: "Aisha Bello",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "4 weeks",
      level: "Beginner",
      status: "active",
      registrations: 156,
      maxCapacity: 200,
      price: 0, // Free training
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      category: "Software Training",
      image: "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "figma-brand-design-systems",
      rating: 4.7,
      totalReviews: 89,
      syllabus: [
        "Figma Interface & Brand Workflows",
        "Creating Brand Component Libraries",
        "Typography & Color Systems",
        "Logo Variations & Brand Marks",
        "Collaborative Brand Asset Management",
        "Brand Template Creation",
        "Exporting Brand Assets",
      ],
      prerequisites: ["Basic design understanding", "Figma account (free)"],
      whatYouWillLearn: [
        "Build scalable brand design systems",
        "Create reusable brand components",
        "Collaborate effectively on brand projects",
        "Organize brand assets professionally",
      ],
    },
    {
      id: "4",
      title: "Typography Mastery for Brand Design",
      description:
        "Deep dive into typography for brand applications. Learn font pairing, custom lettering, and creating typographic brand systems that communicate effectively.",
      instructor: "Kemi Adeyemi",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "5 weeks",
      level: "Intermediate",
      status: "upcoming",
      registrations: 89,
      maxCapacity: 150,
      price: 299000,
      startDate: "2024-03-01",
      endDate: "2024-04-05",
      category: "Typography",
      image: "https://images.unsplash.com/photo-1461958508236-9a742665a0d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "typography-mastery-brand-design",
      rating: 4.6,
      totalReviews: 67,
      syllabus: [
        "Typography Fundamentals for Brands",
        "Font Psychology & Brand Personality",
        "Font Pairing Techniques",
        "Custom Lettering & Wordmarks",
        "Typographic Hierarchy Systems",
        "Typography in Brand Applications",
        "Web Typography for Brands",
      ],
      prerequisites: ["Basic typography knowledge", "Adobe Creative Suite or similar"],
      whatYouWillLearn: [
        "Master font selection for brand projects",
        "Create custom lettering and wordmarks",
        "Develop typographic brand systems",
        "Apply typography across brand touchpoints",
      ],
    },
    {
      id: "5",
      title: "Adobe Photoshop for Brand Photography",
      description:
        "Learn to enhance and manipulate brand photography, create brand-consistent imagery, and develop visual assets that align with brand identity guidelines.",
      instructor: "Folake Ojo",
      instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "6 weeks",
      level: "Intermediate",
      status: "upcoming",
      registrations: 134,
      maxCapacity: 180,
      price: 449000,
      originalPrice: 599000, // Discounted price
      startDate: "2024-03-15",
      endDate: "2024-04-26",
      category: "Software Training",
      image: "https://images.unsplash.com/photo-1627897181132-735874e6251f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "photoshop-brand-photography",
      rating: 4.8,
      totalReviews: 112,
      syllabus: [
        "Photoshop for Brand Designers",
        "Brand Photography Enhancement",
        "Color Grading for Brand Consistency",
        "Creating Brand Image Templates",
        "Photo Manipulation Techniques",
        "Brand Asset Creation",
        "Social Media Image Systems",
      ],
      prerequisites: ["Basic Photoshop knowledge", "Understanding of brand design"],
      whatYouWillLearn: [
        "Enhance brand photography professionally",
        "Create consistent brand imagery",
        "Develop brand photo templates",
        "Master color grading for brands",
      ],
    },
    {
      id: "6",
      title: "Brand Presentation & Client Pitching",
      description:
        "Master the art of presenting brand concepts to clients. Learn storytelling techniques, presentation design, and how to sell your brand ideas effectively.",
      instructor: "Chukwudi Nwachukwu",
      instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "3 weeks",
      level: "Beginner",
      status: "active",
      registrations: 78,
      maxCapacity: 120,
      price: 0, // Free training
      startDate: "2024-02-10",
      endDate: "2024-03-03",
      category: "Business Skills",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "brand-presentation-client-pitching",
      rating: 4.9,
      totalReviews: 45,
      syllabus: [
        "Brand Storytelling Fundamentals",
        "Presentation Design Principles",
        "Client Psychology & Communication",
        "Visual Presentation Techniques",
        "Handling Client Feedback",
        "Pricing & Proposal Strategies",
      ],
      prerequisites: ["Basic presentation skills", "Some brand design experience"],
      whatYouWillLearn: [
        "Present brand concepts confidently",
        "Create compelling brand presentations",
        "Handle client feedback effectively",
        "Develop pricing strategies",
      ],
    },
    {
      id: "7",
      title: "InDesign for Brand Guidelines & Collateral",
      description:
        "Master Adobe InDesign for creating professional brand guidelines, marketing collateral, and brand documentation that maintains consistency across all touchpoints.",
      instructor: "Zainab Yusuf",
      instructorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "7 weeks",
      level: "Intermediate",
      status: "upcoming",
      registrations: 167,
      maxCapacity: 220,
      price: 349000,
      originalPrice: 449000, // Discounted price
      startDate: "2024-03-20",
      endDate: "2024-05-08",
      category: "Software Training",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "indesign-brand-guidelines-collateral",
      rating: 4.7,
      totalReviews: 134,
      syllabus: [
        "InDesign for Brand Designers",
        "Brand Guidelines Layout Design",
        "Typography & Style Systems",
        "Brand Collateral Templates",
        "Print Production for Brands",
        "Digital Brand Documentation",
        "Brand Asset Organization",
      ],
      prerequisites: ["Basic InDesign knowledge", "Understanding of brand systems"],
      whatYouWillLearn: [
        "Create professional brand guidelines",
        "Design brand collateral templates",
        "Master print production workflows",
        "Organize brand documentation effectively",
      ],
    },
    {
      id: "8",
      title: "Color Theory & Brand Psychology",
      description:
        "Explore the psychology of color in branding, learn to create effective color palettes, and understand how color influences brand perception and consumer behavior.",
      instructor: "Bukola Adekunle",
      instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "4 weeks",
      level: "Beginner",
      status: "archived",
      registrations: 203,
      maxCapacity: 250,
      price: 199000,
      originalPrice: 299000, // Was discounted
      startDate: "2023-11-01",
      endDate: "2023-11-30",
      category: "Design Theory",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "color-theory-brand-psychology",
      rating: 4.8,
      totalReviews: 187,
      syllabus: [
        "Color Theory Fundamentals",
        "Psychology of Color in Branding",
        "Creating Brand Color Palettes",
        "Color Accessibility & Contrast",
        "Cultural Color Considerations",
        "Color Application Strategies",
      ],
      prerequisites: ["Basic design understanding"],
      whatYouWillLearn: [
        "Understand color psychology principles",
        "Create effective brand color palettes",
        "Apply color strategically in brand design",
        "Consider cultural color implications",
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
  