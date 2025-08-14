'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { countryCodes } from '@/lib/countryCodes'
import { ContactFormData, ContactFormErrors, ContactAPIResponse, PageSource } from '@/types/contact'
import DiagonalArrowIcon from '../../icons/general/DiagonalArrowIcon'

interface ContactProps {
  pageSource?: PageSource
}

const Contact = ({ pageSource = PageSource.HOME }: ContactProps) => {
  const { ref, animate } = useScrollAnimation()
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
    pageSource
  })
  
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        break
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/
        if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number'
        break
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        break
    }
    return undefined
  }

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}
    
    Object.keys(formData).forEach((key) => {
      if (key !== 'countryCode' && key !== 'pageSource') {
        const error = validateField(key as keyof ContactFormData, formData[key as keyof ContactFormData])
        if (error) {
          newErrors[key as keyof ContactFormErrors] = error
        }
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    
    if (validateForm()) {
      try {
        const response = await fetch('/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const result: ContactAPIResponse = await response.json()

        if (result.success) {
          setSubmitSuccess(true)
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            countryCode: '+1',
            phone: '',
            message: '',
            pageSource
          })
          setErrors({})
        } else {
          // Handle validation errors from API
          if (result.errors) {
            setErrors(result.errors)
          } else {
            setErrors({ message: result.message || 'Something went wrong. Please try again.' })
          }
        }
      } catch (error) {
        console.error('Form submission error:', error)
        setErrors({ message: 'Network error. Please check your connection and try again.' })
      }
    }
    
    setIsSubmitting(false)
  }

  return (
    <motion.section 
      ref={ref}
      className='relative w-full md:px-15 pt-24 md:py-24 overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='flex flex-col md:flex-row md:gap-12.5'>
				{[PageSource.HOME, PageSource.ABOUT_US, PageSource.SERVICES].includes(pageSource) && (
					<motion.div 
						className="flex-1 mb-10 px-6 md:px-0"
						variants={fadeInVariants}
					>
						<h2 className="text-white text-gradient-hero text-[32px] md:text-[120px] font-medium text-left">
							Let&apos;s build
							together
						</h2>
					</motion.div>
				)}

				{pageSource === PageSource.CONTACT && (
					<motion.div 
						className="relative flex-1 aspect-square border border-[#202020]"
						variants={fadeInVariants}
					>
						<div className='absolute left-1/2 -translate-x-1/2 z-0'>
							<svg width="498" height="412" viewBox="0 0 498 412" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="248.372" y1="-709" x2="248.372" y2="411.61" stroke="url(#paint0_linear_3129_292)" strokeWidth="3.75963"/>
							<g opacity="0.3" filter="url(#filter0_f_3129_292)">
							<path d="M265.289 -41.2236C265.289 -20.0472 259.373 -0.14973 248.997 17.1428C238.622 -0.149729 232.706 -20.0472 232.706 -41.2236C232.706 -62.3995 238.623 -82.2953 248.997 -99.5874C259.372 -82.2953 265.289 -62.3995 265.289 -41.2236Z" fill="url(#paint1_radial_3129_292)"/>
							</g>
							<g opacity="0.1" filter="url(#filter1_f_3129_292)">
							<path d="M390.016 -41.2291C390.016 47.0529 338.805 130.003 249 202.093C159.195 130.003 107.984 47.0529 107.984 -41.2291C107.986 -129.508 159.199 -212.451 249 -284.54C338.801 -212.451 390.014 -129.508 390.016 -41.2291Z" fill="url(#paint2_radial_3129_292)"/>
							</g>
							<g filter="url(#filter2_f_3129_292)">
							<path d="M254.016 -41.2257C254.016 6.23881 251.968 50.8365 248.376 89.5957C244.785 50.8365 242.737 6.2388 242.737 -41.2257C242.737 -88.6887 244.785 -133.283 248.376 -172.041C251.967 -133.283 254.016 -88.6887 254.016 -41.2257Z" fill="url(#paint3_radial_3129_292)"/>
							</g>
							<defs>
							<filter id="filter0_f_3129_292" x="216.537" y="-115.754" width="64.9188" height="149.063" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
							<feGaussianBlur stdDeviation="8.08321" result="effect1_foregroundBlur_3129_292"/>
							</filter>
							<filter id="filter1_f_3129_292" x="0.709541" y="-391.815" width="496.581" height="701.183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
							<feGaussianBlur stdDeviation="53.6374" result="effect1_foregroundBlur_3129_292"/>
							</filter>
							<filter id="filter2_f_3129_292" x="232.583" y="-182.192" width="31.5833" height="281.939" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
							<feGaussianBlur stdDeviation="5.0755" result="effect1_foregroundBlur_3129_292"/>
							</filter>
							<linearGradient id="paint0_linear_3129_292" x1="245.992" y1="-709" x2="245.992" y2="411.61" gradientUnits="userSpaceOnUse">
							<stop offset="0.161227" stopColor="#060410" stopOpacity="0"/>
							<stop offset="0.574029" stopColor="#E64C27"/>
							<stop offset="1" stopColor="#060410" stopOpacity="0"/>
							</linearGradient>
							<radialGradient id="paint1_radial_3129_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.997 -41.2223) rotate(90) scale(58.3651 16.2917)">
							<stop stopColor="#FFA793"/>
							<stop offset="1" stopColor="#D24525"/>
							</radialGradient>
							<radialGradient id="paint2_radial_3129_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(249 -41.2234) rotate(90) scale(243.317 141.016)">
							<stop stopColor="#FFA793"/>
							<stop offset="1" stopColor="#D24525"/>
							</radialGradient>
							<radialGradient id="paint3_radial_3129_292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.376 -41.2227) rotate(90) scale(130.818 5.63945)">
							<stop stopColor="#FFA793"/>
							<stop offset="1" stopColor="#D24525"/>
							</radialGradient>
							</defs>
							</svg>

						</div>
						<div className='relative w-full h-full flex items-center justify-center z-10'>
							<h2 className="text-[#A6A6A6] text-[24px] md:text-[40px] font-medium text-center">
								Is your <span className='text-white'>Product</span> working<br />
								as hard as you are?
							</h2>
						</div>
					</motion.div>
				)}

				<motion.div
					className="bg-[#202020] flex-1"
					variants={fadeInVariants}
				>
					<div className="flex flex-col gap-6 p-6 md:p-10">
						<h3 className="text-white text-[30px] font-medium">
							Add your project in mind?
						</h3>
						<form onSubmit={handleSubmit} className="flex flex-col gap-4">
							<div className="flex flex-col gap-1">
								<label htmlFor="name" className="text-white text-sm font-medium">
									Your name
								</label>
								<input 
									id="name"
									type="text" 
									placeholder="Enter your name" 
									value={formData.name}
									onChange={(e) => handleInputChange('name', e.target.value)}
									className={`p-3 bg-black text-white outline-none focus:ring-1 ${
										errors.name ? 'ring-1 ring-red-400 focus:ring-red-400' : 'focus:ring-[#E64C27]'
									}`}
								/>
								{errors.name && (
									<span className="text-red-400 text-xs mt-1">{errors.name}</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="email" className="text-white text-sm font-medium">
									Your email
								</label>
								<input 
									id="email"
									type="email" 
									placeholder="Enter your email" 
									value={formData.email}
									onChange={(e) => handleInputChange('email', e.target.value)}
									className={`p-3 bg-black text-white outline-none focus:ring-1 ${
										errors.email ? 'ring-1 ring-red-400 focus:ring-red-400' : 'focus:ring-[#E64C27]'
									}`}
								/>
								{errors.email && (
									<span className="text-red-400 text-xs mt-1">{errors.email}</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="phone" className="text-white text-sm font-medium">
									Phone number
								</label>
								<div className={`flex gap-0.25 bg-black ${
									errors.phone ? 'ring-1 ring-red-400' : ''
								}`}>
									<select 
										id="countryCode"
										value={formData.countryCode}
										onChange={(e) => handleInputChange('countryCode', e.target.value)}
										className="p-3 bg-black text-white border-none outline-none focus:ring-1 focus:ring-[#E64C27] min-w-20"
									>
										{countryCodes.map((country) => (
											<option key={`${country.code}-${country.name}`} value={country.code}>
												{country.flag} {country.code}
											</option>
										))}
									</select>
									<input 
										id="phone"
										type="tel" 
										placeholder="Enter your phone number" 
										value={formData.phone}
										onChange={(e) => handleInputChange('phone', e.target.value)}
										className={`p-3 bg-black text-white flex-1 outline-none focus:ring-1 ${
											errors.phone ? 'focus:ring-red-400' : 'focus:ring-[#E64C27]'
										}`}
									/>
								</div>
								{errors.phone && (
									<span className="text-red-400 text-xs mt-1">{errors.phone}</span>
								)}
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="message" className="text-white text-sm font-medium">
									Additional info you want to tell us
								</label>
								<textarea 
									id="message"
									rows={4} 
									placeholder="Add your message" 
									value={formData.message}
									onChange={(e) => handleInputChange('message', e.target.value)}
									className={`p-3 bg-black text-white outline-none focus:ring-1 resize-none ${
										errors.message ? 'ring-1 ring-red-400 focus:ring-red-400' : 'focus:ring-[#E64C27]'
									}`}
								></textarea>
								{errors.message && (
									<span className="text-red-400 text-xs mt-1">{errors.message}</span>
								)}
							</div>
							
							{submitSuccess && (
								<div className="p-4 bg-green-600 text-white text-sm">
									Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
								</div>
							)}
							
							{errors.message && !submitSuccess && (
								<div className="p-4 bg-red-600 text-white text-sm">
									{errors.message}
								</div>
							)}
							
							<button 
								type="submit" 
								disabled={isSubmitting}
								className={`ml-auto w-fit font-medium text-base transition-all duration-200 px-8 py-4 flex flex-row gap-2 items-center justify-center ${
									isSubmitting 
										? 'bg-gray-600 cursor-not-allowed' 
										: 'bg-[#E64C27] hover:bg-[#d43d1a]'
								} text-white`}
							>
								{isSubmitting ? 'Sending...' : 'Call me back'}
								<DiagonalArrowIcon />
							</button>
						</form>
					</div>
				</motion.div>
			</div>
		</motion.section>
  )
}

export default Contact