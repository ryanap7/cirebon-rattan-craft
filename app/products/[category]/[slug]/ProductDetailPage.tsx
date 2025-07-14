'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Award, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check
} from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  slug: string
  price: { min: number; max: number }
  images: string[]
  description: string
  features: string[]
  specifications: any
  careInstructions: string[]
  customization: any
  shipping: any
  pricing: any
  rating: number
  reviews: number
  inStock: boolean
  featured: boolean
  tags: string[]
}

interface ProductDetailPageProps {
  product: Product
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedPricing, setSelectedPricing] = useState('retail')
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'care', label: 'Care Instructions' },
    { id: 'customization', label: 'Customization' },
    { id: 'shipping', label: 'Shipping' }
  ]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      {/* Breadcrumbs */}
      <div className="container-max section-padding py-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li><Link href="/" className="text-wood-600 hover:text-wood-900">Home</Link></li>
            <li><span className="text-wood-400">/</span></li>
            <li><Link href="/products" className="text-wood-600 hover:text-wood-900">Products</Link></li>
            <li><span className="text-wood-400">/</span></li>
            <li><Link href={`/products/${product.category}`} className="text-wood-600 hover:text-wood-900">
              {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link></li>
            <li><span className="text-wood-400">/</span></li>
            <li><span className="text-wood-900 font-medium">{product.name}</span></li>
          </ol>
        </nav>
      </div>

      <div className="container-max section-padding pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative aspect-square mb-6 bg-white rounded-xl overflow-hidden shadow-soft">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-wood-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6 text-wood-600" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-wood-500' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              {product.featured && (
                <span className="inline-block bg-gold-500 text-wood-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Product
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-current'
                          : 'text-cream-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-wood-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-wood-900">Pricing Options</h3>
                <div className="flex bg-cream-100 rounded-lg p-1">
                  {Object.keys(product.pricing).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedPricing(type)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedPricing === type
                          ? 'bg-white shadow-sm text-wood-900'
                          : 'text-wood-600 hover:text-wood-900'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-3xl font-bold text-forest-600">
                ${product.pricing[selectedPricing].min.toLocaleString()}
                {product.pricing[selectedPricing].min !== product.pricing[selectedPricing].max && (
                  <span className="text-xl text-wood-600 ml-2">
                    - ${product.pricing[selectedPricing].max.toLocaleString()}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-wood-600 mt-2">
                {selectedPricing === 'retail' && 'Individual piece pricing'}
                {selectedPricing === 'wholesale' && 'Minimum order: 10 pieces'}
                {selectedPricing === 'bulk' && 'Minimum order: 50 pieces'}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-wood-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-forest-600 mr-2 flex-shrink-0" />
                    <span className="text-wood-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-wood-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-cream-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-cream-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-cream-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link href="/quote" className="btn-primary flex-1 text-center">
                  Request Quote
                </Link>
                <button className="btn-secondary flex-1">
                  Contact Us
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center justify-center px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                  <Heart className="h-5 w-5 mr-2" />
                  Save
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-cream-300 rounded-lg hover:bg-cream-50 transition-colors duration-200">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-200">
              <div className="text-center">
                <Truck className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-wood-900">Free Shipping</div>
                <div className="text-xs text-wood-600">On bulk orders</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-wood-900">Quality Guarantee</div>
                <div className="text-xs text-wood-600">2-3 year warranty</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-wood-900">Certified</div>
                <div className="text-xs text-wood-600">FSC & ISO standards</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-cream-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-wood-500 text-wood-900'
                        : 'border-transparent text-wood-600 hover:text-wood-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'description' && (
                <div className="prose prose-wood max-w-none">
                  <p className="text-wood-700 leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-3">General Specifications</h4>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-wood-600">Material:</dt>
                        <dd className="text-wood-900 font-medium">{product.specifications.material}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-wood-600">Weight:</dt>
                        <dd className="text-wood-900 font-medium">{product.specifications.weight}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-wood-600">Finish:</dt>
                        <dd className="text-wood-900 font-medium">{product.specifications.finish}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-wood-600">Origin:</dt>
                        <dd className="text-wood-900 font-medium">{product.specifications.origin}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-wood-600">Warranty:</dt>
                        <dd className="text-wood-900 font-medium">{product.specifications.warranty}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-3">Dimensions</h4>
                    <div className="space-y-3">
                      {Object.entries(product.specifications.dimensions).map(([key, dims]: [string, any]) => (
                        <div key={key} className="border border-cream-200 rounded-lg p-3">
                          <div className="font-medium text-wood-900 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          <div className="text-sm text-wood-600">
                            L: {dims.length}cm × W: {dims.width}cm × H: {dims.height}cm
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div>
                  <h4 className="font-semibold text-wood-900 mb-4">Care Instructions</h4>
                  <ul className="space-y-3">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-forest-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-wood-700">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'customization' && (
                <div>
                  <h4 className="font-semibold text-wood-900 mb-4">Customization Options</h4>
                  {product.customization.available ? (
                    <div>
                      <p className="text-wood-700 mb-4">
                        We offer extensive customization options to meet your specific requirements:
                      </p>
                      <ul className="space-y-3">
                        {product.customization.options.map((option: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-forest-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-wood-700">{option}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                        <p className="text-wood-700 text-sm">
                          <strong>Note:</strong> Custom orders may require additional lead time. 
                          Contact us for detailed customization quotes and timeline estimates.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-wood-700">This product is not available for customization.</p>
                  )}
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-3">Shipping Information</h4>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-wood-600 font-medium">Packaging:</dt>
                        <dd className="text-wood-700 mt-1">{product.shipping.packaging}</dd>
                      </div>
                      <div>
                        <dt className="text-wood-600 font-medium">Lead Time:</dt>
                        <dd className="text-wood-700 mt-1">{product.shipping.leadTime}</dd>
                      </div>
                      <div>
                        <dt className="text-wood-600 font-medium">Insurance:</dt>
                        <dd className="text-wood-700 mt-1">{product.shipping.insurance}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wood-900 mb-3">Shipping Methods</h4>
                    <ul className="space-y-2">
                      {product.shipping.methods.map((method: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-forest-600 mr-2" />
                          <span className="text-wood-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}