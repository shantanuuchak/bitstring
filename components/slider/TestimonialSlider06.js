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
export default function TestimonialSlider06() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="slider-content">
                    <div className="testimonial-block-one">
                        <figure className="thumb-box">
                        <img
                            src="assets/images/resource/testimonial-1.png"
                            alt=""
                        />
                        </figure>
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-quote" />
                        </div>
                        <h4>Outstanding ServiceNow Delivery!</h4>
                        <p>
                            BitString implemented our ITSM module ahead of schedule and with zero disruption to our operations.
                            Their certified team understood our workflows deeply and delivered a solution that exceeded expectations.
                        </p>
                        <h3>Rahul Sharma</h3>
                        <span className="designation">
                            VP of IT Operations - Schoolnet India
                        </span>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="slider-content">
                  <div className="testimonial-block-one">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-quote" />
                      </div>
                      <h4>Trusted IT Partner</h4>
                      <p>
                        From discovery to go-live, BitString was a true partner. Their expertise in ServiceNow GRC helped us
                        achieve compliance readiness 40% faster than our previous timeline.
                      </p>
                      <h3>Priya Nair</h3>
                      <span className="designation">
                        Head of Compliance - Hadron Technologies
                      </span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                <div className="slider-content">
                  <div className="testimonial-block-one">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-quote" />
                      </div>
                      <h4>Expert Talent, Zero Ramp-Up Time</h4>
                      <p>
                        We engaged BitString for talent provisioning and had certified ServiceNow developers on-board within a week.
                        The quality and professionalism of their consultants is truly best-in-class.
                      </p>
                      <h3>Arjun Mehta</h3>
                      <span className="designation">
                        CTO - Successive Digital
                      </span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
