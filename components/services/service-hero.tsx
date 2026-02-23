import React from "react"
import Image from "next/image"

interface ServiceHeroProps {
  title: string
  description: string
  bulletPoints?: string[]
  illustration?: React.ReactNode
}

export function ServiceHero({
  title,
  description,
  bulletPoints,
  illustration,
}: ServiceHeroProps) {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="mt-4 space-y-2">
                {bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-[#7A1E1E] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {illustration || (
              <div className="relative w-64 h-64 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Illustration</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
