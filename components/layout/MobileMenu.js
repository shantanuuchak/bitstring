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
                            <img src="/assets/images/logo.svg" alt="" />
                        </Link>
                    </div>

                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                                    <Link href="/" onClick={handleMobileMenu}>Home</Link>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/services" onClick={handleMobileMenu}>Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li className={isActive.subMenuKey == 1 ? "dropdown current" : "dropdown"}>
                                            <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(3, 1); }}>ServiceNow Consulting</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 1 ? "block" : "none"}` }}>
                                                <li><Link href="/services/itsm" onClick={handleMobileMenu}>ITSM</Link></li>
                                                <li><Link href="/services/itom" onClick={handleMobileMenu}>ITOM</Link></li>
                                                <li><Link href="/services/itam" onClick={handleMobileMenu}>ITAM</Link></li>
                                                <li><Link href="/services/hrsd" onClick={handleMobileMenu}>HRSD</Link></li>
                                                <li><Link href="/services/csm" onClick={handleMobileMenu}>CSM</Link></li>
                                                <li><Link href="/services/spm" onClick={handleMobileMenu}>SPM</Link></li>
                                                <li><Link href="/services/grc" onClick={handleMobileMenu}>GRC</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => { e.preventDefault(); handleToggle(3, 1); }}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link href="/services/talent-provisioning" onClick={handleMobileMenu}>Talent Provisioning</Link></li>
                                        <li className={isActive.subMenuKey == 2 ? "dropdown current" : "dropdown"}>
                                            <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(3, 2); }}>Technology Consulting</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 2 ? "block" : "none"}` }}>
                                                <li><Link href="/services/cybersecurity" onClick={handleMobileMenu}>Cybersecurity</Link></li>
                                                <li><Link href="/services/devops-cloud" onClick={handleMobileMenu}>DevOps & Cloud</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={(e) => { e.preventDefault(); handleToggle(3, 2); }}><span className="fa fa-angle-right" /></div>
                                        </li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*menu-outer end*/}
                    <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Pune, India</li>
                        <li><Link href="mailto:connect@bitstringit.com">connect@bitstringit.com</Link></li>
                        <li><Link href="https://bitstringit.in" target="_blank">bitstringit.in</Link></li>
                    </ul>
                    </div>

                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="https://twitter.com/bitstring_it" target="_blank"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="https://www.facebook.com/BitStringIT" target="_blank"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link href="https://www.linkedin.com/company/bitstring-it-services" target="_blank"><span className="fab fa-linkedin-in"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />   
        </>
    )
}
export default MobileMenu;
