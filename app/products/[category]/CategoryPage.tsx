'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'

interface CategoryData {
  name: string
  description: string
  keywords: string
}

interface CategoryPageProps {
  category: string
  categoryData: CategoryData
}

// Mock products data - in real app, this would come from API/database
const getCategoryProducts = (category: string) => {
  const allProducts = [
    {
      id: 1,
      name: 'Premium Rattan Dining Set',
      category: 'dining-sets',
      slug: 'premium-rattan-dining-set',
      price: { min: 850, max: 1200 },
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      description: 'Handcrafted 6-seater dining set with modern cushions',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'Luxury Living Room Suite',
      category: 'living-room',
      slug: 'luxury-living-room-suite',
      price: { min: 1200, max: 1800 },
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Complete living room set with sofas and coffee table',
      rating: 4.9,
      reviews: 18,
      inStock: true,
      featured: true
    },
    // Add more products...
  ]

  return allProducts.filter(product => product.category === category)
}

export default function CategoryPage({ category, categoryData }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const products = getCategoryProducts(category)

  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-wood-gradient text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {categoryData.name}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {categoryData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container-max section-padding py-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-wood-600 hover:text-wood-900">
                Home
              </Link>
            </li>
            <li>
              <span className="text-wood-400">/</span>
            </li>
            <li>
              <Link href="/products" className="text-wood-600 hover:text-wood-900">
                Products
              </Link>
            </li>
            <li>
              <span className="text-wood-400">/</span>
            </li>
            <li>
              <span className="text-wood-900 font-medium">{categoryData.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Products */}
      <div className="container-max section-padding pb-20">
        {/* Toolbar */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <div className="flex justify-between items-center">
            <p className="text-wood-700">
              Showing <span className="font-semibold">{products.length}</span> products
            </p>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex bg-cream-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-soft card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-wood-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-gold-500 fill-current'
                            : 'text-cream-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-wood-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-wood-900 mb-2">{product.name}</h3>
                <p className="text-wood-600 mb-4 text-sm">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-forest-600">
                      ${product.price.min.toLocaleString()}
                    </span>
                    {product.price.min !== product.price.max && (
                      <span className="text-wood-600 text-sm ml-1">
                        - ${product.price.max.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="btn-primary text-sm inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}