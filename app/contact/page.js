
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Details">
                <div>
                    {/* contact-section */}
                    <section className="contact-section sec-pad">
                        <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title">
                                <span className="sub-title">Contact</span>
                                <h2>
                                Contact us <br />
                                for Top-Notch Service.
                                </h2>
                                <Link href="/contact" className="theme-btn btn-two">
                                Our Locations
                                </Link>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                        <div className="light-icon">
                                            <i className="flaticon-customer-service-1" />
                                        </div>
                                        <h3>Support</h3>
                                        <p>From our expert team</p>
                                        </div>
                                        <div className="lower-content">
                                        <div className="single-item">
                                            <div className="icon-box">
                                            <i className="flaticon-chat-2" />
                                            </div>
                                             <h6>Phone</h6>
                                             <p>
                                             India: <Link href="tel:02069011184">(020) 69011184</Link>{" "}
                                             <br />
                                             USA:{" "}
                                             <Link href="tel:9494246646">(949) 424-6646</Link>
                                             </p>
                                         </div>
                                         <div className="single-item">
                                             <div className="icon-box">
                                             <i className="flaticon-mail" />
                                             </div>
                                             <h6>Email</h6>
                                             <p>
                                             <Link href="mailto:connect@bitstringit.com">
                                                 connect@bitstringit.com
                                             </Link>
                                             </p>
                                        </div>
                                        <div className="link">
                                            <Link href="/contact">
                                            <span>Get Call Back</span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                        <div className="light-icon">
                                            <i className="flaticon-cityscape" />
                                        </div>
                                        <h3>Address</h3>
                                        <p>To visiting our company</p>
                                        </div>
                                        <div className="lower-content">
                                        <div className="single-item">
                                            <div className="icon-box">
                                            <i className="flaticon-location-1" />
                                            </div>
                                             <h6>Address</h6>
                                             <p>
                                             A-304, Nyati Empress, Vimamnagar <br />
                                             Pune, Maharashtra - 411014, India
                                             </p>
                                         </div>
                                         <div className="single-item">
                                             <div className="icon-box">
                                             <i className="flaticon-time-management" />
                                             </div>
                                             <h6>Off. Hours</h6>
                                             <p>Mon - Sat: 9am to 6pm</p>
                                         </div>
                                         <div className="link">
                                             <Link href="https://maps.google.com/?q=A-304,+Nyati+Empress,+Vimamnagar,+Pune,+Maharashtra+411014" target="_blank">
                                             <span>View On Map</span>
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
                        </div>
                    </section>
                    {/* contact-section end */}
                    
                    {/* Contact Form Section */}
                    <section className="contact-style-two">
                        <div className="outer-container sec-pad">
                            <div className="pattern-layer">
                            <div className="pattern-1"></div>
                            <div className="pattern-2"></div>
                            </div>
                            <figure className="image-layer">
                            <img src="/assets/images/resource/contact-1.png" alt="" />
                            </figure>
                            <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Drop a Line</span>
                                    <h2>Let’s Talk!... <br />Send Your Message</h2>
                                    <p>Fill in the form and let us know what you need.</p>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="form-inner">
                                    <form method="post" action="sendemail.php" id="contact-form" className="default-form"> 
                                        <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>First Name</label>
                                            <input type="text" name="username" placeholder="Your first name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" placeholder="Your last name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Company</label>
                                            <input type="text" name="subject" placeholder="Company name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" placeholder="Phone num" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Email Address</label>
                                            <input type="email" name="email" placeholder="Official email address" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Are you interested in?</label>
                                            <div className="select-box">
                                             <select className="selectmenu">
                                                 <option value="servicenow-consulting">ServiceNow Consulting</option>
                                                 <option value="itsm">ITSM Implementation</option>
                                                 <option value="itom">ITOM Implementation</option>
                                                 <option value="hrsd">HRSD Implementation</option>
                                                 <option value="grc">GRC Implementation</option>
                                                 <option value="talent-provisioning">Talent Provisioning</option>
                                                 <option value="cybersecurity">Cybersecurity</option>
                                                 <option value="devops-cloud">DevOps & Cloud</option>
                                                 <option value="other">Other</option>
                                             </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Message</label>
                                            <textarea name="message" placeholder="Message goes here..."></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <div className="check-box">
                                            <input className="check" type="checkbox" id="checkbox1" />
                                            <label htmlFor="checkbox1">
                                                Click here to confirm you have read our privacy policy*
                                            </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                            <button className="theme-btn btn-two" type="submit" name="submit-form">
                                            <span>Send Message</span>
                                            </button>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                </div>

            </Layout>
        </>
    )
}