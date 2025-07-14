"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "care-maintenance", name: "Care & Maintenance", count: 6 },
  { id: "craftsmanship", name: "Indonesian Craftsmanship", count: 8 },
  { id: "design-trends", name: "Design & Trends", count: 5 },
  { id: "business-export", name: "Business & Export", count: 5 },
];

const blogPosts = [
  {
    id: 1,
    title: "Traditional Rattan Weaving Techniques from Cirebon",
    slug: "traditional-rattan-weaving-techniques-cirebon",
    excerpt:
      "Discover the ancient art of rattan weaving that has been passed down through generations in Cirebon, West Java. Learn about the intricate techniques that make Indonesian rattan furniture world-renowned.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
    category: "craftsmanship",
    author: {
      name: "Sari Wijaya",
      avatar:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      bio: "Master craftsperson and cultural heritage expert",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["craftsmanship", "tradition", "cirebon", "weaving"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Clean and Maintain Your Rattan Furniture",
    slug: "how-to-clean-maintain-rattan-furniture",
    excerpt:
      "Keep your rattan furniture looking beautiful for years with these expert care tips. From daily maintenance to deep cleaning, learn the best practices for preserving your investment.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    category: "care-maintenance",
    author: {
      name: "Ahmad Furniture Care",
      avatar:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      bio: "Furniture care specialist with 15 years experience",
    },
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    tags: ["maintenance", "care", "cleaning", "tips"],
    featured: false,
  },
  {
    id: 3,
    title: "2024 Rattan Furniture Trends: What's Hot This Year",
    slug: "2024-rattan-furniture-trends-whats-hot",
    excerpt:
      "Explore the latest trends in rattan furniture design for 2024. From color palettes to innovative weaving patterns, discover what's shaping the industry this year.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    category: "design-trends",
    author: {
      name: "Maya Design Studio",
      avatar:
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      bio: "Interior design expert specializing in natural materials",
    },
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    tags: ["trends", "design", "2024", "interior"],
    featured: true,
  },
  {
    id: 4,
    title: "Sustainable Rattan Harvesting Practices in Indonesia",
    slug: "sustainable-rattan-harvesting-practices-indonesia",
    excerpt:
      "Learn about the sustainable practices we employ in harvesting rattan from Indonesian forests. Discover how traditional methods support both quality and environmental conservation.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
    category: "craftsmanship",
    author: {
      name: "Dr. Bambang Forestry",
      avatar:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      bio: "Forestry expert and sustainability consultant",
    },
    publishedAt: "2024-01-08",
    readTime: "12 min read",
    tags: ["sustainability", "harvesting", "environment", "indonesia"],
    featured: false,
  },
  {
    id: 5,
    title: "Export Process and Shipping Guidelines for Rattan Furniture",
    slug: "export-process-shipping-guidelines-rattan-furniture",
    excerpt:
      "A comprehensive guide to our export process, from order placement to delivery. Understand shipping methods, documentation, and what to expect when importing from Indonesia.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg",
    category: "business-export",
    author: {
      name: "Rudi Export Manager",
      avatar:
        "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg",
      bio: "International trade specialist with 20 years experience",
    },
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    tags: ["export", "shipping", "business", "international"],
    featured: false,
  },
  {
    id: 6,
    title: "Incorporating Rattan into Modern Interior Design",
    slug: "incorporating-rattan-modern-interior-design",
    excerpt:
      "Discover how to seamlessly blend traditional rattan furniture with contemporary interior design. Tips, tricks, and inspiration for creating stunning modern spaces.",
    content: "Full article content would go here...",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    category: "design-trends",
    author: {
      name: "Lisa Interior Designer",
      avatar:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      bio: "Award-winning interior designer and style consultant",
    },
    publishedAt: "2024-01-03",
    readTime: "9 min read",
    tags: ["interior-design", "modern", "styling", "decor"],
    featured: true,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6969846/pexels-photo-6969846.jpeg')",
          }}
        ></div>

        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center text-white drop-shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Rattan Furniture Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-medium">
              Insights, tips, and stories about Indonesian rattan furniture
              craftsmanship, care, design trends, and the export business.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding py-12">
        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-wood-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-wood-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-wood-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-wood-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-wood-200 rounded-full mr-3"></div>
                      <span className="text-sm text-wood-600">
                        {post.author.name}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-wood-600 hover:text-wood-900 font-medium text-sm inline-flex items-center"
                      aria-label={`Read article about ${post.title}`}
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-wood-900 mb-4">
                  Search Articles
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wood-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search blog posts..."
                    className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-wood-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex justify-between items-center ${
                        selectedCategory === category.id
                          ? "bg-wood-100 text-wood-900 font-medium"
                          : "text-wood-700 hover:bg-cream-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-wood-500">
                        ({category.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-wood-900 mb-2">
                {selectedCategory === "all"
                  ? "All Articles"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-wood-600">
                Showing {filteredPosts.length} article
                {filteredPosts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft card-hover"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-wood-600 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                        <span className="mx-2">•</span>
                        <Tag className="h-4 w-4 mr-1" />
                        <span className="capitalize">
                          {post.category.replace("-", " ")}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-wood-900 mb-3">
                        {post.title}
                      </h3>

                      <p className="text-wood-700 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-forest-100 text-forest-700 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-wood-200 rounded-full mr-3"></div>
                          <div>
                            <div className="font-medium text-wood-900">
                              {post.author.name}
                            </div>
                            <div className="text-sm text-wood-600">
                              {post.author.bio}
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="btn-primary text-sm inline-flex items-center"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold text-wood-900 mb-2">
                  No articles found
                </h3>
                <p className="text-wood-600 mb-6">
                  Try adjusting your search terms or browse different
                  categories.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="btn-primary"
                >
                  View All Articles
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-wood-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                    2
                  </button>
                  <button className="px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                    3
                  </button>
                  <button className="px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
