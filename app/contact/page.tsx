"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen mt-16 lg:mt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6969847/pexels-photo-6969847.jpeg')",
          }}
        ></div>

        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white drop-shadow-lg"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium">
              Ready to import premium rattan furniture? We're here to help with
              quotes, product information, and export assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-serif font-bold text-wood-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-wood-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-2">
                      Address
                    </h3>
                    <p className="text-wood-700">
                      Jl. Raya Industri No. 123
                      <br />
                      Cirebon, West Java 45122
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-wood-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-2">Phone</h3>
                    <p className="text-wood-700">
                      +62 231 123 4567
                      <br />
                      WhatsApp: +62 812 3456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-wood-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-2">Email</h3>
                    <p className="text-wood-700">info@cirebonrattancraft.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-wood-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-wood-700">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 8:00 AM - 12:00 PM
                      <br />
                      Sunday: Closed
                      <br />
                      <span className="text-sm text-wood-600">(GMT+7)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </motion.a>
                <motion.a
                  href="mailto:infot@cirebonrattancraft.com"
                  className="w-full bg-wood-600 hover:bg-wood-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-serif font-bold text-wood-900 mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-wood-700 font-medium mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Quote Request</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="custom">Custom Design</option>
                      <option value="shipping">Shipping Information</option>
                      <option value="sample">Sample Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-wood-700 font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-wood-700 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Please provide details about your inquiry, including quantities, preferred products, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-wood-600 hover:bg-wood-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-warm hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-wood-900 mb-6">
              Visit Our Factory
            </h2>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              We welcome international buyers to visit our manufacturing
              facility in Cirebon to see our craftsmanship process firsthand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-soft"
          >
            <div className="aspect-video bg-cream-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-wood-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-wood-900 mb-2">
                  Factory Location
                </h3>
                <p className="text-wood-700">Cirebon, West Java, Indonesia</p>
                <p className="text-wood-600 text-sm mt-2">
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
