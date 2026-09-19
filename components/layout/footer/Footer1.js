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
                            By submitting this form, you consent to receive marketing
                            updates from Counsolve.
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
                                href="https://www.google.com/maps/@23.235815,89.5731704,17.1z"
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
                                <Link href="/">About Us</Link>
                            </li>
                            <li>
                                <Link href="/">Professionals</Link>
                            </li>
                            <li>
                                <Link href="/">Insights</Link>
                            </li>
                            <li>
                                <Link href="/">Services</Link>
                            </li>
                            <li>
                                <Link href="/">Why Choose</Link>
                            </li>
                            <li>
                                <Link href="/">Get in Touch</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="footer-widget links-widget">
                        <div className="widget-title">
                            <h3>Essentials</h3>
                        </div>
                        <div className="widget-content">
                            <ul className="links-list clearfix">
                            <li>
                                <Link href="/">How it’s Work</Link>
                            </li>
                            <li>
                                <Link href="/">Partners</Link>
                            </li>
                            <li>
                                <Link href="/">Testimonials</Link>
                            </li>
                            <li>
                                <Link href="/">Case Studies</Link>
                            </li>
                            <li>
                                <Link href="/">Free Quote</Link>
                            </li>
                            <li>
                                <Link href="/">Plan &amp; Pricing</Link>
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
                            <span className="category">Investment</span>
                            <h4>
                                <Link href="/blog-details">
                                Revisiting Your Investment &amp; Distribution Goals
                                </Link>
                            </h4>
                            </div>
                            <div className="post">
                            <span className="category">Business</span>
                            <h4>
                                <Link href="/blog-details">
                                Dimensional Fund Advisors Interview with Director
                                </Link>
                            </h4>
                            </div>
                            <div className="link-box">
                            <Link href="/blog">
                                <span>View All Post</span>
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
                        <Link href="/">Investor Policy</Link>
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
