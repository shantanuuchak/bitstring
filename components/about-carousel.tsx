'use client'

import { useState, useEffect } from 'react'

interface CarouselItem {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Beyond Services, Building Partnerships",
    description:
      "At BitString, we go beyond delivering IT services - we focus on building strong partnerships. Together, we grow, adapt, and create meaningful impact in the digital era.",
    icon: (
      <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM16 16a5 5 0 010 10H4a5 5 0 010-10h12z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Technology for a Dynamic World",
    description:
      "The digital world is always changing, and so are we. Our team stays ahead of trends, ensuring your business is always empowered with the latest and most effective solutions.",
    icon: (
      <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Innovation at the Core",
    description:
      "Innovation is not just a buzzword for us - it is a way of working. Every solution, every strategy, and every line of code is designed to bring fresh ideas.",
    icon: (
      <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
]

export function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getPrevIndex = (index: number) => (index - 1 + items.length) % items.length
  const getNextIndex = (index: number) => (index + 1) % items.length

  return (
    <div className="w-full max-w-sm">
      {/* Carousel Container */}
      <div className="relative h-80 overflow-hidden px-2">
        {/* Previous Card - Peeking from top */}
        <div className="absolute top-0 left-2 right-2 transition-all duration-500 ease-out" style={{ opacity: 0.3, transform: 'scale(0.95) translateY(-140px)' }}>
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="w-8 h-8 text-gray-300 mb-2">
              {items[getPrevIndex(currentIndex)].icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-400 line-clamp-2">
              {items[getPrevIndex(currentIndex)].title}
            </h3>
          </div>
        </div>

        {/* Active Card - Center */}
        <div className="absolute top-1/2 left-2 right-2 -translate-y-1/2 transition-all duration-500 ease-out">
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 space-y-4">
            <div className="w-10 h-10 text-cyan-500">
              {items[currentIndex].icon}
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                {items[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {items[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Next Card - Peeking from bottom */}
        <div className="absolute bottom-0 left-2 right-2 transition-all duration-500 ease-out" style={{ opacity: 0.3, transform: 'scale(0.95) translateY(140px)' }}>
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="w-8 h-8 text-gray-300 mb-2">
              {items[getNextIndex(currentIndex)].icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-400 line-clamp-2">
              {items[getNextIndex(currentIndex)].title}
            </h3>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#7A1E1E] w-6'
                : 'bg-gray-300 w-2'
            }`}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  )
}
