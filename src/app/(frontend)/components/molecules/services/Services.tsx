'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants, imageRevealVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { getImageUrlFromFolder } from '@/lib/imageUrl'
import Image from 'next/image'

const Services = () => {
  const { ref: sectionOneRef, animate: sectionOneAnimate } = useScrollAnimation()
	const { ref: sectionTwoRef, animate: sectionTwoAnimate } = useScrollAnimation()
	const { ref: sectionThreeRef, animate: sectionThreeAnimate } = useScrollAnimation()

  return (
		<>
			<motion.section 
				ref={sectionOneRef}
				className='relative w-full px-6 md:px-15 py-24 overflow-hidden'
				initial="hidden"
				animate={sectionOneAnimate}
				variants={containerVariants}
			>
				<motion.div 
					className="mb-10"
					variants={fadeInVariants}
				>
					<h2 className="text-white text-gradient-hero text-[32px] md:text-[64px] font-medium text-left">
						Our services
					</h2>
				</motion.div>

				<div className="relative flex flex-row mb-12">
					<motion.div 
						className="w-full flex flex-row flex-wrap gap-6 overflow-hidden"
						variants={fadeInVariants}
					>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0 z-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '1.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
									<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
										UX<br />STRATEGY
									</h2>
									<h2 className="text-white/50 text-[16px] text-left">
									Research-driven experiences that solve real user problems and drive engagement.
									</h2>
							</div>
						</motion.div>

						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '2.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									User<br />interface
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Pixel-perfect, intuitive interfaces designed to delight and convert every user.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '3.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Branding &<br />positioning
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Crafting distinct brand identities that resonate, position, and build lasting trust.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '4.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Software<br />Development
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Robust, scalable code that brings great design to life—fast and reliably.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '5.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
								<div className='relative z-10 p-6'>
									<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
										Launch &<br />Maintain
									</h2>
									<h2 className="text-white/50 text-[16px] text-left">
										Seamless go-live support and continuous care for long-term product health.
									</h2>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section 
				ref={sectionTwoRef}
				className='relative w-full px-6 md:px-15 py-24 overflow-hidden'
				initial="hidden"
				animate={sectionTwoAnimate}
				variants={containerVariants}
			>
				<motion.div 
					className="mb-10"
					variants={fadeInVariants}
				>
					<h2 className="text-white text-gradient-hero text-[32px] md:text-[64px] font-medium text-left">
						Our solutions
					</h2>
				</motion.div>

				<div className="relative flex flex-row mb-12">
					<motion.div 
						className="w-full flex flex-row flex-wrap gap-6 overflow-hidden"
						variants={fadeInVariants}
					>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0 z-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '1.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
									<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
										Drive conversion<br />
										& reach
									</h2>
									<h2 className="text-white/50 text-[16px] text-left">
										We design experiences that keep your users engaged and coming back.
									</h2>
							</div>
						</motion.div>

						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '2.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Guide user<br />
									through your funnel
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									We build interfaces that reflect your brand and make your product feel professional.
								</h2>
							</div>
						</motion.div>

						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '3.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Fuel data-driven<br />
									decisions and boost ROI
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Crafting distinct brand identities that resonate, position, and build lasting trust.
								</h2>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section 
				ref={sectionThreeRef}
				className='relative w-full px-6 md:px-15 py-24 overflow-hidden'
				initial="hidden"
				animate={sectionThreeAnimate}
				variants={containerVariants}
			>
				<motion.div 
					className="mb-10"
					variants={fadeInVariants}
				>
					<h2 className="text-white text-gradient-hero text-[32px] md:text-[64px] font-medium text-left">
						Industries
					</h2>
				</motion.div>

				<div className="relative flex flex-row mb-12">
					<motion.div 
						className="w-full flex flex-row flex-wrap gap-6 overflow-hidden"
						variants={fadeInVariants}
					>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0 z-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '1.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
									<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
										Sports
									</h2>
									<h2 className="text-white/50 text-[16px] text-left">
										Research-driven experiences that solve real user problems and drive engagement.
									</h2>
							</div>
						</motion.div>

						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '2.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Fintech
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Pixel-perfect, intuitive interfaces designed to delight and convert every user.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '3.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									BFSI
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Crafting distinct brand identities that resonate, position, and build lasting trust.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '4.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
							</motion.div>
							<div className='relative z-10 p-6'>
								<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
									Real Estate
								</h2>
								<h2 className="text-white/50 text-[16px] text-left">
									Robust, scalable code that brings great design to life—fast and reliably.
								</h2>
							</div>
						</motion.div>
						<motion.div 
							className='relative w-full md:w-[calc(33%_-_13px)] aspect-[350/300] md:aspect-[427/300] border border-solid border-[#5D5C6280]' 
							variants={fadeInVariants}
						>
							<motion.div 
								className="absolute inset-0"
								variants={imageRevealVariants}
							>
								<Image
									src={getImageUrlFromFolder('backgrounds', '5.webp', 'services')}
									alt="Your Success Our Responsibility"
									fill
									priority
								/>
								<div className='relative z-10 p-6'>
									<h2 className="text-white text-[32px] font-medium leading-[114%] text-left mb-6">
										SAAS
									</h2>
									<h2 className="text-white/50 text-[16px] text-left">
										Seamless go-live support and continuous care for long-term product health.
									</h2>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>
		</>
  )
}

export default Services