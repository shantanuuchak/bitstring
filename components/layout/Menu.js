import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
            <li className="current dropdown">
                <Link href="/">Home</Link>
                <ul>
                <li>
                    <Link href="/">Home Page 01</Link>
                </li>
                <li>
                    <Link href="/index-2">Home Page 02</Link>
                </li>
                <li>
                    <Link href="/index-3">Home Page 03</Link>
                </li>
                <li>
                    <Link href="/index-4">Home Page 04</Link>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">Services</Link>
                <ul>
                <li>
                    <Link href="/service">Services</Link>
                </li>
                <li className="dropdown">
                    <Link href="/">Private</Link>
                    <ul>
                    <li>
                        <Link href="/service-details">Traditional Consulting</Link>
                    </li>
                    <li>
                        <Link href="/service-details-2">Portfolio Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-3">Asset Allocation</Link>
                    </li>
                    <li>
                        <Link href="/service-details-4">Risk Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-5">Policy Development</Link>
                    </li>
                    <li>
                        <Link href="/service-details-6">Fiduciary Consulting</Link>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/">Institution</Link>
                    <ul>
                    <li>
                        <Link href="/service-details-7">Traditional Consulting</Link>
                    </li>
                    <li>
                        <Link href="/service-details-8">Portfolio Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-9">Asset Allocation</Link>
                    </li>
                    <li>
                        <Link href="/service-details-10">Risk Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-11">Policy Development</Link>
                    </li>
                    <li>
                        <Link href="/service-details-12">Fiduciary Consulting</Link>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/">Retirement</Link>
                    <ul>
                    <li>
                        <Link href="/service-details-13">Traditional Consulting</Link>
                    </li>
                    <li>
                        <Link href="/service-details-14">Portfolio Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-15">Asset Allocation</Link>
                    </li>
                    <li>
                        <Link href="/service-details-16">Risk Management</Link>
                    </li>
                    <li>
                        <Link href="/service-details-17">Policy Development</Link>
                    </li>
                    <li>
                        <Link href="/service-details-18">Fiduciary Consulting</Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">Projects</Link>
                <ul>
                <li>
                    <Link href="/project">3 Columns</Link>
                </li>
                <li>
                    <Link href="/project-2">2 Columns</Link>
                </li>
                <li>
                    <Link href="/project-details">Project Details</Link>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">Blog</Link>
                <ul>
                <li>
                    <Link href="/blog">Grid View</Link>
                </li>
                <li>
                    <Link href="/blog-2">List View 01</Link>
                </li>
                <li>
                    <Link href="/blog-3">List View 02</Link>
                </li>
                <li>
                    <Link href="/blog-details">Blog Details</Link>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">Pages</Link>
                <ul>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/team">Our Team</Link>
                </li>
                <li>
                    <Link href="/faq">Faq’s</Link>
                </li>
                <li>
                    <Link href="/comingsoon">Coming Soon</Link>
                </li>
                <li>
                    <Link href="/error">404</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            </ul>
        </>
    )
}









                                    
