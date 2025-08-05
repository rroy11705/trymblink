'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, fadeInVariants, imageRevealVariants, textRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const HowWeWork = () => {
  const { ref, animate } = useScrollAnimation()
  
  // Embla Carousel setup for mobile
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  // Values data
  const values = [
    {
      title: 'Depth\nOver Decor',
      description: 'We don&apos;t chase trends—we chase truths. Every design decision is rooted in research, strategy, and user psychology.'
    },
    {
      title: 'Built\nto Scale', 
      description: 'We design systems that grow for all sizes. Stability and scalability are defaults.'
    },
    {
      title: 'Design That\nPerforms',
      description: 'Beautiful is not enough. We create intuitive experiences that convert, retain, and drive real business impact.'
    },
    {
      title: 'Collaborate\nLike Partners',
      description: 'We don&apos;t work for you—we work with you. Deep collaboration, sharp feedback loops, and aligned goals define every project.'
    }
  ]
  return (
    <motion.section 
			ref={ref}
			id="about-hero" 
			className='relative w-full aspect-[390/1265] md:aspect-[1440/1360] overflow-hidden px-6 md:px-15'
			initial="hidden"
			animate={animate}
			variants={containerVariants}
		>
			<motion.div 
				className="absolute inset-0"
				variants={imageRevealVariants}
			>
				<Image
					src="/images/backgrounds/about-us-how-we-work.webp"
					alt="How We Work"
					fill
					className="object-cover object-bottom hidden md:block"
					priority
				/>
				<Image
					src="/images/backgrounds/about-us-how-we-work-mobile.webp"
					alt="How We Work"
					fill
					className="object-cover object-bottom md:hidden"
					priority
				/>
			</motion.div>

			<div className="relative w-full h-full py-60 flex flex-col justify-between items-center">
				<motion.div 
          className='w-full max-w-200 mx-auto space-y-10'
          variants={fadeInVariants}
        >
					<motion.h4 
						className='text-white text-[32px] md:text-[46px] leading-[120%] -tracking-[0.02em] text-center'
						variants={textRevealVariants}
					>
						How we work
					</motion.h4>
					<motion.p 
            className='text-white text-[24px] md:text-[32px] leading-[140%] -tracking-[0.02em] text-center'
            variants={textRevealVariants}
          >
						We dive into your users, your product, your chaos to build clarity. Real design is not decoration, it&apos;s excavation.
					</motion.p>
				</motion.div>

				<motion.div 
          className='w-full space-y-10'
          variants={fadeInVariants}
        >
					<motion.h4 
						className='text-white text-[32px] md:text-[46px] leading-[120%] -tracking-[0.02em] font-bold text-left'
						variants={textRevealVariants}
					>
						Our values
					</motion.h4>

					{/* Mobile: Embla Carousel */}
					<motion.div 
						className="md:hidden overflow-hidden"
						variants={fadeInVariants}
					>
						<div className="embla" ref={emblaRef}>
							<div className="embla__container">
								{values.map((value, index) => (
									<div
										key={index}
										className="embla__slide w-[83.33%]"
									>
										<motion.div 
											className='relative aspect-[315/360] bg-[#001328B2] p-6 h-full'
											variants={textRevealVariants}
										>
											<h3 className="text-white text-[24px] font-medium leading-[120%] -tracking-[0.02em] mb-4">
												{value.title.split('\n').map((line, i) => (
													<React.Fragment key={i}>
														{line}
														{i < value.title.split('\n').length - 1 && <br />}
													</React.Fragment>
												))}
											</h3>
											<p className="text-white/70 text-[14px] leading-[140%] -tracking-[0.02em]">
												{value.description}
											</p>
										</motion.div>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Desktop: Grid Layout */}
					<motion.div 
						className="hidden md:flex flex-wrap gap-6"
						variants={fadeInVariants}
					>
						{values.map((value, index) => (
							<motion.div 
								key={index}
								className='relative w-[calc(25%-18px)] aspect-[315/360] bg-[#001328B2] py-9 px-8'
								variants={textRevealVariants}
							>
								<h3 className="text-white text-[28px] font-medium leading-[120%] -tracking-[0.02em] mb-4">
									{value.title.split('\n').map((line, i) => (
										<React.Fragment key={i}>
											{line}
											{i < value.title.split('\n').length - 1 && <br />}
										</React.Fragment>
									))}
								</h3>
								<p className="text-white/70 text-[16px] leading-[140%] -tracking-[0.02em]">
									{value.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
  )
}

export default HowWeWork