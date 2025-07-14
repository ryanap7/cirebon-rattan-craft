'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

interface BlogPostPageProps {
  post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  }

  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      {/* Breadcrumbs */}
      <div className="container-max section-padding py-6">
        <nav className="flex items-center space-x-4 text-sm">
          <Link href="/" className="text-wood-600 hover:text-wood-900">Home</Link>
          <span className="text-wood-400">/</span>
          <Link href="/blog" className="text-wood-600 hover:text-wood-900">Blog</Link>
          <span className="text-wood-400">/</span>
          <span className="text-wood-900 font-medium">{post.title}</span>
        </nav>
      </div>

      <article className="container-max section-padding pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-wood-600 hover:text-wood-900 font-medium mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            {post.featured && (
              <span className="inline-block bg-gold-500 text-wood-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Featured Article
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-wood-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                <span className="capitalize">{post.category.replace('-', ' ')}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-b border-cream-200 py-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-wood-200 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-wood-900">{post.author.name}</div>
                  <div className="text-sm text-wood-600">{post.author.bio}</div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-wood-600 mr-2">Share:</span>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video mb-12 rounded-xl overflow-hidden shadow-soft"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg prose-wood max-w-none mb-12"
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-wood-700 leading-relaxed"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-cream-200 pt-8 mb-12"
          >
            <h3 className="text-lg font-semibold text-wood-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-sm hover:bg-forest-200 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-soft mb-12"
          >
            <div className="flex items-start">
              <div className="w-20 h-20 bg-wood-200 rounded-full mr-6 overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wood-900 mb-2">About {post.author.name}</h3>
                <p className="text-wood-700 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="border-t border-cream-200 pt-12"
          >
            <h2 className="text-2xl font-serif font-bold text-wood-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mock related articles */}
              {[1, 2].map((i) => (
                <article key={i} className="bg-white rounded-xl overflow-hidden shadow-soft card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`https://images.pexels.com/photos/157146${i}/pexels-photo-157146${i}.jpeg`}
                      alt="Related article"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-wood-600 mb-2">
                      {new Date().toLocaleDateString()} • 5 min read
                    </div>
                    <h3 className="text-lg font-semibold text-wood-900 mb-3">
                      Related Article Title {i}
                    </h3>
                    <p className="text-wood-700 text-sm mb-4">
                      Brief excerpt of the related article content...
                    </p>
                    <Link
                      href="#"
                      className="text-wood-600 hover:text-wood-900 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-wood-gradient text-white rounded-xl p-8 mt-16 text-center"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="mb-6 opacity-90">
              Get the latest insights on rattan furniture, craftsmanship tips, and industry trends 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-wood-900 focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-wood-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.section>
        </div>
      </article>
    </div>
  )
}