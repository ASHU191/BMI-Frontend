import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import CountUp from "@/components/count-up"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { value: 150, label: "Projects Completed" },
    { value: 12, label: "Years of Experience" },
    { value: 85, label: "Happy Clients" },
    { value: 20, label: "Design Awards" },
  ]

  const team = [
    {
      name: "John Smith",
      position: "Founder & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Johnson",
      position: "Senior Interior Designer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      position: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Williams",
      position: "3D Visualization Specialist",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="About Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn about our journey, our mission, and the team behind BMI Interiors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg gold-border">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Our Story" fill className="object-cover" />
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
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-300 mb-6">
                Founded in 2010, BMI Interiors began as a small design studio with a passion for creating beautiful,
                functional spaces. Over the years, we have grown into a full-service interior design firm with a
                reputation for excellence and innovation.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of talented designers, architects, and craftsmen share a common vision: to create spaces that
                inspire and elevate the lives of our clients. We believe that great design is not just about aesthetics,
                but about creating environments that reflect the personality and lifestyle of those who inhabit them.
              </p>
              <p className="text-gray-300 mb-6">
                Today, BMI Interiors is recognized as a leader in the industry, with projects spanning residential,
                commercial, and hospitality sectors across the country. Our commitment to quality, attention to detail,
                and client satisfaction remains at the core of everything we do.
              </p>
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-dark-300 p-8 rounded-lg border border-gray-800 hover-glow animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-primary mr-2">Mission</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Our mission is to transform spaces into extraordinary experiences through innovative design, exceptional
                craftsmanship, and personalized service. We strive to exceed our clients' expectations by delivering
                solutions that are not only aesthetically pleasing but also functional and tailored to their specific
                needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Create spaces that inspire and elevate",
                  "Deliver exceptional value and quality",
                  "Build lasting relationships with our clients",
                  "Push the boundaries of design innovation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-dark-300 p-8 rounded-lg border border-gray-800 hover-glow animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-primary mr-2">Vision</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Our vision is to be the most trusted and sought-after interior design firm, recognized for our
                creativity, integrity, and commitment to excellence. We aim to set new standards in the industry and
                make a positive impact on the way people experience and interact with their environments.
              </p>
              <ul className="space-y-3">
                {[
                  "Lead the industry in innovative design solutions",
                  "Create spaces that stand the test of time",
                  "Foster a culture of creativity and collaboration",
                  "Make a positive impact on our communities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              Our talented team of designers, architects, and project managers are dedicated to bringing your vision to
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4">
                        {["facebook", "instagram", "linkedin"].map((social) => (
                          <a
                            key={social}
                            href={`https://${social}.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-black p-2 rounded-full hover:bg-white transition-colors"
                          >
                            <span className="sr-only">{social}</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">These core values guide our approach to every project and interaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from design concepts to project execution.",
                icon: "🏆",
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                description: "We embrace creativity and continuously seek new ideas and approaches to design.",
                icon: "💡",
              },
              {
                title: "Client-Focused",
                description: "We prioritize our clients' needs and satisfaction throughout the design process.",
                icon: "👥",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-dark-300 p-6 rounded-lg border border-gray-800 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=1000&width=2000" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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

