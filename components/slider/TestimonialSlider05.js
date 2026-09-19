
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

    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 3 },
    }
}

const services = [
    {
        icon: "flaticon-analytics",
        count: "01",
        title: "ITSM",
        fullTitle: "IT Service Management",
        description: "Streamline incident, problem, and change management. We optimize your ServiceNow ITSM implementation for maximum efficiency.",
        href: "/services/itsm",
    },
    {
        icon: "flaticon-global",
        count: "02",
        title: "ITOM",
        fullTitle: "IT Operations Management",
        description: "Gain full visibility across your infrastructure. Discovery, Service Mapping, and Event Management — all on ServiceNow.",
        href: "/services/itom",
    },
    {
        icon: "flaticon-money-bag",
        count: "03",
        title: "ITAM",
        fullTitle: "IT Asset Management",
        description: "Track, manage, and optimize software and hardware assets throughout their lifecycle on the ServiceNow platform.",
        href: "/services/itam",
    },
    {
        icon: "flaticon-team",
        count: "04",
        title: "HRSD",
        fullTitle: "HR Service Delivery",
        description: "Transform the employee experience with unified HR portals, lifecycle events, and case management on ServiceNow.",
        href: "/services/hrsd",
    },
    {
        icon: "flaticon-customer",
        count: "05",
        title: "CSM",
        fullTitle: "Customer Service Management",
        description: "Deliver seamless customer service with proactive issue resolution and self-service capabilities on ServiceNow CSM.",
        href: "/services/csm",
    },
    {
        icon: "flaticon-target",
        count: "06",
        title: "GRC",
        fullTitle: "Governance, Risk & Compliance",
        description: "Manage risk and compliance with confidence. BitString implements GRC frameworks on ServiceNow for regulatory readiness.",
        href: "/services/grc",
    },
    {
        icon: "flaticon-shield",
        count: "07",
        title: "Cybersecurity",
        fullTitle: "Cybersecurity Services",
        description: "Protect your digital assets with expert cybersecurity strategy, assessments, and managed security solutions.",
        href: "/services/cybersecurity",
    },
    {
        icon: "flaticon-cloud",
        count: "08",
        title: "DevOps & Cloud",
        fullTitle: "DevOps & Cloud Services",
        description: "Accelerate your digital transformation with modern DevOps practices and cloud adoption strategies.",
        href: "/services/devops-cloud",
    },
]

export default function TestimonialSlider05() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {services.map((service, idx) => (
                    <SwiperSlide key={idx} className="slide">
                        <div className="service-block-one block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon">
                                    <i className={service.icon} />
                                </div>
                                <span className="count-text">{service.count}</span>
                                </div>
                                <h3>
                                <Link href={service.href}>
                                    {service.title} <br />
                                    {service.fullTitle}
                                </Link>
                                </h3>
                                <div className="link">
                                <Link href={service.href}>
                                    <span>Explore Service</span>
                                </Link>
                                </div>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
