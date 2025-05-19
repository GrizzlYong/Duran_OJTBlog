import Link from "next/link"
import { Archive } from "lucide-react"

export function BlogArchiveLink() {
  return (
    <div className="flex justify-center mb-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-900 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Archive className="h-5 w-5" />
        <span>View Complete Blog Archive</span>
      </Link>
    </div>
  )
}
