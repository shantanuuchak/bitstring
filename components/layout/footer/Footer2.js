import Link from "next/link"

export default function Footer2() {
    return (
        <>
        {/* footer-style-two */}
        <section className="footer-style-two">
            <div className="auto-container">
            <div className="widget-section">
                <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget logo-widget">
                    <div
                        className="widget-content"
                        style={{
                        backgroundImage: "url(/assets/images/resource/footer-1.jpg)"
                        }}
                    >
                        <div className="award-image">
                        <img src="/assets/images/icons/award-2.png" alt="" />
                        </div>
                        <figure className="footer-logo">
                        <Link href="/index-2">
                            <img src="/assets/images/logo-2.png" alt="" />
                        </Link>
                        </figure>
                        <h3>Thinking &amp; Planning for your Future</h3>
                        <div className="btn-box">
                        <Link href="/index-2" className="theme-btn btn-two">
                            Appointment
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget contact-widget">
                    <div className="widget-title">
                        <h3>Get in Touch</h3>
                    </div>
                    <div className="widget-content">
                        <div className="single-item">
                        <h4>Headquarters</h4>
                        <p>
                            280 Granite Run Drive Suite #200 Hobert, <br />
                            LA 90010, United States.
                        </p>
                        </div>
                        <div className="single-item">
                        <h4>Quick Contact</h4>
                        <p>
                            <span>E :</span>{" "}
                            <Link href="mailto:supportyou@example.com">
                            supportyou@example.com
                            </Link>
                        </p>
                        <p>
                            <span>P :</span>{" "}
                            <Link href="tel:4188822333">(+41) 888.22.333</Link>
                        </p>
                        </div>
                        <h5>
                        <Link href="/index-2">View On Map</Link>
                        </h5>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                    <div className="widget-title">
                        <h3>Company</h3>
                    </div>
                    <div className="widget-content">
                        <ul className="links-list clearfix">
                        <li>
                            <Link href="/index-2">Home</Link>
                        </li>
                        <li>
                            <Link href="/index-2">About Us</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Professionals</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Insights</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Services</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Why Choose</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Get in Touch</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                    <div className="widget-title">
                        <h3>Essentials</h3>
                    </div>
                    <div className="widget-content">
                        <ul className="links-list clearfix">
                        <li>
                            <Link href="/index-2">How it’s Work</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Partners</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Case Studies</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Free Quote</Link>
                        </li>
                        <li>
                            <Link href="/index-2">Plan &amp; Pricing</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="bottom-inner">
                <div className="copyright">
                    <p>
                    Copyright © 2024 <Link href="/index-2">Counsolve.</Link> All Rights
                    Reserved.
                    </p>
                </div>
                <ul className="footer-nav clearfix">
                    <li>
                    <Link href="/index-2">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                    <Link href="/index-2">Privacy Policy</Link>
                    </li>
                    <li>
                    <Link href="/index-2">Investor Rights</Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        {/* footer-style-two end */}
        </>

    )
}
