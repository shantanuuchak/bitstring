
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                    <div
                        className="image-layer"
                        style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}
                    />
                    <div className="auto-container">
                        <div className="content-box">
                        <h2>
                            We Provide <span>Solutions</span> To Your IT Needs
                        </h2>
                        <div className="lower-box">
                            <div className="icon-box">
                            <i className="flaticon-conversation" />
                            </div>
                            <div className="text">
                            ISO 27001 & ISO 9001 certified. Experience you can trust — technology that delivers.
                            </div>
                            <Link href="/about" className="theme-btn btn-two">
                            Our Services
                            </Link>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}
                        />
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>
                                ServiceNow <span>Consulting</span> & Implementation
                            </h2>
                            <div className="lower-box">
                                <div className="icon-box">
                                <i className="flaticon-conversation" />
                                </div>
                                <div className="text">
                                From ITSM to HRSD — we implement, customize, and optimize your ServiceNow ecosystem for maximum value.
                                </div>
                                <Link href="/contact" className="theme-btn btn-two">
                                Get In Touch
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}
                        />
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>
                                Connect:: Collaborate:: Deliver Values
                            </h2>
                            <div className="lower-box">
                                <div className="icon-box">
                                <i className="flaticon-conversation" />
                                </div>
                                <div className="text">
                                Over 100 years of combined expertise helping businesses transform through technology and talent.
                                </div>
                                <Link href="/contact" className="theme-btn btn-two">
                                Start a Conversation
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}
