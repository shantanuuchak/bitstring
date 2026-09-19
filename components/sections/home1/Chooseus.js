
import Link from "next/link";

export default function Chooseus() {
    return (
        <>
        {/* chooseus-section */}
        <section className="chooseus-section sec-pad">
          <span className="big-text">
            Why <br />
            Choose Us
          </span>
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Why Choose Us</span>
              <h2>Reasons to Partner with BitString IT Services</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-12 left-column">
                <div className="inner-content">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-knowledge" />
                      </div>
                      <div className="static-content">
                        <h3>Deep Domain Expertise</h3>
                        <p>20+ years of industry experience across IT & ServiceNow</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          Our team brings over two decades of hands-on experience across ServiceNow modules, cybersecurity, and cloud — giving you expertise you can rely on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-united" />
                      </div>
                      <div className="static-content">
                        <h3>Collaborative Approach</h3>
                        <p>Connect :: Collaborate :: Deliver Values</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          We work closely alongside your team to understand your unique challenges and co-create solutions that drive lasting value.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-clock" />
                      </div>
                      <div className="static-content">
                        <h3>Faster Time-to-Value</h3>
                        <p>Efficient delivery from Day 1 to go-live</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          With proven delivery frameworks and certified professionals, we accelerate your ServiceNow implementations without compromising quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image">
                    <img src="assets/images/resource/chooseus-1.jpg" alt="" />
                  </figure>
                  <div className="image-shape">
                    <img src="assets/images/shape/shape-8.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 right-column">
                <div className="inner-content">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-risk-management" />
                      </div>
                      <div className="static-content">
                        <h3>ISO Certified Quality</h3>
                        <p>ISO 27001 & ISO 9001 certified operations</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          Our dual ISO certifications reflect our commitment to information security management and consistent, high-quality service delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-monitor" />
                      </div>
                      <div className="static-content">
                        <h3>ServiceNow Specialists</h3>
                        <p>End-to-end ServiceNow implementation & support</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          From ITSM to GRC, we cover the full ServiceNow ecosystem — implementation, customization, and ongoing managed support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-advice" />
                      </div>
                      <div className="static-content">
                        <h3>Right Talent, Right Time</h3>
                        <p>Skilled professionals delivered on-demand</p>
                      </div>
                      <div className="overlay-content">
                        <p>
                          Our talent provisioning service ensures you get certified, experienced professionals with precisely the skills your project demands.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* chooseus-section end */}
        </>
    );
}
