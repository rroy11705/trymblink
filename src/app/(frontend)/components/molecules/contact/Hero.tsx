'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { imageRevealVariants, staggeredTextVariants, textRevealVariants } from '../../../lib/animations'
import Image from 'next/image'

const Hero = () => {
  return (
    <motion.section 
      id='hero-home' 
      className='relative w-full min-h-85 md:min-h-145 flex flex-col overflow-hidden px-6 sm:p-0'
      initial="hidden"
      animate="visible"
      variants={staggeredTextVariants}
    >
			<motion.div 
          className="absolute inset-0"
          variants={imageRevealVariants}
        >
				<Image
					src="/images/backgrounds/contact-hero.webp"
					alt="Your Success Our Responsibility"
					fill
					priority
					className="object-contain object-right-top"
				/>
			</motion.div>
      <div className="w-full flex flex-col items-start justify-center gap-[30px] pt-52 md:pt-92 md:px-15">
				<motion.h1 
          className="relative text-[32px] md:text-[80px] font-medium leading-[97%] -tracking-[0.02em] text-white text-gradient-hero"
          variants={textRevealVariants}
        >
					Fuel your<br />
					next big leap
				</motion.h1>
				<div className="w-full flex items-center justify-between">
					<motion.p 
            className="text-[16px] md:text-[30px] font-medium leading-[125%] -tracking-[0.01em] text-white text-gradient-hero"
            variants={textRevealVariants}
          >
						where design data, strategy, and<br />
						engineering collide.
					</motion.p>
				</div>
			</div>
    </motion.section>
  )
}

export default Hero