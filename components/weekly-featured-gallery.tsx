"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

// Sample gallery images - in a real app, this would come from a CMS or database
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=300&text=Week 1",
    alt: "Featured image week 1",
    week: "Week of May 6, 2024",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=300&text=Week 2",
    alt: "Featured image week 2",
    week: "Week of May 13, 2024",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=300&text=Week 3",
    alt: "Featured image week 3",
    week: "Week of May 20, 2024",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=300&text=Week 4",
    alt: "Featured image week 4",
    week: "Week of May 27, 2024",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=300&text=Week 5",
    alt: "Featured image week 5",
    week: "Week of June 3, 2024",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=300&text=Week 6",
    alt: "Featured image week 6",
    week: "Week of June 10, 2024",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=300&width=300&text=Week 7",
    alt: "Featured image week 7",
    week: "Week of June 17, 2024",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=300&width=300&text=Week 8",
    alt: "Featured image week 8",
    week: "Week of June 24, 2024",
  },
]

// Animation variants for the gallery items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function WeeklyFeaturedGallery() {
  const [currentWeek, setCurrentWeek] = useState("")

  useEffect(() => {
    // Get the current date to determine which week to highlight
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const weekNumber = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7)

    // Format the current week string
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" }
    const formattedDate = now.toLocaleDateString("en-US", options)
    setCurrentWeek(`Week of ${formattedDate}`)
  }, [])

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-xl uppercase tracking-wider font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
          Featured Gallery
        </h2>
        <div className="flex items-center mt-4 md:mt-0 text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>New selections each week • Current: {currentWeek}</span>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((image) => (
          <motion.div key={image.id} className="group" variants={itemVariants}>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                <div className="p-4 w-full">
                  <span className="inline-block px-2 py-1 bg-white/80 text-gray-900 text-xs rounded-full">
                    {image.week}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center text-gray-900 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
