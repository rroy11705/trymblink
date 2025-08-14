'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { fadeInVariants, containerVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

interface TrustedByProps {
  rows?: number; // Number of rows to display, default is 1
}

const TrustedBy = ({ rows = 1 }: TrustedByProps) => {
  const { ref, animate } = useScrollAnimation()

  const topRowLogos = [
    { name: 'CREX', src: '/images/logos/trusted-by/crex.webp' },
    { name: 'CreditLink', src: '/images/logos/trusted-by/creditlink.webp' },
    { name: 'Dell Technologies', src: '/images/logos/trusted-by/dell-technologies.webp' },
    { name: 'Amazon', src: '/images/logos/trusted-by/amazon.webp' },
    { name: 'HCL Technologies', src: '/images/logos/trusted-by/hcl-tech.webp' },
    { name: 'ICICI Bank', src: '/images/logos/trusted-by/icici-bank.webp' },
    { name: 'Axis Bank', src: '/images/logos/trusted-by/axis-bank.webp' },
    { name: 'IndusInd Bank', src: '/images/logos/trusted-by/indisind-bank.webp' },
    { name: 'Yes Bank', src: '/images/logos/trusted-by/yes-bank.webp' },
    { name: 'SBI', src: '/images/logos/trusted-by/sbi.webp' },
  ]

  const bottomRowLogos = [
    { name: 'Axis Bank', src: '/images/logos/trusted-by/axis-bank.webp' },
    { name: 'IndusInd Bank', src: '/images/logos/trusted-by/indisind-bank.webp' },
    { name: 'SBI', src: '/images/logos/trusted-by/sbi.webp' },
    { name: 'Yes Bank', src: '/images/logos/trusted-by/yes-bank.webp' },
    { name: 'Dell Technologies', src: '/images/logos/trusted-by/dell-technologies.webp' },
    { name: 'CREX', src: '/images/logos/trusted-by/crex.webp' },
    { name: 'ICICI Bank', src: '/images/logos/trusted-by/icici-bank.webp' },
    { name: 'CreditLink', src: '/images/logos/trusted-by/creditlink.webp' },
    { name: 'Amazon', src: '/images/logos/trusted-by/amazon.webp' },
    { name: 'HCL Technologies', src: '/images/logos/trusted-by/hcl-tech.webp' },
  ]

  // Embla Carousel setup for top row (moving right)
  const [topRowRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 8000,
      align: 'center',
      containScroll: false,
      dragFree: true,
      slidesToScroll: 1,
    },
    [Autoplay({ 
      delay: 0, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true
    })]
  )

  // Embla Carousel setup for bottom row (moving left)
  const [bottomRowRef] = useEmblaCarousel(
    { 
      loop: true,
      duration: 8000,
      align: 'center',
      containScroll: false,
      dragFree: true,
      slidesToScroll: 1,
    },
    [Autoplay({ 
      delay: 0, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true
    })]
  )

  return (
    <motion.section 
      ref={ref}
      className='relative w-full py-24 overflow-hidden'
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
      <motion.div 
        className="container mx-auto px-4 mb-10"
        variants={fadeInVariants}
      >
        <h2 className="text-white text-[30px] font-medium text-center">
          Trusted by
        </h2>
      </motion.div>

      <div className="relative space-y-6">
        {/* Top row - moving right */}
        <motion.div 
          className="overflow-hidden"
          variants={fadeInVariants}
        >
          <div className="embla" ref={topRowRef}>
            <div className="embla__container">
              {topRowLogos.map((logo) => (
                <div
                  key={`top-${logo.name}`}
                  className="embla__slide w-30 md:w-100 aspect-[395/264]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={395}
                    height={264}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom row - moving left */}
        {rows === 2 && (
          <motion.div 
            className="overflow-hidden"
            variants={fadeInVariants}
          >
            <div className="embla" ref={bottomRowRef} style={{ transform: 'scaleX(-1)' }}>
              <div className="embla__container">
                {bottomRowLogos.map((logo) => (
                  <div
                    key={`bottom-${logo.name}`}
                    className="embla__slide w-30 md:w-100 aspect-[395/264]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={395}
                      height={264}
                      className="w-full h-full object-contain"
                      style={{ transform: 'scaleX(-1)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default TrustedBy