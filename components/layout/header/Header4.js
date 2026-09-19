import Link from "next/link"
import Menu from "../Menu2"
import MobileMenu from "../MobileMenu"

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
                {/* header-upper */}
                <div className="header-upper">
                    <div className="outer-container">
                    <div className="left-column">
                        <figure className="logo-box">
                        <Link href="/index-4">
                            <img src="assets/images/logo-7.png" alt="" />
                        </Link>
                        </figure>
                        <ul className="links-list clearfix">
                        <li>
                            <Link href="/index-4">
                            <i className="flaticon-expand-arrows" />
                            News &amp; Media
                            </Link>
                        </li>
                        <li>
                            <Link href="/index-4">Investors</Link>
                        </li>
                        <li>
                            <Link href="/index-4">Careers</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <ul className="social-links clearfix">
                        <li>
                            <Link href="/">
                            <i className="fa-brands fa-facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <i className="fa-brands fa-square-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <i className="fa-solid fa-basketball" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <i className="fa-brands fa-youtube" />
                            </Link>
                        </li>
                        </ul>
                        <div className="support-box">
                        <div className="icon-box">
                            <i className="flaticon-headphone" />
                        </div>
                        <h5>
                            <Link href="/faq">
                            Have <br />
                            Question?
                            </Link>
                        </h5>
                        </div>
                        <div className="phone">
                        <h3>
                            <a href="tel:19494246646">(949) 424-6646</a>
                        </h3>
                        </div>
                        <div className="btn-box">
                        <Link href="/" className="theme-btn btn-one">
                            Start Consult
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>

                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                        <img src="assets/images/icons/icon-24.png" alt="" />
                        </div>
                        <div className="menu-area">
                        {/*Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div
                                className="collapse navbar-collapse show clearfix"
                                id="navbarSupportedContent"
                                >
                                <Menu />
                            </div>
                        </nav>
                        </div>
                        <div className="search-box">
                        <div className="search-box-outer search-toggler" onClick={handlePopup}>
                            <img src="assets/images/icons/icon-25.png" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                        <img src="assets/images/icons/icon-24.png" alt="" />
                        </div>
                        <div className="menu-area">
                        {/*Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div
                                className="collapse navbar-collapse show clearfix"
                                id="navbarSupportedContent"
                                >
                                <Menu />
                            </div>
                        </nav>
                        </div>
                        <div className="search-box">
                        <div className="search-box-outer search-toggler" onClick={handlePopup}>
                            <img src="assets/images/icons/icon-25.png" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* header-lower end */}
                </div>
                {/* End Sticky Menu */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
