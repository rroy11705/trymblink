'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, staggeredTextVariants, textRevealVariants } from '../../../lib/animations'
import Link from 'next/link'
import ThirdEyeIllustration from '../../icons/decorative/ThirdEyeIllustration'

const Hero = () => {
  return (
    <motion.section 
      id='hero-home' 
      className='relative w-full min-h-175 md:min-h-160 flex flex-col overflow-hidden px-6 sm:p-0'
      initial="hidden"
      animate="visible"
      variants={staggeredTextVariants}
    >
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-center gap-[30px] pt-72 md:pt-92 md:px-15">
				<motion.h1 
          className="relative text-[60px] md:text-[140px] font-medium leading-[97%] text-white text-gradient-hero"
          variants={textRevealVariants}
        >
					Third&nbsp;
          <span className='absolute -left-12 md:left-38 -top-22 md:-top-14 -translate-y-1/2 z-0'>
            <ThirdEyeIllustration />

          </span>
          eye<br />
          <span className='relative z-10 text-white text-gradient-hero'>Perspective</span>
				</motion.h1>
				<div className="w-full flex items-center justify-between">
					<motion.p 
            className="text-[20px] md:text-[30px] font-medium leading-[125%] -tracking-[0.01em] text-[#E2E2E2]"
            variants={textRevealVariants}
          >
						for Smarter Business Moves
					</motion.p>
				</div>
			</div>
      <motion.div className='md:hidden w-fit absolute bottom-6 right-6 z-10' variants={fadeInVariants}>
				<Link
					href="/contact"
					className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white px-8 py-4 block'
				>
					Enquire now
				</Link>
			</motion.div>
    </motion.section>
  )
}

export default Hero