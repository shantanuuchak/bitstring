import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PartnerCTAProps {
  title?: string
  description: string
  subtext?: string
  buttonText?: string
}

export function PartnerCTA({
  title = "Partner with BitString",
  description,
  subtext,
  buttonText = "Connect with us!",
}: PartnerCTAProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-[#1a1a2e] overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background:
            "repeating-linear-gradient(45deg, #7A1E1E 0, #7A1E1E 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/80 max-w-2xl mb-4">{description}</p>
        {subtext && (
          <p className="text-white font-semibold mb-8 max-w-xl">{subtext}</p>
        )}
        <Button
          asChild
          className="bg-[#7A1E1E] hover:bg-[#5a1616] text-white mt-4"
        >
          <Link href="/contact">{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}
