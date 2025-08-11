'use client'

import React, { Fragment, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { slideInLeftVariants, containerVariants, textRevealVariants } from '../../../lib/animations'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

const StoryText = "We are TrymbLink, \n A design company founded by an architect and a sales visionary. We believe today's products, especially in SAAS, have lost touch with nature's intuitive design. "

const Story = () => {
  const { ref, animate } = useScrollAnimation()

  const StoryWords = useMemo(() => StoryText.split(' '), [])

  useEffect(() => {
    const threshold = screen.height / 2;

    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const OurStoryEle = document.getElementById('our-story');
      const spans = document.querySelectorAll('#our-story p span'); // Select spans inside the handleScroll function

      if (scrollPosition > (OurStoryEle?.offsetTop || 0) - threshold) {
        const elementHeightPerSpan = ((OurStoryEle?.clientHeight || 0) / StoryWords.length);
        spans.forEach((span, index) => {
          if (scrollPosition > (OurStoryEle?.offsetTop || 0) + (elementHeightPerSpan * (index + 1)) - threshold) {
            span.classList.add('text-black'); 
          } else {
            span.classList.remove('text-black'); 
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [StoryWords.length]);

  return (
    <motion.section 
      ref={ref}
      id='our-story' 
      className="relative bg-white w-full overflow-hidden px-6 md:px-0 py-40"
      initial="hidden"
      animate={animate}
      variants={containerVariants}
    >
			<div className='w-full max-w-200 mx-auto'>
        <motion.div 
          className='w-full space-y-16'
          variants={slideInLeftVariants}
        >
					<motion.h6
						className='text-[#E64C27] text-[20px] md:text-[30px] leading-[100%] -tracking-[0.03em] font-medium text-left'
					>
						OUR STORY
					</motion.h6>
					<motion.p 
            className='text-[#B8B8B8] text-[32px] md:text-[58px] font-bold leading-[146%] text-left'
            variants={textRevealVariants}
          >
            {StoryWords
              .map((word, index) => 
                word === '\n' ? 
                  <Fragment key={`line-1-${word}-${index}`}>
                    <br /><br />
                  </Fragment> :
                  <span key={`line-1-${word}-${index}`} className='text-black'>
                    {word}{' '}
                  </span>
              )}
					</motion.p>
				</motion.div>
			</div>
    </motion.section>
  )
}

export default Story