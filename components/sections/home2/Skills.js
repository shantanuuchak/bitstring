import Link from "next/link"

export default function Skills() {
    
    return (
        <>
        {/* skills-section */}
        <section className="skills-section">
            <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                    <figure className="image image-1">
                    <img src="/assets/images/resource/skills-1.jpg" alt="" />
                    </figure>
                    <figure className="image image-2">
                    <img src="/assets/images/resource/skills-2.jpg" alt="" />
                    </figure>
                    <div className="chart-box">
                    <h3>Total Product</h3>
                    <h5>January-March 2023</h5>
                    <h2>3,456</h2>
                    <h4>+25% per week</h4>
                    <div className="graph">
                        <img src="/assets/images/icons/graph-1.png" alt="" />
                    </div>
                    </div>
                    <div
                    className="image-shape"
                    style={{
                        backgroundImage: "url(/assets/images/shape/shape-15.png)"
                    }}
                    />
                </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                    <div className="sec-title">
                    <span className="sub-title">Our Skills</span>
                    <h2>
                        We keep ourselves <br />
                        up to make your Dreams come true
                    </h2>
                    </div>
                    <div className="text-box">
                    <p>
                        Ever undertakes labor physical exercise except obtain some
                        advantage from it? but who has any rights to find fault with man
                        who pleasure that has no annoying consequences.
                    </p>
                    <p>Physical exercise except to obtain some advantage,</p>
                    </div>
                    <div className="inner-box">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                            <div className="icon-box">
                            <i className="flaticon-downloads" />
                            </div>
                            <h3>
                            Personal <br />
                            Consulting Service
                            </h3>
                            <h5>
                            <Link href="/index-2">Explore Projects</Link>
                            </h5>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                        <div className="progress-box">
                            <p>
                            Complete account of the syste all expound the teachings.
                            </p>
                            <h5>38.5%</h5>
                            <div className="bar">
                            <div
                                className="bar-inner count-bar"
                                data-percent="38.5%"
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                            <div className="icon-box">
                            <i className="flaticon-downloads" />
                            </div>
                            <h3>
                            Corporate <br />
                            Consulting Service
                            </h3>
                            <h5>
                            <Link href="/index-2">Explore Projects</Link>
                            </h5>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                        <div className="progress-box">
                            <p>
                            Right to find fault with a man who chooses to enjoy
                            produces.
                            </p>
                            <h5>61.5%</h5>
                            <div className="bar">
                            <div
                                className="bar-inner count-bar"
                                data-percent="61.5%"
                            />
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
        {/* skills-section end */}
        </>
    )
}

















            
