"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FeaturedProjects } from "@/components/featured-projects"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false)

  // Generate 12 placeholder images for the gallery
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=600&width=600&text=Gallery Image ${i + 1}`,
    alt: `Gallery image ${i + 1}`,
    category: i % 3 === 0 ? "DOST V Family" : i % 3 === 1 ? "Event" : "Projects",
  }))

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  // Animation variants
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

  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading more images
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">Maidon</h1>
        <h2 className="text-2xl font-medium mb-2">Gallery</h2>
        <p className="text-gray-600 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategory === "All" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategory === "DOST V Family" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("DOST V Family")}
        >
          DOST V Family
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategory === "Event" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("Event")}
        >
          Event
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategory === "Projects" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("Projects")}
        >
          Projects
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory} // Re-run animation when category changes
      >
        {filteredImages.map((image) => (
          <motion.div key={image.id} className="group" variants={itemVariants}>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                <div className="p-4 w-full">
                  <span className="inline-block px-2 py-1 bg-white/80 text-gray-900 text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-xs">{image.week}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 mb-16">
        <div className="flex justify-center">
          <button
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-900 hover:bg-gray-100 transition-colors flex items-center"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  )
}
