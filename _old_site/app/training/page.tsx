import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: "ServiceNow Fundamentals",
      description:
        "Learn the basics of the ServiceNow platform, including navigation, administration, and core functionalities.",
      duration: "4 weeks",
      level: "Beginner",
    },
    {
      title: "ServiceNow Developer Training",
      description:
        "Dive deep into ServiceNow development with hands-on experience in scripting, workflows, and integrations.",
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      title: "ITSM Best Practices",
      description:
        "Master IT Service Management principles and learn how to implement ITIL frameworks effectively.",
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      title: "ServiceNow Administration",
      description:
        "Comprehensive training on ServiceNow system administration, security, and platform management.",
      duration: "6 weeks",
      level: "Advanced",
    },
    {
      title: "Cybersecurity Essentials",
      description:
        "Understand fundamental cybersecurity concepts, threat detection, and security best practices.",
      duration: "5 weeks",
      level: "Beginner",
    },
    {
      title: "Cloud Computing Foundations",
      description:
        "Learn cloud infrastructure basics, deployment models, and leading cloud platforms.",
      duration: "4 weeks",
      level: "Beginner",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Training Programs"
          subtitle="Enhance your skills with our comprehensive training programs."
        />

        {/* Training Programs Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Invest in Your Future
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At BitString, we believe in continuous learning and development.
                Our training programs are designed to help professionals stay
                ahead in the rapidly evolving IT landscape. Whether you&apos;re
                starting your career or looking to advance, we have programs
                tailored for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-secondary p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        program.level === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : program.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {program.level}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A1E1E] text-center mb-12">
              Why Train with BitString?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7A1E1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#7A1E1E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Expert Instructors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn from industry professionals with years of hands-on
                  experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#7A1E1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#7A1E1E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Hands-on Learning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Practical exercises and real-world projects to apply what you
                  learn.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#7A1E1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#7A1E1E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Certification
                </h3>
                <p className="text-sm text-muted-foreground">
                  Receive recognized certifications upon successful completion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#7A1E1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#7A1E1E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Career Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Job placement assistance and career guidance for graduates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[#7A1E1E]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today to learn more about our training programs and
              find the right course for your career goals.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#7A1E1E] bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
