import Link from "next/link"


export default function Working() {
    return (
        <>
        {/* working-section */}
        <section className="working-section centred">
            <div className="auto-container">
            <div className="sec-title">
                <span className="sub-title">How we works</span>
                <h2>We Plan for your Growth</h2>
            </div>
            <div className="inner-content">
                <div
                className="shape"
                style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
                />
                <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="assets/images/resource/working-1.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-meeting" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Appointment</h3>
                        <p>
                            That they cannot foresee the pain trouble that are bound
                            ensue equal blame of business .
                        </p>
                        <h2>
                            01 <span>st step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="assets/images/resource/working-2.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-paper" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Know Client Needs</h3>
                        <p>
                            Pursue pleasure rational all counter consequence that
                            extremely painful duty or the obligations.
                        </p>
                        <h2>
                            02 <span>nd step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src="assets/images/resource/working-3.jpg" alt="" />
                        </figure>
                        <div className="icon-box">
                            <i className="flaticon-analysis" />
                        </div>
                        </div>
                        <div className="lower-content">
                        <h3>Market Research</h3>
                        <p>
                            Takes a trivial example, which ever it undertake laborios
                            physical exercise secure other greater.
                        </p>
                        <h2>
                            03 <span>rd step</span>
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="more-text centred">
                <h5>
                Start Investing with Smart Ideas.{" "}
                <Link href="/">
                    <i className="flaticon-right-chevron" />
                    Appointment
                </Link>
                </h5>
            </div>
            </div>
        </section>
        {/* working-section end */}
        </>

    )
}
