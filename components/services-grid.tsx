"use client"

interface Service {
  id: number
  title: string
  description: string
  featured?: boolean
}

const services: Service[] = [
  {
    id: 1,
    title: "IT Service Management (ITSM)",
    description: "Transforming IT into a Strategic Asset",
    featured: true,
  },
  {
    id: 2,
    title: "IT Operations Management (ITOM)",
    description: "Drive Operational Excellence Through Visibility, Automation & Proactive Control",
  },
  {
    id: 3,
    title: "Human Resources Service Delivery (HRSD)",
    description: "Empowering employees. Enabling HR to be strategic.",
  },
  {
    id: 4,
    title: "Governance, Risk, and Compliance (GRC)",
    description: "Empowering informed decisions, ensuring sustainable growth",
  },
  {
    id: 5,
    title: "Software Project Management (SPM)",
    description: "Master your projects from vision to reality",
  },
  {
    id: 6,
    title: "Customer Service Management (CSM)",
    description: "Delivering exceptional customer experiences",
  },
  {
    id: 7,
    title: "IT Asset Management (ITAM)",
    description: "Turning Assets into Strategic Advantages",
  },
  {
    id: 8,
    title: "Cybersecurity",
    description: "Protecting your digital assets and infrastructure",
  },
  {
    id: 9,
    title: "DevOps & Cloud Services",
    description: "Empowering agility, scalability, and continuous innovation",
  },
]

export default function ServicesGrid() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-lg p-6 transition-all hover:shadow-lg bg-white text-gray-900 border border-gray-200 hover:bg-red-900 hover:text-white hover:border-red-900`}
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p
                className={`text-sm leading-relaxed  group-hover:text-gray-100 text-gray-800`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
