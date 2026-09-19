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
                        <img src="assets/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="content-box">
                        <h4>About Us</h4>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi
                        </p>
                        <p>
                        Research oriented solutions for Data Science and Machine
                        Learning business needs.
                        </p>
                        <Link href="/about" className="theme-btn btn-two">
                        About Us
                        </Link>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li>
                            <a href="tel:+8801682648101">+88 01682648101</a>
                        </li>
                        <li>
                            <a href="mailto:info@example.com">info@example.com</a>
                        </li>
                        </ul>
                    </div>
                    <ul className="social-box clearfix">
                        <li>
                        <a href="/">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        </li>
                        <li>
                        <a href="/">
                            <i className="fa-brands fa-square-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="/">
                            <i className="fa-solid fa-basketball" />
                        </a>
                        </li>
                        <li>
                        <a href="/">
                            <i className="fa-brands fa-youtube" />
                        </a>
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