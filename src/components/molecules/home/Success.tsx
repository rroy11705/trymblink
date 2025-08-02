'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { splitTextVariants, imageRevealVariants, containerVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const Success = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id="path-to-success" 
      className='relative w-full aspect-[1440/947] bg-[#323332] overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0"
        variants={imageRevealVariants}
      >
        <Image
          src="/images/backgrounds/your-success.jpg"
          alt="Your Success Our Responsibility"
          fill
          priority
        />
      </motion.div>
			<div className="relative py-50 px-15 flex items-center justify-between flex-wrap">
				<motion.h3 
          className="w-full text-[#7A7A7A] text-[110px] leading-[98%] font-medium text-left"
          variants={splitTextVariants}
        >
					Your Success
				</motion.h3>
				<motion.h3 
          className="w-full text-white text-[110px] leading-[98%] font-medium text-right"
          variants={splitTextVariants}
        >
					Our Responsibility 
				</motion.h3>
			</div>
    </motion.section>
  )
}

export default Success