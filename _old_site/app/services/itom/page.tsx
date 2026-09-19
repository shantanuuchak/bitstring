import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { SectionHeader } from "@/components/services/section-header"
import { FeatureGrid } from "@/components/services/feature-grid"
import { BenefitsSection } from "@/components/services/benefits-section"
import { PartnerCTA } from "@/components/services/partner-cta"

export default function ITOMPage() {
  const keyFeatures = [
    {
      title: "Infrastructure & Application Visibility",
      description:
        "Gain a unified, end-to-end view of your environment - servers, routers, virtual machines, storage, databases, cloud resources, containers, and more. Automatically track configuration items (CIs) and keep your CMDB (Configuration Management Database) up to date in near real-time.",
    },
    {
      title: "Cloud Resource Management",
      description:
        "Efficiently provision, monitor, and optimize your cloud resources. Reduce wastage, control costs, and ensure your cloud environment scales smoothly with your needs.",
    },
    {
      title: "Health Monitoring & Event Analytics",
      description:
        "Use AI/ML-driven analytics to sift through large volumes of operational events, distinguish between noise and real issues, and respond faster. Move beyond static rule-based alerts to dynamic, intelligent event handling.",
    },
    {
      title: "Orchestration Automation",
      description:
        "Automate manual processes in your information technology environment - anything from the reset of passwords and software deployment as well as the creation of new services. Create time saving, error reduction workflows, and ROI tracking workflows.",
    },
    {
      title: "Operational Intelligence",
      description:
        "Extract insights from infrastructure health data to detect anomalies or patterns that may precede failures. Prioritize issues intelligently and enable the IT team to intervene proactively before incidents escalate.",
    },
    {
      title: "Service Mapping",
      description:
        "Automatically map out all the components that make up your business services. See how applications, infrastructure, and network elements connect. Understand shared, redundant, or clustered components so you can see the full topology of your services.",
    },
  ]

  const whyITOMMatters = [
    {
      title: "Stronger Resilience & Uptime",
      description:
        "Minimize downtime and ensure your critical services remain available and reliable.",
    },
    {
      title: "Compliance & Trust",
      description:
        "Ensure norms, make the best practices and demonstrate compliance with regulatory or industry standards - building the trust with clients and stakeholders.",
    },
    {
      title: "Faster Response, Less Disruption",
      description:
        "With proactive monitoring and automated workflows, you catch and resolve issues earlier, reducing user or business impact.",
    },
    {
      title: "Agility & Scalability",
      description:
        "As your infrastructure grows or evolves (cloud migration, microservices, etc.), ITOM scales with you helping you adapt without chaos.",
    },
    {
      title: "Operational Efficiency & Focus",
      description:
        "Free up your team from manual routine tasks so they can focus on strategic initiatives. Boost productivity and reduce waste.",
    },
  ]

  const illustration = (
    <div className="relative w-64 h-64">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Clock/monitoring illustration */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#7A1E1E"
          strokeWidth="3"
        />
        <circle cx="100" cy="100" r="50" fill="#f5f5f5" />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="65"
          stroke="#7A1E1E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="100"
          x2="125"
          y2="100"
          stroke="#7A1E1E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="5" fill="#7A1E1E" />
        {/* Decorative elements */}
        <circle cx="160" cy="50" r="3" fill="#7A1E1E" opacity="0.5" />
        <path
          d="M155 45 L165 55 M155 55 L165 45"
          stroke="#7A1E1E"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Person silhouette */}
        <circle cx="45" cy="140" r="12" fill="#009497" />
        <path
          d="M35 160 Q45 150 55 160 L55 180 L35 180 Z"
          fill="#009497"
        />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ServiceHero
          title="IT Operations Management (ITOM)"
          description="At BitString, we view ITOM as the backbone of reliable, resilient IT operations. It's the set of tools and practices that help you:"
          bulletPoints={[
            "Monitor the health and performance of your infrastructure in real time",
            "Anticipate and resolve issues before they impact users",
            "Automate routine tasks so your teams can focus on strategic work",
          ]}
          illustration={illustration}
        />

        {/* Key Features Section */}
        <section>
          <SectionHeader title="Key Features of Our ITOM Services" />
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <FeatureGrid
              features={keyFeatures}
              columns={3}
              variant="light"
              cardStyle="plain"
            />
          </div>
        </section>

        <BenefitsSection
          title="Why ITOM Matters for Your Business"
          benefits={whyITOMMatters}
          variant="maroon"
          backgroundColor="maroon"
        />

        <PartnerCTA
          title="Partner with BitString"
          description="Let us help you build an ITOM framework that's proactive, intelligent, and aligned with your business goals. Whether you're just starting to monitor infrastructure or planning full automation & intelligent operations, BitString has the experience and tools to take you there."
          subtext="Ready to make your IT operations more visible, automated, and resilient?"
        />
      </main>

      <Footer />
    </div>
  )
}
