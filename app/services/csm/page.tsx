import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CSMPage() {
  const keyComponents = [
    {
      title: "Case Management",
      description:
        "Efficiently capture, route, and manage customer issues or inquiries. Cases are assigned to agents or teams, with tools to assess, engage, resolve, and follow up all in a structured way.",
    },
    {
      title: "Omni-Channel Support",
      description:
        "Enable your customers to reach you via whatever channel they prefer (chat, email, phone, web, social media). Ensure consistency and seamless communication across all channels, with each interaction tied back to the same customer profile and history.",
    },
    {
      title: "Customer Satisfaction Surveys",
      description:
        "Collect feedback via surveys at key moments (e.g. post-service, walk-up interactions) to track sentiment, identify areas for improvement, and make customer experience measurable and visible.",
    },
    {
      title: "Customer Self-Service Portal",
      description:
        "Provide customers with resources to help themselves - FAQs, knowledge base, step-by-step guides, and the ability to open support tickets without having to contact an agent every time. This not only improves satisfaction but also reduces workload for your support teams.",
    },
    {
      title: "Customer Data & Profile Management",
      description:
        "Maintain a unified, up-to-date view of customer information - contacts, accounts, product/service history, contracts, entitlements, etc. This helps agents respond faster and provide contextually relevant support.",
    },
  ]

  const benefits = [
    {
      title: "Greater Transparency & Accountability",
      description:
        "Real-time tracking of cases and clear communication ensure both your customers and your internal teams are kept in the loop, no dropped cases, no surprises.",
    },
    {
      title: "Build Stronger Customer Loyalty",
      description:
        "Every interaction is an opportunity. With streamlined data access, personal touches, and consistent follow-up, you can convert service into long-term loyalty.",
    },
    {
      title: "Boost Productivity & Employee Satisfaction",
      description:
        "Free your team from mundane tasks. Automate routing, dashboards, workflows so agents can focus on high-value human engagement.",
    },
    {
      title: "Faster Resolution of Issues",
      description:
        "Intelligent case assignment, grouping of similar issues, and streamlined workflow help resolve customer problems quicker.",
    },
    {
      title: "Improve Internal Operational Efficiency",
      description:
        "Optimization of work-flows, proper routing of responsibilities, fewer redundancies, this leads to smoother operations, less friction, and better outcomes.",
    },
  ]

  return (
    <>
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Customer Service Management (CSM)
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At BitString, we help you design and deploy a Customer Service Management system that's all about
                  speed, visibility, and customer delight. CSM is your unified platform for managing all customer
                  contacts, tracking interactions across channels, and ensuring your team always has the right data so
                  every touchpoint adds value.
                </p>
              </div>
              {/* Right Illustration */}
              <div className="flex justify-center">
                <Image
                  src="/customer-service-management-illustration-with-peop.jpg"
                  alt="Customer Service Management illustration"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="w-full bg-brand-dark py-16 md:py-24 relative overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-background"
            style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header with Arrow Banner */}
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">
                Key Components of CSM
              </h2>
              <div
                className="flex-1 h-16 bg-brand-dark relative"
                style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)" }}
              ></div>
            </div>

            {/* Components Grid - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {keyComponents.map((component, index) => (
                <div key={index} className="bg-brand p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary-foreground mb-4">{component.title}</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Title */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand">
                  Key Benefits of
                  <br />
                  CSM with BitString
                </h2>
              </div>

              {/* Right Benefits Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand rounded-full opacity-10 -mr-48 -mb-48"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Partner with BitString</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Let's work together to build a Customer Service Management ecosystem where each customer feels heard,
              supported and valued without increasing complexity. From strategy through implementation, BitString
              ensures that your CSM system isn't just reactive, but proactively amplifies customer experience.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8">Let's design your CSM plan together.</p>

            <Link href="/contact">
              <Button className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-base">Connect with us!</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
