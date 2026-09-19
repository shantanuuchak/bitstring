import Link from "next/link"

export default function Footer3() {
    return (
        <>
  {/* footer-style-three */}
  <section className="footer-style-three">
    <div className="widget-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
              <h3>
                <span>Talk to us,</span>
                <i className="flaticon-chat" />
                <br />
                <span>we're here to listen.</span>
              </h3>
              <p>Don’t hesitate , we’re here to help you.</p>
              <h5>
                <Link href="/contact">Get in Touch</Link>
              </h5>
              <div className="footer-logo">
                <Link href="/index-3">
                  <img src="assets/images/logo-6.png" alt="" />
                </Link>
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
                    <Link href="/index-3">Professionals</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Insights</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Why Choose</Link>
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
                    <Link href="/index-3">How it’s Work</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Partners</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Free Quote</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget gallery-widget">
              <div className="widget-title">
                <h3>Instagram Post</h3>
              </div>
              <div className="widget-content">
                <ul className="image-list clearfix">
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-2.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-2.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-3.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-3.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-4.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-4.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-5.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-5.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-6.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-6.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                  <li>
                    <figure className="image">
                      <Link
                        href="assets/images/resource/footer-7.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img src="assets/images/resource/footer-7.jpg" alt="" />
                      </Link>
                    </figure>
                  </li>
                </ul>
                <h5>
                  <Link href="/index-3">Join With Us</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
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
  {/* footer-style-three end */}
</>


    )
}
