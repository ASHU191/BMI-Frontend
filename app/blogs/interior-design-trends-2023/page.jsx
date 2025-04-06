import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "10 Interior Design Trends to Watch in 2023",
    date: "June 15, 2023",
    author: "Emily Johnson",
    category: "Trends",
    image: "/placeholder.svg?height=1080&width=1920",
    content: [
      "Interior design is constantly evolving, with new trends emerging each year that reflect our changing lifestyles, values, and aesthetic preferences. As we move through 2023, several exciting trends are shaping the way we design and experience our living spaces.",
    ],
    sections: [
      {
        title: "1. Biophilic Design",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Biophilic design continues to gain momentum in 2023, reflecting our innate connection to nature and the growing emphasis on wellness in interior spaces. This trend goes beyond simply adding a few houseplants to your room; it involves incorporating natural elements, materials, and patterns throughout your space.",
        ],
      },
      {
        title: "2. Sustainable and Eco-Friendly Materials",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Sustainability is no longer just a buzzword but a fundamental consideration in interior design. In 2023, we're seeing a significant shift toward eco-friendly materials and practices that minimize environmental impact while creating beautiful, durable spaces.",
        ],
      },
      {
        title: "3. Bold, Saturated Colors",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "After years of neutral dominance, bold and saturated colors are making a strong comeback in 2023. Deep jewel tones like emerald green, sapphire blue, and ruby red are appearing in everything from wall colors to upholstery and accessories.",
        ],
      },
    ],
    tags: ["Interior Design", "Design Trends", "Home Decor"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

