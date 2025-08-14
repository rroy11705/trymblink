'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants, imageRevealVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

const Projects = () => {
  const { ref, animate } = useScrollAnimation()
  return (
    <motion.section 
      ref={ref}
      className='relative w-full px-6 md:px-15 py-24 overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<motion.div 
				className="mb-10"
				variants={fadeInVariants}
			>
				<h2 className="text-white text-gradient-hero text-[32px] md:text-[64px] font-medium text-left">
					Selected projects
				</h2>
			</motion.div>
			<div className='flex flex-row flex-wrap gap-5'>
				<motion.div 
					className='relative w-full md:w-[calc(40%_-_13px)] h-fit flex flex-col' 
					variants={fadeInVariants}
				>
					<motion.div 
						className="w-full overflow-hidden"
						variants={imageRevealVariants}
					>
						<Image
							src="/images/logos/trusted-by/icici-bank.webp"
							alt="Project 1"
							width={538}
							height={527}
							className='w-full'
						/>
					</motion.div>
					<div className='relative z-10 mt-6'>
							<h2 className="text-white text-[20px] font-medium leading-[114%] text-left mb-6 flex flex-row justify-between items-start gap-2">
								<span>ICICI Bank Customer portal</span>
								<span className='text-[12px] md:text-[16px] font-light'>2023</span>
							</h2>
							<p className="text-white/50 text-[16px] text-left">
							Redesigned the digital servicing journey for ICICI Bank, making financial operations seamless for millions of users.
							</p>
					</div>
				</motion.div>
				<motion.div 
					className='relative w-full md:w-[calc(60%_-_13px)] h-fit flex flex-col' 
					variants={fadeInVariants}
				>
					<motion.div 
						className="w-full overflow-hidden"
						variants={imageRevealVariants}
					>
						<Image
							src="/images/logos/projects/amazon.webp"
							alt="amazon"
							width={762}
							height={634}
							className='w-full'
						/>
					</motion.div>
					<div className='relative z-10 mt-6'>
							<h2 className="text-white text-[20px] font-medium leading-[108%] -tracking-[0.01] text-left mb-6 flex flex-row justify-between items-start gap-2">
								<span>Amazon Customer success</span>
								<span className='text-[12px] md:text-[16px] font-light'>2019</span>
							</h2>
							<p className="text-white/50 text-[16px] text-left">
								Enhanced the customer success and support experience through optimized work flows for Amazon&apos;s campaign.
							</p>
					</div>
				</motion.div>
				<motion.div 
					className='relative w-full md:w-[calc(60%_-_13px)] h-fit flex flex-col' 
					variants={fadeInVariants}
				>
					<motion.div 
						className="w-full overflow-hidden"
						variants={imageRevealVariants}
					>
						<Image
							src="/images/logos/projects/axis-bank.webp"
							alt="axis-bank"
							width={762}
							height={634}
							className='w-full'
						/>
					</motion.div>
					<div className='relative z-10 mt-6'>
							<h2 className="text-white text-[20px] font-medium leading-[108%] -tracking-[0.01] text-left mb-6 flex flex-row justify-between items-start gap-2">
								<span>Axis Bank Back end support system</span>
								<span className='text-[12px] md:text-[16px] font-light'>2019</span>
							</h2>
							<p className="text-white/50 text-[16px] text-left">
								Minimised the customer servicing time by 60% with advanced tools and AI support integration.
							</p>
					</div>
				</motion.div>
				<motion.div 
					className='relative w-full md:w-[calc(40%_-_13px)] h-fit flex flex-col' 
					variants={fadeInVariants}
				>
					<motion.div 
						className="w-full overflow-hidden"
						variants={imageRevealVariants}
					>
						<Image
							src="/images/logos/trusted-by/sbi.webp"
							alt="sbi"
							width={538}
							height={527}
							className='w-full'
						/>
					</motion.div>
					<div className='relative z-10 mt-6'>
							<h2 className="text-white text-[20px] font-medium leading-[114%] text-left mb-6 flex flex-row justify-between items-start gap-2">
								<span>Optimised due collection process of SBI Bank</span>
								<span className='text-[12px] md:text-[16px] font-light'>2024</span>
							</h2>
							<p className="text-white/50 text-[16px] text-left">
								Redesigned the digital servicing journey for ICICI Bank, making financial operations seamless for millions of users.
							</p>
					</div>
				</motion.div>
			</div>
			
		</motion.section>
  )
}

export default Projects