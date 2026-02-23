import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { SectionHeader } from "@/components/services/section-header"
import { FeatureGrid } from "@/components/services/feature-grid"
import { PartnerCTA } from "@/components/services/partner-cta"

export default function GRCPage() {
  const keyAdvantages = [
    {
      title: "Automated Third-Party Risk Management",
      description:
        "Implement structured vendor risk assessments and categorization processes, enhancing visibility and transparency, leading to time savings and reduced vendor risks, thereby improving compliance and security.",
    },
    {
      title: "Enhanced Internal Audit Efficiency",
      description:
        "Utilize risk data and issue management to streamline the scoping, planning, and reporting of audit projects, optimizing resources for internal audit and compliance functions.",
    },
    {
      title: "Real-Time Insights",
      description:
        "Implement continuous monitoring of business and IT service performance, identify vendor requirements for automated controls testing, and establish thresholds for extended enterprise oversight.",
    },
    {
      title: "Strategic Planning and Decision-Making",
      description:
        "Conduct in-depth business impact analyses, manage tasks efficiently, and align with the Configuration Management Database (CMDB) on a unified platform, providing cross-functional visibility to identify, prioritize, and address risks effectively.",
    },
  ]

  const whyChoose = [
    {
      title: "Integrated Approach",
      description:
        "Our GRC framework breaks down silos, providing a cohesive view of governance, risk, and compliance across your organization.",
    },
    {
      title: "Proactive Risk Management",
      description:
        "Anticipate potential risks and implement mitigation strategies before they impact your business operations.",
    },
    {
      title: "Enhanced Compliance",
      description:
        "Stay ahead of regulatory changes and ensure continuous compliance with evolving standards.",
    },
    {
      title: "Informed Decision-Making",
      description:
        "Utilize comprehensive data and analytics to make informed decisions that align with your organization's objectives.",
    },
  ]

  const coreFeatures = [
    {
      title: "Risk Management",
      description:
        "Identify, evaluate, and respond to potential events by analyzing data collected from across your entire business network to gauge their probability and potential impact on your operations. Promptly address significant shifts in your risk profile.",
    },
    {
      title: "Compliance Management",
      description:
        "Ensure adherence to internal policies, external regulations, and industry standards. Automate compliance processes to reduce manual efforts and mitigate the risk of non-compliance.",
    },
    {
      title: "Audit Management",
      description:
        "Plan, execute, and monitor audits efficiently. Leverage data analytics to identify areas of improvement and ensure that audit findings are addressed promptly.",
    },
  ]

  const illustration = (
    <div className="relative w-64 h-64">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Clipboard */}
        <rect
          x="50"
          y="40"
          width="100"
          height="130"
          rx="5"
          fill="#7A1E1E"
        />
        <rect
          x="60"
          y="55"
          width="80"
          height="105"
          rx="3"
          fill="white"
        />
        {/* Clipboard clip */}
        <rect
          x="80"
          y="35"
          width="40"
          height="15"
          rx="3"
          fill="#5a1616"
        />
        {/* Checkboxes */}
        <rect
          x="70"
          y="70"
          width="15"
          height="15"
          rx="2"
          fill="none"
          stroke="#7A1E1E"
          strokeWidth="2"
        />
        <path d="M73 78 L77 82 L83 72" stroke="#7A1E1E" strokeWidth="2" fill="none" />
        <rect x="90" y="73" width="40" height="8" rx="2" fill="#e0e0e0" />

        <rect
          x="70"
          y="95"
          width="15"
          height="15"
          rx="2"
          fill="none"
          stroke="#7A1E1E"
          strokeWidth="2"
        />
        <path d="M73 103 L77 107 L83 97" stroke="#7A1E1E" strokeWidth="2" fill="none" />
        <rect x="90" y="98" width="40" height="8" rx="2" fill="#e0e0e0" />

        <rect
          x="70"
          y="120"
          width="15"
          height="15"
          rx="2"
          fill="none"
          stroke="#7A1E1E"
          strokeWidth="2"
        />
        <path d="M73 128 L77 132 L83 122" stroke="#7A1E1E" strokeWidth="2" fill="none" />
        <rect x="90" y="123" width="40" height="8" rx="2" fill="#e0e0e0" />

        {/* Person */}
        <circle cx="165" cy="120" r="15" fill="#009497" />
        <path
          d="M150 150 Q165 135 180 150 L180 180 L150 180 Z"
          fill="#009497"
        />
        {/* Decorative dots */}
        <circle cx="40" cy="60" r="3" fill="#7A1E1E" opacity="0.3" />
        <circle cx="170" cy="50" r="2" fill="#7A1E1E" opacity="0.3" />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ServiceHero
          title="Governance, Risk, and Compliance (GRC)"
          description="At BitString, we recognize that modern businesses face increasing challenges in managing risks and ensuring compliance. Traditional, siloed approaches often fall short in adapting to the dynamic landscape of today's business environment. Our GRC framework offers a comprehensive solution by integrating Information Technology, corporate operations, and security into a unified platform, enhancing transparency and accountability across your organization."
          illustration={illustration}
        />

        {/* Key Advantages Section */}
        <section>
          <SectionHeader title="Key Advantages of GRC Framework" />
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <FeatureGrid
              features={keyAdvantages}
              columns={4}
              variant="light"
              cardStyle="plain"
            />
          </div>
        </section>

        {/* Why Choose & Core Features Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Why Choose BitString for GRC */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                  Why choose
                  <br />
                  BitString for GRC?
                </h2>
                <div className="space-y-6">
                  {whyChoose.map((item, index) => (
                    <div key={index}>
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

              {/* Core Features */}
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#7A1E1E] mb-8">
                  Core Features
                </h2>
                <div className="space-y-6">
                  {coreFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-background p-5 rounded-lg border-l-4 border-[#7A1E1E]"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PartnerCTA
          description="Partner with BitString to build a GRC strategy that aligns with your business goals and ensures sustainable growth."
          subtext="Ready to Strengthen Your Governance, Risk, and Compliance Framework?"
        />
      </main>

      <Footer />
    </div>
  )
}
