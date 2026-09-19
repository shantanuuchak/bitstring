interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-[#7A1E1E] overflow-hidden">
      {/* Decorative diagonal shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-background"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-white/90 text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
