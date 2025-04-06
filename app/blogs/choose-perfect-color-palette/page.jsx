import { blogPostTemplate } from "@/components/blog-post-template"

export default function BlogPost() {
  const postData = {
    title: "How to Choose the Perfect Color Palette for Your Home",
    date: "May 28, 2023",
    author: "Michael Chen",
    category: "Tips & Advice",
    image: "/placeholder.svg?height=1080&width=1920",
    content: [
      "Color is one of the most powerful tools in interior design, capable of transforming spaces, influencing moods, and expressing personality. Yet for many homeowners, selecting a color palette feels overwhelming. With countless options available, how do you choose colors that will work harmoniously together and create the atmosphere you desire?",
    ],
    sections: [
      {
        title: "Understanding Color Theory Basics",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Before diving into specific color selections, it's helpful to understand some basic principles of color theory. The color wheel is a valuable tool that shows the relationships between colors and can guide your choices.",
        ],
      },
      {
        title: "Common Color Schemes",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Several tried-and-true color schemes can provide a starting point for your palette: monochromatic, analogous, complementary, triadic, and split-complementary.",
        ],
      },
      {
        title: "Testing Before Committing",
        image: "/placeholder.svg?height=600&width=800",
        content: [
          "Before making final decisions, test your colors in the actual space. Paint large swatches on different walls and observe them at different times of day under various lighting conditions.",
        ],
      },
    ],
    tags: ["Color Theory", "Interior Design", "Home Decor"],
    relatedPosts: [],
  }

  return blogPostTemplate(postData)
}

