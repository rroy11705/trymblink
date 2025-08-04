'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, staggeredTextVariants, textRevealVariants } from '../../../lib/animations'
import Link from 'next/link'

const Hero = () => {
  return (
    <motion.section 
      id='hero-home' 
      className='relative w-full min-h-175 md:min-h-160 flex flex-col overflow-hidden px-6 sm:p-0'
      initial="hidden"
      animate="visible"
      variants={staggeredTextVariants}
    >
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-center gap-[30px] pt-72 md:pt-92 md:px-15">
				<motion.h1 
          className="relative text-[60px] md:text-[140px] font-medium leading-[97%] text-white text-gradient-hero"
          variants={textRevealVariants}
        >
					Third&nbsp;
          <span className='absolute -left-12 md:left-38 -top-22 md:-top-14 -translate-y-1/2 z-0'>
            <svg width="398" height="786" viewBox="0 0 398 786" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M199.5 765.617L199.5 0.804709" stroke="url(#paint0_linear_2102_456)" strokeWidth="3"/>
            <g filter="url(#filter0_f_2102_456)">
            <path d="M192 508.001C192 497.479 194.542 487.592 199 479C203.458 487.592 206 497.479 206 508.001C206 518.522 203.458 528.408 199 537C194.542 528.408 192 518.522 192 508.001Z" fill="url(#paint1_radial_2102_456)"/>
            </g>
            <g opacity="0.3" filter="url(#filter1_f_2102_456)">
            <path d="M186 510.502C186 484.197 190.721 459.48 199 438C207.279 459.48 212 484.197 212 510.502C212 536.806 207.279 561.52 199 583C190.721 561.52 186 536.806 186 510.502Z" fill="url(#paint2_radial_2102_456)"/>
            </g>
            <g opacity="0.1" filter="url(#filter2_f_2102_456)">
            <path d="M86.4766 467.976C86.4765 373.745 127.34 285.206 199 208.258C270.66 285.206 311.523 373.745 311.523 467.976C311.522 562.203 270.657 650.735 199 727.682C127.343 650.735 86.4775 562.203 86.4766 467.976Z" fill="url(#paint3_radial_2102_456)"/>
            </g>
            <g filter="url(#filter3_f_2102_456)">
            <path d="M195 510.504C195 451.544 196.634 396.146 199.5 348C202.366 396.146 204 451.544 204 510.504C204 569.461 202.366 624.855 199.5 673C196.634 624.855 195 569.461 195 510.504Z" fill="url(#paint4_radial_2102_456)"/>
            </g>
            <defs>
            <filter id="filter0_f_2102_456" x="182.3" y="469.3" width="33.4" height="77.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="4.85" result="effect1_foregroundBlur_2102_456"/>
            </filter>
            <filter id="filter1_f_2102_456" x="173.1" y="425.1" width="51.8" height="170.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="6.45" result="effect1_foregroundBlur_2102_456"/>
            </filter>
            <filter id="filter2_f_2102_456" x="0.876564" y="122.658" width="396.247" height="690.624" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="42.8" result="effect1_foregroundBlur_2102_456"/>
            </filter>
            <filter id="filter3_f_2102_456" x="186.9" y="339.9" width="25.2" height="341.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="4.05" result="effect1_foregroundBlur_2102_456"/>
            </filter>
            <linearGradient id="paint0_linear_2102_456" x1="3.51514e+06" y1="780.738" x2="3.51514e+06" y2="-7.81545" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.162092" stopColor="#E64C27" stopOpacity="0.463121"/>
            <stop offset="0.35" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <radialGradient id="paint1_radial_2102_456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 508) rotate(-90) scale(29 7)">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white"/>
            </radialGradient>
            <radialGradient id="paint2_radial_2102_456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 510.5) rotate(-90) scale(72.5 13)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            <radialGradient id="paint3_radial_2102_456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 467.97) rotate(-90) scale(259.712 112.523)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            <radialGradient id="paint4_radial_2102_456" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199.5 510.5) rotate(-90) scale(162.5 4.5)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            </defs>
            </svg>

          </span>
          eye<br />
          <span className='relative z-10 text-white text-gradient-hero'>Perspective</span>
				</motion.h1>
				<div className="w-full flex items-center justify-between">
					<motion.p 
            className="text-[20px] md:text-[30px] font-medium leading-[125%] -tracking-[0.01em] text-[#E2E2E2]"
            variants={textRevealVariants}
          >
						for Smarter Business Moves
					</motion.p>
				</div>
			</div>
      <motion.div className='md:hidden w-fit absolute bottom-6 right-6 z-10' variants={fadeInVariants}>
				<Link
					href="/contact"
					className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white px-8 py-4 block'
				>
					Enquire now
				</Link>
			</motion.div>
    </motion.section>
  )
}

export default Hero