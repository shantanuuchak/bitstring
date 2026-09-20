import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
        {/* sidebar cart item */}
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : "close-sidebar"}`}>
            <div className="xs-overlay xs-bg-black"onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-2 xs-bg-black"onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-3 xs-bg-black"onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-4 xs-bg-black"onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-5 xs-bg-black"onClick={handleSidebar}></div>
            <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container" onClick={handleSidebar}>
                <div className="widget-heading">
                <a href="#" className="close-side-widget">
                    <i className="fa fa-times" />
                </a>
                </div>
                <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                    <div className="content-inner">
                    <div className="logo">
                        <Link href="/">
                        <img src="/assets/images/logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="content-box">
                        <h4>About Us</h4>
                        <p>
                        Specialized IT services in ServiceNow consulting, offering ITSM, ITOM, HRSD, and more.
                        </p>
                        <p>
                        Experience you can trust. Technology that delivers.
                        </p>
                        <Link href="/about" className="theme-btn btn-two">
                        About Us
                        </Link>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                        <li>A-304, Nyati Empress, Vimamnagar, Pune, MH 411014</li>
                        <li>
                            <a href="tel:02069011184">(020) 69011184</a>
                        </li>
                        <li>
                            <a href="mailto:connect@bitstringit.com">connect@bitstringit.com</a>
                        </li>
                        </ul>
                    </div>
                    <ul className="social-box clearfix">
                        <li>
                        <Link href="https://www.facebook.com/BitStringIT" target="_blank">
                            <i className="fa-brands fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="https://twitter.com/bitstring_it" target="_blank">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="https://www.linkedin.com/company/bitstring-it-services" target="_blank">
                            <i className="fa-brands fa-linkedin" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* END sidebar widget item */}
        </>
    )
}