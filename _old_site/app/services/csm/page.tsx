import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CSMPage() {
  const keyComponents = [
    {
      title: "Case Management",
      description:
        "Efficiently capture, route, and manage customer issues or inquiries. Cases are assigned to teams, with tools to assess, engage, resolve and follow-up all in a structured way.",
    },
    {
      title: "Omni-Channel Support",
      description:
        "Enable your customers to reach you via whatever channel they prefer (email, phone, web, social media). Ensure seamless communication across all channels with each interaction tied back to the same customer profile and history.",
    },
    {
      title: "Customer Satisfaction Surveys",
      description:
        "Collect feedback via surveys at key moments (e.g. post-service, post-interaction). These surveys help identify areas for improvement, and make customer experience measurable and visible.",
    },
    {
      title: "Customer Self-Service Portal",
      description:
        "Provide customers with resources to help themselves - FAQs, knowledge base, step guides, and the ability to open support tickets without having to contact an agent every time. This not only improves satisfaction but also reduces workload for your support teams.",
    },
    {
      title: "Customer Data & Profile Management",
      description:
        "Maintain a unified, up-to-date view of customer information - contacts, accounts, product/service history, entitlements, etc. This helps agents respond faster and provide contextually relevant support.",
    },
  ]

  const benefits = [
    {
      title: "Build Stronger Customer Loyalty",
      description:
        "Every interaction is an opportunity. With streamlined service, proactive outreach, and consistent follow-up, you can convert service into long-term loyalty.",
    },
    {
      title: "Faster Resolution of Issues",
      description:
        "Intelligent case assignment, grouping of similar issues, and streamlined workflow help resolve customer problems quicker.",
    },
    {
      title: "Boost Productivity & Employee Satisfaction",
      description:
        "Free your team from mundane tasks. Automate routing, dashboards, workflows so agents can focus on high-value human engagement.",
    },
    {
      title: "Improve Internal Operational Efficiency",
      description:
        "Optimization of work-flows, proper routing of responsibilities, fewer redundancies. This leads to smoother operations, less friction, and better outcomes.",
    },
    {
      title: "Greater Transparency & Accountability",
      description:
        "Real-time tracking of cases and clear communication ensure both your customers and your internal teams are kept in the loop, no dropped cases, no surprises.",
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
                  Customer Service Management (CSM)
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we help you design and deploy a Customer Service
                  Management system that&apos;s all about speed, visibility, and
                  customer delight. CSM is your unified platform for managing all
                  customer contacts, tracking interactions across all channels,
                  and ensuring your team always has the right data so every
                  touchpoint adds value.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src="/images/bitstring-figma.png"
                  alt="Customer Service Management illustration"
                  className="w-full max-w-sm h-auto"
                />
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
                Key Components of CSM
              </h2>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {keyComponents.map((component, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-[#7A1E1E] text-base">
                    {component.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full bg-[#7A1E1E]">
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
                Key Benefits of CSM with BitString
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
                {benefits.slice(0, 5).map((benefit, index) => (
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

        {/* Partner with BitString Section */}
        <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-1/2 h-full"
            style={{
              background: "linear-gradient(135deg, #d9d9d9 0%, #d9d9d9 40%, transparent 70%)",
              opacity: 0.3,
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-2/5 h-4/5"
            style={{
              background: "#7A1E1E",
              clipPath: "polygon(100% 0, 100% 100%, 50% 80%)",
              opacity: 0.8,
            }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Partner with BitString
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              Let&apos;s work together to build a Customer Service Management
              ecosystem where each customer feels heard, supported and valued
              without increasing complexity. From strategy through implementation,
              BitString ensures that your CSM system isn&apos;t just reactive,
              but proactively amplifies customer experience.
            </p>
            <p className="text-foreground font-semibold text-lg mb-8 max-w-2xl">
              Let&apos;s design your CSM plan together.
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
