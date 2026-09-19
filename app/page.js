import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Video from "@/components/sections/home1/Video"
import Services from "@/components/sections/home1/Services"
import Growth from "@/components/sections/home1/Growth"
import Project from "@/components/sections/home1/Project"
import Testimonial from "@/components/sections/home1/Testimonial"
import Industries from "@/components/sections/home1/Industries"
import Chooseus from "@/components/sections/home1/Chooseus"
import Working from "@/components/sections/home1/Working"
import News from "@/components/sections/home1/News"
import Faq from "@/components/sections/home1/Faq"
import Appointment from "@/components/sections/home1/Appointment"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Video />
                <Services />
                <Growth />
                <Chooseus />
                <Industries />
                <Working />
                <Project />
                <News />
                <Testimonial />
                <Faq />
                <Appointment />
            </Layout>
        </>
    )
}