'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { imageRevealVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'
import CopyIcon from '../icons/general/CopyIcon'
import DiagonalArrowIcon from '../icons/general/DiagonalArrowIcon'
import EmailIcon from '../icons/general/EmailIcon'
import FacebookIcon from '../icons/social/FacebookIcon'
import InstagramIcon from '../icons/social/InstagramIcon'
import LinkedInIcon from '../icons/social/LinkedInIcon'

const Footer = () => {
  const { ref } = useScrollAnimation()
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  const copyEmailToClipboard = async () => {
    const email = 'heya@trymblink.com'
    try {
      await navigator.clipboard.writeText(email)
      setShowCopyMessage(true)
      setTimeout(() => setShowCopyMessage(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }
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
						<div className='relative hidden md:flex flex-col items-end gap-2'>
							<div className='flex flex-row items-center justify-center gap-4'>
								<h2 className="text-white/60 text-left">
									Mail directly to us at
								</h2>
								<Link href="mailto:heya@trymblink.com" className='text-[28px]'>
									heya@trymblink.com
								</Link>
								<button onClick={copyEmailToClipboard} className='w-12.5 h-12.5 bg-[#202020] flex items-center justify-center cursor-pointer hover:bg-[#E64C27] transition-colors'>
									<CopyIcon />
								</button>
								<Link
									href="mailto:heya@trymblink.com"
									className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white px-4 py-3 flex items-center justify-center gap-2'
								>
									Mail us
									<DiagonalArrowIcon />
								</Link>
							</div>
							{showCopyMessage && (
								<p className='absolute -bottom-5 text-green-400 text-sm animate-fade-in'>
									Email copied to clipboard
								</p>
							)}
						</div>
						<div className='relative md:hidden w-full flex flex-col gap-2'>
							<div className='bg-white/5 w-full flex flex-row items-center justify-between p-4 border border-white/10'>
								<Link href="mailto:heya@trymblink.com" className='text-[14px]'>
									heya@trymblink.com
								</Link>
								<div className='flex flex-row gap-2'>
									<button onClick={copyEmailToClipboard} className='w-8 h-8 bg-[#202020] flex items-center justify-center cursor-pointer hover:bg-[#E64C27] transition-colors'>
										<CopyIcon />
									</button>
									<Link
										href="mailto:heya@trymblink.com"
										className='font-medium text-base transition-all duration-200 bg-[#E64C27] text-white w-8 h-8 flex items-center justify-center gap-2'
									>
										<EmailIcon />
									</Link>
								</div>
							</div>
							{showCopyMessage && (
								<p className='absolute -bottom-6 text-green-400 text-sm text-center animate-fade-in'>
									Email copied to clipboard
								</p>
							)}
						</div>
						<div className='w-full flex flex-row items-center justify-end gap-4'>
							<Link href="http://linkedin.com/company/trymblink/posts/?feedView=all" target='_blank' className='w-12.5 h-12.5 md:w-25 md:h-25 bg-[#202020] hover:bg-[#E64C27] flex items-center justify-center'>
								<LinkedInIcon />
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