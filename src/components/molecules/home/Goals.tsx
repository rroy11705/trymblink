'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { textRevealVariants, imageRevealVariants, containerVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const Goals = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id="vision" 
      className='relative w-full aspect-[1440/1159] bg-white overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<motion.div 
        className="absolute inset-0 z-10"
        variants={imageRevealVariants}
      >
        <Image
          src="/images/backgrounds/goals.png"
          alt="Your Success Our Responsibility"
          fill
          priority
        />
      </motion.div>
			<div className="relative py-75 px-15 flex items-center justify-between flex-wrap">
				<motion.h3 
          className="w-full text-[#7A7A7A] text-gradient-goals text-[110px] leading-[98%] font-medium text-center"
          variants={textRevealVariants}
        >
					Where your<br />
					company can be reached
				</motion.h3>
			</div>
    </motion.section>
  )
}

export default Goals