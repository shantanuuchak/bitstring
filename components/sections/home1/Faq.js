
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key });
        } else {
            setIsActive({ status: true, key });
        }
    };

    const faqs = [
        {
            question: "What ServiceNow modules does BitString implement?",
            answer: "BitString provides end-to-end implementation across ITSM, ITOM, ITAM, HRSD, CSM, SPM, and GRC. Our certified consultants cover the full ServiceNow ecosystem to ensure your platform delivers maximum value."
        },
        {
            question: "Is BitString certified for quality and security?",
            answer: "Yes. BitString IT Services Pvt Ltd is ISO 27001 certified (Information Security Management) and ISO 9001 certified (Quality Management), ensuring we follow the highest standards in both security and service delivery."
        },
        {
            question: "Do you offer Talent Provisioning services?",
            answer: "Absolutely. Our Talent Provisioning service connects clients with certified, experienced IT professionals who have the precise skills and certifications required for your projects — from ServiceNow developers to cybersecurity specialists."
        },
        {
            question: "Where are BitString's offices located?",
            answer: "We operate from two locations: our India headquarters at A-304, Nyati Empress, Vimamnagar, Pune, Maharashtra – 411014, and our USA office at 1268 Howard Ct, Carson City, NV 89703. Reach us at connect@bitstringit.com."
        },
    ];

    return (
        <section className="faq-section sec-pad">
            <span className="big-text">faq&apos;s</span>
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Image Column */}
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image">
                                <img src="/assets/images/resource/faq-1.jpg" alt="FAQ" />
                            </figure>
                            <div className="btn-box">
                                <Link href="/contact" className="theme-btn btn-one">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">FAQ&apos;s</span>
                                <h2>Answers to Common <br />Questions About BitString</h2>
                            </div>
                            <ul className="accordion-box">
                                {faqs.map((faq, index) => (
                                    <li key={index} className={`accordion block ${isActive.key === index ? 'active-block' : ''}`}>
                                        <div className={`acc-btn ${isActive.key === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
                                            <div className="icon-box"><i className="flaticon-right-chevron"></i></div>
                                            <h4>{faq.question}</h4>
                                        </div>
                                        <div className={`acc-content ${isActive.key === index ? 'current' : ''}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
