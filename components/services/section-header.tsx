interface SectionHeaderProps {
  title: string
  variant?: "maroon" | "maroon-with-arrow"
}

export function SectionHeader({
  title,
  variant = "maroon-with-arrow",
}: SectionHeaderProps) {
  return (
    <div className="relative bg-[#7A1E1E] py-8 lg:py-12">
      {variant === "maroon-with-arrow" && (
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-background"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          aria-hidden="true"
        />
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
      </div>
    </div>
  )
}
