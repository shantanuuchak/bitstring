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
                                            <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                            <ul className="list-item clearfix">
                                                <li>Denounce with righteous indignation.</li>
                                                <li>Belongs to those who fail.</li>
                                            </ul>
                                            <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-2' ? 'active-tab' : ''}`} id="tab-2">
                                        <div className="inner-box">
                                            <h3>Banking & Financial</h3>
                                            <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                            <ul className="list-item clearfix">
                                                <li>Denounce with righteous indignation.</li>
                                                <li>Belongs to those who fail.</li>
                                            </ul>
                                            <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-3' ? 'active-tab' : ''}`} id="tab-3">
                                        <div className="inner-box">
                                            <h3>Commercial Real Estate</h3>
                                            <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                            <ul className="list-item clearfix">
                                                <li>Denounce with righteous indignation.</li>
                                                <li>Belongs to those who fail.</li>
                                            </ul>
                                            <Link href="/" className="theme-btn btn-two">Explore More</Link>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === 'tab-4' ? 'active-tab' : ''}`} id="tab-4">
                                        <div className="inner-box">
                                            <h3>Manufacturing</h3>
                                            <p>Pleasure is to be welcomed & every pain avoided in certain circumstances claims of duty obligations.</p>
                                            <ul className="list-item clearfix">
                                                <li>Denounce with righteous indignation.</li>
                                                <li>Belongs to those who fail.</li>
                                            </ul>
                                            <Link href="/" className="theme-btn btn-two">Explore More</Link>
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
