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
    description: "An appointment system.",
    imageSrc: "/images/week 12/week12.jpg",
    slug: "rstl-appointment-system",
    roles: ["Front-End Developer", "UI/UX Designer"],
  },
  {
    id: 2,
    title: "Customer Satisfaction Feedback System",
    description: "A CSF/ARTA form feedback.",
    imageSrc: "/images/week 11/rstl.png",
    slug: "customer-satisfaction-feedback-system",
    roles: ["UI/UX Designer"],
  },
]
