import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Midday - Personal Blog",
  description: "A personal blog showcasing photography and creative projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        {children}
        <footer className="max-w-6xl mx-auto px-4 py-12 mt-16 border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Duran</h2>
              <p className="text-sm text-gray-600 max-w-md mb-6">
                A creative studio focused on visual storytelling through photography, design, and thoughtful
                composition.
              </p>
              <p className="text-sm text-gray-600">© 2024 Midday. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-gray-900">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4 text-gray-900">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-gray-500 border-t pt-6">
            <p>Designed and developed with care. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
