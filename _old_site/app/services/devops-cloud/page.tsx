import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DevOpsCloudPage() {
  const expertise = [
    {
      title: "Cloud Strategy & Migration",
      description:
        "Assess, plan, and migrate your workloads to AWS, Azure, or Google Cloud with minimal disruption.",
    },
    {
      title: "CI/CD Implementation",
      description:
        "Accelerate software delivery through automated build, test, and deployment pipelines",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Deploy and manage infrastructure using code for consistency, scalability, and version control.",
    },
    {
      title: "Cloud Optimization & Management",
      description:
        "Monitor, optimize, and secure your cloud resources for peak performance and cost efficiency.",
    },
    {
      title: "Containerization & Kubernetes",
      description:
        "Modernize applications using Docker and Kubernetes for enhanced scalability and portability.",
    },
    {
      title: "Monitoring & Incident Management",
      description:
        "Proactive monitoring to detect, resolve, and prevent performance bottlenecks and outages.",
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
                  DevOps & Cloud Services
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we bring together the power of DevOps practices
                  and Cloud technologies to help organizations innovate faster,
                  deliver with confidence, and scale seamlessly. Our DevOps &
                  Cloud Services are designed to streamline your development
                  lifecycle, enhance collaboration, and ensure your
                  infrastructure is as agile as your business goals.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src="/images/bitstring-figma.png"
                  alt="DevOps and Cloud Services illustration"
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
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
                Our Expertise
              </h2>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 py-12">
            <p className="text-muted-foreground mb-12 max-w-4xl leading-relaxed">
              We help you transform how your teams build, deploy, and manage
              applications by combining automation, continuous integration, and
              cloud-native solutions. Whether you&apos;re migrating to the cloud
              or optimizing your existing environment, our experts ensure a
              secure, efficient, and cost-effective journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-[#7A1E1E] text-lg">
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

        {/* Why Choose BitString Section */}
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
              Why choose BitString
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              We don&apos;t just set up tools we build a DevOps culture that
              empowers your teams to deliver continuously and reliably. Our
              cloud engineers and DevOps experts work closely with your
              organization to create a future-ready ecosystem that balances
              speed, security, and stability.
            </p>
            <p className="text-foreground font-semibold text-lg mb-8 max-w-2xl">
              Transform your development journey with automation, scalability,
              and innovation. Let&apos;s build the future together in the cloud.
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
