import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          We provide solutions to your IT needs.
        </h1>

        <p className="text-sm md:text-base text-muted-foreground mb-8 tracking-widest uppercase">
          Connect :: Collaborate :: Deliver Values
        </p>

        <Button className="bg-brand hover:bg-brand-dark text-white px-8 py-2 rounded-md">Get Started</Button>
      </div>
    </section>
  )
}
