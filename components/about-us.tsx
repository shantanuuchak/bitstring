"use client"

import { useState, useEffect } from "react"

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const features = [
    {
      title: "Beyond Services, Building Partnerships",
      description:
        "At BitString, we go beyond delivering IT services—we focus on building strong partnerships. Together, we grow, adapt, and create meaningful impact in the digital era.",
      icon: "👥",
    },
    {
      title: "Technology for a Dynamic World",
      description:
        "The digital world is always changing, and so are we. Our team stays ahead of trends, ensuring your business is always empowered with the latest and most effective solutions.",
      icon: "🌐",
    },
    {
      title: "Innovation at the Core",
      description:
        "Innovation isn't just a buzzword for us—it's a way of working. Every solution, every strategy, and every line of code is designed to bring fresh ideas and smarter ways to achieve your goals.",
      icon: "💡",
    },
    {
      title: "Expertise Across the Spectrum",
      description:
        "From applications to cloud solutions, we provide a complete range of IT services tailored to your unique business needs, ensuring efficiency, scalability, and long-term success.",
      icon: "🏆",
    },
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused, features.length])

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About us</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
              Experience you can trust.
              <br />
              Technology that delivers.
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              BitString IT Services Pvt Ltd is an ISO 27001 and ISO 9001 certified technology company providing
              information technology services and solutions. We leverage deep functional expertise and over 100 years of
              combined experience to help clients transform their businesses.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our team is comprised of domain experts with more than two decades of industry experience in various
              technologies.
            </p>
          </div>

          {/* Right Column - Auto-rotating Carousel */}
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex gap-4 mb-4">
                      <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-red-700 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Pause Indicator */}
            {isPaused && (
              <div className="absolute top-2 right-2 text-xs bg-red-700 text-white px-2 py-1 rounded">Paused</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
