import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Sample latest weekly blog post
const latestWeeklyPost = {
  title: "This Week in Photography: Light and Shadow",
  excerpt:
    "Exploring the interplay between light and shadow in composition and how it creates depth and dimension in visual storytelling.",
  coverImage: "ima?height=600&width=1200&text=Weekly Blog",
  date: "May 12, 2024",
  readTime: "8 min read",
  slug: "this-week-in-photography-light-shadow",
}

export function WeeklyBlogSection() {
  return (
    <section className="mb-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl uppercase tracking-wider font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
            Weekly Blog
          </h2>
          <p className="text-gray-600 mt-2">Insights and reflections published every week</p>
        </div>
        <Link
          href="/weekly-blog"
          className="inline-flex items-center text-gray-900 border border-gray-300 px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-gray-200 transition-colors"
        >
          View All Posts <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={latestWeeklyPost.coverImage || "/placeholder.svg"}
            alt={latestWeeklyPost.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-3">
            <span className="inline-flex items-center text-xs text-gray-600">
              <Calendar className="h-3 w-3 mr-1" /> {latestWeeklyPost.date}
            </span>
            <span className="inline-flex items-center text-xs text-gray-600">
              <Clock className="h-3 w-3 mr-1" /> {latestWeeklyPost.readTime}
            </span>
          </div>
          <h3 className="text-2xl font-medium mb-4 text-gray-900">{latestWeeklyPost.title}</h3>
          <p className="text-gray-700 mb-6">{latestWeeklyPost.excerpt}</p>
          <Link
            href={`/weekly-blog/${latestWeeklyPost.slug}`}
            className="inline-flex items-center text-gray-900 bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors w-fit"
          >
            Read This Week's Post <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
