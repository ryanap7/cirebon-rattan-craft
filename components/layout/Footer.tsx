'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Truck,
  Shield,
  Award,
  Heart
} from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Living Room Sets', href: '/products/living-room' },
    { name: 'Dining Sets', href: '/products/dining-sets' },
    { name: 'Bedroom Furniture', href: '/products/bedroom' },
    { name: 'Outdoor Furniture', href: '/products/outdoor' },
    { name: 'Decorative Items', href: '/products/decorative' },
    { name: 'Custom Designs', href: '/products/custom' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Craftsmanship', href: '/about#craftsmanship' },
    { name: 'Sustainability', href: '/about#sustainability' },
    { name: 'Quality Standards', href: '/about#quality' },
    { name: 'Export Process', href: '/about#export' },
    { name: 'Certifications', href: '/about#certifications' }
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Care Instructions', href: '/care-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Terms & Conditions', href: '/terms' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Design Inspiration', href: '/blog/design' },
    { name: 'Industry News', href: '/blog/industry' },
    { name: 'Care Tips', href: '/blog/care-tips' },
    { name: 'Catalog Download', href: '/catalog' },
    { name: 'Press Kit', href: '/press' }
  ]
}

const certifications = [
  { name: 'FSC Certified', icon: Award },
  { name: 'ISO 9001', icon: Shield },
  { name: 'Export Licensed', icon: Truck },
  { name: 'Eco-Friendly', icon: Heart }
]

export default function Footer() {
  return (
    <footer className="bg-wood-900 text-white">
      {/* Main footer content */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-serif font-bold text-gold-400 mb-6 block">
                Cirebon Rattan
              </Link>
              <p className="text-cream-200 mb-6 leading-relaxed">
                Premium Indonesian rattan furniture manufacturer and exporter based in Cirebon, 
                West Java. Creating exceptional handcrafted furniture for over 25 years.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                  <span className="text-cream-200">Cirebon, West Java, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                  <span className="text-cream-200">+62 231 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                  <span className="text-cream-200">export@cirebonrattan.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0" />
                  <span className="text-cream-200">www.cirebonrattan.com</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/cirebonrattan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/cirebonrattan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:export@cirebonrattan.com"
                  className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Products */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gold-400 mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gold-400 mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gold-400 mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gold-400 mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-wood-700"
        >
          <h3 className="text-gold-400 font-semibold mb-6 text-center">Our Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center">
                <cert.icon className="h-6 w-6 text-gold-400 mr-2" />
                <span className="text-cream-200 text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-wood-700 bg-wood-800">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-cream-300 text-sm mb-4 md:mb-0"
            >
              © 2024 Cirebon Rattan Exports. All rights reserved. | Premium Indonesian Rattan Furniture Manufacturer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-cream-300 hover:text-gold-400 transition-colors duration-200">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}