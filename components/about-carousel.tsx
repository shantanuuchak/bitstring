'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

interface CarouselItem {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'Beyond Services, Building Partnerships',
    description:
      'At BitString, we go beyond delivering IT services – we focus on building strong partnerships. Together, we grow, adapt, and create meaningful impact in the digital era.',
    icon: (
      <svg className="w-8 h-8 text-[#7A1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292m0-5.292h0" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Technology for a Dynamic World',
    description:
      'The digital world is always changing, and so are we. Our team stays ahead of trends, ensuring your business is always empowered with the latest and most effective solutions.',
    icon: (
      <svg className="w-8 h-8 text-[#7A1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Innovation at the Core',
    description:
      'Innovation isn\'t just a buzzword for us – it\'s a way of working. Every problem, every challenge, and every idea we tackle is designed to bring fresh value.',
    icon: (
      <svg className="w-8 h-8 text-[#7A1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
]

export function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const getItemClass = (index: number) => {
    if (index === currentIndex) {
      return 'scale-100 opacity-100 z-10 translate-y-0'
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      return 'scale-95 opacity-60 z-0 translate-y-4'
    } else {
      return 'scale-90 opacity-30 z-0 translate-y-8'
    }
  }

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Carousel Container */}
      <div className="relative w-full max-w-sm h-80">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-out ${getItemClass(index)}`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <Card className="h-full bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#7A1E1E] mb-3 line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-4">
                {item.description}
              </p>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlay(false)
              setTimeout(() => setIsAutoPlay(true), 6000)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#7A1E1E] w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
