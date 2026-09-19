import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="outer-box">
                        <div className="menu-area">
                        <figure className="logo-box">
                            <a href="/">
                            <img src="assets/images/logo-5.png" alt="" />
                            </a>
                        </figure>
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
                        <div className="menu-right-content">
                        <div className="search-box">
                            <div className="search-box-outer search-toggler" onClick={handlePopup}>
                            <img src="assets/images/icons/icon-2.png" alt="" />
                            Search
                            </div>
                        </div>
                        <div className="language-box">
                            <h5>
                            <img src="assets/images/icons/icon-3.png" alt="" />
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
                        <div className="btn-box">
                            <a href="/index-3" className="theme-btn btn-one">
                            Start Consult
                            </a>
                        </div>
                        <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                            <img src="assets/images/icons/icon-18.png" alt="" />
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
                        <div className="menu-area">
                        <figure className="logo-box">
                            <a href="/">
                            <img src="assets/images/logo-5.png" alt="" />
                            </a>
                        </figure>
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
                        <div className="menu-right-content">
                        <div className="search-box">
                            <div className="search-box-outer search-toggler" onClick={handlePopup}>
                            <img src="assets/images/icons/icon-2.png" alt="" />
                            Search
                            </div>
                        </div>
                        <div className="language-box">
                            <h5>
                            <img src="assets/images/icons/icon-3.png" alt="" />
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
                        <div className="btn-box">
                            <a href="/index-3" className="theme-btn btn-one">
                            Start Consult
                            </a>
                        </div>
                        <div className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                            <img src="assets/images/icons/icon-18.png" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* header-lower end */}
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </>
    )
}
