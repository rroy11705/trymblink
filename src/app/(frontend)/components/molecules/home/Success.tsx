'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { imageRevealVariants, containerVariants, fadeInVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const Success = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id="path-to-success" 
      className='relative w-full aspect-[390/395] md:aspect-[1440/947] overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0"
        variants={imageRevealVariants}
      >
        <Image
          src="/images/backgrounds/your-success.webp"
          alt="Your Success Our Responsibility"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>
      <div className="relative w-full md:h-full flex items-center justify-center pt-10 md:pt-0">
        <div className='space-y-12'>
          <motion.h4 
            className="w-full text-[#7A7A7A] text-[20px] md:text-[40px] leading-[98%] tracking-[0.4em] font-medium text-center text-gradient-success"
            variants={fadeInVariants}
          >
            Your Success
          </motion.h4>
          <motion.h3 
            className="w-full text-white text-[50px] md:text-[120px] leading-[98%] font-medium text-center"
            variants={fadeInVariants}
          >
            Our Responsibility 
          </motion.h3>
        </div>
      </div>
    </motion.section>
  )
}

export default Success