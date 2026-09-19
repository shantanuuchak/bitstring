'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-menu" >
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="assets/images/logo-4.png" alt="" />
                        </Link>
                    </div>

                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                                        <li><Link href="/index-2" onClick={handleMobileMenu}>Home Page 02</Link></li>
                                        <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                                        <li><Link href="/index-4" onClick={handleMobileMenu}>Home Page 04</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/service" onClick={handleMobileMenu}>Services</Link></li>
                                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Private</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                                                <li><Link href="/service-details" onClick={handleMobileMenu}>Traditional Consulting</Link></li>
                                                <li><Link href="/service-details-2" onClick={handleMobileMenu}>Portfolio Management</Link></li>
                                                <li><Link href="/service-details-3" onClick={handleMobileMenu}>Asset Allocation</Link></li>
                                                <li><Link href="/service-details-4" onClick={handleMobileMenu}>Risk Management</Link></li>
                                                <li><Link href="/service-details-5" onClick={handleMobileMenu}>Policy Development</Link></li>
                                                <li><Link href="/service-details-6" onClick={handleMobileMenu}>Fiduciary Consulting</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Institution</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="/service-details-7" onClick={handleMobileMenu}>Traditional Consulting</Link></li>
                                                <li><Link href="/service-details-8" onClick={handleMobileMenu}>Portfolio Management</Link></li>
                                                <li><Link href="/service-details-9" onClick={handleMobileMenu}>Asset Allocation</Link></li>
                                                <li><Link href="/service-details-10" onClick={handleMobileMenu}>Risk Management</Link></li>
                                                <li><Link href="/service-details-11" onClick={handleMobileMenu}>Policy Development</Link></li>
                                                <li><Link href="/service-details-12" onClick={handleMobileMenu}>Fiduciary Consulting</Link></li> 
                                            </ul>
                                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Retirement</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link href="/service-details-13" onClick={handleMobileMenu}>Traditional Consulting</Link></li>
                                                <li><Link href="/service-details-14" onClick={handleMobileMenu}>Portfolio Management</Link></li>
                                                <li><Link href="/service-details-15" onClick={handleMobileMenu}>Asset Allocation</Link></li>
                                                <li><Link href="/service-details-16" onClick={handleMobileMenu}>Risk Management</Link></li>
                                                <li><Link href="/service-details-17" onClick={handleMobileMenu}>Policy Development</Link></li>
                                                <li><Link href="/service-details-18" onClick={handleMobileMenu}>Fiduciary Consulting</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Projects</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link href="/project" onClick={handleMobileMenu}>3 Columns</Link></li>
                                        <li><Link href="/project-2" onClick={handleMobileMenu}>2 Columns</Link></li>
                                        <li><Link href="/project-details" onClick={handleMobileMenu}>Project Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}>
                                        <span className="fa fa-angle-right" />
                                    </div>
                                </li>

                                <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Blog</Link>
                                    <ul style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                        <li><Link href="/blog" onClick={handleMobileMenu}>Grid View</Link></li>
                                        <li><Link href="/blog-2" onClick={handleMobileMenu}>List View 01</Link></li>
                                        <li><Link href="/blog-3" onClick={handleMobileMenu}>List View 02</Link></li>
                                        <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(8)}>
                                        <span className="fa fa-angle-right" />
                                    </div>
                                </li>
                                <li className={isActive.key == 9 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                        <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                                        <li><Link href="/team" onClick={handleMobileMenu}>Our Team</Link></li>
                                        <li><Link href="/faq" onClick={handleMobileMenu}>Faq’s</Link></li>
                                        <li><Link href="/comingsoon" onClick={handleMobileMenu}>Coming Soon</Link></li>
                                        <li><Link href="/error" onClick={handleMobileMenu}>404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 9 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(9)}>
                                        <span className="fa fa-angle-right" />
                                    </div>
                                </li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*menu-outer end*/}
                    <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                        <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                    </ul>
                    </div>

                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />   
        </>
    )
}
export default MobileMenu;
