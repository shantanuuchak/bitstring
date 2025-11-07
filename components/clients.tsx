"use client"

import { useState } from "react"
import Image from "next/image"

export default function Clients() {
  const clients = [
    { name: "Schoolnet", logo: "/logos/schoolnet.png" },
    { name: "Hadron", logo: "/hadron-logo.jpg" },
    { name: "Successive", logo: "/successive-logo.jpg" },
    { name: "Infosys", logo: "/infosys-logo.jpg" },
  ]

  // Duplicate clients for seamless infinite scroll
  const extendedClients = [...clients, ...clients, ...clients]

  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Clients</h2>

        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-${100 / 3}%);
              }
            }
            
            .carousel-track {
              animation: scroll 20s linear infinite;
            }
            
            .carousel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="carousel-track flex gap-12 md:gap-16 items-center justify-start">
            {extendedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 md:w-56 flex items-center justify-center"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain"
                    priority={index < clients.length}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
