import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  highlighted?: boolean
  href?: string
}

function ServiceCard({
  title,
  description,
  highlighted = false,
  href,
}: ServiceCardProps) {
  const content = (
    <div
      className={`p-6 rounded-lg h-full ${
        highlighted
          ? "bg-[#7A1E1E] text-white"
          : "bg-background border border-border"
      }`}
    >
      <h4
        className={`font-semibold mb-2 ${
          highlighted ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          highlighted ? "text-white/80" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </Link>
    )
  }

  return content
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="BitString Services"
          subtitle="We offer a wide range of services."
        />

        <div className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 space-y-16">
            {/* ServiceNow Consulting */}
            <section id="servicenow">
              <h2 className="text-xl lg:text-2xl font-bold text-[#7A1E1E] mb-8">
                ServiceNow Consulting
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                  title="IT Service Management (ITSM)"
                  description="Transforming IT into a Strategic Asset"
                  highlighted
                  href="/services/itsm"
                />
                <ServiceCard
                  title="IT Operations Management (ITOM)"
                  description="Drive Operational Excellence Through Visibility, Automation & Proactive Control"
                  href="/services/itom"
                />
                <ServiceCard
                  title="Human Resources Service Delivery (HRSD)"
                  description="Empowering employees. Enabling HR to be strategic."
                  href="/services/hrsd"
                />
                <ServiceCard
                  title="Governance, Risk, and Compliance (GRC)"
                  description="Empowering informed decisions, ensuring sustainable growth"
                  href="/services/grc"
                />
              </div>
            </section>

            <hr />

            {/* Talent Provisioning */}
            <section id="talent-provisioning">
              <h2 className="text-xl lg:text-2xl font-bold text-[#7A1E1E] mb-8">
                Talent Provisioning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                  title="IT Service Management (ITSM)"
                  description="Transforming IT into a Strategic Asset"
                  highlighted
                />
                <ServiceCard
                  title="Cybersecurity"
                  description=""
                  href="/services/cybersecurity"
                />
                <ServiceCard
                  title="Governance, Risk, and Compliance (GRC)"
                  description="Empowering informed decisions, ensuring sustainable growth"
                />
                <ServiceCard
                  title="DevOps & Cloud Services"
                  description="Empowering agility, scalability, and continuous innovation"
                />
              </div>
            </section>

            <hr />

            {/* Technology Consulting & Services */}
            <section id="technology">
              <h2 className="text-xl lg:text-2xl font-bold text-[#7A1E1E] mb-8">
                Technology Consulting & Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                  title="IT Service Management (ITSM)"
                  description="Transforming IT into a Strategic Asset"
                  highlighted
                  href="/services/itsm"
                />
                <ServiceCard
                  title="Cybersecurity"
                  description=""
                  href="/services/cybersecurity"
                />
                <ServiceCard
                  title="Governance, Risk, and Compliance (GRC)"
                  description="Empowering informed decisions, ensuring sustainable growth"
                />
                <ServiceCard
                  title="DevOps & Cloud Services"
                  description="Empowering agility, scalability, and continuous innovation"
                />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
