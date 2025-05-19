import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  imageSrc: string
  date: string
  slug: string
}

export function BlogCard({ title, excerpt, imageSrc, date, slug }: BlogCardProps) {
  return (
    <div className="group">
      <Link href={`/blog/${slug}`}>
        <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md mb-4">
          <Image
            src={imageSrc || "/placeholder.svg?height=500&width=500"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-xs text-white/80">{date}</p>
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2 group-hover:text-gray-700 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{excerpt}</p>
        <div className="inline-flex items-center text-sm text-gray-900 hover:underline">
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </div>
      </Link>
    </div>
  )
}
