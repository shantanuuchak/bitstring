'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details">
                                Investmant <br />
                                Planning
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-1.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details-2">
                                Portfolio <br />
                                Management
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-2.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details-2">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details-3">
                                Asset <br />
                                Selection
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-3.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details-3">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details-4">
                                Risk <br />
                                Management
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-4.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details-4">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="service-block-two">
                    <div className="inner-box">
                        <h3>
                        <Link href="/service-details">
                            Investmant <br />
                            Planning
                        </Link>
                        </h3>
                        <figure className="image-box">
                        <img src="assets/images/service/service-1.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="link-box">
                        <Link href="/service-details">
                        <i className="flaticon-right-arrow-1" />
                        </Link>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details-2">
                                Portfolio <br />
                                Management
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-2.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details-2">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-two">
                        <div className="inner-box">
                            <h3>
                            <Link href="/service-details-3">
                                Asset <br />
                                Selection
                            </Link>
                            </h3>
                            <figure className="image-box">
                            <img src="assets/images/service/service-3.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="link-box">
                            <Link href="/service-details-3">
                            <i className="flaticon-right-arrow-1" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
