"use client"
import { useState } from "react"
import Image from "next/image"
import MasonryGallery from "@/components/masonry-gallery"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      title: "Modern Living Room",
    },
    {
      id: 2,
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      title: "Corporate Office Space",
    },
    {
      id: 3,
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      title: "Luxury Hotel Suite",
    },
    {
      id: 4,
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      title: "Contemporary Kitchen",
    },
    {
      id: 5,
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      title: "Retail Store Design",
    },
    {
      id: 6,
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      title: "Restaurant Interior",
    },
    {
      id: 7,
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      title: "Master Bedroom Suite",
    },
    {
      id: 8,
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      title: "Conference Room",
    },
    {
      id: 9,
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      title: "Spa & Wellness Center",
    },
    {
      id: 10,
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      title: "Luxury Bathroom",
    },
    {
      id: 11,
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      title: "Co-working Space",
    },
    {
      id: 12,
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      title: "Hotel Lobby",
    },
  ]

  const filteredGallery =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Gallery" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of completed projects and get inspired for your next interior design project.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4 animate-fade-in">
            {[
              { id: "all", label: "All Projects" },
              { id: "residential", label: "Residential" },
              { id: "commercial", label: "Commercial" },
              { id: "hospitality", label: "Hospitality" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-black font-medium"
                    : "bg-dark-300 text-white hover:bg-dark-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Masonry */}
          <MasonryGallery items={filteredGallery} />
        </div>
      </section>
    </div>
  )
}

