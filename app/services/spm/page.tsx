import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function SPMPage() {
  const spmBenefits = [
    "Translate strategy into actionable plans",
    "Prioritize initiatives based on business impact",
    "Allocate resources effectively",
    "Monitor progress in real time, with full transparency",
    "Track investment and outcomes",
  ]

  const keyFeatures = [
    {
      title: "Project & Portfolio Governance",
      description:
        "We combine governance and collaboration to manage projects across your portfolio. This brings consistency, control, and better visibility over all initiatives.",
    },
    {
      title: "Enterprise Agile Development & Testing",
      description:
        "Adaptive practices that allow rapid iteration, continuous feedback, and faster delivery without sacrificing quality.",
    },
    {
      title: "Application Portfolio Management",
      description:
        "A systematic view of your entire application ecosystem so you can rationalize, optimize, or retire applications as needed.",
    },
    {
      title: "IT Financial Management",
      description:
        "Gain insight into project costs, budgeting, and financial commitments so that all investments align with business strategy.",
    },
  ]

  const businessValue = [
    {
      title: "Faster, Better Resourcing Decisions",
      description:
        "Predict staffing needs more accurately and ensure your most important initiatives are always properly supported.",
    },
    {
      title: "Improved Transparency",
      description:
        "Stakeholders see what matters priorities, resource allocation, and status all clearly laid out. No more surprises.",
    },
    {
      title: "Better Communication Across Teams & Tools",
      description:
        "Standardize how updates are shared, tasks are tracked, and dependencies are managed even when different teams use different tools.",
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
                  Strategic Portfolio Management (SPM)
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we help you close the gap between ideation and
                  execution. Our Strategic Portfolio Management (SPM) services
                  are designed to reduce ambiguity and delays, so your projects
                  consistently deliver value, on time.
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
                      x="40"
                      y="40"
                      width="50"
                      height="70"
                      fill="#7A1E1E"
                      opacity="0.3"
                    />
                    <rect
                      x="100"
                      y="60"
                      width="50"
                      height="50"
                      fill="#7A1E1E"
                      opacity="0.5"
                    />
                    <circle cx="65" cy="130" r="20" fill="#7A1E1E" />
                    <circle cx="125" cy="140" r="15" fill="#7A1E1E" opacity="0.7" />
                    <path
                      d="M40 160 L160 160"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                    <path
                      d="M40 30 L40 160"
                      stroke="#7A1E1E"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is SPM Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-6">
              What is Strategic Portfolio Management (SPM)?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              SPM is a holistic framework of practices and tools that align your
              project portfolio with your business goals. It empowers you to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {spmBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 lg:py-20">
          <div className="relative bg-[#7A1E1E] py-8 lg:py-12">
            <div
              className="absolute bottom-0 left-0 w-1/4 h-full bg-[#5a1616]"
              style={{
                clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
              }}
              aria-hidden="true"
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Key Features & Capabilities
              </h2>
            </div>
          </div>

          <div className="bg-[#7A1E1E] py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How SPM Drives Business Value */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-12">
              How SPM Drives Business Value
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessValue.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary p-6 rounded-lg border-l-4 border-[#7A1E1E]"
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
            <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Partner with BitString
            </h2>
            <p className="text-white/80 max-w-2xl mb-4">
              If you&apos;re ready to take control of your strategic portfolio
              balancing agility, strategy, and execution, BitString is here to
              guide you. We implement SPM frameworks that are scalable,
              measurable, and tightly aligned with your goals.
            </p>
            <p className="text-white font-semibold mb-8">
              Let&apos;s work together to build project pipelines that deliver
              consistent, strategic value.
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
