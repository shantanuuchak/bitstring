// components/VideoSection.js
"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";

export default function Video() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            {/* video-section */}
            <section className="video-section">
                <div
                    className="pattern-layer"
                    style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}
                />
                <div className="outer-container">
                    <div className="auto-container">
                        <div className="funfact-inner">
                            <div className="row clearfix">
                                {/* Fun Fact Block */}
                                <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <img src="/assets/images/icons/icon-5.png" alt="" />
                                            </div>
                                            <div className="light-icon">
                                                <img src="/assets/images/icons/icon-6.png" alt="" />
                                            </div>
                                            <div className="count-outer count-box">
                                                <span className="count-text">
                                                    <CountUp end={100} duration={1.5} />
                                                </span>
                                                <span className="text">+ Years</span>
                                            </div>
                                            <p>Combined team experience.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Consultation Block */}
                                <div className="col-lg-6 col-md-6 col-sm-12 consultation-block">
                                    <div className="consultation-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <i className="flaticon-searching" />
                                            </div>
                                            <h3>
                                                <a href="/contact">Start Your Project</a>
                                            </h3>
                                            <p>Let's discuss how we can accelerate your digital transformation.</p>
                                            <div className="link">
                                                <a href="/contact">
                                                    <span>Free Consultation</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Video Inner Section */}
                    <div className="video-inner">
                        <div
                            className="bg-layer"
                            style={{
                                backgroundImage: "url(/assets/images/background/video-bg.jpg)"
                            }}
                        />
                        <div className="btn-box">
                            <button onClick={openModal} className="lightbox-image video-btn">
                                <i className="flaticon-play-button" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal Video Popup */}
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="nfP5N9Yc72A"
                    onClose={() => setIsOpen(false)}
                />
            </section>
            {/* video-section end */}
        </>
    );
}
