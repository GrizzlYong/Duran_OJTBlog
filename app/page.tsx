import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { WeeklyFeaturedGallery } from "@/components/weekly-featured-gallery"
import { WeeklyBlogHighlight } from "@/components/weekly-blog-highlight"
import { RolesExplored } from "@/components/roles-explored"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">On-The-Job Training </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Capturing moments and sharing stories through visual storytelling and creative exploration.
        </p>
      </header>

      {/* Hero Image */}
      <section className="mb-16 rounded-2xl overflow-hidden shadow-lg">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="images/week 1/dost.jpg"
            alt="Featured work"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-2">Department Of Science and Technology V</h2>
            <p className="text-white/80 max-w-xl mb-4"> Promotes science, technology, and innovation to drive sustainable development and improve the quality of life in the Bicol Region.</p>
            <Link
              href="/blog"
              className="inline-flex items-center text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/50 transition-colors w-fit"
            >
              Weekly Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly Blog Highlight */}
      <WeeklyBlogHighlight />

      {/* Roles I Explored - New Section */}
      <RolesExplored />

      {/* What I Do */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-xl uppercase tracking-wider mb-8 font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative w-full h-[550px] overflow-hidden rounded-xl shadow-md">
            <Image src="images/week 2/481969391_1279461326469290_5745583622344048454_n.jpg?height=1400&width=600" alt="Creative work" fill className="object-cover" />
          </div>
          <div>
          <p className="text-base leading-relaxed mb-6 text-gray-700">
                I specialize in crafting intuitive and engaging UI/UX designs, presentation layouts, and front-end experiences that combine functionality with aesthetic appeal. My work is driven by a user-centered approach, ensuring clarity, usability, and consistency across all digital platforms.
              </p>
              <p className="text-base leading-relaxed mb-6 text-gray-700">
                With a strong foundation in visual storytelling, I also bring concepts to life through photography, videography, and precise video editing—creating compelling visuals that enhance digital content and communicate ideas effectively.
              </p>
              <p className="text-base leading-relaxed mb-6 text-gray-700">
                Whether designing interfaces, curating presentations, or capturing visuals, my goal is to deliver meaningful and memorable experiences that resonate with audiences and bring creative visions to life.
              </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-base font-medium mb-2 text-gray-900">UI/UX & Front-End Developer</h3>
                <p className="text-sm text-gray-600">
                Designing intuitive, accessible, and responsive user interfaces for seamless experiences.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-base font-medium mb-2 text-gray-900">Photograpy</h3>
                <p className="text-sm text-gray-600">
                Creating engaging visual stories through photography, videography, and editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Featured Gallery */}
      <WeeklyFeaturedGallery />

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  )
}
