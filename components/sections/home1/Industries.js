'use client'
import Link from "next/link";
import { useState } from 'react'

export default function Industries() {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('tab-1');

    // Handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
        {/* industries-section */}
        <section className="industries-section">
            <div className="outer-container">
                <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/industries-bg.jpg)" }}></div>
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="row clearfix">
                            {/* Content Column */}
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="sec-title light">
                                        <span className="sub-title">We Work For</span>
                                        <h2>Industries We Served</h2>
                                    </div>
                                    <div className="tab-btns tab-buttons clearfix">
                                        <div
                                            className={`tab-btn ${activeTab === 'tab-1' ? 'active-btn' : ''}`}
                                            onClick={() => handleTabChange('tab-1')}
                                        >
                                            <span className="count-text">01</span>
                                            <h3>Technology & Life Sciences</h3>
                                            <Link href="/">
                                                <i className="flaticon-diagonal-arrow"></i>
                                            </Link>
                                        </div>
                                        <div
                                            className={`tab-btn ${activeTab === 'tab-2' ? 'active-btn' : ''}`}
                                            onClick={() => handleTabChange('tab-2')}
                                        >
                                            <span className="count-text">02</span>
                                            <h3>Banking & Financial</h3>
                                            <Link href="/">
                                                <i className="flaticon-diagonal-arrow"></i>
                                            </Link>
                                        </div>
                                        <div
                                            className={`tab-btn ${activeTab === 'tab-3' ? 'active-btn' : ''}`}
                                            onClick={() => handleTabChange('tab-3')}
                                        >
                                            <span className="count-text">03</span>
                                            <h3>Commercial Real Estate</h3>
                                            <Link href="/">
                                                <i className="flaticon-diagonal-arrow"></i>
                                            </Link>
                                        </div>
                                        <div
                                            className={`tab-btn ${activeTab === 'tab-4' ? 'active-btn' : ''}`}
                                            onClick={() => handleTabChange('tab-4')}
                                        >
                                            <span className="count-text">04</span>
                                            <h3>Manufacturing</h3>
                                            <Link href="/">
                                                <i className="flaticon-diagonal-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Inner Column */}
                            <div className="col-lg-4 col-md-12 col-sm-12 inner-column">
                                <div className="tabs-content">
                                    <div className={`tab ${activeTab === 'tab-1' ? 'active-tab' : ''}`} id="tab-1">
                                        <div className="inner-box">
                                            <h3>Technology & Life Sciences</h3>
                                            <p>BitString empowers tech and life sciences organizations to modernize their IT operations, accelerate innovation, and ensure compliance through tailored ServiceNow implementations.</p>
                                            <ul className="list-item clearfix">
                                                <li>ServiceNow ITSM & ITOM implementation</li>
                                                <li>Regulatory compliance automation (GRC)</li>
                                            </ul>
                                            <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                        <div className="inner-box">
                                            <h3>Banking & Financial Services</h3>
                                            <p>We help banking and financial institutions streamline operations, strengthen security posture, and automate governance through integrated IT platforms.</p>
                                            <ul className="list-item clearfix">
                                                <li>GRC & compliance management on ServiceNow</li>
                                                <li>Cybersecurity assessments & ISO 27001 alignment</li>
                                            </ul>
                                            <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-3' ? 'active-tab' : ''}`} id="tab-3">
                                        <div className="inner-box">
                                            <h3>Commercial Real Estate</h3>
                                            <p>BitString supports real estate enterprises in digitizing their IT workflows, managing field service operations, and delivering responsive tenant and employee experiences.</p>
                                            <ul className="list-item clearfix">
                                                <li>ITSM for facilities & asset management</li>
                                                <li>CSM for tenant service portals</li>
                                            </ul>
                                            <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-4' ? 'active-tab' : ''}`} id="tab-4">
                                        <div className="inner-box">
                                            <h3>Manufacturing</h3>
                                            <p>We help manufacturing companies reduce downtime and drive operational efficiency by connecting IT, OT, and asset management in a unified ServiceNow platform.</p>
                                            <ul className="list-item clearfix">
                                                <li>ITOM for infrastructure visibility</li>
                                                <li>ITAM for asset lifecycle management</li>
                                            </ul>
                                            <Link href="/contact" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* industries-section end */}
        </>
      
    );
}
