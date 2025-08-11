'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { containerVariants, textRevealVariants, imageRevealVariants, fadeInVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import TryambakamTextIcon from '@/components/icons/decorative/TryambakamTextIcon'
import TryambakamTextIconMobile from '@/components/icons/decorative/TryambakamTextIconMobile'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => ({ default: mod.Player })),
  { ssr: false }
)

const Meaning = () => {
  const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id='what-it-means' 
      className="relative w-full overflow-hidden px-6 md:px-0 py-40"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full flex flex-col items-center justify-center gap-20'>
				<motion.div 
          className='relative'
          variants={imageRevealVariants}
        >
					<Player
						autoplay
						loop
						src="/images/logos/tryambakam.json"
						style={{ height: '140px', width: '140px' }}
					/>
				</motion.div>
				<motion.div
					className='relative hidden md:block'
					variants={imageRevealVariants}
				>
					<TryambakamTextIcon />
				</motion.div>
				<motion.div
					className='relative md:hidden'
					variants={imageRevealVariants}
				>
					<TryambakamTextIconMobile />
				</motion.div>
        <motion.div 
          className='w-full max-w-174 mx-auto space-y-10'
          variants={fadeInVariants}
        >
					<motion.h4 
						className='text-white text-gradient-hero text-[32px] md:text-[46px] leading-[125%] font-medium text-center'
						variants={textRevealVariants}
					>
						What it means?
					</motion.h4>
					<motion.p 
            className='text-white/55 text-[14px] md:text-[24px] leading-[150%] text-center'
            variants={textRevealVariants}
          >
						Our name, from the Sanskrit &apos;Tryambakam&apos; (the three-eyed one),
						symbolizes our philosophy: uniting the wisdom of the past,
						the needs of the present, and a vision for the future.
					</motion.p>
				</motion.div>
			</div>
    </motion.section>
  )
}

export default Meaning