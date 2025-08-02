'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { fadeInVariants, containerVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const TrustedBy = () => {
  const { ref, animate } = useScrollAnimation()

  const topRowLogos = [
    { name: 'CREX', src: '/images/logos/trusted-by/crex.jpg' },
    { name: 'CreditLink', src: '/images/logos/trusted-by/creditlink.jpg' },
    { name: 'Dell Technologies', src: '/images/logos/trusted-by/dell-technologies.jpg' },
    { name: 'Amazon', src: '/images/logos/trusted-by/amazon.jpg' },
    { name: 'HCL Technologies', src: '/images/logos/trusted-by/hcl-tech.jpg' },
    { name: 'ICICI Bank', src: '/images/logos/trusted-by/icici-bank.jpg' },
    { name: 'Axis Bank', src: '/images/logos/trusted-by/axis-bank.jpg' },
    { name: 'IndusInd Bank', src: '/images/logos/trusted-by/indisind-bank.jpg' },
    { name: 'Yes Bank', src: '/images/logos/trusted-by/yes-bank.jpg' },
    { name: 'SBI', src: '/images/logos/trusted-by/sbi.jpg' },
  ]

  const bottomRowLogos = [
    { name: 'Axis Bank', src: '/images/logos/trusted-by/axis-bank.jpg' },
    { name: 'IndusInd Bank', src: '/images/logos/trusted-by/indisind-bank.jpg' },
    { name: 'SBI', src: '/images/logos/trusted-by/sbi.jpg' },
    { name: 'Yes Bank', src: '/images/logos/trusted-by/yes-bank.jpg' },
    { name: 'Dell Technologies', src: '/images/logos/trusted-by/dell-technologies.jpg' },
    { name: 'CREX', src: '/images/logos/trusted-by/crex.jpg' },
    { name: 'ICICI Bank', src: '/images/logos/trusted-by/icici-bank.jpg' },
    { name: 'CreditLink', src: '/images/logos/trusted-by/creditlink.jpg' },
    { name: 'Amazon', src: '/images/logos/trusted-by/amazon.jpg' },
    { name: 'HCL Technologies', src: '/images/logos/trusted-by/hcl-tech.jpg' },
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
        className="container mx-auto px-4 mb-20"
        variants={fadeInVariants}
      >
        <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium text-center">
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
                  className="embla__slide w-100 aspect-[395/264]"
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
        <motion.div 
          className="overflow-hidden"
          variants={fadeInVariants}
        >
          <div className="embla" ref={bottomRowRef} style={{ transform: 'scaleX(-1)' }}>
            <div className="embla__container">
              {bottomRowLogos.map((logo) => (
                <div
                  key={`bottom-${logo.name}`}
                  className="embla__slide w-100 aspect-[395/264]"
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
      </div>
    </motion.section>
  )
}

export default TrustedBy