'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
      });
    
      const handleToggle = (key) => {
        if (isActive.key === key) {
          setIsActive({ status: false });
        } else {
          setIsActive({ status: true, key });
        }
      };
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq’s">
                <div>            
                {/* faq-page-section */}
                <section className="faq-page-section sec-pad">
                    <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="faq-sidebar">
                            <div className="text-box">
                            <h3>Ask your Question</h3>
                            <p>Have questions about ServiceNow implementation or ITOM? Let us know.</p>
                            </div>
                            <div className="form-inner">
                            <form method="post" action="/contact">
                                <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    required=""
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    required=""
                                />
                                </div>
                                <div className="form-group">
                                <div className="select-box">
                                    <select className="selectmenu">
                                    <option>Category</option>
                                    <option>ServiceNow Consulting</option>
                                    <option>ITSM Implementation</option>
                                    <option>ITOM Implementation</option>
                                    <option>Talent Provisioning</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Question..."
                                    defaultValue={""}
                                />
                                </div>
                                <div className="form-group message-btn">
                                <button type="submit" className="theme-btn btn-two">
                                    Send Request
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="faq-content">
                            <span className="big-text">faq’s</span>

                            {/* Management FAQs */}
                            <div className="accordion-content">
                                <h3>ServiceNow & IT Consulting</h3>
                                <ul className="accordion-box">
                                {/* FAQ Item */}
                                <li className="accordion block">
                                    <div
                                    className={isActive.key === 1 ? 'acc-btn active' : 'acc-btn'}
                                    onClick={() => handleToggle(1)}
                                    >
                                    <div className="icon-box">
                                        <i className="flaticon-right-chevron" />
                                    </div>
                                    <h4>What does BitString do?</h4>
                                    </div>
                                    <div className={isActive.key === 1 ? 'acc-content current' : 'acc-content'}>
                                    <p>
                                        BitString is a specialized IT consulting firm focusing on ServiceNow implementation, ITSM, ITOM, HRSD, and Talent Provisioning to optimize your business operations.
                                    </p>
                                    </div>
                                </li>

                                {/* Additional FAQ Items */}
                                {[{ key: 2, question: 'What industries do you specialize in?', answer: 'We specialize in Technology & Life Sciences, Banking & Financial, Commercial Real Estate, and Manufacturing sectors.' }, { key: 3, question: 'How do you ensure successful ServiceNow implementation?', answer: 'We follow industry best practices, align technology with your specific business goals, and provide comprehensive training and support.' }, { key: 4, question: 'Do you offer custom ITOM solutions?', answer: 'Yes, we tailor IT Operations Management (ITOM) strategies to ensure infrastructure visibility and operational efficiency.' }].map((faq) => (
                                    <li key={faq.key} className="accordion block">
                                    <div
                                        className={isActive.key === faq.key ? 'acc-btn active' : 'acc-btn'}
                                        onClick={() => handleToggle(faq.key)}
                                    >
                                        <div className="icon-box">
                                        <i className="flaticon-right-chevron" />
                                        </div>
                                        <h4>{faq.question}</h4>
                                    </div>
                                    <div className={isActive.key === faq.key ? 'acc-content current' : 'acc-content'}>
                                        <p>
                                        {faq.answer}
                                        </p>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>

                            {/* Service FAQs */}
                            <div className="accordion-content">
                                <h3>Services & Delivery</h3>
                                <ul className="accordion-box">
                                {[{ key: 5, question: 'How long does an implementation take?', answer: 'Timelines vary based on complexity, ranging from a few weeks for standard ITSM to several months for full-scale enterprise transformation.' }, { key: 6, question: 'How do you structure talent provisioning?', answer: 'We connect you with highly vetted IT and ServiceNow professionals tailored to fit your specific project and organizational needs.' }, { key: 7, question: 'Do you provide post-implementation support?', answer: 'Absolutely. We offer ongoing managed services and support to ensure your platforms run smoothly post-deployment.' }].map((faq) => (
                                    <li key={faq.key} className="accordion block">
                                    <div
                                        className={isActive.key === faq.key ? 'acc-btn active' : 'acc-btn'}
                                        onClick={() => handleToggle(faq.key)}
                                    >
                                        <div className="icon-box">
                                        <i className="flaticon-right-chevron" />
                                        </div>
                                        <h4>{faq.question}</h4>
                                    </div>
                                    <div className={isActive.key === faq.key ? 'acc-content current' : 'acc-content'}>
                                        <p>
                                        {faq.answer}
                                        </p>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* faq-page-section end */}

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
                            Call: <Link href="tel:02069011184">(020) 69011184</Link>
                        </h4>
                        </div>
                    </div>
                    <div className="image-box-two">
                        <figure className="image">
                        <img src="assets/images/resource/cta-2.jpg" alt="" />
                        </figure>
                        <div className="text-box">
                        <h6>
                            Ready to <br />
                            Transform <br />
                            Your IT?
                        </h6>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 content-column">
                            <div className="content-box">
                            <h2>
                                Connect with BitString <br />
                                and Deliver Real Value
                            </h2>
                            <div className="inner-box">
                                <figure className="image-box">
                                <img src="assets/images/resource/cart-1.jpg" alt="" />
                                </figure>
                                <p>
                                Partner with us to solve your IT challenges. From ServiceNow implementation to talent provisioning, we are here to help you succeed.
                                </p>
                                <Link href="/contact" className="theme-btn btn-two">
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


































