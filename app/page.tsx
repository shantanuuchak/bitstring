import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Clients from "@/components/clients"
import SuccessStories from "@/components/success-stories"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Clients />
      <SuccessStories />
      <CTA />
      <Footer />
    </main>
  )
}
