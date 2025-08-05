'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInLeftVariants, containerVariants, textRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const Story = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id='our-story' 
      className="relative bg-white w-full overflow-hidden px-6 md:px-0 py-40"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full max-w-240 mx-auto'>
        <motion.div 
          className='w-full space-y-16'
          variants={slideInLeftVariants}
        >
					<motion.h6
						className='text-[#E64C27] text-[20px] md:text-[30px] leading-[100%] -tracking-[0.03em] font-medium text-left'
					>
						OUR STORY
					</motion.h6>
					<motion.p 
            className='text-[#B8B8B8] text-[32px] md:text-[46px] font-bold leading-[146%] text-left'
            variants={textRevealVariants}
          >
						<span className='text-black'>We are TrymbLink,</span><br /><br />
						<span className='text-black'>A design company founded</span> by an architect and a sales visionary. We believe today&apos;s products, especially in SAAS, have lost touch with nature&apos;s intuitive design.  
					</motion.p>
				</motion.div>
			</div>
    </motion.section>
  )
}

export default Story