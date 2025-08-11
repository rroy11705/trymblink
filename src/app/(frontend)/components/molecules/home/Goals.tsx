'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { textRevealVariants, imageRevealVariants, containerVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const Goals = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <>
      <section className='md:hidden h-11 bg-transparent' />
      <motion.section 
        ref={ref}
        id="vision" 
        className='relative gradient-goals w-full aspect-[390/425] md:aspect-[1440/1159] bg-white overflow-hidden'
        initial="hidden"
        animate={animate}
        variants={containerVariants}
      >
        <motion.div 
          className="absolute inset-0 z-10"
          variants={imageRevealVariants}
        >
          <Image
            src="/images/backgrounds/goals.webp"
            alt="Your Success Our Responsibility"
            fill
            className="hidden md:block"
            priority
          />
          <Image
            src="/images/backgrounds/goals-mobile.webp"
            alt="Your Success Our Responsibility"
            fill
            className='object-cover block md:hidden'
            priority
          />
        </motion.div>
        <div className="relative py-60 md:py-78 md:px-15 flex items-center justify-between flex-wrap">
          <motion.h3 
            className="w-full text-white text-[32px] md:text-[110px] leading-[98%] font-medium text-center"
            variants={textRevealVariants}
          >
            This is you with Us
          </motion.h3>
        </div>
      </motion.section>
    </>
  )
}

export default Goals