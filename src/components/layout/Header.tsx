'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { headerVariants, fadeInVariants, navLinkVariants, navItemVariants } from '../../lib/animations'

interface NavigationItem {
  label: string
  href: string
  isButton?: boolean
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact', isButton: true },
]

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section element to determine when to make header sticky
      const heroSection = document.getElementById('hero-home')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 265
        const scrollPosition = window.scrollY // Add some offset
        setIsSticky(scrollPosition > heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Logo - Always visible in top left */}
      <motion.div 
        className="fixed top-6 left-0 px-15 z-50"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <Link href="/" className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/logos/trymblink-full.svg"
              alt="Trymblink"
              width={130}
              height={24}
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* Sticky Navigation Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.header 
            className="fixed top-0 left-0 w-full z-40 bg-dark backdrop-blur-md border-b border-[#323332] transition-all duration-300"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={headerVariants}
          >
            <div className="w-full px-15 py-4">
              <div className="flex items-center justify-end">
                <motion.nav 
                  className="hidden lg:flex items-center space-x-8"
                  variants={navLinkVariants}
                >
                  {navigationItems.map((item) => (
                    <motion.div key={item.label} variants={navItemVariants}>
                      <Link
                        href={item.href}
                        className={`font-medium text-base transition-all duration-200 ${
                          item.isButton
                            ? 'bg-[#E64C27] text-white px-8 py-4 block'
                            : 'text-[#E2E2E2] hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Mobile Menu Button */}
                <motion.button 
                  className="lg:hidden text-white"
                  variants={navItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header