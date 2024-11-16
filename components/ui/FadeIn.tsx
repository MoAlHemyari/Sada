'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'tb' | 'bt' | 'lr' | 'rl' | 'center'
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'

interface FadeInProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  opacity?: boolean
  direction?: Direction
  displacement?: number
  easing?: Easing
  once?: boolean
}

const directionMap: Record<Direction, string[]> = {
  tb: ['translate-y', '-translate-y'],
  bt: ['-translate-y', 'translate-y'],
  lr: ['translate-x', '-translate-x'],
  rl: ['-translate-x', 'translate-x'],
  center: ['scale', 'scale']
}

export default function FadeIn({
  children,
  duration = 1000,
  delay = 0,
  opacity = true,
  direction = 'tb',
  displacement = 10,
  easing = 'ease-out',
  once = true
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true)
          if (once) setHasAnimated(true)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, hasAnimated])

  const [initialClass, visibleClass] = directionMap[direction]

  const animationClasses = cn(
    'transition-all will-change-transform',
    isVisible ? 'visible' : 'invisible',
    opacity && (isVisible ? 'opacity-100' : 'opacity-0'),
    direction === 'center'
      ? isVisible
        ? 'scale-100'
        : `scale-${100 - Math.abs(displacement)}`
      : isVisible
      ? visibleClass
      : `${initialClass}-${displacement}`,
    easing
  )

  const inlineStyles = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  }

  return (
    <div
      ref={ref}
      className={animationClasses}
      style={inlineStyles}
      aria-hidden={!isVisible}
    >
      {children}
    </div>
  )
}