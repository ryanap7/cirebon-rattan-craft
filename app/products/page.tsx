'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Grid, List, Star, ArrowRight, Heart, Eye } from 'lucide-react'

const productCategories = [
  { id: 'all', name: 'All Products', count: 48 },
  { id: 'living-room', name: 'Living Room', count: 12 },
  { id: 'dining-sets', name: 'Dining Sets', count: 8 },
  { id: 'bedroom', name: 'Bedroom', count: 10 },
  { id: 'outdoor', name: 'Outdoor', count: 15 },
  { id: 'decorative', name: 'Decorative', count: 3 }
]

const products = [
  {
    id: 1,
    name: 'Premium Rattan Dining Set',
    category: 'dining-sets',
    slug: 'premium-rattan-dining-set',
    price: { min: 850, max: 1200 },
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    description: 'Handcrafted 6-seater dining set with modern cushions and traditional Indonesian weaving',
    features: ['6 Chairs Included', 'Weather Resistant', 'Custom Cushions', 'FSC Certified'],
    rating: 4.8,
    reviews: 24,
    inStock: true,
    featured: true,
    materials: ['Premium Rattan', 'Teak Wood Frame', 'Water-resistant Cushions'],
    dimensions: { length: 180, width: 90, height: 75 },
    weight: 45,
    origin: 'Cirebon, Indonesia'
  },
  {
    id: 2,
    name: 'Luxury Living Room Suite',
    category: 'living-room',
    slug: 'luxury-living-room-suite',
    price: { min: 1200, max: 1800 },
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
    ],
    description: 'Complete living room set with 3-seater sofa, 2 armchairs, and coffee table',
    features: ['3-Seater Sofa', '2 Armchairs', 'Coffee Table', 'Premium Finish'],
    rating: 4.9,
    reviews: 18,
    inStock: true,
    featured: true,
    materials: ['Natural Rattan', 'Mahogany Frame', 'Premium Fabric Cushions'],
    dimensions: { length: 200, width: 85, height: 80 },
    weight: 65,
    origin: 'Cirebon, Indonesia'
  },
  {
    id: 3,
    name: 'Outdoor Garden Collection',
    category: 'outdoor',
    slug: 'outdoor-garden-collection',
    price: { min: 650, max: 950 },
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg'
    ],
    description: 'Weather-resistant outdoor furniture perfect for patios and gardens',
    features: ['UV Resistant', 'All-Weather', 'Easy Maintenance', 'Stackable Design'],
    rating: 4.7,
    reviews: 31,
    inStock: true,
    featured: false,
    materials: ['Synthetic Rattan', 'Aluminum Frame', 'Outdoor Cushions'],
    dimensions: { length: 150, width: 75, height: 70 },
    weight: 35,
    origin: 'Cirebon, Indonesia'
  },
  {
    id: 4,
    name: 'Elegant Bedroom Suite',
    category: 'bedroom',
    slug: 'elegant-bedroom-suite',
    price: { min: 950, max: 1400 },
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ],
    description: 'Complete bedroom set including bed frame, nightstands, and dresser',
    features: ['Queen Size Bed', '2 Nightstands', 'Dresser', 'Natural Finish'],
    rating: 4.6,
    reviews: 15,
    inStock: true,
    featured: false,
    materials: ['Premium Rattan', 'Solid Wood Base', 'Natural Lacquer'],
    dimensions: { length: 160, width: 200, height: 120 },
    weight: 55,
    origin: 'Cirebon, Indonesia'
  },
  {
    id: 5,
    name: 'Decorative Rattan Baskets Set',
    category: 'decorative',
    slug: 'decorative-rattan-baskets-set',
    price: { min: 120, max: 200 },
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ],
    description: 'Set of 3 handwoven decorative baskets in different sizes',
    features: ['Set of 3', 'Handwoven', 'Multi-purpose', 'Natural Color'],
    rating: 4.5,
    reviews: 42,
    inStock: true,
    featured: false,
    materials: ['Natural Rattan', 'Traditional Weave'],
    dimensions: { length: 40, width: 40, height: 30 },
    weight: 2,
    origin: 'Cirebon, Indonesia'
  },
  {
    id: 6,
    name: 'Modern Rattan Bar Set',
    category: 'dining-sets',
    slug: 'modern-rattan-bar-set',
    price: { min: 750, max: 1100 },
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg'
    ],
    description: 'Contemporary bar table with 4 high stools, perfect for modern spaces',
    features: ['Bar Table', '4 High Stools', 'Modern Design', 'Footrest'],
    rating: 4.7,
    reviews: 19,
    inStock: false,
    featured: false,
    materials: ['Premium Rattan', 'Steel Frame', 'Cushioned Seats'],
    dimensions: { length: 120, width: 60, height: 105 },
    weight: 40,
    origin: 'Cirebon, Indonesia'
  }
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
  { value: 'rating', label: 'Highest Rated' }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = product.price.min >= priceRange[0] && product.price.max <= priceRange[1]
      
      return matchesCategory && matchesSearch && matchesPrice
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price.min - b.price.min)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price.max - a.price.max)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy, priceRange])

  return (
    <div className="min-h-screen mt-16 lg:mt-20 bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6969845/pexels-photo-6969845.jpeg')"
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
              Premium Rattan Furniture Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-medium">
              Discover our complete range of handcrafted Indonesian rattan furniture. 
              From living room sets to outdoor collections, each piece represents 
              the finest in traditional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-wood-900 mb-6">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-wood-700 font-medium mb-2">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wood-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-wood-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex justify-between items-center ${
                        selectedCategory === category.id
                          ? 'bg-wood-100 text-wood-900 font-medium'
                          : 'text-wood-700 hover:bg-cream-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-wood-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-wood-900 mb-3">Price Range (USD)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    />
                    <span className="text-wood-500">to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div>
                <h4 className="font-medium text-wood-900 mb-3">Quick Filters</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-wood-600 focus:ring-wood-500" />
                    <span className="ml-2 text-wood-700">In Stock Only</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-wood-600 focus:ring-wood-500" />
                    <span className="ml-2 text-wood-700">Featured Products</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-wood-600 focus:ring-wood-500" />
                    <span className="ml-2 text-wood-700">Custom Available</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-soft p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center px-4 py-2 bg-wood-100 text-wood-700 rounded-lg hover:bg-wood-200 transition-colors duration-200"
                  >
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </button>
                  <p className="text-wood-700">
                    Showing <span className="font-semibold">{filteredAndSortedProducts.length}</span> of{' '}
                    <span className="font-semibold">{products.length}</span> products
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode */}
                  <div className="flex bg-cream-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-cream-200'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors duration-200 ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-cream-200'
                      }`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid/List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3'
                  : 'space-y-6'
              }
            >
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-soft card-hover ${
                    viewMode === 'list' ? 'flex-col md:flex-row flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'md:flex w-full flex-shrink-0 h-64' : 'h-48'} overflow-hidden`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`${viewMode === 'grid' ? 'h-full w-100% object-cover' : 'flex object-cover'} transition-transform duration-300 hover:scale-110`}
                    />
                    <div className={`absolute ${viewMode === 'list' ? 'top-4 left-4' : 'top-2 left-2 md:top-4 md:left-4'} flex gap-2`}>
                      {product.featured && (
                        <span className={`bg-gold-500 text-wood-900 px-3 py-1 rounded-full ${viewMode === 'list' ? 'text-sm' : 'text-xs md:text-sm'} font-semibold`}>
                          Featured
                        </span>
                      )}
                      {!product.inStock && (
                        // <span className={`bg-red-500 text-white px-3 py-1 rounded-full ${viewMode === 'list' ? 'text-sm' : 'text-xs md:text-sm'} font-semibold`}>
                        //   Out of Stock
                        // </span>
                        <span className={`bg-red-500 text-white px-3 py-1 rounded-full ${viewMode === 'list' ? 'text-sm' : 'text-xs md:text-sm'} font-semibold`}>
                          Out-Stock
                        </span>
                      )}
                    </div>
                    <div className={`absolute ${viewMode === 'list' ? 'top-4 right-4' : 'top-2 right-2 md:top-4 md:right-4'} flex gap-2`}>
                      <button className={`${viewMode === 'list' ? 'w-10 h-10' : 'p-1 w-6 h-6 md:w-10 md:h-10'} bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200`}>
                        <Heart className="h-5 w-5 text-wood-600" />
                      </button>
                      <button className={`${viewMode === 'list' ? 'w-10 h-10' : 'p-1 w-6 h-6 md:w-10 md:h-10'} bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200`}>
                        <Eye className="h-5 w-5 text-wood-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`${viewMode === 'list' ? 'flex-1 p-6' : 'md:p-4 p-2 pb-3'}`}>
                    <div className={`${viewMode === 'grid' ? 'flex-col' : 'flex'} items-center mb-2`}>
                      <div className={`${viewMode === 'list' ? 'flex' : 'hidden md:flex'} items-center`}>
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
                      <span className={`text-sm text-wood-600 ${viewMode === 'grid' ? '' : 'ml-2'}`}>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <h3 className={`${viewMode === 'grid' ? 'text-[90%] md:w-full w-[90%]' : 'text-xl'} font-semibold text-wood-900 mb-2`}>{product.name}</h3>
                    <p className={`${viewMode === 'list' ? '' : 'hidden md:flex'} min-h-[60px] text-wood-600 mb-4 text-sm line-clamp-2`}>{product.description}</p>
                    
                    <div className={`${viewMode === 'list' ? 'hidden md:flex flex-wrap gap-2' : 'hidden md:flex w-max md:w-full gap-2 md:flex-wrap'} mb-4`}>
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="w-max max-w-[47%] px-3 py-1 bg-forest-100 text-forest-700 text-xs text-ellipsis whitespace-nowrap overflow-hidden rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`${viewMode === 'list' ? 'flex-wrap md:hidden' : 'md:hidden w-max md:w-full gap-2 md:flex-wrap'} mb-4`}>
                      {product.features.slice(0, 1).map((feature, idx) => (
                        <span
                          key={idx}
                          className="w-max max-w-[100%] px-3 py-1 bg-forest-100 text-forest-700 text-xs text-ellipsis whitespace-nowrap overflow-hidden rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`${viewMode === 'list' ? 'flex items-center md:justify-end gap-3 justify-between flex-row md:flex-row-reverse' : 'flex md:flex-col justify-between'}`}>
                      <div className={`${viewMode === 'list' ? 'mb-0' : 'mb-0 md:mb-2'}`}>
                        <span className={`${viewMode === 'list' ? 'text-[90%] md:text-2xl' : 'text-[90%]'} font-bold text-forest-600`}>
                          ${product.price.min.toLocaleString()}
                        </span>
                        {product.price.min !== product.price.max && (
                          <span className={`text-wood-600 ${viewMode === 'list' ? '' : 'md:text-sm text-xs'} ml-1`}>
                            - ${product.price.max.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className={`${viewMode === 'list' ? 'hidden' : 'relative md:top-0 top-[1.3px] flex md:hidden'} flex items-center`}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-2.5 w-2.5 ${
                              i < Math.floor(product.rating)
                                ? 'text-gold-500 fill-current'
                                : 'text-cream-300'
                            }`}
                          />
                        ))}
                      </div>
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className={`${viewMode === 'list' ? 'flex items-center text-xs px-3' : 'hidden md:flex text-sm'} btn-primary inline-flex items-center`}
                      >
                        <p className='flex w-max'>
                          View Details
                        </p>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-wood-900 mb-2">No products found</h3>
                <p className="text-wood-600 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                    setPriceRange([0, 2000])
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}

            {/* Load More */}
            {filteredAndSortedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-12"
              >
                <button className="btn-secondary">
                  Load More Products
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}