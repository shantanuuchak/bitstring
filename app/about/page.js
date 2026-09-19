'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"
import TestimonialSlider04 from "@/components/slider/TestimonialSlider04"
export default function Home() {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('tab-1');

    // Handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">

                {/* about-style-five */}
                <section className="about-style-five sec-pad">
                    <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                            <span className="sub-title">About Us</span>
                            <h2>Experts in IT Consulting & ServiceNow Solutions</h2>
                            </div>
                            <div className="text-box">
                            <h3>Serving Clients Since 2019</h3>
                            <p>
                                We are an ISO 27001 and ISO 9001 certified technology company providing Information Technology and Consulting Services. Our team applies deep functional expertise and over 100 years of combined experience.
                            </p>
                            <div className="btn-box">
                                <Link href="/contact" className="theme-btn btn-two">
                                Get In Touch
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                        <figure className="image-box">
                            <img src="assets/images/resource/about-7.jpg" alt="" />
                        </figure>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                        <div className="inner-box">
                            <p>
                            Our team brings decades of domain expertise across ServiceNow, cybersecurity, DevOps, and IT consulting. We help clients across industries connect, collaborate, and deliver real value.
                            </p>
                            <div className="single-item">
                            <div className="icon-box">
                                <i className="flaticon-downloads" />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                We streamline IT operations and align technology with business goals. We focus on practical outcomes that drive growth and efficiency for our clients.
                            </p>
                            </div>
                            <div className="single-item">
                            <div className="icon-box">
                                <i className="flaticon-downloads" />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted IT services partner. We deliver technology solutions that create lasting business value through innovation, expertise, and integrity.
                            </p>
                            <ul className="list-item clearfix">
                                <li>ISO 27001 & ISO 9001 certified quality</li>
                                <li>Nearly 7 years of focused IT consulting</li>
                                <li>Connect, Collaborate, Deliver Values</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* about-style-five end */}

                {/* chooseus-style-five */}
                <section className="chooseus-style-five sec-pad">
                    <div className="auto-container">
                    <div className="sec-title centred light">
                        <span className="sub-title">Why Choose Us</span>
                        <h2>Reasons to Partner with BitString IT Services</h2>
                    </div>
                        <TestimonialSlider03 />
                    </div>
                </section>
                {/* chooseus-style-five end */}

                {/* skills-section */}
                <section className="skills-section about-page">
                    <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image image-1">
                            <img src="assets/images/resource/skills-1.jpg" alt="" />
                            </figure>
                            <figure className="image image-2">
                            <img src="assets/images/resource/skills-2.jpg" alt="" />
                            </figure>
                            <div className="chart-box">
                            <h3>Total Product</h3>
                            <h5>January-March 2023</h5>
                            <h2>3,456</h2>
                            <h4>+25% per week</h4>
                            <div className="graph">
                                <img src="assets/images/icons/graph-2.png" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                            <span className="sub-title">Our Skills</span>
                            <h2>
                                We keep ourselves <br />
                                up to make your Dreams come true
                            </h2>
                            </div>
                            <div className="text-box">
                            <p>
                                Our team constantly updates their skills to master modern IT operations. We focus on integrating ITSM and ITOM to build reliable ServiceOps environments.
                            </p>
                            <p>This allows your organization to automate workflows effectively.</p>
                            </div>
                            <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                    <i className="flaticon-downloads" />
                                    </div>
                                    <h3>
                                    Personal <br />
                                    Consulting Service
                                    </h3>
                                    <h5>
                                    <Link href="/index-2">Explore Projects</Link>
                                    </h5>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                                <div className="progress-box">
                                    <p>
                                    Complete account of the syste all expound the teachings.
                                    </p>
                                    <h5>38.5%</h5>
                                    <div className="bar">
                                    <div
                                        className="bar-inner count-bar"
                                        data-percent="38.5%"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="icon-box">
                                    <i className="flaticon-downloads" />
                                    </div>
                                    <h3>
                                    Corporate <br />
                                    Consulting Service
                                    </h3>
                                    <h5>
                                    <Link href="/index-2">Explore Projects</Link>
                                    </h5>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                                <div className="progress-box">
                                    <p>
                                    Right to find fault with a man who chooses to enjoy
                                    produces.
                                    </p>
                                    <h5>61.5%</h5>
                                    <div className="bar">
                                    <div
                                        className="bar-inner count-bar"
                                        data-percent="61.5%"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* skills-section end */}

                {/* industries-section */}
                <section className="industries-section">
                    <div className="outer-container">
                        <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/industries-bg.jpg)" }}></div>
                        <div className="auto-container">
                            <div className="tabs-box">
                                <div className="row clearfix">
                                    {/* Content Column */}
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="sec-title light">
                                                <span className="sub-title">We Work For</span>
                                                <h2>Industries We Served</h2>
                                            </div>
                                            <div className="tab-btns tab-buttons clearfix">
                                                <div
                                                    className={`tab-btn ${activeTab === 'tab-1' ? 'active-btn' : ''}`}
                                                    onClick={() => handleTabChange('tab-1')}
                                                >
                                                    <span className="count-text">01</span>
                                                    <h3>Technology & Life Sciences</h3>
                                                    <Link href="/">
                                                        <i className="flaticon-diagonal-arrow"></i>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={`tab-btn ${activeTab === 'tab-2' ? 'active-btn' : ''}`}
                                                    onClick={() => handleTabChange('tab-2')}
                                                >
                                                    <span className="count-text">02</span>
                                                    <h3>Banking & Financial</h3>
                                                    <Link href="/">
                                                        <i className="flaticon-diagonal-arrow"></i>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={`tab-btn ${activeTab === 'tab-3' ? 'active-btn' : ''}`}
                                                    onClick={() => handleTabChange('tab-3')}
                                                >
                                                    <span className="count-text">03</span>
                                                    <h3>Commercial Real Estate</h3>
                                                    <Link href="/">
                                                        <i className="flaticon-diagonal-arrow"></i>
                                                    </Link>
                                                </div>
                                                <div
                                                    className={`tab-btn ${activeTab === 'tab-4' ? 'active-btn' : ''}`}
                                                    onClick={() => handleTabChange('tab-4')}
                                                >
                                                    <span className="count-text">04</span>
                                                    <h3>Manufacturing</h3>
                                                    <Link href="/">
                                                        <i className="flaticon-diagonal-arrow"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Inner Column */}
                                    <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                                        <div className="tabs-content">
                                            <div className={`tab ${activeTab === 'tab-1' ? 'active-tab' : ''}`} id="tab-1">
                                                <div className="inner-box">
                                                    <h3>Technology & Life Sciences</h3>
                                                    <p>BitString empowers tech and life sciences organizations to modernize their IT operations, accelerate innovation, and ensure compliance through tailored ServiceNow implementations.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>ServiceNow ITSM & ITOM implementation</li>
                                                        <li>Regulatory compliance automation (GRC)</li>
                                                    </ul>
                                                    <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                                <div className="inner-box">
                                                    <h3>Banking & Financial Services</h3>
                                                    <p>We help banking and financial institutions streamline operations, strengthen security posture, and automate governance through integrated IT platforms.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>GRC & compliance management on ServiceNow</li>
                                                        <li>Cybersecurity assessments & ISO 27001 alignment</li>
                                                    </ul>
                                                    <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-3' ? 'active-tab' : ''}`} id="tab-3">
                                                <div className="inner-box">
                                                    <h3>Commercial Real Estate</h3>
                                                    <p>BitString supports real estate enterprises in digitizing their IT workflows, managing field service operations, and delivering responsive tenant and employee experiences.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>ITSM for facilities & asset management</li>
                                                        <li>CSM for tenant service portals</li>
                                                    </ul>
                                                    <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-4' ? 'active-tab' : ''}`} id="tab-4">
                                                <div className="inner-box">
                                                    <h3>Manufacturing</h3>
                                                    <p>We help manufacturing companies reduce downtime and drive operational efficiency by connecting IT, OT, and asset management in a unified ServiceNow platform.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>ITOM for infrastructure visibility</li>
                                                        <li>ITAM for asset lifecycle management</li>
                                                    </ul>
                                                    <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* industries-section end */}

                {/* team-section */}
                <section className="team-section about-page sec-pad">
                    <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Leadership</span>
                        <h2>Team Behind Company</h2>
                    </div>
                    <TestimonialSlider04 />
                    <div className="more-text centred">
                        <h5>
                        <Link href="/team">
                            View All Members
                            <i className="flaticon-right-chevron" />
                        </Link>
                        </h5>
                    </div>
                    </div>
                </section>
                {/* team-section end */}

                {/* cta-section */}
                <section className="cta-section alternat-2">
                    <div className="outer-container">
                    <div
                        className="pattern-layer"
                        style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
                    />
                    <div className="image-box-one">
                        <figure className="image">
                        <img src="assets/images/resource/cta-1.jpg" alt="" />
                        </figure>
                        <div className="phone">
                        <h4>
                            Call: <Link href="tel:02069011184">(020) 69011184</Link>
                        </h4>
                        </div>
                    </div>
                    <div className="image-box-two">
                        <figure className="image">
                        <img src="assets/images/resource/cta-2.jpg" alt="" />
                        </figure>
                        <div className="text-box">
                        <h6>
                            Ready to <br />
                            Transform <br />
                            Your IT?
                        </h6>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 content-column">
                            <div className="content-box">
                            <h2>
                                Connect with BitString <br />
                                and Deliver Real Value
                            </h2>
                            <div className="inner-box">
                                <figure className="image-box">
                                <img src="assets/images/resource/cart-1.jpg" alt="" />
                                </figure>
                                <p>
                                Partner with us to solve your IT challenges. From ServiceNow implementation to talent provisioning and cybersecurity, we are here to help you succeed.
                                </p>
                                <Link href="/contact" className="theme-btn btn-two">
                                Get In Touch
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* cta-section end */}

            </Layout>
        </>
    )
}


