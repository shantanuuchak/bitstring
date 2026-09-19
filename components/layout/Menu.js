import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
            <li className="current">
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
                <Link href="/service">Services</Link>
                <ul>
                <li>
                    <Link href="/service-details">ServiceNow Implementation</Link>
                </li>
                <li>
                    <Link href="/service-details-2">ITOM Integration</Link>
                </li>
                <li>
                    <Link href="/service-details-3">ITSM Consulting</Link>
                </li>
                <li>
                    <Link href="/service-details-4">HRSD Automation</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            </ul>
        </>
    )
}









                                    
