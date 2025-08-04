'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	const isActive = useCallback((href: string) => {
		if (href === '/') return pathname === '/'
		return pathname.startsWith(href)
	}, [pathname])

	const handleScroll = useCallback(() => {
		if (typeof window !== 'undefined' && window.scrollY >= 150) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, [])

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(prev => !prev)
	}, [])

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(false)
	}, [])

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape' && isMobileMenuOpen) {
			closeMobileMenu()
		}
	}, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {

		// Check scroll position on mount
		if (typeof window !== 'undefined') {
			handleScroll();
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}, [handleScroll]);

	useEffect(() => {
		// Handle keyboard events and body scroll lock
		if (typeof window !== 'undefined') {
			if (isMobileMenuOpen) {
				window.addEventListener('keydown', handleKeyDown)
				document.body.style.overflow = 'hidden'
			} else {
				window.removeEventListener('keydown', handleKeyDown)
				document.body.style.overflow = 'unset'
			}
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('keydown', handleKeyDown)
				document.body.style.overflow = 'unset'
			}
		}
	}, [isMobileMenuOpen, handleKeyDown])

  return (
    <>
      {/* Logo - Always visible in top left */}
      <motion.div 
        className="fixed top-4 md:top-6 left-0 px-5 md:px-15 z-50"
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
        <motion.header 
          className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}  
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headerVariants}
        >
          <div className="w-full px-5 md:px-15 py-4">
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
                          ? isActive(item.href)
                            ? 'bg-white text-[#AEAEAE] px-8 py-4 block'
                            : 'bg-[#E64C27] text-white px-8 py-4 block hover:bg-[#d43d1a]'
                          : isActive(item.href)
                            ? 'text-white border-b-2 border-white pb-1'
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
                className="lg:hidden text-white z-50 relative"
                variants={navItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 90 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    variants={{
                      closed: { d: "M4 6h16M4 12h16M4 18h16" },
                      open: { d: "M6 18L18 6M6 6l12 12" }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-full bg-black z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <Link href="/" onClick={closeMobileMenu} className="flex-shrink-0">
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
                
                {/* Close Button */}
                <motion.button
                  onClick={closeMobileMenu}
                  className="text-white p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="flex flex-col h-full pt-8 px-8">
                <motion.nav 
                  className="flex flex-col space-y-8"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {navigationItems.map((item) => (
                    <motion.div 
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.5 }
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`font-medium text-xl transition-all duration-200 block py-3 ${
                          item.isButton
                            ? isActive(item.href)
                              ? 'bg-white text-[#AEAEAE] px-6 py-4 text-center mt-8'
                              : 'bg-[#E64C27] text-white px-6 py-4 text-center mt-8 hover:bg-[#d43d1a]'
                            : isActive(item.href)
                              ? 'text-white border-b-2 border-white pb-1'
                              : 'text-[#E2E2E2] hover:text-white border-b border-gray-800 hover:border-[#E64C27]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header