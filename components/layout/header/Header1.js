import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
  {/* header-top */}
  <div className="header-top">
    <div className="outer-container">
      <ul className="info-list clearfix">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/career">Careers</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="social-links clearfix">
        <li>
          <h5>Social Connect</h5>
        </li>
        <li>
          <Link href="https://www.facebook.com/BitStringIT" target="_blank">
            <i className="fa-brands fa-facebook" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/bitstring-it-services" target="_blank">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bitstring_it" target="_blank">
            <i className="fa-brands fa-twitter" />
          </Link>
        </li>
      </ul>

    </div>
  </div>
  {/* header-upper */}
  <div className="header-upper">
    <div className="outer-container">
      <div className="left-column">
        <figure className="logo-box">
          <Link href="/">
            <img src="assets/images/logo.svg" alt="" />
          </Link>
        </figure>
        <div className="award-box">
          <div className="award-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa-solid fa-certificate" style={{ fontSize: '40px', color: '#0052cc' }} />
          </div>
          <h5>
            ISO 27001 & ISO 9001 <br />
            Certified IT Services
          </h5>
        </div>
      </div>
      <div className="right-column">
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
            <Link href="tel:02069011184">(020) 69011184</Link>
          </h3>
        </div>
        <div className="btn-box">
          <Link href="/contact" className="theme-btn btn-one">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  </div>

                
                 {/* header-lower */}
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="menu-area clearfix">
                                {/* Mobile Navigation Toggler */}
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
                                        <img src="/assets/images/icons/icon-2.png" alt="" />
                                        Search
                                    </div>
                                </div>

                                <div className="nav-btn nav-toggler navSidebar-button clearfix"  onClick={handleSidebar}>
                                    <img src="/assets/images/icons/icon-4.png" alt="" />
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
                            <div className="menu-area clearfix">
                                {/* Mobile Navigation Toggler */}
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
                                        <img src="/assets/images/icons/icon-2.png" alt="" />
                                        Search
                                    </div>
                                </div>

                                <div className="nav-btn nav-toggler navSidebar-button clearfix"  onClick={handleSidebar}>
                                    <img src="/assets/images/icons/icon-4.png" alt="" />
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
