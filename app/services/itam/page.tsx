import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, DollarSign, TrendingUp, FileCheck, Clock } from "lucide-react"

export default function ITAMPage() {
  const itamBenefits = [
    {
      icon: Settings,
      description:
        "Transform liabilities into assets extend product lifecycles, minimize underused or idle hardware.",
    },
    {
      icon: DollarSign,
      description:
        "Cut costs through better utilization, reduced maintenance, and avoiding unnecessary procurements.",
    },
    {
      icon: TrendingUp,
      description:
        "Boost efficiency and visibility across your IT estate. Know exactly what you own, where it is, how it's used.",
    },
    {
      icon: FileCheck,
      description:
        "Increase compliance with software licensing, vendor contracts, and regulatory requirements.",
    },
  ]

  const hamCapabilities = [
    "Track the entire lifecycle of physical devices: acquisition, usage, maintenance, renewal, and disposal.",
    "Maintain up-to-date inventories with asset tagging, warranties, and contracts.",
    "Prevent loss, theft, or misuse with better tracking and loss prevention methods.",
    "Improve utilization by ensuring devices are used optimally rather than lying idle.",
  ]

  const samCapabilities = [
    "Manage software licenses, entitlements, and contracts to avoid overspending or non-compliance.",
    "Identify unused software licenses and redundant applications, reclaiming value.",
    "Streamline procurement and vend or negotiations using accurate, data-backed usage information.",
    "Simplify audits and improve security by ensuring only approved software is in use, and access is controlled.",
  ]

  const benefits = [
    {
      title: "Greater financial control",
      description:
        "Cut unnecessary costs, prevent overspending on hardware/software.",
    },
    {
      title: "Reduced risk",
      description: "Better compliance, fewer surprises during audits.",
    },
    {
      title: "Strategic decision-making",
      description:
        "Use data to plan purchases, retire or redeploy assets, negotiate better vendor terms.",
    },
    {
      title: "Operational excellence",
      description:
        "Less manual tracking, fewer errors, smoother lifecycle transitions.",
    },
    {
      title: "Improved security & governance",
      description:
        "Enforce policies, reduce exposure from unlicensed software or rogue devices.",
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
                  IT Asset Management (ITAM)
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we help you maximize the value of your IT
                  assets. ITAM provides you with visibility, control, and
                  efficiency so you can reduce waste, ensure compliance, and get
                  more return from every investment.
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
                      r="70"
                      fill="none"
                      stroke="#7A1E1E"
                      strokeWidth="3"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="none"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                      strokeDasharray="10 5"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="50"
                      stroke="#7A1E1E"
                      strokeWidth="3"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="140"
                      y2="120"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <circle cx="100" cy="100" r="8" fill="#7A1E1E" />
                    <Clock className="w-full h-full text-[#7A1E1E]" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is ITAM Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-6">
                  What Is ITAM?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ITAM (IT Asset Management) is a structured approach to
                  managing your hardware and software assets throughout their
                  lifecycle. From procurement to retirement, ITAM gives you the
                  insight and governance you need to make smarter decisions,
                  optimize costs, and align assets with business objectives.
                </p>
              </div>

              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-6">
                  {itamBenefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-[#7A1E1E]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-[#7A1E1E]" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              Key capabilities
            </h2>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-lg font-semibold text-[#7A1E1E]">
                  Hardware Asset Management (HAM)
                </h3>
                <ul className="space-y-4">
                  {hamCapabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-[#7A1E1E] mt-1">&bull;</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-lg font-semibold text-[#7A1E1E]">
                  Software Asset Management (SAM)
                </h3>
                <ul className="space-y-4">
                  {samCapabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-[#7A1E1E] mt-1">&bull;</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">
              Benefits with BitString ITAM
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
              Partner with BitString
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-4">
              We&apos;ll help you build an ITAM framework that&apos;s scalable,
              transparent, and tailored to your organisation. Whether
              you&apos;re growing fast or simply looking to clean up your IT
              estate, BitString ensures your assets are liabilities no more but
              strategic levers for growth.
            </p>
            <p className="text-foreground font-semibold mb-8">
              Ready to unlock value in your IT assets? Let&apos;s talk ITAM.
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
