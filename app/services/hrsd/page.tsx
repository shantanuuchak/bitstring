import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function HRSDPage() {
  const whatHRSDDoes = [
    {
      description:
        "Simplifies everyday HR tasks, automates routine workflows, reducing bottlenecks.",
    },
    {
      description:
        "Improves employee engagement, fostering a culture of positivity and productivity.",
    },
    {
      description:
        "Provides actionable analytics to monitor efficiency, compliance, and risks.",
    },
    {
      description:
        "Helps HR transition from a support function to a proactive strategic partner.",
    },
  ]

  const keyBenefits = [
    {
      title: "Streamlined Interactions and Consistent Service",
      description:
        "Organize HR services with a strong data model, standardize responses via case and knowledge management, and ensure omni-channel support so employees get help when and how they need it.",
    },
    {
      title: "Improved HR Efficiency",
      description:
        "One centralized Employee Service Center for all HR requests, documents, catalogs, and charts. Secure document handling. Automation of life-cycle events like onboarding, leaves, etc., saving time and reducing errors.",
    },
    {
      title: "Exceptional Employee Experience",
      description:
        "Replace manual, siloed work with digital workflows that span departments. Use no-code tools, virtual agents, and self-service to deliver continuous support.",
    },
    {
      title: "Competitive Edge Through Employee-Centric Service",
      description:
        "Deliver modern, mobile-first HR tools that empower employees to self-serve, reducing HR costs and increasing satisfaction.",
    },
    {
      title: "Leadership Through Employee Journeys",
      description:
        "Align business goals with employee development. Facilitate onboarding, development, transitions, and growth via designed employee journey paths.",
    },
  ]

  const whyBitString = [
    "Proactive and data-driven",
    "Transparent and consistent",
    "Agile and easily adaptable to change",
  ]

  const coreFeatures = [
    "Efficiently handle employee queries, issues, or requests, with a rich knowledge base to support self-service and reduce duplicate work.",
    "A unified portal for employees to see and manage their requests, explore knowledge, raise tickets, live chat with HR agents, and access relevant resources.",
    "Secure storage of sensitive documents, controlled access, and smooth handling of files like payroll, agreements, benefits documents, and more.",
    "Automate complex, cross-department tasks such as onboarding, leave of absence, transfers, retirement, exit procedures, etc. Reduce manual handoffs and improve timeliness.",
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
                  Human Resources Service Delivery (HRSD)
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we believe HR is more than administration,
                  it&apos;s the backbone of a thriving organization. Our HRSD
                  solution helps streamline processes, elevate employee
                  experience, and let your HR team focus on strategy over manual
                  work.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <rect
                      x="30"
                      y="50"
                      width="60"
                      height="80"
                      rx="5"
                      fill="#7A1E1E"
                      opacity="0.2"
                    />
                    <rect
                      x="110"
                      y="50"
                      width="60"
                      height="80"
                      rx="5"
                      fill="#7A1E1E"
                      opacity="0.2"
                    />
                    <circle cx="60" cy="80" r="15" fill="#7A1E1E" />
                    <circle cx="140" cy="80" r="15" fill="#7A1E1E" />
                    <path
                      d="M60 100 L60 120 M50 110 L70 110"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <path
                      d="M140 100 L140 120 M130 110 L150 110"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <path
                      d="M90 90 L110 90"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                      strokeDasharray="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What HRSD Does Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-12">
              What HRSD does for you?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatHRSDDoes.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
                Key Benefits of HR Service Delivery
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
                {keyBenefits.map((benefit, index) => (
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

        {/* Why BitString Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-6">
                  Why BitString for HRSD?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We partner with you to build HRSD frameworks that align with
                  your culture and growth. Our approach ensures your HR function
                  becomes:
                </p>
                <ul className="space-y-3">
                  {whyBitString.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-[#7A1E1E] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-[#7A1E1E]/10 rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-32 h-32"
                    aria-hidden="true"
                  >
                    <rect
                      x="10"
                      y="20"
                      width="80"
                      height="60"
                      fill="none"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <line
                      x1="10"
                      y1="35"
                      x2="90"
                      y2="35"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <rect x="20" y="45" width="20" height="25" fill="#7A1E1E" opacity="0.3" />
                    <rect x="50" y="55" width="20" height="15" fill="#7A1E1E" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-12 lg:py-20 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Core features
                </h2>
                <p className="text-white/80 mb-6">
                  Ready to transform HR from a reactive support unit into a
                  strategic driver of business performance?
                </p>
                <p className="text-white font-semibold mb-8">
                  Let&apos;s design your HRSD solution together!
                </p>
                <Button
                  asChild
                  className="bg-[#7A1E1E] hover:bg-[#5a1616] text-white"
                >
                  <Link href="/contact">Connect with us!</Link>
                </Button>
              </div>

              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coreFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/10 p-6 rounded-lg border-l-4 border-[#7A1E1E]"
                    >
                      <p className="text-sm text-white/80 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
