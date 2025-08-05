'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants, imageRevealVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'
import ProjectsIcon from '../../icons/business/ProjectsIcon'
import EfficiencyIcon from '../../icons/business/EfficiencyIcon'
import ConversionIcon from '../../icons/business/ConversionIcon'
import GlobalReachIcon from '../../icons/business/GlobalReachIcon'

const Impact = () => {
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
					Our impact on businesses
				</h2>
			</motion.div>

			<div className="md:hidden relative flex flex-row">
				<motion.div 
					className="w-full flex flex-row overflow-hidden"
					variants={fadeInVariants}
				>
					<div className='flex-1'>
						<motion.div className='' variants={fadeInVariants}>
							<ProjectsIcon className="mb-6" />
							<h3 className='text-white text-gradient-hero text-[48px] md:text-[120px] font-light -tracking-[0.04em] text-left'>
								40<span className='text-gradient-hero text-[48px] md:text-[80px] font-normal ml-4'>+</span>
							</h3>
							<h4 className='text-[#9CA3AF] md:text-[24px] tracking-[0.02em] text-left mb-16'>
								Projects<br />
								delivered
							</h4>
						</motion.div>
						
						<motion.div className='' variants={fadeInVariants}>
							<EfficiencyIcon className="mb-6" />

							<h3 className='text-white text-gradient-hero text-[48px] md:text-[120px] font-light -tracking-[0.04em] text-left'>
								60<span className='text-gradient-hero text-[48px] md:text-[80px] font-normal ml-4'>%</span>
							</h3>
							<h4 className='text-[#9CA3AF] md:text-[24px] tracking-[0.02em] text-left mb-16'>
								Higher<br />
								efficiency
							</h4>
						</motion.div>
					</div>
					<div className='flex-1 pl-4 impact-separator'>
					<motion.div className='' variants={fadeInVariants}>
							<ConversionIcon className="mb-6" />

							<h3 className='text-white text-gradient-hero text-[48px] md:text-[120px] font-light -tracking-[0.04em] text-left'>
								50<span className='text-gradient-hero text-[48px] md:text-[80px] font-normal ml-4'>%</span>
							</h3>
							<h4 className='text-[#9CA3AF] md:text-[24px] tracking-[0.02em] text-left mb-16'>
								Higher<br />
								conversion rate
							</h4>
						</motion.div>
						
						<motion.div className='' variants={fadeInVariants}>
							<GlobalReachIcon className="mb-6" />

							<h3 className='text-white text-gradient-hero text-[48px] md:text-[120px] font-light -tracking-[0.04em] text-left'>
								200<span className='text-gradient-hero text-[48px] md:text-[80px] font-normal ml-4'>%</span>
							</h3>
							<h4 className='text-[#9CA3AF] md:text-[24px] tracking-[0.02em] text-left mb-16'>
								New user<br />
								Aquisition
							</h4>
						</motion.div>
					</div>
				</motion.div>
			</div>

			<div className="hidden relative md:flex flex-row">
				<motion.div 
					className="w-full flex flex-row overflow-hidden"
					variants={fadeInVariants}
				>
					<motion.div className='flex-1' variants={fadeInVariants}>
						<ProjectsIcon className="mb-6" />

						<h4 className='text-white text-[24px] tracking-[0.02em] text-left mb-16'>
							Projects<br />
							delivered
						</h4>
						<h3 className='text-white text-gradient-hero text-[120px] font-light -tracking-[0.04em] text-left'>
							40<span className='text-gradient-hero text-[80px] font-normal ml-4'>+</span>
						</h3>
					</motion.div>
					<motion.div className='h-186 flex-1 pl-4 impact-separator' variants={fadeInVariants}>
						<ConversionIcon className="mb-6" />

						<h4 className='text-white text-[24px] tracking-[0.02em] text-left mb-16'>
							Higher<br />
							conversion rate
						</h4>
						<h3 className='text-white text-gradient-hero text-[120px] font-light -tracking-[0.04em] text-left'>
							50<span className='text-gradient-hero text-[80px] font-normal ml-4'>%</span>
						</h3>
					</motion.div>
					<motion.div className='h-186 flex-1 pl-4 impact-separator' variants={fadeInVariants}>
						<EfficiencyIcon className="mb-6" />

						<h4 className='text-white text-[24px] tracking-[0.02em] text-left mb-16'>
							Higher<br />
							efficiency
						</h4>
						<h3 className='text-white text-gradient-hero text-[120px] font-light -tracking-[0.04em] text-left'>
							60<span className='text-gradient-hero text-[80px] font-normal ml-4'>%</span>
						</h3>
					</motion.div>
					<motion.div className='h-186 flex-1 pl-4 impact-separator' variants={fadeInVariants}>
						<GlobalReachIcon className="mb-6" />

						<h4 className='text-white text-[24px] tracking-[0.02em] text-left mb-16'>
							New user<br />
							Aquisition
						</h4>
						<h3 className='text-white text-gradient-hero text-[120px] font-light -tracking-[0.04em] text-left'>
							200<span className='text-gradient-hero text-[80px] font-normal ml-4'>%</span>
						</h3>
					</motion.div>
				</motion.div>
			</div>
			<motion.div 
        className="relative md:absolute md:bottom-0 md:right-16 w-full md:w-166 aspect-[667/229]"
        variants={imageRevealVariants}
      >
        <Image
          src="/images/backgrounds/impact.webp"
          alt="Your Success Our Responsibility"
          fill
          priority
        />
      </motion.div>
		</motion.section>
  )
}

export default Impact