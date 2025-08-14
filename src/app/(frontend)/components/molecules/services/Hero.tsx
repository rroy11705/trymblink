'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInLeftVariants, staggeredTextVariants, textRevealVariants } from '../../../lib/animations'

const Hero = () => {
  return (
    <motion.section 
      id='hero-home' 
      className='relative w-full min-h-120 md:min-h-160 flex flex-col overflow-hidden px-6 sm:p-0'
      initial="hidden"
      animate="visible"
      variants={staggeredTextVariants}
    >
      <div className="w-full flex flex-col items-center justify-center gap-[30px] pt-30 md:pt-65 md:px-15">
        <motion.div 
          className='hidden md:block relative w-full h-25'
          variants={slideInLeftVariants}
        >
          <svg className='absolute top-1/2 -left-10 -translate-y-1/2' width="1208" height="493" viewBox="0 0 1208 493" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2391_1891)">
            <path d="M620.906 251.086H694.526C696.88 251.086 699.017 249.71 699.99 247.567L712.367 220.301C712.753 219.452 713.989 219.547 714.241 220.445L722.834 251.098L736.443 251.049C737.305 251.046 738.068 250.492 738.336 249.673L761.884 177.984C763.861 171.965 772.606 172.721 773.521 178.991L784.025 250.977L816.964 251.086" stroke="url(#paint0_linear_2391_1891)" strokeWidth="3"/>
            </g>
            <path d="M21.4766 251.086H694.53C696.884 251.086 699.02 249.709 699.993 247.566L712.368 220.307C712.754 219.457 713.991 219.553 714.242 220.453L722.156 248.873C722.519 250.177 723.711 251.077 725.064 251.069L736.551 251C737.362 250.995 738.09 250.5 738.394 249.748L771.06 168.774C771.365 168.019 772.096 167.524 772.91 167.522L928.866 167.139H1207.97" stroke="url(#paint1_linear_2391_1891)" strokeWidth="3"/>
            <g filter="url(#filter1_f_2391_1891)">
            <path d="M21.4766 251.086H694.53C696.884 251.086 699.02 249.71 699.993 247.566L712.374 220.294C712.76 219.445 713.994 219.538 714.247 220.435L722.861 250.939L736.14 251.205C736.969 251.222 737.723 250.725 738.034 249.956L771.206 167.989C771.36 167.61 771.728 167.362 772.137 167.364L1031.51 168.374H1132.1" stroke="url(#paint2_linear_2391_1891)" strokeWidth="3"/>
            </g>
            <g filter="url(#filter2_f_2391_1891)">
            <path d="M620.906 251.086H694.526C696.88 251.086 699.017 249.71 699.99 247.567L712.355 220.329C712.742 219.476 713.984 219.576 714.23 220.479L722.564 251.035L736.43 251.014C737.233 251.013 737.958 250.531 738.27 249.79L769.292 176.088C770.229 173.863 772.408 172.416 774.822 172.416H847.1" stroke="url(#paint3_linear_2391_1891)" strokeWidth="3"/>
            </g>
            <defs>
            <filter id="filter0_f_2391_1891" x="590.306" y="141.755" width="257.263" height="141.446" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="15.3" result="effect1_foregroundBlur_2391_1891"/>
            </filter>
            <filter id="filter1_f_2391_1891" x="-11.2234" y="133.163" width="1176.03" height="152.242" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="16.35" result="effect1_foregroundBlur_2391_1891"/>
            </filter>
            <filter id="filter2_f_2391_1891" x="380.506" y="-69.484" width="706.995" height="562.47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="120.2" result="effect1_foregroundBlur_2391_1891"/>
            </filter>
            <linearGradient id="paint0_linear_2391_1891" x1="628.81" y1="252.397" x2="813.273" y2="252.397" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0"/>
            <stop offset="0.543269" stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2391_1891" x1="21.4765" y1="253.086" x2="1062.57" y2="253.086" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.65" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2391_1891" x1="21.4765" y1="253.086" x2="1062.57" y2="253.086" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.65" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_2391_1891" x1="629.486" y1="253.086" x2="806.722" y2="253.086" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.5" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </motion.div>
				<motion.h1 
          className="relative text-[40px] md:text-[80px] font-medium leading-[120%] -tracking-[0.02em] text-white text-gradient-hero text-left md:text-center"
          variants={textRevealVariants}
        >
					We Don&apos;t Just Build Products.<br />
          We Build Results.
				</motion.h1>
        <motion.div 
          className='md:hidden relative w-full h-25'
          variants={slideInLeftVariants}
        >
          <svg className='absolute top-1/2 left-1/2 -translate-1/2' width="390" height="564" viewBox="0 0 390 564" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2391_1892)">
            <path d="M149.43 321.325H223.05C225.404 321.325 227.54 319.948 228.513 317.805L240.891 290.54C241.276 289.69 242.512 289.785 242.764 290.683L251.357 321.336L264.967 321.287C265.828 321.284 266.591 320.73 266.86 319.912L290.407 248.223C292.384 242.203 301.13 242.959 302.045 249.229L312.548 321.215L345.488 321.325" stroke="url(#paint0_linear_2391_1892)" strokeWidth="3"/>
            </g>
            <path d="M-450 321.324H223.053C225.407 321.324 227.544 319.948 228.517 317.804L240.891 290.546C241.277 289.695 242.515 289.791 242.765 290.691L250.68 319.112C251.043 320.416 252.234 321.315 253.588 321.307L265.074 321.238C265.886 321.233 266.614 320.739 266.917 319.986L299.584 239.012C299.888 238.258 300.619 237.763 301.433 237.761L457.389 237.377H736.492" stroke="url(#paint1_linear_2391_1892)" strokeWidth="3"/>
            <g filter="url(#filter1_f_2391_1892)">
            <path d="M-450 321.324H223.053C225.407 321.324 227.544 319.948 228.517 317.805L240.898 290.532C241.283 289.683 242.517 289.777 242.771 290.673L251.385 321.177L264.663 321.443C265.492 321.46 266.246 320.963 266.557 320.194L299.73 238.227C299.883 237.848 300.252 237.601 300.661 237.602L560.032 238.612H660.623" stroke="url(#paint2_linear_2391_1892)" strokeWidth="3"/>
            </g>
            <g filter="url(#filter2_f_2391_1892)">
            <path d="M149.43 321.325H223.05C225.404 321.325 227.54 319.948 228.513 317.805L240.878 290.567C241.265 289.715 242.507 289.814 242.754 290.717L251.087 321.274L264.953 321.252C265.757 321.251 266.482 320.769 266.793 320.028L297.815 246.327C298.752 244.101 300.931 242.654 303.346 242.654H375.624" stroke="url(#paint3_linear_2391_1892)" strokeWidth="3"/>
            </g>
            <defs>
            <filter id="filter0_f_2391_1892" x="118.83" y="211.994" width="257.263" height="141.447" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="15.3" result="effect1_foregroundBlur_2391_1892"/>
            </filter>
            <filter id="filter1_f_2391_1892" x="-482.7" y="203.402" width="1176.03" height="152.242" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="16.35" result="effect1_foregroundBlur_2391_1892"/>
            </filter>
            <filter id="filter2_f_2391_1892" x="-90.9703" y="0.754303" width="706.995" height="562.47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="120.2" result="effect1_foregroundBlur_2391_1892"/>
            </filter>
            <linearGradient id="paint0_linear_2391_1892" x1="157.334" y1="322.635" x2="341.796" y2="322.635" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0"/>
            <stop offset="0.543269" stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2391_1892" x1="-450" y1="323.324" x2="591.094" y2="323.324" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.65" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2391_1892" x1="-450" y1="323.324" x2="591.094" y2="323.324" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.65" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_2391_1892" x1="158.009" y1="323.324" x2="335.246" y2="323.324" gradientUnits="userSpaceOnUse">
            <stop stopColor="#060410" stopOpacity="0"/>
            <stop offset="0.5" stopColor="#E64C27"/>
            <stop offset="1" stopColor="#060410" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </motion.div>
				<div className="w-fit flex items-center justify-between">
					<motion.p 
            className="text-[20px] md:text-[40px] font-light leading-[125%] -tracking-[0.01em] text-[#E2E2E2]"
            variants={textRevealVariants}
          >
						From brand to backend—your idea, fully built.
					</motion.p>
				</div>
			</div>
    </motion.section>
  )
}

export default Hero