'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants } from '@/lib/animations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { NewsletterFormData, NewsletterFormErrors, NewsletterAPIResponse } from '@/types/newsletter'

const Newsletter = () => {
  const { ref, animate } = useScrollAnimation()
  
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: ''
  })
  
  const [errors, setErrors] = useState<NewsletterFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    return undefined
  }

  const handleInputChange = (value: string) => {
    setFormData({ email: value })
    
    // Clear error when user starts typing
    if (errors.email) {
      setErrors({})
    }
    // Clear success message when user starts typing again
    if (submitSuccess) {
      setSubmitSuccess(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setErrors({})

    // Client-side validation
    const emailError = validateEmail(formData.email)
    if (emailError) {
      setErrors({ email: emailError })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/newsletters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email.trim().toLowerCase() }),
      })

      const result: NewsletterAPIResponse = await response.json()

      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ email: '' })
        setErrors({})
      } else {
        setErrors({ 
          general: result.message || 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setErrors({ 
        general: 'Network error. Please check your connection and try again.' 
      })
    }

    setIsSubmitting(false)
  }

  return (
    <motion.section 
      ref={ref}
      className='relative w-full md:px-15 overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='bg-[#202020] flex flex-col md:flex-row gap-12.5'>
				<motion.div 
					className="flex-1 mb-10 p-6 md:p-12"
					variants={fadeInVariants}
				>
					<h2 className="text-white text-gradient-hero text-[24px] md:text-[46px] font-medium text-left mb-5">
						You handle the pitch decks.<br />
						We&apos;ll whisper product truths into your inbox.
					</h2>
					<form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="flex flex-col md:flex-row items-center justify-start gap-4">
							<div className='w-full md:w-3/5 flex flex-col gap-1'>
								<input 
									type="email" 
									placeholder="Enter your email" 
									value={formData.email}
									onChange={(e) => handleInputChange(e.target.value)}
									className={`p-3 bg-black text-white outline-none focus:ring-1 ${
										errors.email ? 'ring-1 ring-red-400 focus:ring-red-400' : 'focus:ring-[#E64C27]'
									}`}
								/>
								{errors.email && (
									<span className="text-red-400 text-xs mt-1">{errors.email}</span>
								)}
							</div>
							<button 
								type="submit" 
								disabled={isSubmitting}
								className={`w-full md:w-fit h-12 font-medium text-base transition-all duration-200 px-8 flex flex-row gap-2 items-center justify-center cursor-pointer ${
									isSubmitting 
										? 'bg-gray-600 cursor-not-allowed text-white' 
										: 'bg-white text-black hover:bg-[#d43d1a] hover:text-white'
								}`}
								>
									{isSubmitting ? 'Subscribing...' : 'Send me updates'}
								</button>
						</div>
						
						{submitSuccess && (
							<div className="p-4 bg-green-600 text-white text-sm">
								🎉 Thank you for subscribing! Check your email for confirmation.
							</div>
						)}
						
						{errors.general && (
							<div className="p-4 bg-red-600 text-white text-sm">
								{errors.general}
							</div>
						)}
					</form>
				</motion.div>
				</div>
			</motion.section>
  )
}

export default Newsletter