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
                            <h2>Experts in Providing Investment Consulting Services</h2>
                            </div>
                            <div className="text-box">
                            <h3>Service Since 2015</h3>
                            <p>
                                Equal blame belongs to those who fail in their duty through
                                weakness of will, which is the all same as saying through
                                shrinking from toil and pain these cases are perfectly.
                            </p>
                            <div className="btn-box">
                                <Link href="/about" className="theme-btn btn-two">
                                Our History
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
                            Blinded by desire, that they cannot foresee the pain and trouble
                            that are bounds to ensure and blame belongs to those who fail.
                            </p>
                            <div className="single-item">
                            <div className="icon-box">
                                <i className="flaticon-downloads" />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                It is a long established fact that a reader will distracted by
                                the content of a page when looking.
                            </p>
                            </div>
                            <div className="single-item">
                            <div className="icon-box">
                                <i className="flaticon-downloads" />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                There are many variations passages of lorem ipsum available, but
                                the ma- jority have suffered.
                            </p>
                            <ul className="list-item clearfix">
                                <li>Tend to repeat predefined</li>
                                <li>first true generator the Internet</li>
                                <li>Combined with a handful</li>
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
                        <span className="sub-title">Why Coose Us</span>
                        <h2>Reason for Choosee Counsolve</h2>
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
                                Ever undertakes labor physical exercise except obtain some
                                advantage from it? but who has any rights to find fault with man
                                who pleasure that has no annoying consequences.
                            </p>
                            <p>Physical exercise except to obtain some advantage,</p>
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
                                                    <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>Denounce with righteous indignation.</li>
                                                        <li>Belongs to those who fail.</li>
                                                    </ul>
                                                    <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                                <div className="inner-box">
                                                    <h3>Banking & Financial</h3>
                                                    <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>Denounce with righteous indignation.</li>
                                                        <li>Belongs to those who fail.</li>
                                                    </ul>
                                                    <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-3' ? 'active-tab' : ''}`} id="tab-3">
                                                <div className="inner-box">
                                                    <h3>Commercial Real Estate</h3>
                                                    <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>Denounce with righteous indignation.</li>
                                                        <li>Belongs to those who fail.</li>
                                                    </ul>
                                                    <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                                </div>
                                            </div>
                                            <div className={`tab ${activeTab === 'tab-4' ? 'active-tab' : ''}`} id="tab-4">
                                                <div className="inner-box">
                                                    <h3>Manufacturing</h3>
                                                    <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                                    <ul className="list-item clearfix">
                                                        <li>Denounce with righteous indignation.</li>
                                                        <li>Belongs to those who fail.</li>
                                                    </ul>
                                                    <Link href="/" className="theme-btn btn-two">Explore More</Link>
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
                            Call: <Link href="tel:41888765432">(+41) 888.76.5432</Link>
                        </h4>
                        </div>
                    </div>
                    <div className="image-box-two">
                        <figure className="image">
                        <img src="assets/images/resource/cta-2.jpg" alt="" />
                        </figure>
                        <div className="text-box">
                        <h6>
                            Do you Have <br />
                            any idea to Join <br />
                            With Us
                        </h6>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 content-column">
                            <div className="content-box">
                            <h2>
                                Believe us when <br />
                                it comes to investment
                            </h2>
                            <div className="inner-box">
                                <figure className="image-box">
                                <img src="assets/images/resource/cart-1.jpg" alt="" />
                                </figure>
                                <p>
                                The moment, so blinded by desire, that they cannot foresee and
                                trouble that are bound to ensue.
                                </p>
                                <Link href="/index-3" className="theme-btn btn-two">
                                Send Request
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


