import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { featuredProjects } from "@/data/featured-projects"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project that matches the slug
  const project = featuredProjects.find((p) => p.slug === params.slug)

  // If project not found, return 404
  if (!project) {
    notFound()
  }

  // Get related projects (excluding the current one)
  const relatedProjects = featuredProjects.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> All Projects
          </Link>
        </div>

        {/* Project title */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">{project.title}</h1>

        {/* Project roles */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.roles.map((role, index) => (
            <span
              key={index}
              className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-4 py-1 rounded-full"
            >
              <Tag className="h-4 w-4 mr-2" /> {role}
            </span>
          ))}
        </div>

        {/* Project description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{project.description}</p>

        {/* Featured image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10">
          <Image
            src={project.imageSrc || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project content - placeholder content */}
        <article className="prose prose-gray max-w-none mb-12">
          <p>
            This project explores the intersection of form, space, and visual narrative through a series of carefully
            composed images. Each photograph is an invitation to see the world through a different lens, finding beauty
            in simplicity and meaning in the mundane.
          </p>

          <h2>Project Background</h2>
          <p>
            The concept for this series emerged from a fascination with how minimal elements can create powerful visual
            statements. Inspired by the work of photographers like Hiroshi Sugimoto and Rinko Kawauchi, this project
            seeks to distill scenes to their essential elements.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Detail 1"
                alt="Project detail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Detail 2"
                alt="Project detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2>Process and Approach</h2>
          <p>
            Each image in this series was created with careful attention to composition, light, and timing. Working
            primarily with natural light, I sought moments when form and shadow aligned to create visual harmony.
          </p>

          <p>
            The project spanned several months, allowing me to revisit locations under different conditions and refine
            my approach to each subject. This iterative process was essential to developing a cohesive visual language
            throughout the series.
          </p>

          <div className="relative h-80 rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Project Overview"
              alt="Project overview"
              fill
              className="object-cover"
            />
          </div>

          <h2>Exhibition and Reception</h2>
          <p>
            This work was first exhibited at the Contemporary Art Gallery in New York in Spring 2024. The installation
            featured large-format prints arranged to create a dialogue between images, inviting viewers to discover
            connections and contrasts.
          </p>

          <p>
            The project has been featured in several publications, including Photography Monthly and Visual Arts Review,
            where critics noted its "thoughtful approach to composition" and "meditative quality."
          </p>
        </article>

        {/* Project metadata */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h3 className="font-medium text-lg text-gray-900 mb-4">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Year</p>
              <p className="text-base text-gray-900">2023-2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Location</p>
              <p className="text-base text-gray-900">Various locations, USA</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Medium</p>
              <p className="text-base text-gray-900">Digital and analog photography</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Exhibition</p>
              <p className="text-base text-gray-900">Contemporary Art Gallery, New York</p>
            </div>
          </div>
        </div>

        {/* Related projects */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((relatedProject) => (
              <div key={relatedProject.id} className="group">
                <Link href={`/projects/${relatedProject.slug}`}>
                  <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={relatedProject.imageSrc || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{relatedProject.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More Featured Projects */}
      <div className="mt-16">
        <FeaturedProjects />
      </div>
    </main>
  )
}
