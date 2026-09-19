
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid">
                <div>
                    {/* blog-grid */}
                    <section className="blog-grid sec-pad">
                        <div className="auto-container">
                        <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated">
                    <div className="inner-box">
                        <div className="upper-box">
                        <span className="category">ITSM</span>
                        <ul className="post-info clearfix">
                            <li><span>On</span> Mar 15, 2024</li>
                            <li><span>By</span> <Link href="/blog-details">BitString Team</Link></li>
                        </ul>
                        </div>
                        <div className="image-box">
                        <figure className="image">
                            <Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h3><Link href="/blog-details">Maximizing ROI with ServiceNow ITSM</Link></h3>
                        <div className="link"><Link href="/blog-details"><span>Explore More</span></Link></div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated">
                    <div className="inner-box">
                        <div className="upper-box">
                        <span className="category">HRSD</span>
                        <ul className="post-info clearfix">
                            <li><span>On</span> Feb 28, 2024</li>
                            <li><span>By</span> <Link href="/blog-details">BitString Team</Link></li>
                        </ul>
                        </div>
                        <div className="image-box">
                        <figure className="image">
                            <Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h3><Link href="/blog-details">Transforming the Employee Experience with HR Service Delivery</Link></h3>
                        <div className="link"><Link href="/blog-details"><span>Explore More</span></Link></div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated">
                    <div className="inner-box">
                        <div className="upper-box">
                        <span className="category">ITOM</span>
                        <ul className="post-info clearfix">
                            <li><span>On</span> Feb 10, 2024</li>
                            <li><span>By</span> <Link href="/blog-details">BitString Team</Link></li>
                        </ul>
                        </div>
                        <div className="image-box">
                        <figure className="image">
                            <Link href="/blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h3><Link href="/blog-details">Proactive IT Operations: Automating Issue Resolution</Link></h3>
                        <div className="link"><Link href="/blog-details"><span>Explore More</span></Link></div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated">
                    <div className="inner-box">
                        <div className="upper-box">
                        <span className="category">Cybersecurity</span>
                        <ul className="post-info clearfix">
                            <li><span>On</span> Jan 22, 2024</li>
                            <li><span>By</span> <Link href="/blog-details">BitString Team</Link></li>
                        </ul>
                        </div>
                        <div className="image-box">
                        <figure className="image">
                            <Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h3><Link href="/blog-details">Strengthening Your Defenses: Top Cybersecurity Trends</Link></h3>
                        <div className="link"><Link href="/blog-details"><span>Explore More</span></Link></div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated">
                    <div className="inner-box">
                        <div className="upper-box">
                        <span className="category">Talent</span>
                        <ul className="post-info clearfix">
                            <li><span>On</span> Jan 05, 2024</li>
                            <li><span>By</span> <Link href="/blog-details">BitString Team</Link></li>
                        </ul>
                        </div>
                        <div className="image-box">
                        <figure className="image">
                            <Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link>
                        </figure>
                        </div>
                        <div className="lower-box">
                        <h3><Link href="/blog-details">Sourcing ServiceNow Experts in a Competitive Market</Link></h3>
                        <div className="link"><Link href="/blog-details"><span>Explore More</span></Link></div>
                        </div>
                    </div>
                    </div>
                </div>
</div>
                        <div className="pagination-wrapper centred">
                            <ul className="pagination clearfix">
                            <li className="prev-btn">
                                <Link href="/blog">
                                <i className="flaticon-right-chevron" />
                                Prev Page
                                </Link>
                            </li>
                            <li className="count-page">
                                <Link href="/blog" className="current">
                                <span>01</span>
                                </Link>
                            </li>
                            <li className="count-page">
                                <Link href="/blog">
                                <span>02</span>
                                </Link>
                            </li>
                            <li className="count-page">
                                <Link href="/blog">
                                <span>03</span>
                                </Link>
                            </li>
                            <li className="count-page">
                                <Link href="/blog">
                                <span>04</span>
                                </Link>
                            </li>
                            <li className="next-btn">
                                <Link href="/blog">
                                Next Page <i className="flaticon-right-chevron" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    {/* blog-grid end */}
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
                                Call: <Link href="tel:41888765432">(+41) 888.76.5432</Link>
                            </h4>
                            </div>
                        </div>
                        <div className="image-box-two">
                            <figure className="image">
                            <img src="assets/images/resource/cta-2.jpg" alt="" />
                            </figure>
                            <div className="text-box">
                            <h6>
                                Do you Have <br />
                                any idea to Join <br />
                                With Us
                            </h6>
                            </div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2 content-column">
                                <div className="content-box">
                                <h2>
                                    Believe us when <br />
                                    it comes to investment
                                </h2>
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/resource/cart-1.jpg" alt="" />
                                    </figure>
                                    <p>
                                    The moment, so blinded by desire, that they cannot foresee and
                                    trouble that are bound to ensue.
                                    </p>
                                    <Link href="/index-3" className="theme-btn btn-two">
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