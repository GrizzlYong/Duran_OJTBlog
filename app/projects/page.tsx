import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Tag } from "lucide-react"
import { featuredProjects } from "@/data/featured-projects"

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">Maidon</h1>
        <h2 className="text-2xl font-medium mb-2">Projects</h2>
        <p className="text-gray-600 max-w-2xl">
          A curated collection of visual explorations and creative work spanning various mediums and themes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {featuredProjects.map((project) => (
          <div key={project.id} className="group">
            <Link href={`/projects/${project.slug}`}>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md mb-4">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>

              {/* Roles tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.roles.map((role, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-3 w-3 mr-1" /> {role}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center text-sm text-gray-900 hover:underline">
                View Project <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
