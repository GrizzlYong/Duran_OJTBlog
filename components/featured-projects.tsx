import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Tag } from "lucide-react"
import { featuredProjects } from "@/data/featured-projects"

export function FeaturedProjects() {
  return (
    <section className="mb-16">
      <h2 className="text-xl uppercase tracking-wider mb-8 font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {featuredProjects.slice(0, 2).map((project) => (
          <div key={project.id} className="group">
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

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm text-gray-900 mt-1 hover:underline"
            >
              View Project <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
