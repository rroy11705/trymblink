'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { countryCodes } from '@/lib/countryCodes'
import { ContactFormData, ContactFormErrors, ContactAPIResponse, PageSource } from '@/types/contact'

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
        const response = await fetch('/api/contact', {
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
      className='relative w-full px-6 md:px-15 py-24 overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='flex flex-col md:flex-row gap-12.5'>
				<motion.div 
					className="flex-1 mb-10"
					variants={fadeInVariants}
				>
					<h2 className="text-white text-gradient-hero text-[32px] md:text-[120px] font-medium text-left">
						Let&apos;s build
						together
					</h2>
				</motion.div>

				<motion.div
					className="bg-[#202020] flex-1 mb-10"
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
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="mask0_2009_683" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
								<rect width="18" height="18" fill="#D9D9D9"/>
								</mask>
								<g mask="url(#mask0_2009_683)">
								<path d="M4.72069 13.2332L3.9375 12.45L11.3179 5.0625H4.60819V3.9375H13.2332V12.5625H12.1082V5.85281L4.72069 13.2332Z" fill="white"/>
								</g>
								</svg>
							</button>
						</form>
					</div>
				</motion.div>
			</div>
		</motion.section>
  )
}

export default Contact