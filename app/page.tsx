"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Globe,
  Truck,
  Shield,
  Award,
  Heart,
  Users,
  Leaf,
  Factory,
  Calendar,
} from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Dining Set Collection",
    category: "Dining Sets",
    image: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg",
    price: "Starting from $850",
    description: "Handcrafted 6-seater rattan dining set with modern cushions",
    features: ["6 Chairs Included", "Weather Resistant", "Custom Cushions"],
    rating: 4.8,
    reviews: 24,
    inStock: true,
  },
  {
    id: 2,
    name: "Luxury Living Room Suite",
    category: "Living Room",
    image: "https://images.pexels.com/photos/6969832/pexels-photo-6969832.jpeg",
    price: "Starting from $1,200",
    description:
      "Complete living room set with sofas, coffee table, and accent chairs",
    features: ["3-Seater Sofa", "2 Armchairs", "Coffee Table"],
    rating: 4.9,
    reviews: 18,
    inStock: true,
  },
  {
    id: 3,
    name: "Outdoor Garden Collection",
    category: "Outdoor",
    image: "https://images.pexels.com/photos/6969833/pexels-photo-6969833.jpeg",
    price: "Starting from $650",
    description:
      "Weather-resistant outdoor furniture perfect for patios and gardens",
    features: ["UV Resistant", "All-Weather", "Easy Maintenance"],
    rating: 4.7,
    reviews: 31,
    inStock: true,
  },
  {
    id: 4,
    name: "Bedroom Rattan Suite",
    category: "Bedroom",
    image: "https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg",
    price: "Starting from $950",
    description:
      "Elegant bedroom furniture including bed frame, nightstands, and dresser",
    features: ["Queen Size Bed", "2 Nightstands", "Dresser"],
    rating: 4.6,
    reviews: 15,
    inStock: true,
  },
];

const trustSignals = [
  {
    icon: Factory,
    title: "25+ Years Experience",
    description: "Established manufacturer since 1998",
  },
  {
    icon: Globe,
    title: "Export to 30+ Countries",
    description: "Trusted by international buyers worldwide",
  },
  {
    icon: Award,
    title: "FSC Certified",
    description: "Sustainable forestry practices guaranteed",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "ISO 9001 certified manufacturing process",
  },
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
    slug: "traditional-rattan-weaving-techniques-cirebon",
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
    slug: "traditional-rattan-weaving-techniques-cirebon",
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
    slug: "traditional-rattan-weaving-techniques-cirebon",
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
    slug: "traditional-rattan-weaving-techniques-cirebon",
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

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Interior Design Studio, Australia",
    text: "The quality of Cirebon Rattan Craft's furniture exceeded our expectations. Their attention to detail and craftsmanship is truly remarkable.",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    company: "Furniture Retailer, Germany",
    text: "Working with this team has been fantastic. They understand international quality standards and deliver on time, every time.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    company: "Hotel Chain, Spain",
    text: "We've furnished 15 hotel properties with their rattan furniture. Guests love the authentic Indonesian craftsmanship.",
    rating: 5,
  },
];

