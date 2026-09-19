import Link from "next/link"

export default function Footer4() {
    return (
      <>
      {/* footer-style-four */}
      <section className="footer-style-four">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}
        />
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/index-4">
                      <img src="assets/images/logo-7.png" alt="" />
                    </Link>
                  </figure>
                  <p>
                    Provides advice &amp; guidance to clients regarding their
                    investments &amp; manage their investment portfolios.
                  </p>
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="flaticon-time-management" />
                    </div>
                    <h6>Off. Hours</h6>
                    <span>Mon - Sat: 9am to 6pm</span>
                    <Link href="/index-4">Plan to Visit</Link>
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
                        <Link href="/index-4">Professionals</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Insights</Link>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Why Choose</Link>
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
                        <Link href="/index-4">How it’s Work</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Partners</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Case Studies</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Free Quote</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget download-widget">
                  <div className="widget-title">
                    <h3>Downloads</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="download-list clearfix">
                      <li>
                        <div className="download-box">
                          <div className="inner">
                            <div className="icon-box">
                              <i className="flaticon-download-pdf" />
                            </div>
                            <h5>Company</h5>
                          </div>
                          <button type="button">
                            <i className="flaticon-download" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="download-box">
                          <div className="inner">
                            <div className="icon-box">
                              <i className="flaticon-download-pdf" />
                            </div>
                            <h5>Our Policies</h5>
                          </div>
                          <button type="button">
                            <i className="flaticon-download" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-inner">
              <div className="left-column">
                <p>© 2024, All rights reserved</p>
                <ul className="footer-nav clearfix">
                  <li>
                    <Link href="/index-3">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Investor Rights</Link>
                  </li>
                </ul>
              </div>
              <ul className="social-links clearfix">
                <li>
                  <h5>Follow Us</h5>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-square-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-solid fa-basketball" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* footer-style-four end */}
    </>
    )
}
