
import Link from "next/link"


export default function Working() {
    return (
        <>
        {/* working-section */}
        <section className="working-section centred">
            <div className="auto-container">
            <div className="sec-title">
                <span className="sub-title">How We Work</span>
                <h2>Our Engagement Process</h2>
            </div>
            <div className="inner-content">
                <div
                className="shape"
                style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}
                />
                <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="/assets/images/resource/working-1.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-meeting" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Discovery & Consultation</h3>
                        <p>
                            We start by deeply understanding your business challenges, goals, and IT landscape.
                        </p>
                        <h2>
                            01 <span>st step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="/assets/images/resource/working-2.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-paper" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Solution Design</h3>
                        <p>
                            We craft a tailored ServiceNow or technology solution aligned to your specific requirements.
                        </p>
                        <h2>
                            02 <span>nd step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="/assets/images/resource/working-3.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-analysis" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Implement & Deliver</h3>
                        <p>
                            Our certified experts implement, test, and hand over a solution that drives measurable results.
                        </p>
                        <h2>
                            03 <span>rd step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="more-text centred">
                <h5>
                Ready to Transform Your IT Operations?{" "}
                <Link href="/contact">
                    <i className="flaticon-right-chevron" />
                    Schedule a Consultation
                </Link>
                </h5>
            </div>
            </div>
        </section>
        {/* working-section end */}
        </>

    )
}
