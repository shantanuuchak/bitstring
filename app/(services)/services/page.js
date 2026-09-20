'use client'
import TestimonialSlider1 from "@/components/slider/TestimonialSlider01"
import TestimonialSlider2 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services">
                <div>
                    {/* about-style-three */}
                    <section className="about-style-three sec-pad">
                        <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <div
                                className="image-shape"
                                style={{
                                    backgroundImage: "url(/assets/images/shape/shape-44.png)"
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

                    {/* service-page-section */}
                    <section className="service-page-section">
                        <div className="outer-container sec-pad">
                        <div
                            className="pattern-layer"
                            style={{ backgroundImage: "url(/assets/images/shape/shape-45.png)" }}
                        />
                        <div className="auto-container">
                            <div className="sec-title centred light">
                            <span className="sub-title">Our Services</span>
                            <h2>Phenomenal Consulting Solutions</h2>
                            </div>
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-column">
                                <div className="service-block-one block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                    <div className="icon">
                                        <i className="flaticon-analytics" />
                                    </div>
                                    <span className="count-text">01</span>
                                    </div>
                                    <h3>
                                    <Link href="/service-details">
                                        Private Client <br />
                                        Investment Management
                                    </Link>
                                    </h3>
                                    <div className="link">
                                    <Link href="/service-details">
                                        <span>Explore Service</span>
                                    </Link>
                                    </div>
                                    <p>
                                    That they cannot foresee the pain trouble that are bound ensue
                                    equal blame belongs to duty.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-column">
                                <div className="service-block-one block-two">
                                <div className="inner-box">
                                    <div className="icon-box">
                                    <div className="icon">
                                        <i className="flaticon-office-building" />
                                    </div>
                                    <span className="count-text">02</span>
                                    </div>
                                    <h3>
                                    <Link href="/service-details-7">
                                        Institutional <br />
                                        Investment Consulting
                                    </Link>
                                    </h3>
                                    <div className="link">
                                    <Link href="/service-details-7">
                                        <span>Explore Service</span>
                                    </Link>
                                    </div>
                                    <p>
                                    Power of choice is untrammelled when nothing prevent our being
                                    all to do what we like best.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-column">
                                <div className="service-block-one block-three">
                                <div className="inner-box">
                                    <div className="icon-box">
                                    <div className="icon">
                                        <i className="flaticon-retirement" />
                                    </div>
                                    <span className="count-text">03</span>
                                    </div>
                                    <h3>
                                    <Link href="/service-details-13">
                                        Retirement Plan <br />
                                        Consulting
                                    </Link>
                                    </h3>
                                    <div className="link">
                                    <Link href="/service-details-13">
                                        <span>Explore Service</span>
                                    </Link>
                                    </div>
                                    <p>
                                    Obligations of business it will occur that pleasures have to
                                    repudiaters and annoyances accepted.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* service-page-section end */}

                    {/* service-style-five */}
                    <section className="service-style-five sec-pad">
                        <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">Solutions</span>
                            <h2>Growing with Smart Ideas</h2>
                        </div>
                        <TestimonialSlider2 />
                        </div>
                    </section>
                    {/* service-style-five end */}

                    {/* clients-style-two */}
                    <section className="clients-style-two service-page">
                        <div className="auto-container">
                        <div className="sec-title centred light">
                            <span className="sub-title">Our Clients</span>
                            <h2>People Who Trusted Us</h2>
                        </div>
                        <div className="inner-container">
                            <ul className="clients-list clearfix">
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-11.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-12.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-13.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-14.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-15.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            </ul>
                            <ul className="clients-list clearfix">
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-16.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-17.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-18.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-19.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            <li>
                                <figure className="clients-logo">
                                <Link href="/index-2">
                                    <img src="/assets/images/clients/clients-20.png" alt="" />
                                </Link>
                                </figure>
                            </li>
                            </ul>
                        </div>
                        <div className="more-text centred">
                            <h5>
                            2.6k Companies &amp; Individuals Trusted Us.{" "}
                            <Link href="/index-2">
                                <i className="flaticon-right-chevron" />
                                View All Clients
                            </Link>
                            </h5>
                        </div>
                        </div>
                    </section>
                    {/* clients-style-two end */}

                    {/* pricing-style-two */}
                    <section className="pricing-style-two alternat-3  sec-pad">
                        <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                <span className="sub-title">Plan &amp; Pricing</span>
                                <h2>Effective &amp; Flexible Pricing</h2>
                                </div>
                                <div className="text-box">
                                <p>
                                    Welcomed and every pain avoided but in certain circumstances.
                                </p>
                                <ul className="list-item clearfix">
                                    <li>Investment Strategy</li>
                                    <li>Investment Manager Selection</li>
                                </ul>
                                <h3>Get help to Choose Right Plan</h3>
                                </div>
                                <div className="author-box">
                                <figure className="author-thumb">
                                    <img src="/assets/images/resource/author-1.png" alt="" />
                                </figure>
                                <h3>Roman Harry</h3>
                                <span className="designation">Advisor</span>
                                <h4>
                                    <i className="flaticon-whatsapp" />
                                    <Link href="tel:15557890123">+1 (555) 789.0123</Link>
                                </h4>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                            <div className="inner-content">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                    <div className="pricing-table">
                                        <div className="table-header">
                                        <div className="icon-box">
                                            <i className="flaticon-idea" />
                                        </div>
                                        <h3>
                                            Pro+ <br />
                                            Package
                                        </h3>
                                        <p>Pricing plan for small business</p>
                                        </div>
                                        <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li>Traditional Consulting</li>
                                            <li>Investment Management</li>
                                            <li>Data Aggregation</li>
                                            <li className="light">
                                            Tax Planning &amp; Preparation
                                            </li>
                                        </ul>
                                        <h2>
                                            49 <span className="symble">$</span>
                                            <span className="fraction">.99</span>
                                            <span className="text">Billed Monthly</span>
                                        </h2>
                                        <Link href="/index-2" className="theme-btn btn-two">
                                            Get Started Now
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one active-block">
                                    <div className="pricing-table">
                                        <span className="discount-text">
                                        10% Discount, Start Today
                                        </span>
                                        <div className="table-header">
                                        <div className="icon-box">
                                            <i className="flaticon-star" />
                                        </div>
                                        <h3>
                                            Basic <br />
                                            Package
                                        </h3>
                                        <p>Pricing plan for small business</p>
                                        </div>
                                        <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li>Traditional Consulting</li>
                                            <li>Investment Management</li>
                                            <li>Data Aggregation</li>
                                            <li>Tax Planning &amp; Preparation</li>
                                        </ul>
                                        <h2>
                                            129 <span className="symble">$</span>
                                            <span className="fraction">.99</span>
                                            <span className="text">Billed Monthly</span>
                                        </h2>
                                        <Link href="/index-2" className="theme-btn btn-two">
                                            Get Started Now
                                        </Link>
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
                    {/* pricing-style-two end */}

                    {/* cta-section */}
                    <section className="cta-section alternat-2">
                        <div className="outer-container">
                        <div
                            className="pattern-layer"
                            style={{ backgroundImage: "url(/assets/images/shape/shape-25.png)" }}
                        />
                        <div className="image-box-one">
                            <figure className="image">
                            <img src="/assets/images/resource/cta-1.jpg" alt="" />
                            </figure>
                            <div className="phone">
                            <h4>
                                Call: <Link href="tel:41888765432">(+41) 888.76.5432</Link>
                            </h4>
                            </div>
                        </div>
                        <div className="image-box-two">
                            <figure className="image">
                            <img src="/assets/images/resource/cta-2.jpg" alt="" />
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
                                    <img src="/assets/images/resource/cart-1.jpg" alt="" />
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
                </div>

            </Layout>
        </>
    )
}