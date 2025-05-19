"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div className="bg-gray-100 p-8 rounded-xl">
      <h3 className="text-lg font-medium mb-3 text-gray-900">Subscribe to our newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">Stay updated with our latest projects, exhibitions, and insights.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow border-gray-300"
        />
        <Button type="submit" disabled={isSubmitting} className="bg-gray-900 hover:bg-gray-800 text-white">
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}