export default function Home() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/6969835/pexels-photo-6969835.jpeg?w=1080&auto=compress&cs=tinysrgb&fm=webp"
          alt="Cirebon Rattan Craft"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center z-0"
        />

        <div className="relative z-10 text-center text-white section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Premium Indonesian
              <span className="block text-gold-400">Rattan Furniture</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Handcrafted in Cirebon with traditional techniques. Export quality
              furniture that brings authentic Indonesian craftsmanship to your
              space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="btn-accent inline-flex items-center"
                >
                  View Our Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="btn-secondary inline-flex items-center"
                >
                  Get Custom Quote
                  <Globe className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-cream-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              Why Choose Cirebon Rattan Craft?
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              With decades of experience and international certifications, we
              are trusted by buyers worldwide for our commitment to quality,
              sustainability, and craftsmanship.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wood-100 rounded-full mb-4">
                  <signal.icon className="h-8 w-8 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900 mb-2">
                  {signal.title}
                </h3>
                <p className="text-wood-600 text-sm">{signal.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Discover our premium rattan furniture collections, each piece
              meticulously crafted by skilled artisans in Cirebon using
              sustainable materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-soft card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`${product.image}?w=384&h=256&auto=compress&cs=tinysrgb&fm=webp`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
                    className="object-cover"
                  />
                  {product.features && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-wood-900 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-wood-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-gold-500 fill-current"
                              : "text-cream-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-wood-600 ml-2 font-medium">
                      {product.rating}
                    </span>
                  </div>

                  <p className="text-wood-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold text-forest-600">
                        {product.price}
                      </span>
                      <div className="text-xs text-wood-500">
                        Starting price
                      </div>
                    </div>
                    <Link
                      href={`/products/${product.category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="bg-wood-600 hover:bg-wood-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center"
                    >
                      View
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="btn-primary inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
                Crafted with Passion in
                <span className="text-gradient block">Cirebon, Indonesia</span>
              </h2>
              <p className="text-lg text-wood-700 mb-6">
                For over 25 years, we&apos;ve been creating exceptional rattan
                furniture that combines traditional Indonesian craftsmanship
                with contemporary design. Our skilled artisans in Cirebon use
                sustainable materials and time-honored techniques passed down
                through generations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Leaf className="h-6 w-6 text-forest-600 mr-3" />
                  <span className="text-wood-700">Sustainable Materials</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-forest-600 mr-3" />
                  <span className="text-wood-700">Handcrafted Quality</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-forest-600 mr-3" />
                  <span className="text-wood-700">Skilled Artisans</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-forest-600 mr-3" />
                  <span className="text-wood-700">Global Export</span>
                </div>
              </div>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center"
              >
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6969837/pexels-photo-6969837.jpeg"
                      alt="Artisan crafting rattan furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6969838/pexels-photo-6969838.jpeg"
                      alt="Rattan material preparation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6969839/pexels-photo-6969839.jpeg"
                      alt="Finished rattan furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6969840/pexels-photo-6969840.jpeg"
                      alt="Rattan furniture collection"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-cream-100">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              From raw rattan to finished furniture, discover the meticulous
              process that creates our premium products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rattan Selection",
                description:
                  "Carefully selecting premium rattan from sustainable Indonesian forests",
                image:
                  "https://images.pexels.com/photos/6969841/pexels-photo-6969841.jpeg",
              },
              {
                step: "02",
                title: "Traditional Weaving",
                description:
                  "Master craftsmen weave using techniques passed down through generations",
                image:
                  "https://images.pexels.com/photos/6969842/pexels-photo-6969842.jpeg",
              },
              {
                step: "03",
                title: "Quality Control",
                description:
                  "Rigorous inspection ensures every piece meets international standards",
                image:
                  "https://images.pexels.com/photos/6969843/pexels-photo-6969843.jpeg",
              },
              {
                step: "04",
                title: "Export Packaging",
                description:
                  "Professional packaging for safe international shipping",
                image:
                  "https://images.pexels.com/photos/6969844/pexels-photo-6969844.jpeg",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={`${process.image}?w=384&h=256&auto=compress&cs=tinysrgb&fm=webp`}
                    alt={process.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold-500 text-wood-900 rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-wood-700">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Statistics */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              Global Reach & Impact
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Our commitment to quality has earned trust from customers
              worldwide, making us a leading rattan furniture exporter from
              Indonesia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "30+",
                label: "Countries Served",
                description: "Worldwide export reach",
              },
              {
                number: "10,000+",
                label: "Products Exported",
                description: "Annual production capacity",
              },
              {
                number: "150+",
                label: "Skilled Artisans",
                description: "Master craftspeople",
              },
              {
                number: "25+",
                label: "Years Experience",
                description: "Industry expertise",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-soft"
              >
                <div className="text-4xl md:text-5xl font-bold text-forest-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-wood-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-wood-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Trusted by furniture retailers, interior designers, and hotels
              worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gold-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-wood-700 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-wood-900">
                    {testimonial.name}
                  </div>
                  <div className="text-wood-600 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
              Insights & Inspirations
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Explore stories, design trends, and industry insights from the
              world of rattan furniture — curated to inspire and inform our
              global community.
            </p>
          </motion.div>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-wood-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-wood-800 mb-3">
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
                      <span className="text-sm text-wood-800">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white relative z-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Import Premium Rattan Furniture?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get a custom quote for your project. We offer competitive
              wholesale pricing, reliable shipping, and exceptional customer
              service for international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="bg-gold-500 hover:bg-gold-600 text-wood-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-wood-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  Contact Us
                  <Globe className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
