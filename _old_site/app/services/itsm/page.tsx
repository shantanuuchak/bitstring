import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ITSMPage() {
  const keyComponents = [
    {
      title: "Service Desk Excellence",
      description:
        "Your service desk initially deals with users. An optimized service desk will also enable you to become more responsive and customer-focused and provide incidents, requests, and queries more efficiently.",
    },
    {
      title: "Incident Management",
      description:
        "Incidents are detected and corrected very fast to cause little business interruption. ITSM provides a logical method to the severity evaluation, prioritization of the problem, and restoration of the services within the minimum time.",
    },
    {
      title: "Change Management",
      description:
        "Change is inevitable. What matters is how it's managed. A Formal change management will ensure that change is planned, tested and implemented to minimize the risk of systems and operations.",
    },
    {
      title: "Problem Management",
      description:
        "This is about more than fixing immediate issues. Problem management digs into root causes to prevent recurrence, helping you build a more stable, resilient environment.",
    },
    {
      title: "Request Management",
      description:
        "Incidents are detected and corrected very fast to cause little business interruption. ITSM provides a logical method to the severity evaluation, prioritization of the problem, and restoration of the services within the minimum time.",
    },
    {
      title: "Knowledge Management",
      description:
        "Sharing knowledge empowers your users and support staff. With a strong knowledge base, self-service becomes viable, efficiency increases, and repetitive tasks decline.",
    },
  ]

  const whyAdopt = [
    {
      title: "Superior Service Quality",
      description:
        "Deliver consistent, reliable services that are as good or even better than user expectations.",
    },
    {
      title: "Maximized ROI on IT Investments",
      description:
        "The lessening of wastes, stretched budgets, the better you are with your instruments, human resources, and processes.",
    },
    {
      title: "Faster Response & Resolution",
      description:
        "A well-defined process allows for faster turnaround times for incidents and requests, reducing user frustration.",
    },
    {
      title: "Enhanced Transparency & User Satisfaction",
      description:
        "Clear SLAs, dashboards, and communication ensure that users and stakeholders know what to expect, improving trust and satisfaction.",
    },
    {
      title: "Optimized Operations & Productivity",
      description:
        "By clarifying responsibilities, automating workflows, and removing redundancies, operations become leaner and more productive.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  IT Service Management (ITSM)
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  ITSM is not about the work with tickets any more, it is about
                  aligning your IT activity to the business objectives. By
                  adopting strategic approach to ITSM, you will manage to
                  simplify operations thereby gaining more user satisfaction and
                  realizing the full potential of your technology investment.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <path
                      d="M60 100 L100 60 L140 100 L100 140 Z"
                      fill="#7A1E1E"
                      opacity="0.2"
                    />
                    <rect
                      x="70"
                      y="70"
                      width="60"
                      height="60"
                      fill="none"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="50"
                      x2="100"
                      y2="150"
                      stroke="#7A1E1E"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                    <line
                      x1="50"
                      y1="100"
                      x2="150"
                      y2="100"
                      stroke="#7A1E1E"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="py-12 lg:py-20">
          <div className="relative bg-[#7A1E1E] py-8 lg:py-12">
            <div
              className="absolute top-0 right-0 w-1/3 h-full bg-background"
              style={{
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              aria-hidden="true"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Key Components of ITSM
              </h2>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyComponents.map((component, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-[#7A1E1E]">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Adopt ITSM Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              Why Adopt ITSM<span className="text-[#7A1E1E]">?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyAdopt.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-24 bg-[#1a1a2e] overflow-hidden">
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
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Let&apos;s partner to elevate your IT
            </h2>
            <p className="text-white/80 max-w-2xl mb-8">
              At BitString, we help you build and adopt ITSM frameworks that
              aren&apos;t just processes, but foundations for growth. Whether
              you&apos;re at the start of your ITSM journey or looking to mature
              your practices, we guide you every step of the way.
            </p>
            <Button
              asChild
              className="bg-[#7A1E1E] hover:bg-[#5a1616] text-white"
            >
              <Link href="/contact">Connect with us!</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
