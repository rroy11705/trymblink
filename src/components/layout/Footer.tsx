'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { imageRevealVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

const Footer = () => {
  const { ref } = useScrollAnimation()
  return (
    <motion.footer ref={ref} className='relative px-6 md:px-15 bg-[#060410]'>
			<div className='border-b border-[#313039] py-12.5'>
				<motion.div 
					variants={imageRevealVariants}
				>
					<Image
						src="/images/logos/trymblink-full-gradient.svg"
						alt="Your Success Our Responsibility"
						width={268}
						height={50}
					/>
				</motion.div>
			</div>
			<div className='flex flex-col items-start gap-12.5 border-b border-[#313039] py-12.5'>
				<div className='w-full flex flex-col md:flex-row items-start justify-between gap-12.5'>
					<div className='flex flex-row items-start gap-22.5'>
						<div className='flex flex-col items-start justify-center gap-8'>
							<h2 className="text-white/60 text-left">
								Company
							</h2>
							<Link href="/" className='text-white text-left'>
								Home
							</Link>
							<Link href="/" className='text-white text-left'>
								Services
							</Link>
							<Link href="/" className='text-white text-left'>
								Works
							</Link>
							<Link href="/" className='text-white text-left'>
								Career
							</Link>
						</div>
						<div className='flex flex-col items-start justify-center gap-8'>
							<h2 className="text-white/60 text-left">
								Legal
							</h2>
							<Link href="/" className='text-white text-left'>
								About Us
							</Link>
							<Link href="/" className='text-white text-left'>
								Terms & condition
							</Link>
							<Link href="/" className='text-white text-left'>
								Privacy policy
							</Link>
						</div>
					</div>
					<div className='w-full md:w-auto flex flex-col items-end justify-center gap-6'>
						<div className='hidden md:flex flex-row items-center justify-center gap-4'>
							<h2 className="text-white/60 text-left">
								Mail directly to us at
							</h2>
							<Link href="mailto:heya@trymblink.com" className='text-[28px]'>
								heya@trymblink.com
							</Link>
							<button className='w-12.5 h-12.5 bg-[#202020] flex items-center justify-center cursor-pointer'>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="mask0_2009_678" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
								<rect width="18" height="18" fill="#D9D9D9"/>
								</mask>
								<g mask="url(#mask0_2009_678)">
								<path d="M14.0192 13.875H6.23081C5.85194 13.875 5.53125 13.7438 5.26875 13.4813C5.00625 13.2188 4.875 12.8981 4.875 12.5192V2.48081C4.875 2.10194 5.00625 1.78125 5.26875 1.51875C5.53125 1.25625 5.85194 1.125 6.23081 1.125H11.4375L15.375 5.0625V12.5192C15.375 12.8981 15.2438 13.2188 14.9813 13.4813C14.7188 13.7438 14.3981 13.875 14.0192 13.875ZM10.875 5.625V2.25H6.23081C6.17306 2.25 6.12019 2.27406 6.07219 2.32219C6.02406 2.37019 6 2.42306 6 2.48081V12.5192C6 12.5769 6.02406 12.6298 6.07219 12.6778C6.12019 12.7259 6.17306 12.75 6.23081 12.75H14.0192C14.0769 12.75 14.1298 12.7259 14.1778 12.6778C14.2259 12.6298 14.25 12.5769 14.25 12.5192V5.625H10.875ZM3.23081 16.875C2.85194 16.875 2.53125 16.7438 2.26875 16.4813C2.00625 16.2188 1.875 15.8981 1.875 15.5192V5.625H3V15.5192C3 15.5769 3.02406 15.6298 3.07219 15.6778C3.12019 15.7259 3.17306 15.75 3.23081 15.75H10.875V16.875H3.23081Z" fill="white"/>
								</g>
								</svg>
							</button>
							<Link
								href="mailto:heya@trymblink.com"
								className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white px-4 py-3 flex items-center justify-center gap-2'
							>
								Mail us
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="mask0_2009_683" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
								<rect width="18" height="18" fill="#D9D9D9"/>
								</mask>
								<g mask="url(#mask0_2009_683)">
								<path d="M4.72069 13.2332L3.9375 12.45L11.3179 5.0625H4.60819V3.9375H13.2332V12.5625H12.1082V5.85281L4.72069 13.2332Z" fill="white"/>
								</g>
								</svg>
							</Link>
						</div>
						<div className='bg-white/5 md:hidden w-full flex flex-row items-center justify-between p-4 border border-white/10'>
							<Link href="mailto:heya@trymblink.com" className='text-[14px]'>
								heya@trymblink.com
							</Link>
							<div className='flex flex-row gap-2'>
								<button className='w-8 h-8 bg-[#202020] flex items-center justify-center cursor-pointer'>
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_2009_678" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
									<rect width="18" height="18" fill="#D9D9D9"/>
									</mask>
									<g mask="url(#mask0_2009_678)">
									<path d="M14.0192 13.875H6.23081C5.85194 13.875 5.53125 13.7438 5.26875 13.4813C5.00625 13.2188 4.875 12.8981 4.875 12.5192V2.48081C4.875 2.10194 5.00625 1.78125 5.26875 1.51875C5.53125 1.25625 5.85194 1.125 6.23081 1.125H11.4375L15.375 5.0625V12.5192C15.375 12.8981 15.2438 13.2188 14.9813 13.4813C14.7188 13.7438 14.3981 13.875 14.0192 13.875ZM10.875 5.625V2.25H6.23081C6.17306 2.25 6.12019 2.27406 6.07219 2.32219C6.02406 2.37019 6 2.42306 6 2.48081V12.5192C6 12.5769 6.02406 12.6298 6.07219 12.6778C6.12019 12.7259 6.17306 12.75 6.23081 12.75H14.0192C14.0769 12.75 14.1298 12.7259 14.1778 12.6778C14.2259 12.6298 14.25 12.5769 14.25 12.5192V5.625H10.875ZM3.23081 16.875C2.85194 16.875 2.53125 16.7438 2.26875 16.4813C2.00625 16.2188 1.875 15.8981 1.875 15.5192V5.625H3V15.5192C3 15.5769 3.02406 15.6298 3.07219 15.6778C3.12019 15.7259 3.17306 15.75 3.23081 15.75H10.875V16.875H3.23081Z" fill="white"/>
									</g>
									</svg>
								</button>
								<Link
									href="mailto:heya@trymblink.com"
									className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white w-8 h-8 flex items-center justify-center gap-2'
								>
									<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.74219 4.66057H15.2578C15.4525 4.66057 15.6171 4.72781 15.7515 4.86228C15.8859 4.99676 15.9531 5.16137 15.9531 5.35613V16.4851C15.9531 16.6799 15.8859 16.8445 15.7515 16.979C15.6171 17.1134 15.4525 17.1807 15.2578 17.1807H2.74219C2.5475 17.1807 2.38294 17.1134 2.24852 16.979C2.11409 16.8445 2.04688 16.6799 2.04688 16.4851V5.35613C2.04688 5.16137 2.11409 4.99676 2.24852 4.86228C2.38294 4.72781 2.5475 4.66057 2.74219 4.66057ZM14.5625 7.60975L9.05562 12.5482L3.4375 7.59583V15.7895H14.5625V7.60975ZM3.79906 6.05169L9.04172 10.6841L14.2148 6.05169H3.79906Z" fill="white"/>
									</svg>
								</Link>
							</div>
						</div>
						<div className='w-full flex flex-row items-center justify-end gap-4'>
							<Link href="/" className='w-12.5 h-12.5 md:w-25 md:h-25 bg-[#202020] hover:bg-[#E64C27] flex items-center justify-center'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.9016 2H3.10347C2.81081 2 2.53014 2.11621 2.3232 2.32306C2.11626 2.52992 2 2.81047 2 3.103V20.8953C2 21.1878 2.11626 21.4684 2.3232 21.6752C2.53014 21.8821 2.81081 21.9983 3.10347 21.9983H12.6816V14.2552H10.0774V11.2364H12.6816V9.01001C12.6816 6.42729 14.2604 5.02053 16.5658 5.02053C17.3438 5.01776 18.1213 5.05741 18.895 5.13932V7.83913H17.3009C16.0463 7.83913 15.8036 8.43475 15.8036 9.30867V11.2364H18.7931L18.4044 14.2552H15.8036V22H20.8965C21.189 21.9996 21.4695 21.8832 21.6763 21.6764C21.8831 21.4697 21.9995 21.1894 22 20.897V3.1047C22.0005 2.81275 21.8851 2.53253 21.6792 2.32546C21.4733 2.11838 21.1937 2.00135 20.9016 2Z" fill="white"/>
								</svg>
							</Link>
							<Link href="/" className='w-12.5 h-12.5 md:w-25 md:h-25 bg-[#202020] hover:bg-[#E64C27] flex items-center justify-center'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.0286 2C14.1536 2.003 14.7246 2.009 15.2176 2.023L15.4116 2.03C15.6356 2.038 15.8566 2.048 16.1236 2.06C17.1876 2.11 17.9136 2.278 18.5506 2.525C19.2106 2.779 19.7666 3.123 20.3226 3.678C20.8313 4.17773 21.2248 4.78247 21.4756 5.45C21.7226 6.087 21.8906 6.813 21.9406 7.878C21.9526 8.144 21.9626 8.365 21.9706 8.59L21.9766 8.784C21.9916 9.276 21.9976 9.847 21.9996 10.972L22.0006 11.718V13.028C22.003 13.7574 21.9953 14.4868 21.9776 15.216L21.9716 15.41C21.9636 15.635 21.9536 15.856 21.9416 16.122C21.8916 17.187 21.7216 17.912 21.4756 18.55C21.2248 19.2175 20.8313 19.8223 20.3226 20.322C19.8228 20.8307 19.2181 21.2242 18.5506 21.475C17.9136 21.722 17.1876 21.89 16.1236 21.94L15.4116 21.97L15.2176 21.976C14.7246 21.99 14.1536 21.997 13.0286 21.999L12.2826 22H10.9736C10.2438 22.0026 9.51409 21.9949 8.78457 21.977L8.59057 21.971C8.35318 21.962 8.11584 21.9517 7.87857 21.94C6.81457 21.89 6.08857 21.722 5.45057 21.475C4.7834 21.2241 4.17901 20.8306 3.67957 20.322C3.17051 19.8224 2.77668 19.2176 2.52557 18.55C2.27857 17.913 2.11057 17.187 2.06057 16.122L2.03057 15.41L2.02557 15.216C2.00713 14.4868 1.9988 13.7574 2.00057 13.028V10.972C1.9978 10.2426 2.00514 9.5132 2.02257 8.784L2.02957 8.59C2.03757 8.365 2.04757 8.144 2.05957 7.878C2.10957 6.813 2.27757 6.088 2.52457 5.45C2.77626 4.7822 3.17079 4.17744 3.68057 3.678C4.17972 3.16955 4.78376 2.77607 5.45057 2.525C6.08857 2.278 6.81357 2.11 7.87857 2.06C8.14457 2.048 8.36657 2.038 8.59057 2.03L8.78457 2.024C9.51376 2.00623 10.2432 1.99857 10.9726 2.001L13.0286 2ZM12.0006 7C10.6745 7 9.40272 7.52678 8.46503 8.46447C7.52735 9.40215 7.00057 10.6739 7.00057 12C7.00057 13.3261 7.52735 14.5979 8.46503 15.5355C9.40272 16.4732 10.6745 17 12.0006 17C13.3267 17 14.5984 16.4732 15.5361 15.5355C16.4738 14.5979 17.0006 13.3261 17.0006 12C17.0006 10.6739 16.4738 9.40215 15.5361 8.46447C14.5984 7.52678 13.3267 7 12.0006 7ZM12.0006 9C12.3945 8.99993 12.7847 9.07747 13.1487 9.22817C13.5127 9.37887 13.8434 9.5998 14.122 9.87833C14.4007 10.1569 14.6217 10.4875 14.7725 10.8515C14.9233 11.2154 15.001 11.6055 15.0011 11.9995C15.0011 12.3935 14.9236 12.7836 14.7729 13.1476C14.6222 13.5116 14.4013 13.8423 14.1227 14.121C13.8442 14.3996 13.5135 14.6206 13.1496 14.7714C12.7856 14.9223 12.3955 14.9999 12.0016 15C11.2059 15 10.4429 14.6839 9.88025 14.1213C9.31764 13.5587 9.00157 12.7956 9.00157 12C9.00157 11.2044 9.31764 10.4413 9.88025 9.87868C10.4429 9.31607 11.2059 9 12.0016 9M17.2516 5.5C16.92 5.5 16.6021 5.6317 16.3677 5.86612C16.1333 6.10054 16.0016 6.41848 16.0016 6.75C16.0016 7.08152 16.1333 7.39946 16.3677 7.63388C16.6021 7.8683 16.92 8 17.2516 8C17.5831 8 17.901 7.8683 18.1355 7.63388C18.3699 7.39946 18.5016 7.08152 18.5016 6.75C18.5016 6.41848 18.3699 6.10054 18.1355 5.86612C17.901 5.6317 17.5831 5.5 17.2516 5.5Z" fill="white"/>
								</svg>
							</Link>
							<Link href="/" className='w-12.5 h-12.5 md:w-25 md:h-25 bg-[#202020] hover:bg-[#E64C27] flex items-center justify-center'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.7778 2C20.3671 2 20.9324 2.23413 21.3491 2.65087C21.7659 3.06762 22 3.63285 22 4.22222V19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H19.7778ZM19.2222 19.2222V13.3333C19.2222 12.3727 18.8406 11.4513 18.1613 10.772C17.482 10.0927 16.5607 9.71111 15.6 9.71111C14.6556 9.71111 13.5556 10.2889 13.0222 11.1556V9.92222H9.92222V19.2222H13.0222V13.7444C13.0222 12.8889 13.7111 12.1889 14.5667 12.1889C14.9792 12.1889 15.3749 12.3528 15.6666 12.6445C15.9583 12.9362 16.1222 13.3319 16.1222 13.7444V19.2222H19.2222ZM6.31111 8.17778C6.80618 8.17778 7.28098 7.98111 7.63104 7.63104C7.98111 7.28098 8.17778 6.80618 8.17778 6.31111C8.17778 5.27778 7.34444 4.43333 6.31111 4.43333C5.81309 4.43333 5.33547 4.63117 4.98332 4.98332C4.63117 5.33547 4.43333 5.81309 4.43333 6.31111C4.43333 7.34444 5.27778 8.17778 6.31111 8.17778ZM7.85556 19.2222V9.92222H4.77778V19.2222H7.85556Z" fill="white"/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className="">
					<p className="text-white text-[18px]">
						We are completely remote but...            
					</p>
					<p className="text-white text-[24px] font-medium -tracking-[0.01em]">
						In case you want to locate us <Link className='underline' href="/">CLICK HERE</Link>        
					</p>
				</div>
			</div>
			<div className="py-12.5">
				<div className="">
					<p className="text-white text-[18px]">
						@TrymbLink 2025. All rights reserved                  
					</p>
				</div>
			</div>
		</motion.footer>
  )
}

export default Footer