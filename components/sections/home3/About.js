import Link from "next/link"
import TestimonialSlider1 from "@/components/slider/TestimonialSlider01"
export default function About() {
    return (
        <>
        {/* about-style-three */}
        <section className="about-style-three sec-pad">
            <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                    <div
                    className="image-shape"
                    style={{
                        backgroundImage: "url(/assets/images/shape/shape-24.png)"
                    }}
                    />
                    <figure className="image image-1">
                    <img src="/assets/images/resource/about-2.jpg" alt="" />
                    </figure>
                    <figure className="image image-2">
                    <img src="/assets/images/resource/about-3.jpg" alt="" />
                    </figure>
                    <div className="image-content">
                    <h6>Feb’2023</h6>
                    <div className="icon-box">
                        <i className="flaticon-diagonal-arrow" />
                    </div>
                    <h2>
                        6.5<span>Million</span>
                    </h2>
                    <p>Customers Benefits</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                    <div className="sec-title">
                    <span className="sub-title">About Us</span>
                    <h2>Experts in Providing Investment Consulting</h2>
                    </div>
                    <div className="text-box">
                    <p>
                        Perfectly simple &amp; easy to distinguish. In a free hour all,
                        when our power of choice is untrammelled &amp; when nothing
                        prevents our being able to what we like best, every pleasure is
                        to be welcomed &amp; every pain avoided but in certain have to
                        repudiated all annoyances accepted.
                    </p>
                    </div>
                    <TestimonialSlider1 />
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* about-style-three end */}
        </>

    )
}
