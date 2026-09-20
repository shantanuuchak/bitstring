
import Link from "next/link"
import Brand from "@/components/slider/Brand"
export default function Growth() {
    
    return (
      <>
      {/* growth-section */}
      <section className="growth-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-7.png)" }}
        />
        <div className="auto-container">
          <div className="growth-inner">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <figure className="image-box">
                    <img src="/assets/images/resource/growth-1.png" alt="" />
                  </figure>
                  <div className="sec-title light">
                    <span className="sub-title">Our Expertise</span>
                    <h2>
                      100+ Years <br />
                      of Combined <br />
                      IT Experience
                    </h2>
                  </div>
                  <div className="text-box">
                    <p>
                      Our team of domain experts brings decades of experience <br />
                      across ServiceNow, cybersecurity, cloud, and IT consulting.
                    </p>
                    <Link href="/about" className="theme-btn btn-two">
                      <span>About BitString</span>
                    </Link>
                  </div>
                  <div className="progress-box">
                    <h5>Client Satisfaction</h5>
                    <div className="progress-inner">
                      <h5>Trusted by Leading Enterprises</h5>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="95%" />
                        <div className="count-text">95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                <div className="growth-content">
                  <div className="growth-block-one">
                    <div className="inner-box">
                      <h3>
                        <Link href="/services/itsm">ServiceNow Excellence</Link>
                      </h3>
                      <p>
                        Full-spectrum ServiceNow services from ITSM to GRC — implemented by certified experts.
                      </p>
                      <div className="icon-box">
                        <i className="flaticon-development" />
                      </div>
                      <div className="link-box">
                        <Link href="/services/itsm">
                          <span>Explore Services</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="growth-block-one">
                    <div className="inner-box">
                      <h3>
                        <Link href="/career">Talent Provisioning</Link>
                      </h3>
                      <p>
                        Get the right professionals with the precise skills and certifications your projects demand.
                      </p>
                      <div className="icon-box">
                        <i className="flaticon-strategy" />
                      </div>
                      <div className="link-box">
                        <Link href="/career">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clients-section">
            <Brand />
            <div className="more-text centred">
              <h5>
                Trusted by Schoolnet, Hadron, Successive Digital, Infosys & more.{" "}
                <Link href="/about">
                  <i className="flaticon-right-chevron" />
                  View All Clients
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* growth-section end */}
    </>
    

    )
}
