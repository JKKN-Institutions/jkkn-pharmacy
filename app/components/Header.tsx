
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setActiveSubmenu(null);
        }
    };

    const toggleSubmenu = (submenuId: string) => {
        setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
    };

    return (
        <>
            <style jsx>{`
                .navbar-nav .submenu > ul {
                    z-index: 9999 !important;
                    position: absolute !important;
                }
                .main-header {
                    position: relative;
                    z-index: 1000;
                }
                
                /* Logo responsive sizing */
                .header-logo {
                    max-height: 100px;
                    width: auto;
                }
                
                /* Mobile Responsive Styles */
                @media (max-width: 991px) {
                    .main-header {
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .header-sticky {
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .navbar {
                        padding: 8px 15px !important;
                        margin: 0 !important;
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                        width: 100% !important;
                    }
                    .container-fluid {
                        padding: 0 15px !important;
                        margin: 0 !important;
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                        width: 100% !important;
                    }
                    .navbar-brand {
                        margin: 0 !important;
                        padding: 0 !important;
                        flex: 0 0 auto !important;
                    }
                    .navbar-brand img {
                        max-height: 60px !important;
                        width: auto !important;
                    }
                    .navbar-collapse {
                        display: none !important;
                    }
                    .navbar-collapse.show {
                        display: block !important;
                        position: absolute;
                        top: 100%;
                        left: 50% !important; /* ignore parent padding */
                        right: auto !important;
                        transform: translateX(-50%);
                        width: 100vw; /* full viewport width */
                        background: #fff;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        z-index: 1000;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .navbar-nav {
                        flex-direction: column !important;
                        max-height: none !important;
                        padding: 15px;
                        width: 100% !important;
                    }
                    .navbar-nav .nav-item {
                        width: 100%;
                        border-bottom: 1px solid #eee;
                    }
                    .navbar-nav .nav-item:last-child {
                        border-bottom: none;
                    }
                    .navbar-nav .nav-link {
                        padding: 12px 0;
                        display: block;
                        width: 100%;
                        color: #1f2937 !important; /* slate-800 */
                    }
                    .navbar-nav .nav-link:hover,
                    .navbar-nav .nav-link:focus {
                        color: #0ea5e9 !important; /* sky-500 */
                    }
                    .navbar-nav .submenu > ul {
                        position: static !important;
                        display: none;
                        background: #ffffff; /* clean white background */
                        margin: 10px 0;
                        padding: 0 15px;
                        box-shadow: none;
                    }
                    .navbar-nav .submenu > a.nav-link {
                        color: #111827 !important; /* gray-900 for parent items */
                    }
                    .navbar-nav .submenu.mobile-active > a.nav-link {
                        color: #0ea5e9 !important; /* highlight when open */
                    }
                    .navbar-nav .submenu:hover > ul,
                    .navbar-nav .submenu.active > ul,
                    .navbar-nav .submenu.mobile-active > ul {
                        display: block;
                    }
                    .navbar-nav .submenu > ul li {
                        border-bottom: 1px solid #e9ecef;
                    }
                    .navbar-nav .submenu > ul li:last-child {
                        border-bottom: none;
                    }
                    .navbar-nav .submenu > ul .nav-link {
                        padding: 8px 0;
                        font-size: 14px;
                        color: #374151 !important; /* gray-700 */
                    }
                    .navbar-nav .submenu > ul .nav-link:hover {
                        color: #0ea5e9 !important;
                    }
                    .navbar-nav .submenu > ul .submenu > ul {
                        margin: 5px 0;
                        padding: 0 10px;
                        background: #e9ecef;
                    }
                    .navbar-nav .submenu > ul .submenu > ul .nav-link {
                        padding: 6px 0;
                        font-size: 13px;
                    }
                }
                
                /* Mobile Menu Toggle Button */
                .mobile-menu-toggle {
                    display: none;
                }
                @media (max-width: 991px) {
                    .mobile-menu-toggle {
                        display: block;
                        background: none;
                        border: none;
                        font-size: 24px;
                        color: #333;
                        cursor: pointer;
                        padding: 5px 10px;
                        margin: 0 0 0 auto !important; /* push to right */
                    }
                }
                
                /* Remove unwanted spacing globally */
                * {
                    box-sizing: border-box;
                }
                
                /* Remove default margins and padding from body and html on mobile */
                @media (max-width: 991px) {
                    body {
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    html {
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .main-header {
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                    }
                }
                
                /* Desktop styles remain unchanged */
                @media (min-width: 992px) {
                    .navbar-collapse {
                        display: flex !important;
                    }
                    .navbar-nav {
                        display: flex !important;
                        flex-wrap: wrap;
                        max-height: 85px;
                    }
                }
            `}</style>

            {/* Header Start */}
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            {/* Logo Start */}
                            <Link href="/" className="navbar-brand">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Logo" 
                                    className="header-logo"
                                />
                            </Link>
                            {/* Logo End */}

                            {/* Mobile Menu Toggle Button */}
                            <button 
                                className="mobile-menu-toggle" 
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? '✕' : '☰'}
                            </button>

                            {/* Main Menu Start */}
                            <div className={`collapse navbar-collapse main-menu ${isMobileMenuOpen ? 'show' : ''}`}>
                                <div className="nav-menu-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <ul className="navbar-nav mr-auto" id="menu" style={{ display: 'flex', flexWrap: 'wrap', maxHeight: '85px' }}>
                                        <li className="nav-item "><Link className="nav-link" href="/">Home</Link></li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'about' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="/about" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('about');
                                                }
                                            }}>About Us</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="/about/about-us-overview">About us Overview</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/vision-mission">Vision & Mission</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Institutional distinctiveness</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/our-trust">Our Trust</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/our-management">Our Management</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/our-institutions">Our Institutions</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/the-principal">The Principal</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Administration</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/images/pdf/RTI.pdf" target="_blank" rel="noopener noreferrer">Central Public Information Officer</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/why-jkkn">Why JKKN?</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/peos">PEO&apos;S</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/quality-policy">Quality Policy</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about/generalrules-and-regulations">General Rules and Regulations</a></li>
                                                <li className="nav-item submenu"><a className="nav-link" href="">Afiliation Details</a>
                                                <ul>
                                                    <li className="nav-item"><a className="nav-link" href="/about/recognition-approval-accrediation">Recognition approval accrediation</a></li>
                                                </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="/about/institutional-development-plan">Institutional Development Plan</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Institutional Strategic Plan</a></li>

                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'programmes' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="/service" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('programmes');
                                                }
                                            }}>Programmes Offered</a>
                                            <ul style={{ zIndex: 9999 }}>
                                                <li className="nav-item submenu"><a className="nav-link" href="">UG Program</a>
                                                    <ul style={{ zIndex: 9999 }}>
                                                        <li className="nav-item"><a className="nav-link" href="">B-Pharmacy</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">B-Pharmacy-Lateral Entry</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item submenu"><a className="nav-link" href="">PG Program</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="">M-Pharmacy</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">PHARM.D (Doctor of Pharmacy)</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">PHARM.D (POST BACCALAUREATE)</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item submenu"><a className="nav-link" href="">PhD</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="">DOCTOR OF PHILOSOPHY (Ph.D)</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'department' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('department');
                                                }
                                            }}>Department</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="/blog">Pharmacology</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/blog-single">Pharmacy Practice</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Pharmaceutics</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Pharmacognosy</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Pharmaceutical Chemistry</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/faqs">Pharmaceutical Analysis</a></li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'academic' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('academic');
                                                }
                                            }}>Academic</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="/blog">Admission Process</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/blog-single">Academic Calendar</a></li>
                                                <li className="nav-item submenu"><a className="nav-link" href="/team">Time Table</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="/team">B.Pharm Time Table 2024-25</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/team">Pharm.D Time Table 2024-25</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/team">M.Pharm Time Table 2024-25</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Exam Schedule</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Ordinances Pertaining To Examinations</a></li>
                                                <li className="nav-item submenu"><a className="nav-link" href="/faqs">COs_POs</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="/team">B.PHARM</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/team">M.PHARM</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/team">PHARM D</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Attainment of COs and POs</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Study Material</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Faculty Profile</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/faqs">Details of Students</a></li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'facilities' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('facilities');
                                                }
                                            }}>Facilities</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="">Class Room</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Seminar Hall</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Lab</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Central Facilities</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Library</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Internship opportunities for students</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">hostel</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Sports</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Food Court</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Transport</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Health Facilities</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Ambulance Services</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Wifi</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Bank & Post Office</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">National Service Scheme (NSS)</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Animal House Facility</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Disabled-friendly and Barrier Free Environment</a></li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'gallery' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('gallery');
                                                }
                                            }}>Gallery</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="#">Image Gallery</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Video Gallery</a></li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'pages' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('pages');
                                                }
                                            }}>Pages</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="">NAAC</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">IQAC</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Alumini</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Research</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">NIRF</a></li>
                                                <li className="nav-item submenu"><a className="nav-link" href="">Placements</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="">Placement Cell and Its Activities</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">corporate-relations-industry-interface</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">campus-recruitment</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item submenu"><a className="nav-link" href="">Committees</a>
                                                    <ul>
                                                        <li className="nav-item"><a className="nav-link" href="">Various Committees</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Sports committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Discipline Committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Anti-Ragging Committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Malpractice Prevention Committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Internal complaints committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Cultural committee</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Student Grievance Redressal Committee (SGRC)</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Equal Opportunity Cell (EoC)</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="">Socio-economically Disadvantaged Group (SEDG) Cell</a></li>

                                                    </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/blog-single">Blog Details</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/team">Our Team</a></li>

                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'others' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('others');
                                                }
                                            }}>Others</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="">Best Practice</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Competitive Examination and Carrier</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Digital Campus</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">social work activities</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Drug Information Center</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">National Innovation and Startup Policy 2020-2021</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Institutions Innovation Council</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Incubation Centre</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Entrepreneurship Development Cell</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Feedback analysis</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">IPA-Bhavani-Kumarapalayam Local Branch</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Privacy Policy</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Audit Statements Finance</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Newsletters</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="#">Circulars and Notices</a></li>
                                        <li className={`nav-item submenu ${activeSubmenu === 'disclosures' ? 'mobile-active' : ''}`}>
                                            <a className="nav-link" href="#" onClick={(e) => {
                                                if (window.innerWidth <= 991) {
                                                    e.preventDefault();
                                                    toggleSubmenu('disclosures');
                                                }
                                            }}>Mandatory Disclosures</a>
                                            <ul>
                                                <li className="nav-item"><a className="nav-link" href="">Ugc public disclosure compliance</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">UGC Regulations and Guidelines</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Public Self disclosure</a></li>
                                                <li className="nav-item"><a className="nav-link" href="">Undertaking</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>

                            </div>
                            {/* Main Menu End */}
                            <div className="navbar-toggle"></div>
                        </div>
                    </nav>
                    <div className="responsive-menu"></div>
                </div>
            </header>
            {/* Header End */}
        </>
    );
}
