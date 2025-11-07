import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url(/hand-shaking.png)" }}
    >
      <div className="absolute inset-0 bg-foreground/50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8 text-balance">
          Let's work together!
        </h2>

        <Button className="bg-background text-foreground hover:bg-secondary px-8 py-2 rounded-md">Get in touch</Button>
      </div>
    </section>
  )
}
