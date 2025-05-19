import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { weeklyBlogPosts } from "@/data/weekly-blog-posts"

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Archive list */}
      <div className="mb-16">
        <div className="grid grid-cols-1 gap-8">
          {weeklyBlogPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-6 border-b pb-8">
              <div className="md:w-1/3">
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-flex items-center text-xs text-gray-600">
                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                  </span>
                  <span className="inline-flex items-center text-xs text-gray-600">
                    <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-medium mb-2 text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/weekly-blog/${post.slug}`}
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  )
}
