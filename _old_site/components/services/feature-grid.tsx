interface Feature {
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4 | 6
  variant?: "light" | "dark"
  cardStyle?: "plain" | "bordered" | "highlighted"
}

export function FeatureGrid({
  features,
  columns = 3,
  variant = "light",
  cardStyle = "plain",
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    6: "md:grid-cols-2 lg:grid-cols-3",
  }

  const getCardClasses = () => {
    if (variant === "dark") {
      if (cardStyle === "highlighted") {
        return "bg-[#5a1616] p-6 rounded-lg"
      }
      return ""
    }
    if (cardStyle === "bordered") {
      return "bg-background p-6 rounded-lg border border-border"
    }
    if (cardStyle === "highlighted") {
      return "bg-secondary p-6 rounded-lg border-l-4 border-[#7A1E1E]"
    }
    return ""
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}>
      {features.map((feature, index) => (
        <div key={index} className={`space-y-3 ${getCardClasses()}`}>
          <h3
            className={`font-semibold ${variant === "dark" ? "text-white" : "text-[#7A1E1E]"}`}
          >
            {feature.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${variant === "dark" ? "text-white/80" : "text-muted-foreground"}`}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
