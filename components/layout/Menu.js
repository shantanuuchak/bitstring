import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
            <li className="current">
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
                <Link href="/services">Services</Link>
                <ul>
                <li className="dropdown">
                    <Link href="#">ServiceNow Consulting</Link>
                    <ul>
                        <li><Link href="/services/itsm">ITSM</Link></li>
                        <li><Link href="/services/itom">ITOM</Link></li>
                        <li><Link href="/services/itam">ITAM</Link></li>
                        <li><Link href="/services/hrsd">HRSD</Link></li>
                        <li><Link href="/services/csm">CSM</Link></li>
                        <li><Link href="/services/spm">SPM</Link></li>
                        <li><Link href="/services/grc">GRC</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/services/talent-provisioning">Talent Provisioning</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Technology Consulting</Link>
                    <ul>
                        <li><Link href="/services/cybersecurity">Cybersecurity</Link></li>
                        <li><Link href="/services/devops-cloud">DevOps & Cloud</Link></li>
                    </ul>
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









                                    
