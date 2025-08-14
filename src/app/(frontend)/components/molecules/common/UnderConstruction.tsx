'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, staggeredTextVariants, textRevealVariants } from '../../../lib/animations'
import Link from 'next/link'

const UnderConstruction = () => {
  return (
    <motion.section 
			id='hero-home' 
			className='relative w-full min-h-120 md:min-h-160 flex flex-col overflow-hidden px-6 sm:p-0'
			initial="hidden"
			animate="visible"
			variants={staggeredTextVariants}
		>
			<div className="w-full flex flex-col items-center justify-center gap-[30px] pt-30 md:pt-65 md:px-15">
				<motion.h1 
					className="relative text-[40px] md:text-[80px] font-medium leading-[120%] -tracking-[0.02em] text-white text-gradient-hero text-left md:text-center"
					variants={textRevealVariants}
				>
					This page is under experiment
				</motion.h1>
				<div className="w-fit flex items-center justify-between">
					<motion.p 
						className="text-[20px] md:text-[40px] font-light leading-[125%] -tracking-[0.01em] text-[#E2E2E2]"
						variants={textRevealVariants}
					>
						Will be available ASAP.
					</motion.p>
				</div>
				<motion.div 
					className='w-fit' 
					variants={fadeInVariants}
				>
					<Link
						href="/"
						className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white px-8 py-4 block'
					>
						Back to Home
					</Link>
			</motion.div>
			</div>
		</motion.section>
  )
}

export default UnderConstruction