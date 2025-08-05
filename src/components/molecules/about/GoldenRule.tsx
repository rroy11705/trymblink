'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, textRevealVariants, fadeInVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const GoldenRule = () => {
  const { ref, animate } = useScrollAnimation()
  return (
    <motion.section 
      ref={ref}
      id='golden-rule' 
      className="relative bg-white w-full overflow-hidden px-6 md:px-0 py-40"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full flex flex-col items-center justify-center gap-20'>
				<motion.h6
					className='bg-[#E64C2733] text-[#E64C27] text-[14px] md:text-[24px] leading-[108%] -tracking-[0.01em] font-medium p-2.5'
				>
					Our golden rule
				</motion.h6>
        <motion.div 
          className='w-full max-w-300 mx-auto space-y-10'
          variants={fadeInVariants}
        >
					<motion.h4 
						className='text-[#060410] text-[40px] md:text-[80px] leading-[120%] -tracking-[0.02em] text-center'
						variants={textRevealVariants}
					>
						We build products that embody these all-encompassing clarity.
					</motion.h4>
					<motion.p 
            className='text-[#3F3F3F] text-[14px] md:text-[24px] leading-[150%] text-center'
            variants={textRevealVariants}
          >
						balancing complexity with beautiful simplicity.
					</motion.p>
				</motion.div>
			</div>
    </motion.section>
  )
}

export default GoldenRule