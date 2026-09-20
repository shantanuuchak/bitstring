import "@/node_modules/react-modal-video/css/modal-video.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import '@/public/assets/css/style.css';
import { serviceNowSans } from '@/lib/font'
export const metadata = {
    title: 'BitString IT Services',
    description: 'Specialized IT consulting, ServiceNow implementation, and ServiceOps training.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${serviceNowSans.variable}`} data-scroll-behavior="smooth">
            <body>{children}</body>
        </html>
    )
}
