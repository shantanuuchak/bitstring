import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* header-top */}
                <div className="header-top-two">
                    <div className="outer-container">
                        <ul className="info-list clearfix">
                        <li>
                            <div className="icon-box">
                            <img src="/assets/images/icons/icon-9.png" alt="" />
                            </div>
                            Talk to Us: <Link href="tel:19494246646"><span>(949) 424-6646</span></Link> /{' '}
                            <Link href="mailto:connect@bitstringit.com"><span>connect@bitstringit.com</span></Link>
                        </li>
                        <li>
                            <div className="icon-box">
                            <img src="/assets/images/icons/icon-10.png" alt="" />
                            </div>
                            Reach Us: <span>Hobert, LA 90010 / Mon - Sat: 9am to 6pm</span>
                        </li>
                        </ul>
                        <div className="language-box">
                        <h5>
                            <img src="/assets/images/icons/icon-11.png" alt="" />
                            Global:
                        </h5>
                        <div className="select-box">
                            <select className="selectmenu">
                            <option value="eng">Eng</option>
                            <option value="chinese">Chinese</option>
                            <option value="hindi">Hindi</option>
                            <option value="turkish">Turkish</option>
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <figure className="logo-box">
                        <Link href="/">
                            <img src="assets/images/logo-3.png" alt="" />
                        </Link>
                        </figure>
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
                        <div className="menu-right-content">
                            <div className="support-box">
                            <button>
                                <img src="assets/images/icons/icon-12.png" alt="" />
                                Consult
                                <span>with our experts</span>
                            </button>
                            </div>
                            <div className="search-box">
                            <div className="search-box-outer search-toggler" onClick={handlePopup}>
                                <img src="assets/images/icons/icon-2.png" alt="" />
                                Search
                            </div>
                            </div>
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
                                <i className="fa-brands fa-youtube" />
                                </Link>
                            </li>
                            </ul>
                            <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                            <img src="assets/images/icons/icon-14.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* header-lower end */}

                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <figure className="logo-box">
                        <Link href="/">
                            <img src="assets/images/logo-3.png" alt="" />
                        </Link>
                        </figure>
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
                        <div className="menu-right-content">
                            <div className="support-box">
                            <button>
                                <img src="assets/images/icons/icon-12.png" alt="" />
                                Consult
                                <span>with our experts</span>
                            </button>
                            </div>
                            <div className="search-box">
                            <div className="search-box-outer search-toggler" onClick={handlePopup}>
                                <img src="assets/images/icons/icon-2.png" alt="" />
                                Search
                            </div>
                            </div>
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
                                <i className="fa-brands fa-youtube" />
                                </Link>
                            </li>
                            </ul>
                            <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                            <img src="assets/images/icons/icon-14.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
