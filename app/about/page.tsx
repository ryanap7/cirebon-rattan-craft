'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Users, Leaf, Globe, Award, Shield, Factory, Clock } from 'lucide-react'

const milestones = [
  { year: '1998', title: 'Company Founded', description: 'Started as a small family business in Cirebon' },
  { year: '2005', title: 'First Export', description: 'Began exporting to Southeast Asian markets' },
  { year: '2010', title: 'ISO Certification', description: 'Achieved ISO 9001 quality management certification' },
  { year: '2015', title: 'Global Expansion', description: 'Expanded to European and American markets' },
  { year: '2018', title: 'FSC Certification', description: 'Committed to sustainable forestry practices' },
  { year: '2024', title: '30+ Countries', description: 'Now exporting to over 30 countries worldwide' }
]

const values = [
  {
    icon: Heart,
    title: 'Traditional Craftsmanship',
    description: 'Preserving centuries-old Indonesian weaving techniques passed down through generations of skilled artisans.'
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    description: 'Using sustainably harvested rattan and eco-friendly production processes to protect our environment.'
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    description: 'Supporting local communities by providing fair employment and preserving traditional skills.'
  },
  {
    icon: Globe,
    title: 'Global Quality Standards',
    description: 'Meeting international quality and safety standards while maintaining authentic Indonesian character.'
  }
]

const certifications = [
  {
    name: 'FSC Certified',
    description: 'Forest Stewardship Council certification ensures sustainable rattan sourcing',
    icon: Leaf
  },
  {
    name: 'ISO 9001:2015',
    description: 'International quality management system certification',
    icon: Award
  },
  {
    name: 'Export License',
    description: 'Official Indonesian government export license for international trade',
    icon: Shield
  },
  {
    name: 'SVLK Certified',
    description: 'Indonesian Timber Legality Verification System compliance',
    icon: Factory
  }
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg')"
          }}
        ></div>
        
        <div className="relative z-10 container-max section-padding text-center text-white drop-shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium">
              From a small family workshop to an internationally recognized manufacturer, 
              discover the passion and craftsmanship behind Cirebon Rattan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-6">
                Three Decades of 
                <span className="text-gradient block">Excellence</span>
              </h2>
              <p className="text-lg text-wood-700 mb-6">
                Founded in 1998 in the historic city of Cirebon, West Java, our company began as a 
                small family workshop dedicated to preserving traditional Indonesian rattan weaving 
                techniques. What started with just three artisans has grown into a thriving business 
                that employs over 150 skilled craftspeople.
              </p>
              <p className="text-lg text-wood-700 mb-8">
                Today, we're proud to be one of Indonesia's leading rattan furniture exporters, 
                shipping our handcrafted pieces to over 30 countries worldwide. Despite our growth, 
                we remain committed to the same principles that founded our company: quality 
                craftsmanship, sustainable practices, and respect for traditional techniques.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-900 mb-2">25+</div>
                  <div className="text-wood-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-900 mb-2">150+</div>
                  <div className="text-wood-600">Skilled Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-900 mb-2">30+</div>
                  <div className="text-wood-600">Export Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-900 mb-2">10K+</div>
                  <div className="text-wood-600">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
                  alt="Master craftsman working on rattan furniture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-wood-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 mr-3" />
                  <div>
                    <div className="font-bold text-lg">Since 1998</div>
                    <div className="text-sm">Crafting Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Key milestones that shaped our company and established our reputation 
              as a trusted rattan furniture manufacturer.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-wood-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-8">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-wood-900 mb-2">{milestone.title}</h3>
                  <p className="text-wood-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              The principles that guide everything we do, from sourcing materials 
              to crafting the final product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mr-6">
                  <value.icon className="h-8 w-8 text-forest-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-wood-900 mb-3">{value.title}</h3>
                  <p className="text-wood-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Quality Certifications
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              Our commitment to quality and sustainability is backed by internationally 
              recognized certifications and standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-wood-900 mb-3">{cert.name}</h3>
                <p className="text-wood-700 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-gradient">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Partner with Us
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join the hundreds of satisfied customers worldwide who trust us for 
              premium rattan furniture. Let's discuss your project requirements.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="bg-white text-forest-900 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Contact Us Today
                <Globe className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}