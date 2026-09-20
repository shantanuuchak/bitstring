import Link from "next/link"
import TestimonialSlider05 from "@/components/slider/TestimonialSlider05"
export default function Services() {
    
    return (
        <>
  {/* service-section */}
  <section className="service-section">
    <div className="pattern-layer">
      <div
        className="pattern-1"
        style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}
      />
      <div
        className="pattern-2"
        style={{ backgroundImage: "url(/assets/images/shape/shape-6.png)" }}
      />
    </div>
    <div className="auto-container">
      <div className="sec-title centred">
        <span className="sub-title">Our Services</span>
        <h2>Phenomenal Consulting Solutions</h2>
      </div>
      <TestimonialSlider05 />
    </div>
  </section>
  {/* service-section end */}
</>

    )
}
