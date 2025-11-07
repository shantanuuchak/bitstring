import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "Talent provisioning",
      description:
        "We understand that efficient team power is a crucial element for the success of any project. Our talent provisioning services connect you with highly skilled IT professionals with the precise skills and certifications your projects demand.",
      bgColor: "bg-service-talent",
    },
    {
      title: "ServiceNow consulting",
      description:
        "Enterprises are increasingly adopting ServiceNow to streamline their organizations' service processes, enhance productivity, and drive digital transformation. We ensure your ServiceNow ecosystem operates efficiently and delivers maximum business value.",
      bgColor: "bg-service-servicenow",
    },
    {
      title: "Technology consulting & services",
      description:
        "We collaborate closely with our clients to understand critical challenges and develop tailored solutions. Our technology consulting services help you navigate complex digital landscapes and achieve your business objectives.",
      bgColor: "bg-service-tech",
    },
  ]

  return (
    <section id="services" className="w-full bg-brand-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our services</h2>

        <div className="space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} flex flex-col md:flex-row gap-8 md:gap-12 items-start p-8 md:p-12`}
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-white text-sm md:text-base leading-relaxed mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-background text-foreground hover:bg-secondary">Read more</Button>
        </div>
      </div>
    </section>
  )
}
