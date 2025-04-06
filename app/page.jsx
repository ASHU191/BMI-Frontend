import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import TestimonialSlider from "@/components/testimonial-slider"
import CountUp from "@/components/count-up"
import ClientLogoSlider from "@/components/client-logo-slider"

export default function Home() {
  const services = [
    {
      title: "Residential Design",
      description:
        "Transform your home into a personalized sanctuary with our expert residential interior design services.",
      icon: "/placeholder.svg?height=40&width=40",
      link: "/services/residential",
    },
    {
      title: "Commercial Design",
      description: "Create impressive commercial spaces that enhance productivity and reflect your brand identity.",
      icon: "/placeholder.svg?height=40&width=40",
      link: "/services/commercial",
    },
    {
      title: "3D Visualization",
      description: "Experience your space before it's built with our photorealistic 3D visualization services.",
      icon: "/placeholder.svg?height=40&width=40",
      link: "/services/3d-visualization",
    },
    {
      title: "Furniture Design",
      description: "Custom furniture solutions designed to perfectly fit your space and style requirements.",
      icon: "/placeholder.svg?height=40&width=40",
      link: "/services/furniture",
    },
  ]

  const projects = [
    {
      title: "Modern Minimalist Apartment",
      category: "Residential",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/modern-apartment",
    },
    {
      title: "Luxury Corporate Office",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/corporate-office",
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "/placeholder.svg?height=600&width=800",
      link: "/projects/hotel-lobby",
    },
  ]

  const stats = [
    { value: 150, label: "Projects Completed" },
    { value: 12, label: "Years of Experience" },
    { value: 85, label: "Happy Clients" },
    { value: 20, label: "Design Awards" },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Projects Section - Moved higher */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-2">
                Our <span className="text-primary">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-300 max-w-xl">
                Explore our portfolio of completed projects spanning residential, commercial, and hospitality sectors.
              </p>
            </div>
            <Button className="bg-primary text-black hover:bg-primary/80 hover-glow animate-fade-in" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="project-card rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover project-image"
                  />
                  <div className="absolute inset-0 project-overlay flex flex-col justify-end p-6">
                    <span className="text-primary text-sm mb-2">{project.category}</span>
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

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg gold-border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Interior Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-dark-300 p-6 rounded-lg gold-border gold-glow">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <CountUp end={stat.value} className="text-3xl font-bold text-primary" />
                        <p className="text-sm text-gray-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-primary">About</span> BMI Interiors
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <h3 className="text-2xl mb-6">We create spaces that inspire and elevate your lifestyle</h3>
              <p className="text-gray-300 mb-6">
                With over 12 years of experience, BMI Interiors has established itself as a leader in the interior
                design industry. Our team of talented designers and craftsmen work together to create spaces that are
                not only aesthetically pleasing but also functional and tailored to your specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional team of designers",
                  "Customized design solutions",
                  "Quality craftsmanship",
                  "Timely project completion",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              We offer a comprehensive range of interior design services to meet all your needs, from concept
              development to final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-dark-300 border-gray-800 overflow-hidden hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link href={service.link} className="text-primary flex items-center hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about their experience working with
              BMI Interiors.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Our <span className="text-primary">Clients</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              We've had the privilege of working with these amazing brands and organizations.
            </p>
          </div>

          <ClientLogoSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=1000&width=2000" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow text-lg px-6 py-6" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-white hover:bg-primary/10 text-lg px-6 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

