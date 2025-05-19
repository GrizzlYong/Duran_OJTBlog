"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { weeklyBlogPosts } from "@/data/weekly-blog-posts"

export function WeeklyBlogHighlight() {
  const [activeIndex, setActiveIndex] = useState(0)
  const displayPosts = weeklyBlogPosts.slice(0, 5) // Show only the 5 most recent posts

  // Auto-rotate through posts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayPosts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [displayPosts.length])

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl uppercase tracking-wider font-medium text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
            Weekly Blog Series
          </h2>
          <p className="text-gray-600 mt-2">In-depth explorations of my On-The-Job Training at DOST V</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-900 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>

      <div className="relative bg-[#2f3542] rounded-2xl overflow-hidden">
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left side - Post content */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full">
                  <Calendar className="h-3 w-3 mr-1" /> {displayPosts[activeIndex].date}
                </span>
                <span className="inline-flex items-center text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full">
                  <Clock className="h-3 w-3 mr-1" /> {displayPosts[activeIndex].readTime}
                </span>
              </div>

              <motion.h3
                key={displayPosts[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium mb-4 text-white"
              >
                {displayPosts[activeIndex].title}
              </motion.h3>

              <motion.p
                key={`excerpt-${displayPosts[activeIndex].id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 mb-6 max-w-2xl"
              >
                {displayPosts[activeIndex].excerpt}
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-6">
                {displayPosts[activeIndex].topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/20 text-white px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Link
                href={`/weekly-blog/${displayPosts[activeIndex].slug}`}
                className="inline-flex items-center text-white bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                Read This Week's Post <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right side - Navigation */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-white/80 text-sm font-medium mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" /> Recent Posts
                </h4>
                {displayPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeIndex === index ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative w-12 aspect-square rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-white line-clamp-1">{post.title}</h5>
                      <p className="text-xs text-white/60">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex justify-end mt-6">
                <div className="flex gap-2">
                  {displayPosts.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        activeIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                      } transition-colors`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
