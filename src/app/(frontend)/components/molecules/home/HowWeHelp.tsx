'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInLeftVariants, slideInRightVariants, containerVariants, textRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const HowWeHelp = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id='how-we-help' 
      className="relative w-full overflow-hidden px-6 md:px-15 py-15"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full flex flex-col md:flex-row items-center justify-between gap-8'>
        <motion.div 
          className='w-full md:w-[45%] flex flex-col items-start justify-center gap-16 md:gap-30'
          variants={slideInLeftVariants}
        >
          <div className='flex flex-col gap-10'>
            <motion.h6
              className='text-[#E64C27] text-[20px] md:text-[30px] leading-[100%] -tracking-[0.03em] font-medium text-left'
            >
              Mission
            </motion.h6>
            <motion.h4 
              className='text-[#B3B3B3] text-gradient-hero text-[50px] md:text-[80px] leading-[100%] -tracking-[0.02em] font-medium text-left'
              variants={textRevealVariants}
            >
              How we help<br />
              our partners
            </motion.h4>
          </div>
					<motion.p 
            className='text-white text-[20px] md:text-[30px] leading-[140%] -tracking-[0.02em] text-left'
            variants={textRevealVariants}
          >
						We design that solves, strategy that sticks, we held hand of businesses in every stage - from discovery to execution, from GTM to sales.
					</motion.p>
				</motion.div>
				<motion.div 
          className='relative w-full md:w-[45%] aspect-[650/650]'
          variants={slideInRightVariants}
        >
					<Image
						src="/images/backgrounds/how-we-help.webp"
						alt="How We Help"
						fill
						priority
					/>
				</motion.div>
				
			</div>
    </motion.section>
  )
}

export default HowWeHelp