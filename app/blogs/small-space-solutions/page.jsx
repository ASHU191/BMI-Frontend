import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
    date: "April 12, 2023",
    author: "Sarah Williams",
    category: "Tips & Advice",
    image: "/placeholder.svg?height=1080&width=1920",
    content: [
      "Living in a small space doesn't mean sacrificing style or functionality. In fact, compact living can inspire creative solutions and thoughtful design choices that make every square foot count.",
    ],
    sections: [
      {
        title: "Embrace Multifunctional Furniture",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "One of the most effective strategies for small spaces is investing in furniture that serves multiple purposes. These versatile pieces reduce clutter and maximize functionality without requiring additional square footage.",
        ],
      },
      {
        title: "Maximize Vertical Space",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "When floor space is limited, looking upward opens new possibilities. Utilizing vertical space effectively can dramatically increase storage capacity while drawing the eye upward to create the illusion of height.",
        ],
      },
      {
        title: "Choose Space-Enhancing Colors and Materials",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Color and material choices significantly impact how spacious a room feels. Strategic selections can create the illusion of more space and light, even in the smallest rooms.",
        ],
      },
    ],
    tags: ["Small Spaces", "Interior Design", "Storage Solutions"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

