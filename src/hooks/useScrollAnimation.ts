"use client"

import { useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  })

  return {
    ref,
    isInView,
    animate: shouldReduceMotion ? "visible" : (isInView ? "visible" : "hidden")
  }
}