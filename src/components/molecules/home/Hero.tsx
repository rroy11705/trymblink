'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggeredTextVariants, textRevealVariants, navLinkVariants, navItemVariants } from '../../../lib/animations'

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

const Hero = () => {
  return (
    <motion.section 
      id='hero-home' 
      className='w-full aspect-[1440/900] flex flex-col items-center justify-center overflow-hidden'
      initial="hidden"
      animate="visible"
      variants={staggeredTextVariants}
    >
      <div className="w-full flex flex-col items-start justify-center px-15">
				<motion.h1 
          className="text-[140px] font-medium leading-[97%] -tracking-[0.02em] text-white text-gradient-hero"
          variants={textRevealVariants}
        >
					Third eye<br />
					Perspective
				</motion.h1>
				<div className="w-full flex items-center justify-between">
					<motion.p 
            className="text-[40px] font-medium leading-[125%] -tracking-[0.01em] text-[#E2E2E2]"
            variants={textRevealVariants}
          >
						for Smarter Business Moves
					</motion.p>
					
					{/* Navigation aligned with tagline */}
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
				</div>
			</div>
    </motion.section>
  )
}

export default Hero