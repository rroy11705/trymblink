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
      className="relative w-full aspect-[1440/978] overflow-hidden"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full h-full flex items-end justify-end'>
				<motion.div 
          className='relative w-[70%] aspect-[1014/882]'
          variants={slideInRightVariants}
        >
					<Image
						src="/images/backgrounds/how-we-help.jpg"
						alt="How We Help"
						fill
						priority
					/>
				</motion.div>
				<motion.div 
          className='absolute left-15 bottom-30 w-135 h-152 bg-black pr-20 flex flex-col items-center justify-center gap-30'
          variants={slideInLeftVariants}
        >
					<motion.h4 
            className='text-[#B3B3B3] text-gradient-hero text-[80px] leading-[100%] -tracking-[0.02em] font-medium text-left'
            variants={textRevealVariants}
          >
						How we help<br />
						our partners
					</motion.h4>
					<motion.p 
            className='text-white text-[30px] leading-[140%] -tracking-[0.02em] text-left'
            variants={textRevealVariants}
          >
						We design that solves, strategy that sticks, we held hand of businesses in every stage - from discovery to execution, from GTM to sales.
					</motion.p>
				</motion.div>
			</div>
    </motion.section>
  )
}

export default HowWeHelp