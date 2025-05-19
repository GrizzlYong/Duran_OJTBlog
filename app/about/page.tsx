import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { RolesExplored } from "@/components/roles-explored"

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">Maidon</h1>
        <h2 className="text-2xl font-medium mb-2">About</h2>
        <p className="text-gray-600 max-w-2xl">The story, process, and philosophy behind my work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative w-[400px] h-[570px] overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/INTERN ID.png?height=900&width=700&text=Portrait"
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
            During my internship at DOST V, I explored multiple creative and technical roles, including photography, media production, and system development. I was primarily involved in documenting events, capturing real-time moments through photography, and supporting media coverage as part of the S&T promotion team.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            I also contributed to visual content creation for brochures and digital assets—bridging my interest in design with hands-on experience in communication and public engagement. These tasks helped me understand the importance of storytelling and branding in a government and tech-driven environment.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            My work was featured in internal event coverage and contributed to the successful execution of initiatives like the Innovation Summit 2025. Through these experiences, I developed a stronger sense of how creative visuals support communication, collaboration, and community in the workplace.
          </p>
        </div>
      </div>

      {/* Roles I Explored - Added to About page as well */}
      <RolesExplored />

      <div className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-xl font-medium text-gray-900 mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
          Attended DOST V Workshop
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
              <h4 className="text-lg font-medium mb-1 text-gray-900">Photography Workshop</h4>
              <p className="text-sm text-gray-600 mb-2">April 25, 2025</p>
              <p className="text-sm text-gray-700">Lectured by: Sir Guff</p>
              <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum
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
              <h4 className="text-lg font-medium mb-1 text-gray-900">CompTIA+ Workshop</h4>
              <p className="text-sm text-gray-600 mb-2">May 16, 2025</p>
              <p className="text-sm text-gray-700">Lectured by: Ma'am Sheen</p>
              <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum
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
              <h4 className="text-lg font-medium mb-1 text-gray-900">Graphic Design Workshop</h4>
              <p className="text-sm text-gray-600 mb-2">May 19, 2025</p>
              <p className="text-sm text-gray-700">Lectured by: Sir Darrel</p>
              <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum
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
            <h4 className="text-lg font-medium mb-1 text-gray-900">(Upcoming Workshop)</h4>
            <p className="text-sm text-gray-600 mb-2">May 22, 2025</p>
              <p className="text-sm text-gray-700">Lecture by: Sir Jee</p>
              <p className="text-sm text-gray-600 mt-2">
              Lorem Ipsum
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
              <h4 className="text-lg font-medium mb-1 text-gray-900">(Upcoming Workshop)</h4>
              <p className="text-sm text-gray-600 mb-2">May 22, 2025</p>
              <p className="text-sm text-gray-700">Lecture by: Sir Guff</p>
              <p className="text-sm text-gray-600 mt-2">
                Lorem Ipsum
              </p>
            </div>
            
          </div>
        </div>
      </div>


      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  )
}
