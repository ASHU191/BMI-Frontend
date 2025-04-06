"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Apartment",
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/modern-apartment",
      slug: "modern-apartment",
    },
    {
      id: 2,
      title: "Luxury Corporate Office",
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/corporate-office",
      slug: "corporate-office",
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/hotel-lobby",
      slug: "hotel-lobby",
    },
    {
      id: 4,
      title: "Contemporary Villa Design",
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/villa-design",
      slug: "villa-design",
    },
    {
      id: 5,
      title: "Retail Store Concept",
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/retail-store",
      slug: "retail-store",
    },
    {
      id: 6,
      title: "Restaurant Interior",
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/restaurant",
      slug: "restaurant",
    },
    {
      id: 7,
      title: "Urban Loft Renovation",
      category: "residential",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/urban-loft",
      slug: "urban-loft",
    },
    {
      id: 8,
      title: "Tech Startup Headquarters",
      category: "commercial",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/startup-hq",
      slug: "startup-hq",
    },
    {
      id: 9,
      title: "Spa & Wellness Center",
      category: "hospitality",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/spa-center",
      slug: "spa-center",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Projects" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of completed projects spanning residential, commercial, and hospitality sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="project-card rounded-lg overflow-hidden animate-fade-in"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover project-image"
                  />
                  <div className="absolute inset-0 project-overlay flex flex-col justify-end p-6">
                    <span className="text-primary text-sm mb-2 capitalize">{project.category}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center mt-3">
                      <span className="text-sm text-white/80">View Project</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

