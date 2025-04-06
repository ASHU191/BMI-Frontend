"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

// Project data for different projects
const projectsData = {
  "modern-apartment": {
    title: "Modern Minimalist Apartment",
    category: "Residential",
    location: "New York, NY",
    year: "2023",
    client: "Johnson Family",
    description:
      "This modern minimalist interior design project transformed a traditional apartment into a sleek, contemporary living space. The design focuses on clean lines, a neutral color palette, and carefully selected statement pieces to create a sophisticated and functional environment.",
    challenge:
      "The main challenge was to maximize the limited space while maintaining an open and airy feel. The clients wanted a minimalist aesthetic without sacrificing comfort or functionality.",
    solution:
      "We implemented a space-efficient layout with multi-functional furniture and built-in storage solutions. The color palette of whites, grays, and black was complemented with warm wood tones and subtle gold accents to add warmth and visual interest.",
    features: [
      "Open-concept living and dining area",
      "Custom built-in storage solutions",
      "Minimalist kitchen with hidden appliances",
      "Smart home integration",
      "Energy-efficient lighting design",
      "Sustainable materials throughout",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Living Room",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Kitchen",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Bedroom",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Bathroom",
      },
    ],
    relatedProjects: [
      {
        title: "Contemporary Villa Design",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "villa-design",
      },
      {
        title: "Urban Loft Renovation",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "urban-loft",
      },
    ],
  },
  "corporate-office": {
    title: "Luxury Corporate Office",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2022",
    client: "TechGlobe Inc.",
    description:
      "This luxury corporate office project was designed to create an impressive, functional workspace that reflects the company's innovative brand identity. The design combines contemporary aesthetics with practical solutions to enhance productivity and employee wellbeing.",
    challenge:
      "The challenge was to create a space that balances professionalism with creativity, accommodates various work styles, and provides both collaborative and private areas for a growing team of 150+ employees.",
    solution:
      "We designed an open floor plan with strategically placed breakout areas, meeting rooms, and quiet zones. Premium materials like marble, glass, and brushed metal were used alongside ergonomic furniture and state-of-the-art technology to create a sophisticated yet comfortable environment.",
    features: [
      "Reception area with custom-designed welcome desk",
      "Open-plan workstations with ergonomic furniture",
      "Executive offices and conference rooms",
      "Collaborative breakout spaces and lounges",
      "State-of-the-art technology integration",
      "Employee wellness room and café",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Reception Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Open Workspace",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Conference Room",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Executive Office",
      },
    ],
    relatedProjects: [
      {
        title: "Tech Startup Headquarters",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "startup-hq",
      },
      {
        title: "Retail Store Concept",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "retail-store",
      },
    ],
  },
  "hotel-lobby": {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Miami, FL",
    year: "2023",
    client: "Azure Waves Hotel",
    description:
      "This boutique hotel lobby design creates a memorable first impression for guests with its luxurious yet welcoming atmosphere. The space combines local cultural influences with contemporary design elements to create a unique sense of place.",
    challenge:
      "The challenge was to design a relatively compact lobby space that could accommodate multiple functions—reception, waiting, socializing, and working—while maintaining an uncrowded, sophisticated atmosphere.",
    solution:
      "We created distinct zones within the open layout, using furniture groupings, lighting, and subtle level changes to define different areas. A striking reception desk serves as the focal point, while comfortable seating areas and a small business center provide functionality for guests.",
    features: [
      "Custom-designed reception desk with backlit onyx",
      "Locally-inspired art and decorative elements",
      "Comfortable lounge seating in various configurations",
      "Integrated technology for check-in and guest services",
      "Dramatic lighting design with custom fixtures",
      "Indoor plants and biophilic elements",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Main Lobby",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Reception Desk",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Lounge Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Business Center",
      },
    ],
    relatedProjects: [
      {
        title: "Restaurant Interior",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "restaurant",
      },
      {
        title: "Spa & Wellness Center",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "spa-center",
      },
    ],
  },
  "villa-design": {
    title: "Contemporary Villa Design",
    category: "Residential",
    location: "Los Angeles, CA",
    year: "2022",
    client: "Anderson Family",
    description:
      "This contemporary villa design project combines modern architecture with luxurious interiors to create a sophisticated living environment. The design emphasizes indoor-outdoor living, natural light, and open spaces while maintaining privacy and comfort.",
    challenge:
      "The challenge was to create a cohesive design that flows seamlessly between indoor and outdoor spaces, maximizes the hillside views, and incorporates the clients' extensive art collection.",
    solution:
      "We designed an open floor plan with floor-to-ceiling windows that frame the spectacular views. Custom millwork and built-ins were created to display the art collection, while a neutral color palette with rich textures provides a sophisticated backdrop.",
    features: [
      "Open-concept living spaces with panoramic views",
      "Custom kitchen with premium appliances and finishes",
      "Master suite with private terrace and luxury bathroom",
      "Home theater and entertainment area",
      "Indoor-outdoor living with expansive terraces",
      "Infinity pool and landscaped gardens",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Living Room with View",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Gourmet Kitchen",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Master Bedroom",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Outdoor Living Area",
      },
    ],
    relatedProjects: [
      {
        title: "Modern Minimalist Apartment",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "modern-apartment",
      },
      {
        title: "Urban Loft Renovation",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "urban-loft",
      },
    ],
  },
  "retail-store": {
    title: "Retail Store Concept",
    category: "Commercial",
    location: "San Francisco, CA",
    year: "2023",
    client: "Evergreen Fashion",
    description:
      "This retail store concept was designed to create an immersive shopping experience that reflects the brand's sustainable fashion ethos. The space combines eco-friendly materials with innovative display solutions to showcase the products while telling the brand's story.",
    challenge:
      "The challenge was to design a retail environment that would attract and engage customers, maximize product visibility, and incorporate sustainable design principles in alignment with the brand's values.",
    solution:
      "We created a flexible layout with modular display systems that can be easily reconfigured for different collections. Recycled and sustainable materials were used throughout, including reclaimed wood fixtures, energy-efficient lighting, and low-VOC finishes.",
    features: [
      "Modular display systems for flexibility",
      "Interactive digital elements for product information",
      "Comfortable fitting rooms with adjustable lighting",
      "Sustainable materials and energy-efficient systems",
      "Dedicated event space for community engagement",
      "Efficient point-of-sale and inventory management",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Store Entrance",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Main Display Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fitting Rooms",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Checkout Counter",
      },
    ],
    relatedProjects: [
      {
        title: "Luxury Corporate Office",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "corporate-office",
      },
      {
        title: "Tech Startup Headquarters",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "startup-hq",
      },
    ],
  },
  restaurant: {
    title: "Restaurant Interior",
    category: "Hospitality",
    location: "Boston, MA",
    year: "2022",
    client: "Fusion Bistro",
    description:
      "This restaurant interior design project creates a sophisticated dining environment that complements the chef's innovative cuisine. The space balances intimacy with energy, using thoughtful zoning, lighting, and acoustics to enhance the dining experience.",
    challenge:
      "The challenge was to transform a historic building into a contemporary restaurant while respecting its architectural character. The space needed to accommodate different dining experiences, from intimate dinners to larger social gatherings.",
    solution:
      "We preserved and highlighted original architectural features while introducing modern elements that complement the historic context. Different dining zones were created using banquettes, booths, and flexible seating arrangements, with lighting and acoustic treatments tailored to each area.",
    features: [
      "Bar and lounge area for casual dining",
      "Main dining room with flexible seating arrangements",
      "Private dining room for events and special occasions",
      "Open kitchen concept with chef's counter",
      "Custom lighting design to create ambiance",
      "Acoustic treatments for comfortable sound levels",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Main Dining Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Bar and Lounge",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Private Dining Room",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Open Kitchen",
      },
    ],
    relatedProjects: [
      {
        title: "Boutique Hotel Lobby",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "hotel-lobby",
      },
      {
        title: "Spa & Wellness Center",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "spa-center",
      },
    ],
  },
  "urban-loft": {
    title: "Urban Loft Renovation",
    category: "Residential",
    location: "Brooklyn, NY",
    year: "2023",
    client: "Martinez Family",
    description:
      "This urban loft renovation transformed a former industrial space into a contemporary home that balances the building's raw character with modern comfort. The design preserves industrial elements while introducing warmth and functionality for family living.",
    challenge:
      "The challenge was to create distinct living zones within the open loft space, improve thermal and acoustic comfort, and integrate modern systems while preserving the authentic industrial character of the building.",
    solution:
      "We maintained exposed brick walls, concrete floors, and steel columns while adding strategic partitions and built-ins to define different functional areas. Modern systems were carefully integrated, and acoustic treatments were added to improve comfort without compromising the loft aesthetic.",
    features: [
      "Open-plan living with defined functional zones",
      "Custom kitchen with industrial-inspired details",
      "Flexible office/guest room with sliding partition",
      "Master bedroom with custom storage solutions",
      "Preserved industrial elements and materials",
      "Energy-efficient upgrades to windows and systems",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Living Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Industrial Kitchen",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Master Bedroom",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Home Office",
      },
    ],
    relatedProjects: [
      {
        title: "Modern Minimalist Apartment",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "modern-apartment",
      },
      {
        title: "Contemporary Villa Design",
        category: "Residential",
        image: "/placeholder.svg?height=600&width=800",
        slug: "villa-design",
      },
    ],
  },
  "startup-hq": {
    title: "Tech Startup Headquarters",
    category: "Commercial",
    location: "Austin, TX",
    year: "2023",
    client: "InnovateTech",
    description:
      "This tech startup headquarters was designed to foster creativity, collaboration, and company culture. The space reflects the company's innovative spirit while providing practical solutions for a dynamic work environment.",
    challenge:
      "The challenge was to create a workspace that would accommodate rapid growth, support different work styles, and help attract and retain talent in a competitive industry.",
    solution:
      "We designed a flexible, activity-based workspace with a variety of settings for different tasks and work styles. Playful design elements and branded moments create a distinctive identity, while practical considerations ensure functionality and comfort.",
    features: [
      "Flexible open workspace with various seating options",
      "Phone booths and focus pods for privacy",
      "Collaborative areas and informal meeting spaces",
      "Game room and relaxation areas for breaks",
      "Fully-equipped kitchen and dining area",
      "Adaptable conference rooms with advanced technology",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Open Workspace",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Collaboration Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Meeting Room",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Break Area",
      },
    ],
    relatedProjects: [
      {
        title: "Luxury Corporate Office",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "corporate-office",
      },
      {
        title: "Retail Store Concept",
        category: "Commercial",
        image: "/placeholder.svg?height=600&width=800",
        slug: "retail-store",
      },
    ],
  },
  "spa-center": {
    title: "Spa & Wellness Center",
    category: "Hospitality",
    location: "Scottsdale, AZ",
    year: "2022",
    client: "Serenity Wellness",
    description:
      "This spa and wellness center was designed to create a tranquil retreat that promotes relaxation and rejuvenation. The space combines natural elements with luxurious finishes to create a serene environment for wellness treatments and services.",
    challenge:
      "The challenge was to design a space that feels both luxurious and calming, with careful consideration of flow, privacy, and the sensory experience throughout the guest journey.",
    solution:
      "We created a design that engages all the senses, with natural materials, soothing colors, subtle aromatherapy, acoustic treatments, and thoughtful lighting. The layout provides a logical flow from reception through treatment areas, with transitions that gradually increase privacy and relaxation.",
    features: [
      "Welcoming reception and retail area",
      "Tranquil relaxation lounge with refreshment bar",
      "Private treatment rooms with customizable settings",
      "Hydrotherapy area with various water features",
      "Meditation garden with biophilic elements",
      "Changing facilities with premium amenities",
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Reception Area",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Relaxation Lounge",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Treatment Room",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Hydrotherapy Area",
      },
    ],
    relatedProjects: [
      {
        title: "Boutique Hotel Lobby",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "hotel-lobby",
      },
      {
        title: "Restaurant Interior",
        category: "Hospitality",
        image: "/placeholder.svg?height=600&width=800",
        slug: "restaurant",
      },
    ],
  },
}

