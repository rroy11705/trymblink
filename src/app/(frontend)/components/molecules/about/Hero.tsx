'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, fadeInVariants, imageRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { getImageUrl } from '../../../lib/imageUrl'
import Image from 'next/image'

const Hero = () => {
  const { ref, animate } = useScrollAnimation()
  return (
    <motion.section 
			ref={ref}
			id="about-hero" 
			className='relative w-full aspect-[390/1354] md:aspect-[1440/1834] overflow-hidden'
			initial="hidden"
			animate={animate}
			variants={containerVariants}
		>
			<motion.div 
				className="absolute inset-0"
				variants={imageRevealVariants}
			>
				<Image
					src={getImageUrl('/images/backgrounds/about-us-hero.webp')}
					alt="Ice burg"
					fill
					className="object-cover object-bottom hidden md:block"
					priority
				/>
				<Image
					src={getImageUrl('/images/backgrounds/about-us-hero-mobile.webp')}
					alt="Ice burg"
					fill
					className="object-cover object-bottom md:hidden"
					priority
				/>
			</motion.div>
			<div className="relative w-full h-full">
				<motion.h4 
					className="absolute top-[158vw] md:top-[32vw] right-6 md:right-15 w-fit text-white text-[22px] md:text-[54px] leading-[110%] -tracking-[0.02em]"
					variants={fadeInVariants}
				>
					We&apos;re diving
				</motion.h4>
				<motion.h4 
					className="absolute top-[168vw] md:top-[38vw] right-6 md:right-15 w-fit text-white text-[22px] md:text-[54px] leading-[110%] -tracking-[0.02em]"
					variants={fadeInVariants}
				>
					Deep
				</motion.h4>

				<div className='w-[calc(100vw_-_48px)] md:w-[calc(100vw_-_120px)] absolute top-[220vw] md:top-[60vw] right-6 md:right-15'>
					<motion.h4 
						className="text-white text-[20px] md:text-[54px] font-medium leading-[110%] -tracking-[0.02em] text-right mb-10"
						variants={fadeInVariants}
					>
						The magic isn&apos;et above the surface,<br />
						It&apos;es buried deep in the problem.
					</motion.h4>

					<motion.p 
						className="hidden md:block text-[#ACACAC] text-[16px] md:text-[32px] leading-[110%] -tracking-[0.02em] text-right"
						variants={fadeInVariants}
					>
						We dive into your users, your product, your chaos to build clarity.<br />
						Real design is not decoration, it&apos;s excavation.
					</motion.p>
					<motion.p 
						className="md:hidden text-[#ACACAC] text-[16px] md:text-[32px] leading-[110%] -tracking-[0.02em] text-right"
						variants={fadeInVariants}
					>
						We dive into your users, your product,<br /> your chaos to build clarity.<br />
						Real design is not decoration, it&apos;s excavation.
					</motion.p>
				</div>
				{/* <motion.h3 
					className="text-white text-[50px] md:text-[120px] leading-[98%] font-medium text-center"
					variants={fadeInVariants}
				>
					Our Responsibility 
				</motion.h3> */}
			</div>
		</motion.section>
  )
}

export default Hero