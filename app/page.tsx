import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutCarousel } from "@/components/about-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a2e] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#1a1a2e]/60" />
          <Image
            src="/images/hero-bg.jpg"
            alt="IT Solutions background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10 flex items-center justify-center min-h-[60vh] lg:py-44">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                We Provide Solutions To Your IT Needs.
              </h1>
              <p className="mt-4 text-white/80 tracking-widest text-sm uppercase">
                Connect :: Collaborate :: Deliver Values
              </p>
              <Button
                asChild
                className="mt-8 bg-[#7A1E1E] hover:bg-[#5a1616] text-white px-8 py-6 text-base"
              >
                <Link href="/contact">Get started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="bg-[#7A1E1E]">
          <div className="py-12 lg:py-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
              Our services
            </h2>
          </div>

          {/* ServiceNow Consulting */}
          <div className="bg-[#5a1616] py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start max-w-4xl mx-auto">
                <div className="lg:w-2/5">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    ServiceNow
                    <br />
                    consulting
                  </h3>
                </div>
                <div className="lg:w-3/5">
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    Empowering businesses with seamless digital workflows. Our
                    ServiceNow consulting services help organizations optimize
                    processes, enhance productivity, and drive digital
                    transformation. From implementation to customization, we
                    ensure your ServiceNow ecosystem operates efficiently and
                    delivers maximum business value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Talent Provisioning */}
          <div className="bg-[#7A1E1E] py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start max-w-4xl mx-auto">
                <div className="lg:w-2/5">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    Talent
                    <br />
                    provisioning
                  </h3>
                </div>
                <div className="lg:w-3/5">
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    We understand that efficient man-power is a crucial element
                    for the success of any project. Our talent provisioning
                    services ensures you get the right professionals with the
                    precise skills and certifications your projects demand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Consulting */}
          <div className="bg-[#4a1212] py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start max-w-4xl mx-auto">
                <div className="lg:w-2/5">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    Technology
                    <br />
                    consulting &
                    <br />
                    services
                  </h3>
                </div>
                <div className="lg:w-3/5">
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    We collaborate closely with our clients to understand unique
                    challenges and develop tailored solutions. Our technology
                    consulting services help you navigate complex digital
                    transformations with expert guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* More Services Button */}
          <div className="bg-[#4a1212] pb-12 lg:pb-16">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <Button
                asChild
                variant="outline"
                className="border-white text-[#7A1E1E] bg-white hover:bg-white/90 hover:text-[#5a1616]"
              >
                <Link href="/services">More services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              About us
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#7A1E1E] mb-2">
                      Experience you can trust. Technology that delivers.
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      BitString IT Services Pvt Ltd is an ISO 27001 and ISO 9001
                      certified technology company providing Information
                      Technology and Consulting Services. We leverage deep
                      functional expertise and over 100 years of combined
                      experience to help clients transform their businesses.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      Our team is comprised of domain experts with more than two
                      decades of industry experience in various technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Carousel */}
              <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <AboutCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 lg:py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              Clients
            </h2>
          </div>
          
          {/* Auto-scrolling logo marquee */}
          <div className="relative">
            <div className="flex animate-marquee">
              {/* First set of logos */}
              <div className="flex shrink-0 items-center gap-16 px-8">
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">schoolnet</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">HADRON</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">SUCCESSIVE DIGITAL</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">Infosys</div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex shrink-0 items-center gap-16 px-8">
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">schoolnet</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">HADRON</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">SUCCESSIVE DIGITAL</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">Infosys</div>
              </div>
              {/* Third set for extra seamless coverage */}
              <div className="flex shrink-0 items-center gap-16 px-8">
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">schoolnet</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">HADRON</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">SUCCESSIVE DIGITAL</div>
                <div className="text-xl font-semibold text-muted-foreground whitespace-nowrap">Infosys</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative py-16 lg:py-24 bg-[#7A1E1E] overflow-hidden min-h-[500px]">
          {/* Mountain illustration background */}
          <div className="absolute bottom-0 right-0 w-full lg:w-2/3 h-72 lg:h-full">
            <Image
              src="/images/success-stories.png"
              alt="Success mountain illustration"
              fill
              className="object-contain object-right-bottom"
            />
          </div>

          {/* Play button overlay */}
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 hidden lg:flex z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
              Success stories
            </h2>

            <div className="max-w-md lg:max-w-lg">
              {/* Large opening quote */}
              <span className="text-6xl lg:text-7xl text-white font-serif leading-none">
                &ldquo;
              </span>
              
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Feedback
                </h3>
                <p className="text-white/90 leading-relaxed text-lg lg:text-xl italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                
                {/* Closing quote */}
                <span className="text-6xl lg:text-7xl text-white font-serif leading-none float-right -mt-4">
                  &rdquo;
                </span>
              </div>
              
              <div className="mt-8 clear-both">
                <p className="font-semibold text-[#7A1E1E]">Name</p>
                <p className="text-sm text-white/70">Company</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#2a2a3e]">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Let&apos;s work together!
            </h2>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2a2a3e] bg-transparent"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
