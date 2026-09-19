interface Benefit {
  title: string
  description: string
}

interface BenefitsSectionProps {
  title: string
  benefits: Benefit[]
  variant?: "grid" | "two-column" | "maroon"
  backgroundColor?: "white" | "cream" | "gray" | "maroon"
}

export function BenefitsSection({
  title,
  benefits,
  variant = "grid",
  backgroundColor = "cream",
}: BenefitsSectionProps) {
  const bgClasses = {
    white: "bg-background",
    cream: "bg-[#f5f0e8]",
    gray: "bg-secondary",
    maroon: "bg-[#7A1E1E]",
  }

  if (backgroundColor === "maroon") {
    return (
      <section className={`w-full ${bgClasses[backgroundColor]}`}>
        <div className="relative py-8 lg:py-12 border-b border-[#5a1616]">
          <div
            className="absolute top-0 right-0 w-1/3 h-full bg-background"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
              {title}
              <div className="hidden lg:block w-8 h-8 ml-4 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M9 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
            </h2>
          </div>
        </div>

        <div className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="pb-8 lg:pb-12 border-b border-[#5a1616] lg:border-b-0"
                >
                  <h3 className="font-semibold text-white text-base lg:text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-12 lg:py-20 ${bgClasses[backgroundColor]}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
          {title}
          <span className="text-[#7A1E1E]">?</span>
        </h2>

        <div
          className={`grid grid-cols-1 ${variant === "two-column" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
