"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav
      className={`sticky top-0 z-50 py-4 px-4 md:px-6 mb-8 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-900">
          yyong_
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${isActive("/") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm transition-colors ${isActive("/blog") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            Journal
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${isActive("/about") ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg absolute left-4 right-4">
          <Link
            href="/"
            className={`text-sm py-2 ${isActive("/") ? "text-gray-900 font-medium" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-sm py-2 ${isActive("/blog") ? "text-gray-900 font-medium" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Journal
          </Link>
          <Link
            href="/about"
            className={`text-sm py-2 ${isActive("/about") ? "text-gray-900 font-medium" : "text-gray-600"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}
