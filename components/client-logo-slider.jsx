"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

const ClientLogoSlider = () => {
  const logos = [
    { name: "Company 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 4", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 5", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 6", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 7", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 8", logo: "/placeholder.svg?height=80&width=200" },
  ]

  const sliderRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Clone the first set of logos and append them to create a seamless loop
    const firstSet = slider.querySelectorAll(".logo-item")
    firstSet.forEach((item) => {
      const clone = item.cloneNode(true)
      slider.appendChild(clone)
    })

    let position = 0
    const speed = 0.5 // Adjust speed as needed

    const animate = () => {
      position += speed

      // Reset position when we've scrolled through the first set
      if (position >= slider.children[0].offsetWidth * logos.length) {
        position = 0
      }

      slider.style.transform = `translateX(-${position}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Pause animation on hover
    slider.addEventListener("mouseenter", () => {
      cancelAnimationFrame(animationRef.current)
    })

    slider.addEventListener("mouseleave", () => {
      animationRef.current = requestAnimationFrame(animate)
    })

    // Handle window resize
    const handleResize = () => {
      // Reset position when window is resized to prevent visual glitches
      position = 0
      slider.style.transform = `translateX(0px)`
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [logos.length])

  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 py-8 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-item flex-shrink-0 bg-dark-400 p-3 sm:p-4 md:p-6 rounded-lg hover:bg-dark-200 transition-colors duration-300 flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] h-16 sm:h-18 md:h-20 lg:h-24"
            >
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={160}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-dark-300 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-dark-300 to-transparent z-10"></div>
    </div>
  )
}

export default ClientLogoSlider