export default function ProjectDetailPage({ params }) {
  const { slug } = params
  const [currentImage, setCurrentImage] = useState(0)
  const [project, setProject] = useState(null)

  useEffect(() => {
    // Get project data based on slug
    if (projectsData[slug]) {
      setProject(projectsData[slug])
    } else {
      // Fallback to first project if slug not found
      setProject(projectsData["modern-apartment"])
    }
  }, [slug])

  if (!project) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src={project.images[0].src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl animate-fade-in">
              <Link href="/projects" className="inline-flex items-center text-primary mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{project.category}</span>
                <span className="bg-dark-400 text-gray-300 px-3 py-1 rounded-full text-sm">{project.location}</span>
                <span className="bg-dark-400 text-gray-300 px-3 py-1 rounded-full text-sm">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-300 mb-8 text-lg">{project.description}</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-300 mb-8">{project.challenge}</p>

                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-300 mb-8">{project.solution}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Category</h4>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p>{project.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Year</h4>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Client</h4>
                    <p>{project.client}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Interested in a similar project?</h3>
                  <Button className="w-full bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>

          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg gold-border animate-fade-in">
              <Image
                src={project.images[currentImage].src || "/placeholder.svg"}
                alt={project.images[currentImage].alt}
                fill
                className="object-cover"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full transition-colors"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-primary" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] relative rounded-md overflow-hidden cursor-pointer transition-all ${
                  currentImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.relatedProjects.map((relatedProject, index) => (
              <Link
                key={index}
                href={`/projects/${relatedProject.slug}`}
                className="project-card rounded-lg overflow-hidden animate-fade-in"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    fill
                    className="object-cover project-image"
                  />
                  <div className="absolute inset-0 project-overlay flex flex-col justify-end p-6">
                    <span className="text-primary text-sm mb-2">{relatedProject.category}</span>
                    <h3 className="text-xl font-bold">{relatedProject.title}</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <Button className="bg-primary text-black hover:bg-primary/80 hover-glow text-lg px-6 py-6" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

