
import Link from "next/link";

export default function About() {
    return (
        <>
            {/* about-section */}
            <section className="about-section sec-pad">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image-box">
                        <div className="image-shape">
                        <div
                            className="shape-1"
                            style={{
                            backgroundImage: "url(/assets/images/shape/shape-1.png)"
                            }}
                        />
                        <div
                            className="shape-2"
                            style={{
                            backgroundImage: "url(/assets/images/shape/shape-2.png)"
                            }}
                        />
                        <div
                            className="shape-3"
                            style={{
                            backgroundImage: "url(/assets/images/shape/shape-3.png)"
                            }}
                        />
                        </div>
                        <figure className="image">
                        <img src="/assets/images/resource/about-1.jpg" alt="" />
                        </figure>
                        <div className="experience-box">
                        <h2>10+</h2>
                        <h6>Years&nbsp;Experience</h6>
                        </div>
                        <div className="dot-box">
                        <span className="dot dot-1" />
                        <span className="dot dot-2" />
                        <span className="dot dot-3" />
                        <span className="dot dot-4" />
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <div className="sec-title">
                        <span className="sub-title">About Us</span>
                        <h2>Experts in IT Consulting & ServiceNow Solutions</h2>
                        </div>
                        <ul className="list-item clearfix">
                        <li>ISO 27001 Certified</li>
                        <li>ISO 9001 Certified</li>
                        <li>100+ Years of Combined Team Experience</li>
                        <li>ServiceNow Implementation & Customization</li>
                        </ul>
                        <div className="text-box">
                        <p>
                            BitString IT Services Pvt Ltd is a technology company providing Information Technology and Consulting Services. We leverage deep functional expertise and over 100 years of combined experience to help clients transform their businesses — Connect :: Collaborate :: Deliver Values.
                        </p>
                        </div>
                        <div className="btn-box">
                        <Link href="/about" className="theme-btn btn-two">
                            More About Us
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* about-section end */}

        </>
    )
}
