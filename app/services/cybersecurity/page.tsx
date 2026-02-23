import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield } from "lucide-react"

export default function CybersecurityPage() {
  const services = [
    {
      title: "Security Assessment & Auditing",
      description:
        "Identify vulnerabilities and risks through detailed audits, penetration testing, and compliance assessments.",
    },
    {
      title: "Cloud Security",
      description:
        "Ensure your cloud infrastructure remains safe with robust access controls, encryption, and threat management solutions.",
    },
    {
      title: "Network Security Management",
      description:
        "Protect your network from unauthorized access and attacks with advanced firewalls, intrusion detection, and monitoring tools.",
    },
    {
      title: "Endpoint Protection",
      description:
        "Secure all user devices like laptops, mobiles, and servers against malware, ransomware, and phishing attempts.",
    },
    {
      title: "Identity & Access Management (IAM)",
      description:
        "Control and monitor user access to sensitive data and applications, ensuring only authorized personnel can access critical systems.",
    },
    {
      title: "Data Protection & Encryption",
      description:
        "Safeguard your business data through encryption, backup strategies, and data loss prevention policies.",
    },
    {
      title: "Incident Response & Recovery",
      description:
        "Be ready to act fast with our incident response planning, threat mitigation, and recovery support after security breaches.",
    },
    {
      title: "Security Operations Center (SOC) Services",
      description:
        "Continuous 24/7 monitoring, threat detection, and response to keep your IT environment secure at all times.",
    },
    {
      title: "Compliance & Governance",
      description:
        "Meet regulatory standards such as ISO 27001, GDPR, HIPAA, and more with our compliance consulting and implementation support.",
    },
    {
      title: "Employee Security Awareness Training",
      description:
        "Empower your teams to recognize and prevent cyber threats with practical, easy-to-understand security training.",
    },
  ]

  const benefits = [
    {
      title: "Comprehensive Protection",
      description:
        "We safeguard your entire IT ecosystem from networks and endpoints to data and cloud environments ensuring no vulnerability goes unnoticed.",
    },
    {
      title: "Business Continuity & Resilience",
      description:
        "Our incident response and recovery strategies ensure minimal downtime, helping your business remain operational even during security disruptions.",
    },
    {
      title: "Proactive Threat Detection",
      description:
        "With 24/7 monitoring and advanced analytics, we detect, isolate, and neutralize threats before they can cause damage.",
    },
    {
      title: "Compliance & Risk Reduction",
      description:
        "BitString helps your organization meet global compliance standards (ISO, GDPR, HIPAA) while minimizing operational and legal risks.",
    },
    {
      title: "Cost-Effective Security Solutions",
      description:
        "Our scalable cybersecurity services are designed to fit your business size, budget, and security maturity level offering maximum value at every stage.",
    },
    {
      title: "Expert Guidance & Continuous Support",
      description:
        "Access to experienced cybersecurity professionals who provide ongoing monitoring, consultation, and incident management support.",
    },
    {
      title: "Data Privacy & Customer Trust",
      description:
        "By securing your digital assets, we help you build stronger trust with your customers and stakeholders, ensuring their data is always protected.",
    },
    {
      title: "Peace of Mind",
      description:
        "With BitString managing your cybersecurity, you can focus on innovation, growth, and business goals while we take care of your digital defense.",
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
                  Cybersecurity
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  At BitString, we help businesses stay secure in an
                  increasingly digital world. Our comprehensive cybersecurity
                  solutions are designed to protect your data, systems, and
                  people from evolving cyber threats.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#7A1E1E]/10 rounded-full" />
                  <Shield className="w-32 h-32 text-[#7A1E1E]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] mb-12">
              Our Key Cybersecurity Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    index % 4 === 0 || index % 4 === 3
                      ? "bg-[#7A1E1E] text-white"
                      : "bg-background border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      index % 4 === 0 || index % 4 === 3
                        ? "text-white"
                        : "text-[#7A1E1E]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      index % 4 === 0 || index % 4 === 3
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Benefits with BitString Cybersecurity
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Partnering with BitString IT Services means more than just
                  protection it means confidence, resilience, and long-term
                  security growth.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our cybersecurity solutions empower your business to operate
                  safely and efficiently in the digital age.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold text-[#7A1E1E]">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
              Partner with BitString
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-4">
              We&apos;ll help you build a cybersecurity framework that&apos;s
              robust, scalable, and tailored to your organization&apos;s needs.
              Whether you&apos;re strengthening defenses, achieving compliance,
              or responding to evolving threats, BitString ensures your digital
              assets remain protected and resilient driving business growth with
              confidence.
            </p>
            <p className="text-foreground font-semibold mb-8">
              Ready to secure your digital future? Let&apos;s talk
              Cybersecurity.
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
