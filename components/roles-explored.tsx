"use client"

import type React from "react"

import { Camera, PenTool, Film, Lightbulb, Users, BookOpen, Palette, Compass } from "lucide-react"
import { motion } from "framer-motion"

interface Role {
  title: string
  description: string
  icon: React.ReactNode
}

const roles: Role[] = [
  {
    title: "UI/UX Designer",
    description:
      "Capturing moments and stories through the lens, specializing in documentary and fine art photography.",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: "Front-End Developer",
    description: "Creating cohesive visual systems and thoughtful compositions for editorial and commercial projects.",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: "Presentation Designer",
    description: "Exploring visual storytelling through motion, light, and composition in video projects.",
    icon: <Film className="h-6 w-6" />,
  },
  {
    title: "Layout Designer",
    description: "Assisted in designing print materials such as brochures for events and outreach programs, focusing on clarity, structure, and visual appeal.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Videographer",
    description: "Leading photography workshops and educational sessions for aspiring visual artists.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Photographer",
    description: "Took photos for internal documentation and social media during important events, helping visually represent the agency’s work and impact.",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "Technical Assistant",
    description: "Helped in setting up computers, installing operating systems, configuring software, and assisting walk-in clients—gaining valuable technical troubleshooting skills.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Video Editor",
    description: "Edited video content for internal presentations and recap videos, enhancing the narrative through transitions, captions, and sound adjustments.",
    icon: <Film className="h-6 w-6" />,
  },
]

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

export function RolesExplored() {
  return (
    <section className="mb-16">
      <h2 className="text-xl uppercase tracking-wider mb-8 font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
        Roles I Explored
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-2">
              <div className="bg-gray-900 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                {role.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{role.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{role.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
