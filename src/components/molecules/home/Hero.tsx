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
					Third&nbsp;&nbsp;
          <span className='absolute left-15 md:left-68 top-12 md:top-25 -translate-y-1/2'>
            <svg width="200" height="608" viewBox="0 0 398 1210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="199.5" y1="1392" x2="199.5" y2="6.55671e-08" stroke="url(#paint0_linear_2102_855)" strokeWidth="3"/>
            <g filter="url(#filter0_f_2102_855)">
            <path d="M192 560.001C192 549.479 194.542 539.592 199 531C203.458 539.592 206 549.479 206 560.001C206 570.522 203.458 580.408 199 589C194.542 580.408 192 570.522 192 560.001Z" fill="url(#paint1_radial_2102_855)"/>
            </g>
            <g opacity="0.3" filter="url(#filter1_f_2102_855)">
            <path d="M186 562.502C186 536.197 190.721 511.48 199 490C207.279 511.48 212 536.197 212 562.502C212 588.806 207.279 613.52 199 635C190.721 613.52 186 588.806 186 562.502Z" fill="url(#paint2_radial_2102_855)"/>
            </g>
            <g opacity="0.1" filter="url(#filter2_f_2102_855)">
            <path d="M86.4765 562.508C86.4765 452.846 127.34 349.807 199 260.258C270.66 349.807 311.523 452.846 311.523 562.508C311.522 672.167 270.656 775.197 199 864.744C127.343 775.197 86.4775 672.167 86.4765 562.508Z" fill="url(#paint3_radial_2102_855)"/>
            </g>
            <g filter="url(#filter3_f_2102_855)">
            <path d="M195 562.504C195 503.544 196.634 448.146 199.5 400C202.366 448.146 204 503.544 204 562.504C204 621.461 202.366 676.855 199.5 725C196.634 676.855 195 621.461 195 562.504Z" fill="url(#paint4_radial_2102_855)"/>
            </g>
            <defs>
            <filter id="filter0_f_2102_855" x="182.3" y="521.3" width="33.4" height="77.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="4.85" result="effect1_foregroundBlur_2102_855"/>
            </filter>
            <filter id="filter1_f_2102_855" x="173.1" y="477.1" width="51.8" height="170.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="6.45" result="effect1_foregroundBlur_2102_855"/>
            </filter>
            <filter id="filter2_f_2102_855" x="0.876564" y="174.658" width="396.247" height="775.686" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="42.8" result="effect1_foregroundBlur_2102_855"/>
            </filter>
            <filter id="filter3_f_2102_855" x="186.9" y="391.9" width="25.2" height="341.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="4.05" result="effect1_foregroundBlur_2102_855"/>
            </filter>
            <linearGradient id="paint0_linear_2102_855" x1="201.5" y1="1392" x2="201.5" y2="-2.18565e-08" gradientUnits="userSpaceOnUse">
            <stop offset="0.161227" stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.574029" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <radialGradient id="paint1_radial_2102_855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 560) rotate(-90) scale(29 7)">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white"/>
            </radialGradient>
            <radialGradient id="paint2_radial_2102_855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 562.5) rotate(-90) scale(72.5 13)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            <radialGradient id="paint3_radial_2102_855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199 562.501) rotate(-90) scale(302.243 112.523)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            <radialGradient id="paint4_radial_2102_855" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199.5 562.5) rotate(-90) scale(162.5 4.5)">
            <stop stopColor="#FFA793"/>
            <stop offset="1" stopColor="#D24525"/>
            </radialGradient>
            </defs>
            </svg>
          </span>
          eye<br />
          <span className='-tracking-[0.01em]'>Perspective</span>
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