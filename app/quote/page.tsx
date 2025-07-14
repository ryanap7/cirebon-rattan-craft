'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, FileText, Truck, DollarSign, Package, Clock } from 'lucide-react'

const productCategories = [
  'Living Room Sets',
  'Dining Sets',
  'Bedroom Furniture',
  'Outdoor/Garden Furniture',
  'Decorative Items',
  'Custom Designs',
  'Mixed Categories'
]

const shippingMethods = [
  { value: 'sea', label: 'Sea Freight (Most Economical)', time: '30-45 days' },
  { value: 'air', label: 'Air Freight (Faster)', time: '5-10 days' },
  { value: 'express', label: 'Express Shipping', time: '3-7 days' }
]

export default function Quote() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    
    // Business Information
    businessType: '',
    experience: '',
    
    // Product Requirements
    productCategory: '',
    specificProducts: '',
    quantity: '',
    budget: '',
    customization: '',
    
    // Shipping & Timeline
    shippingMethod: 'sea',
    urgency: '',
    deliveryAddress: '',
    
    // Additional Information
    additionalRequirements: '',
    sampleNeeded: false,
    catalogRequested: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gold-gradient text-wood-900">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Tell us about your requirements and we'll provide a detailed quote 
              with competitive wholesale pricing for your rattan furniture needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Benefits */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'Wholesale Pricing', desc: 'Direct manufacturer prices' },
              { icon: Package, title: 'Bulk Discounts', desc: 'Better rates for larger orders' },
              { icon: Truck, title: 'Shipping Included', desc: 'Comprehensive shipping quotes' },
              { icon: Clock, title: 'Quick Response', desc: '24-48 hour quote turnaround' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-wood-600" />
                </div>
                <h3 className="font-semibold text-wood-900 mb-2">{benefit.title}</h3>
                <p className="text-wood-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-cream-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
              <div className="text-center mb-12">
                <FileText className="h-12 w-12 text-wood-600 mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold text-wood-900 mb-4">
                  Request Detailed Quote
                </h2>
                <p className="text-wood-700">
                  Please provide as much detail as possible to help us give you the most accurate quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-wood-900 mb-6 pb-2 border-b border-cream-200">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Your country"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Business Type *</label>
                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                      >
                        <option value="">Select business type</option>
                        <option value="retailer">Furniture Retailer</option>
                        <option value="wholesaler">Wholesaler/Distributor</option>
                        <option value="interior-designer">Interior Designer</option>
                        <option value="hotel">Hotel/Hospitality</option>
                        <option value="restaurant">Restaurant/Cafe</option>
                        <option value="online-seller">Online Seller</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Product Requirements */}
                <div>
                  <h3 className="text-xl font-semibold text-wood-900 mb-6 pb-2 border-b border-cream-200">
                    Product Requirements
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Product Category *</label>
                      <select
                        name="productCategory"
                        required
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                      >
                        <option value="">Select category</option>
                        {productCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Specific Products Needed *</label>
                      <textarea
                        name="specificProducts"
                        required
                        rows={4}
                        value={formData.specificProducts}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Please describe the specific furniture pieces you need (e.g., 6-seater dining table with chairs, 3-seater sofa set, coffee table, etc.)"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-wood-700 font-medium mb-2">Estimated Quantity *</label>
                        <select
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        >
                          <option value="">Select quantity range</option>
                          <option value="1-10">1-10 pieces</option>
                          <option value="11-50">11-50 pieces</option>
                          <option value="51-100">51-100 pieces</option>
                          <option value="101-500">101-500 pieces</option>
                          <option value="500+">500+ pieces</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-wood-700 font-medium mb-2">Budget Range (USD)</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5000">Under $5,000</option>
                          <option value="5000-15000">$5,000 - $15,000</option>
                          <option value="15000-50000">$15,000 - $50,000</option>
                          <option value="50000-100000">$50,000 - $100,000</option>
                          <option value="100000+">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Customization Requirements</label>
                      <textarea
                        name="customization"
                        rows={3}
                        value={formData.customization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Any specific customization needs (colors, dimensions, materials, etc.)"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Shipping & Timeline */}
                <div>
                  <h3 className="text-xl font-semibold text-wood-900 mb-6 pb-2 border-b border-cream-200">
                    Shipping & Timeline
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Preferred Shipping Method *</label>
                      <div className="space-y-3">
                        {shippingMethods.map((method) => (
                          <div key={method.value} className="flex items-center">
                            <input
                              type="radio"
                              id={method.value}
                              name="shippingMethod"
                              value={method.value}
                              checked={formData.shippingMethod === method.value}
                              onChange={handleChange}
                              className="w-4 h-4 text-wood-600 focus:ring-wood-500"
                            />
                            <label htmlFor={method.value} className="ml-3 flex-1">
                              <div className="font-medium text-wood-900">{method.label}</div>
                              <div className="text-sm text-wood-600">Delivery time: {method.time}</div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-wood-700 font-medium mb-2">Timeline Urgency *</label>
                        <select
                          name="urgency"
                          required
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        >
                          <option value="">Select urgency</option>
                          <option value="asap">ASAP (Rush Order)</option>
                          <option value="1-2-months">1-2 months</option>
                          <option value="3-4-months">3-4 months</option>
                          <option value="flexible">Flexible timeline</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-wood-700 font-medium mb-2">Delivery Country/Port *</label>
                        <input
                          type="text"
                          name="deliveryAddress"
                          required
                          value={formData.deliveryAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                          placeholder="Destination port or city"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-wood-900 mb-6 pb-2 border-b border-cream-200">
                    Additional Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Additional Requirements</label>
                      <textarea
                        name="additionalRequirements"
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Any other specific requirements, quality standards, certifications needed, packaging preferences, etc."
                      ></textarea>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sampleNeeded"
                          name="sampleNeeded"
                          checked={formData.sampleNeeded}
                          onChange={handleChange}
                          className="w-4 h-4 text-wood-600 focus:ring-wood-500 rounded"
                        />
                        <label htmlFor="sampleNeeded" className="ml-3 text-wood-700">
                          I would like to request samples before placing a bulk order
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="catalogRequested"
                          name="catalogRequested"
                          checked={formData.catalogRequested}
                          onChange={handleChange}
                          className="w-4 h-4 text-wood-600 focus:ring-wood-500 rounded"
                        />
                        <label htmlFor="catalogRequested" className="ml-3 text-wood-700">
                          Please send me your complete product catalog
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-wood-600 hover:bg-wood-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-warm hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Submit Quote Request
                </motion.button>

                <p className="text-center text-sm text-wood-600">
                  We'll review your request and send you a detailed quote within 24-48 hours. 
                  For urgent requests, please call us directly at +62 231 123 4567.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-wood-900 mb-6">
              How Our Quoting Process Works
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              From initial inquiry to final delivery, here's what you can expect 
              when working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit Request', desc: 'Fill out the detailed quote form with your requirements' },
              { step: '2', title: 'Review & Analysis', desc: 'Our team reviews your needs and prepares a customized quote' },
              { step: '3', title: 'Quote Delivery', desc: 'Receive detailed pricing within 24-48 hours via email' },
              { step: '4', title: 'Order & Production', desc: 'Approve the quote and we begin production of your order' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 text-wood-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-wood-900 mb-3">{process.title}</h3>
                <p className="text-wood-700 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}