"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    id: "residential",
    title: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary with our expert residential interior design services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-blue-500/20 to-purple-500/20",
    icon: "🏠",
  },
  {
    id: "commercial",
    title: "Commercial Design",
    description: "Create impressive commercial spaces that enhance productivity and reflect your brand identity.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-green-500/20 to-teal-500/20",
    icon: "🏢",
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    description: "Experience your space before it's built with our photorealistic 3D visualization services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-orange-500/20 to-red-500/20",
    icon: "🎨",
  },
  {
    id: "furniture",
    title: "Furniture Design",
    description: "Custom furniture solutions designed to perfectly fit your space and style requirements.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-pink-500/20 to-rose-500/20",
    icon: "🪑",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing spaces with our comprehensive renovation and remodeling services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-yellow-500/20 to-amber-500/20",
    icon: "🔨",
  },
  {
    id: "consultation",
    title: "Design Consultation",
    description: "Get expert advice and guidance for your design project with our professional consultation services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-indigo-500/20 to-violet-500/20",
    icon: "💡",
  },
]

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (services.length - visibleItems + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - visibleItems : prev - 1))
  }

  const visibleServices = services.slice(activeIndex, activeIndex + visibleItems)

  return (
    <div className="relative">
      <div className="overflow-hidden py-8 px-4">
        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(0)` }}
        >
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 min-w-0"
            >
              <Link href={`/services/${service.id}`} className="block group h-full">
                <div className="bg-dark-300 rounded-xl overflow-hidden h-full transition-transform duration-300 group-hover:translate-y-[-10px] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-medium transform translate-x-0 group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full z-10 transition-colors"
        disabled={activeIndex === 0}
        style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full z-10 transition-colors"
        disabled={activeIndex >= services.length - visibleItems}
        style={{ opacity: activeIndex >= services.length - visibleItems ? 0.5 : 1 }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: services.length - visibleItems + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-primary" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel

