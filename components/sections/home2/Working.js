import Link from "next/link";

export default function Working() {
    return (
      <>
        {/* working-style-two */}
        <section className="working-style-two sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">How we works</span>
              <h2>We Plan for your Growth</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                  <div className="working-block-two">
                    <div className="inner-box">
                      <div className="upper-box centred">
                        <span className="count-text">01</span>
                        <div className="icon-box">
                          <i className="flaticon-meeting" />
                        </div>
                        <h6>First Step</h6>
                        <p>
                          That they cannot foresee the paintrouble that are bound
                          ensue equal blame.
                        </p>
                      </div>
                      <div className="lower-box">
                        <h3>First Appointment</h3>
                        <Link href="/index-2">
                          <span>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                  <div className="working-block-two">
                    <div className="inner-box">
                      <div className="upper-box centred">
                        <span className="count-text">02</span>
                        <div className="icon-box">
                          <i className="flaticon-paper" />
                        </div>
                        <h6>Second Step</h6>
                        <p>
                          Pursue pleasure rational all counter consequence that
                          extremely painful.
                        </p>
                      </div>
                      <div className="lower-box">
                        <h3>Know Client Needs</h3>
                        <Link href="/index-2">
                          <span>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                  <div className="working-block-two">
                    <div className="inner-box">
                      <div className="upper-box centred">
                        <span className="count-text">03</span>
                        <div className="icon-box">
                          <i className="flaticon-analysis" />
                        </div>
                        <h6>Third Step</h6>
                        <p>
                          Takes a trivial example, which ever undertakes laborious
                          physical exercise.
                        </p>
                      </div>
                      <div className="lower-box">
                        <h3>Market Research</h3>
                        <Link href="/index-2">
                          <span>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                  <div className="working-block-two">
                    <div className="inner-box">
                      <div className="upper-box centred">
                        <span className="count-text">04</span>
                        <div className="icon-box">
                          <i className="flaticon-submit" />
                        </div>
                        <h6>Fourth Step</h6>
                        <p>
                          Right to find fault with a man who chooses to enjoy annoying
                          resultant.{" "}
                        </p>
                      </div>
                      <div className="lower-box">
                        <h3>Submit Reports</h3>
                        <Link href="/index-2">
                          <span>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* working-style-two end */}
      </>    
    )
}
