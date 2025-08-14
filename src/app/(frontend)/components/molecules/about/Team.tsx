'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, imageRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'
import DiagonalArrowIcon from '@/components/icons/general/DiagonalArrowIcon'

const Team = () => {
	const { ref, animate } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id='our-story' 
      className="relative bg-black w-full overflow-hidden px-6 md:px-15 py-20"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='relative w-full aspect-square md:aspect-[1320/398]'>
				<motion.div 
					className="absolute w-full aspect-square md:aspect-[1320/398] z-0"
					variants={imageRevealVariants}
				>
					<Image
						src="/images/backgrounds/about-location.jpg"
						alt="Ice burg"
						fill
						className="object-cover object-center"
					/>
				</motion.div>
				<div className='absolute w-full aspect-square md:aspect-[1320/398] z-10 bg-black/50' />
				<div className='absolute w-full aspect-square md:aspect-[1320/398] z-20 flex flex-col items-center justify-center gap-10'>
					<div className='flex flex-col gap-2'>
						<h3 className='text-white text-[20px] md:text-[46px] font-medium -tracking-[0.01em] text-center'>
							We are completely remote but...
						</h3>
						<p className='text-white text-[14px] md:text-[20px] font-medium -tracking-[0.01em] text-center'>
							In case you want to locate us
						</p>
					</div>
					<Link
						href="link-to-map"
						className='w-fit font-medium text-base transition-all duration-200 bg-black text-white px-4 py-3 flex items-center justify-center gap-2'
					>
						Open Google map
						<DiagonalArrowIcon />
					</Link>
				</div>
			</div>
		</motion.section>
  )
}

export default Team