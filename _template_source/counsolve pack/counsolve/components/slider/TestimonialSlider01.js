'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="inner-box">
                        <div className="icon-box">
                        <div className="icon">
                            <i className="flaticon-knowledge" />
                        </div>
                        <span className="count-text">01</span>
                        </div>
                        <h3>Extensive Knowledge</h3>
                        <p>
                        Foresee the pain trouble all that rationally encounter
                        undertakes.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="inner-box">
                        <div className="icon-box">
                        <div className="icon">
                            <i className="flaticon-knowledge" />
                        </div>
                        <span className="count-text">02</span>
                        </div>
                        <h3>Extensive Knowledge</h3>
                        <p>
                        Foresee the pain trouble all that rationally encounter
                        undertakes.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
