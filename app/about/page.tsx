import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { RolesExplored } from "@/components/roles-explored"

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">Midday</h1>
        <h2 className="text-2xl font-medium mb-2">About</h2>
        <p className="text-gray-600 max-w-2xl">The story, process, and philosophy behind my creative work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-md">
          <Image
            src="/placeholder.svg?height=900&width=700&text=Portrait"
            alt="Artist portrait"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
            What I Do
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            I'm a photographer and visual artist specializing in capturing moments that tell compelling stories. My work
            explores the relationship between light, composition, and narrative, creating visual experiences that invite
            viewers to see the world from new perspectives.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Through my photography, I aim to document both the extraordinary and the everyday, finding beauty in
            unexpected places and revealing the stories that often go unnoticed in our fast-paced world.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            My images have been featured in galleries across the country and in publications dedicated to visual arts
            and contemporary photography.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-gray-900 border border-gray-300 px-4 py-2 rounded-full mt-4 hover:bg-gray-100 transition-colors"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Roles I Explored - Added to About page as well */}
      <RolesExplored />

      <div className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-xl font-medium text-gray-900 mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
          Exhibitions
        </h3>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b">
            <div className="relative w-full md:w-48 h-32 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Exhibition 1"
                alt="Exhibition"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1 text-gray-900">Visual Narratives</h4>
              <p className="text-sm text-gray-600 mb-2">March 7 - June 30, 2024</p>
              <p className="text-sm text-gray-700">Contemporary Art Gallery, New York</p>
              <p className="text-sm text-gray-600 mt-2">
                A collection exploring the power of visual storytelling through minimalist composition.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b">
            <div className="relative w-full md:w-48 h-32 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Exhibition 2"
                alt="Exhibition"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1 text-gray-900">Form & Light</h4>
              <p className="text-sm text-gray-600 mb-2">October 12 - December 15, 2023</p>
              <p className="text-sm text-gray-700">Modern Art Museum, San Francisco</p>
              <p className="text-sm text-gray-600 mt-2">
                An exploration of how light shapes our perception of form and space.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="relative w-full md:w-48 h-32 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Exhibition 3"
                alt="Exhibition"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1 text-gray-900">Perspectives</h4>
              <p className="text-sm text-gray-600 mb-2">May 5 - August 20, 2023</p>
              <p className="text-sm text-gray-700">International Photography Center, Chicago</p>
              <p className="text-sm text-gray-600 mt-2">
                A series examining how viewpoint transforms ordinary subjects into extraordinary images.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-2xl mb-16">
        <h3 className="text-xl font-medium mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-white after:mt-2">
          Contact
        </h3>
        <p className="text-base mb-6">For inquiries about exhibitions, prints, or collaborations, please reach out:</p>
        <p className="text-xl mb-2">contact@middaystudio.com</p>
        <Link
          href="/contact"
          className="inline-flex items-center text-white border border-white/30 px-4 py-2 rounded-full mt-4 hover:bg-white/10 transition-colors"
        >
          Send a Message <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  )
}
