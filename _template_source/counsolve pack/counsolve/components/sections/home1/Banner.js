
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
                            Showing <span>You the way</span> of Success
                        </h2>
                        <div className="lower-box">
                            <div className="icon-box">
                            <i className="flaticon-conversation" />
                            </div>
                            <div className="text">
                            The moment, so blinded by desire, that they cannot foresee and trouble
                            that are bound to ensue.
                            </div>
                            <Link href="/" className="theme-btn btn-two">
                            Services &amp; Plan
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
                                Business <span>&amp; Individual</span> Consulting!..
                            </h2>
                            <div className="lower-box">
                                <div className="icon-box">
                                <i className="flaticon-conversation" />
                                </div>
                                <div className="text">
                                On the other hand, we denounce with righteous indignation and dislike
                                men who are so beguiled &amp; demoralized.
                                </div>
                                <Link href="/" className="theme-btn btn-two">
                                Services &amp; Plan
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
                                Ideas for <span>Your Better</span> Investment!..
                            </h2>
                            <div className="lower-box">
                                <div className="icon-box">
                                <i className="flaticon-conversation" />
                                </div>
                                <div className="text">
                                The moment, so blinded by desire, that they cannot foresee and trouble
                                that are bound to ensue.
                                </div>
                                <Link href="/" className="theme-btn btn-two">
                                Services &amp; Plan
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
