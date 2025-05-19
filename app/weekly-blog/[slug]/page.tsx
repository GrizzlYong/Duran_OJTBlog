import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, MessageSquare } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"
import { weeklyBlogPosts, getAdjacentPosts, getRelatedPosts } from "@/data/weekly-blog-posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return weeklyBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function WeeklyBlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post that matches the slug
  const post = weeklyBlogPosts.find((post) => post.slug === params.slug)

  // If post not found, return 404
  if (!post) {
    notFound()
  }

  const { previousPost, nextPost } = getAdjacentPosts(post.slug)
  const relatedPosts = getRelatedPosts(post.slug, 3)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Home
          </Link>
        </div>

        {/* Article metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="inline-flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" /> {post.date}
          </span>
          <span className="inline-flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" /> {post.readTime}
          </span>
          <span className="inline-flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-1" /> {post.author}
          </span>
        </div>

        {/* Article title */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">{post.title}</h1>

        {/* Article excerpt/intro */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{post.excerpt}</p>

        {/* Featured image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10">
          <Image src={post.coverImage || "images/week 1/W1I3.jpg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Social sharing and actions */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Topics:</span>
            {post.topics.map((topic, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Article content */}
        <article className="prose prose-gray max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </article>


        {/* Next/Previous navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {previousPost && (
            <Link
              href={`/weekly-blog/${previousPost.slug}`}
              className="group p-4 border rounded-xl hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm text-gray-500">Previous Post</span>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                {previousPost.title}
              </h4>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/weekly-blog/${nextPost.slug}`}
              className="group p-4 border rounded-xl hover:bg-gray-50 transition-colors text-right"
            >
              <span className="text-sm text-gray-500">Next Post</span>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                {nextPost.title}
              </h4>
            </Link>
          )}
        </div>

        {/* Related posts */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gray-900 after:mt-2">
            You might also enjoy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="group">
                <Link href={`/weekly-blog/${relatedPost.slug}`}>
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mt-16">
        <FeaturedProjects />
      </div>
    </main>
  )
}
