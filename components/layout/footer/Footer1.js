import Link from "next/link"
import BackToTop from "@/components/elements/BackToTop"
import contentMap from "@/business_data/mappings/content_map.json"

export default function Footer1() {
    const { contact } = contentMap;
    return (
        <>
            {/* main-footer */}
            <section className="main-footer">
                <div className="auto-container">
                <div className="footer-top">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                        <div className="logo-widget">
                        <figure className="footer-logo">
                            <Link href="/">
                            <img src="assets/images/logo.png" alt="" />
                            </Link>
                        </figure>
                        <div className="copyright">
                            <h5>
                            Copyright © 2024 <Link href="/">BitString IT Services Pvt Ltd.</Link> All
                            Rights Reserved.
                            </h5>
                        </div>
                        <div className="text-box">
                            <p>
                            Experience you can trust. Technology that delivers. We Provide Solutions To Your IT Needs. Connect :: Collaborate :: Deliver Values.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                        <div className="newsletter-widget">
                        <div className="icon-box">
                            <img src="assets/images/icons/icon-8.png" alt="" />
                        </div>
                        <h3>Newsletter</h3>
                        <p>
                            Stay updated with the latest IT insights and news from BitString.
                        </p>
                        <div className="form-inner">
                            <form method="post" action="/contact">
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address..."
                                required=""
                                />
                                <button type="submit" className="theme-btn btn-one">
                                Subscribe
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="widget-section">
                    <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget contact-widget">
                        <div className="widget-title">
                            <h3>Office Location</h3>
                        </div>
                        <div className="widget-content">
                            <h4>
                            <span>India &</span>
                            <br /> <span>USA Offices</span>
                            </h4>
                            <h5>Head Office (India)</h5>
                            <p>
                            {contact.india_address} <br />
                            Phone: {contact.india_phone}
                            </p>
                            <div className="map-box">
                            <div className="icon-box">
                                <i className="fas fa-map-location" />
                            </div>
                            <h6>
                                <Link
                                href="https://maps.google.com/?q=A-304,+Nyati+Empress,+Vimamnagar,+Pune,+Maharashtra+411014"
                                target="_blank"
                                >
                                Google Map
                                </Link>
                            </h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget links-widget">
                        <div className="widget-title">
                            <h3>Company</h3>
                        </div>
                        <div className="widget-content">
                            <ul className="links-list clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/team">Our Team</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog & Insights</Link>
                            </li>
                            <li>
                                <Link href="/#services">Services</Link>
                            </li>
                            <li>
                                <Link href="/about#why-choose">Why Choose Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Get in Touch</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget links-widget">
                        <div className="widget-title">
                            <h3>Services</h3>
                        </div>
                        <div className="widget-content">
                            <ul className="links-list clearfix">
                            <li>
                                <Link href="/service-details">ITSM</Link>
                            </li>
                            <li>
                                <Link href="/service-details-2">ITOM</Link>
                            </li>
                            <li>
                                <Link href="/service-details-3">HRSD</Link>
                            </li>
                            <li>
                                <Link href="/service-details-4">ITAM</Link>
                            </li>
                            <li>
                                <Link href="/service-details-5">CSM</Link>
                            </li>
                            <li>
                                <Link href="/service-details-6">GRC</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget post-widget">
                        <div className="widget-title">
                            <h3>Popular Post</h3>
                        </div>
                        <div className="post-inner">
                            <div className="post">
                            <span className="category">ServiceNow</span>
                            <h4>
                                <Link href="/blog">
                                How ITSM Transforms IT Operations for Enterprises
                                </Link>
                            </h4>
                            </div>
                            <div className="post">
                            <span className="category">Cybersecurity</span>
                            <h4>
                                <Link href="/blog">
                                Building a Resilient Cybersecurity Strategy in 2024
                                </Link>
                            </h4>
                            </div>
                            <div className="link-box">
                            <Link href="/blog">
                                <span>View All Posts</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                    <ul className="footer-nav">
                        <li>
                        <Link href="/">Terms &amp; Conditions</Link>
                        </li>
                        <li>
                        <Link href="/">Privacy Policy</Link>
                        </li>
                        <li>
                        <Link href="/">Sitemap</Link>
                        </li>
                        <li>
                        <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <a className="scroll-to-top scroll-to-target d-block" href="#top">
                    <div className="scroll-bar-text">Go To Top</div>
                </a>
                    </div>
                </div>
                </div>
            </section>
            {/* main-footer end */}
        </>

    )
}
