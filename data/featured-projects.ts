export interface FeaturedProject {
  id: number
  title: string
  description: string
  imageSrc: string
  slug: string
  roles: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "RSTL Apppointment System",
    description: "An exploration of form and space through minimalist composition and thoughtful framing.",
    imageSrc: "/placeholder.svg?height=600&width=800&text=Project 1",
    slug: "minimalist",
    roles: ["Front-End Developer", "UI/UX Designer"],
  },
  {
    id: 2,
    title: "Customer Satisfaction Feedback System",
    description: "Documenting the patterns and textures of city life through a series of visual studies.",
    imageSrc: "/placeholder.svg?height=600&width=800&text=Project 2",
    slug: "urban",
    roles: ["UI/UX Designer"],
  },
]
