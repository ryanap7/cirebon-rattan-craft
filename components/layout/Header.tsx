"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar style based on page and scroll position
  const getNavbarStyle = () => {
    if (isHomePage) {
      // Home page: transparent when not scrolled, white when scrolled
      return isScrolled
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-cream-200"
        : "bg-transparent";
    } else {
      // Other pages: always white background
      return "bg-white/95 backdrop-blur-lg shadow-lg border-b border-cream-200";
    }
  };

  // Determine text color based on page and scroll position
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      // Home page when not scrolled: white text with shadow
      return "text-white drop-shadow-lg";
    } else {
      // Home page when scrolled OR other pages: dark text
      return "text-wood-900";
    }
  };

  const getHoverColor = () => {
    if (isHomePage && !isScrolled) {
      return "hover:text-gold-300";
    } else {
      return "hover:text-wood-700";
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${getNavbarStyle()}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-max section-padding">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Cirebon Rattan Craft */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="h-full max-h-[80px] w-auto flex items-center"
          >
            <Image
              src="/assets/logo.webp"
              alt="Cirebon Rattan Craft Logo"
              width={180}
              height={60}
              priority
              className="h-full w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${getTextColor()} ${getHoverColor()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/quote"
              className="bg-gold-500 hover:bg-gold-600 text-wood-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`h-6 w-6 ${getTextColor()}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`h-6 w-6 ${getTextColor()}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl mt-4 py-4 border border-cream-200"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-wood-700 hover:text-wood-900 hover:bg-cream-50 transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="px-4 pt-4 border-t border-cream-200 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navigation.length * 0.1 }}
              >
                <Link
                  href="/quote"
                  className="bg-gold-500 hover:bg-gold-600 text-wood-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
