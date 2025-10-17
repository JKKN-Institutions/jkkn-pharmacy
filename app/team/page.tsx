'use client';

import { useEffect, useState } from 'react';

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>


    {/* Preloader handled in layout */}

    {/* Header Start */}
    <header className="main-header">
        <div className="header-sticky">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* Logo Start */}
                    <a className="navbar-brand" href="./">
						<img src="/images/logo.png" alt="Logo" style={{ maxHeight: '50px', width: 'auto' }} />
					</a>
                    {/* Logo End */}

                    {/* Main Menu Start */}
                    <div className="collapse navbar-collapse main-menu">
                        <div className="nav-menu-wrapper">
                            <ul className="navbar-nav mr-auto" id="menu">
                                <li className="nav-item "><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                                <li className="nav-item"><a className="nav-link" href="/service">Services</a></li>
                                <li className="nav-item submenu"><a className="nav-link" href="#">Pages</a>
                                    <ul>
                                        <li className="nav-item"><a className="nav-link" href="/service-single">Service Details</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/blog-single">Blog Details</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/team">Our Team</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/team-single">Team Details</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/pricing">Pricing Plan</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/testimonial">Testimonial</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/image-gallery">Image Gallery</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/video-gallery">Video Gallery</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/faqs">FAQs</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/book-appointment">Book Appointment</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/404">404</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* Header Btn Start */}
                        <div className="header-btn d-inline-flex">
                            <a href="tel:+789859664" className="btn-phone"><i className="fa-solid fa-phone-volume"></i>+01 789 859 664</a>
                            <a href="/contact" className="btn-default">get in touch</a>
                        </div>
                        {/* Header Btn End */}
                    </div>
                    {/* Main Menu End */}
                    <div className="navbar-toggle"></div>
                </div>
            </nav>
            <div className="responsive-menu"></div>
        </div>
    </header>
    {/* Header End */}

    {/* Page Header Start */}
    <div className="page-header bg-section parallaxie">
        {/* Page Header Box Start */}
        <div className="page-header-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Page Header Content Start */}
                        <div className="page-header-content">
                            <h1 className="wow fadeInUp">Our <span>team</span></h1>
                            <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">team</li>
                                </ol>
                            </nav>
                        </div>
                        {/* Page Header Content End */}
                    </div>
                </div>
            </div>
        </div>
        {/* Page Header Box End */}
    </div>
    {/* Page Header End */}

    {/* Page Team Start */}
    <div className="page-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-1.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>sarah mitchell</h3>
                            <p>co founder</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.2s">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-2.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>emily carter</h3>
                            <p>project coordinator</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.4s">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-3.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>olivia martinez</h3>
                            <p>software engineer</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.6s">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-4.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>james anderson</h3>
                            <p>human resources specialist</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp" data-wow-delay="0.8s">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-5.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>amanda taylor</h3>
                            <p>financial analyst</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Team Member Item Start */}
                    <div className="team-member-item wow fadeInUp" data-wow-delay="1s">
                        {/* Team Image Start */}
                        <div className="team-image">
                            <a href="/team-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/team-6.jpg" alt="" />
                                </figure>
                            </a>

                            {/* Team Social Icon Start */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            {/* Team Social Icon End */}
                        </div>
                        {/* Team Image End */}

                        {/* Team Content Start */}
                        <div className="team-content">
                            <h3>david wilson</h3>
                            <p>operations manager</p>
                        </div>
                        {/* Team Content End */}
                    </div>
                    {/* Team Member Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Team End */}

    {/* Footer Start */}
    <footer className="main-footer bg-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-6">
                    {/* About Footer Start */}
                    <div className="about-footer">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h2>We develop & create <span>successful future</span></h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                    {/* About Footer End */}
                </div>

                <div className="col-lg-3 col-md-3">
                    {/* Footer Contact Information Start */}
                    <div className="footer-contact-info">
                        <h3>address</h3>
                        <p>Germany-785 15h Street, Office 478 Berlin, De 81566 </p>
                    </div>
                    {/* Footer Contact Information End */}

                    {/* Footer Social Link Start */}
                    <div className="footer-social-links">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    {/* Footer Social Link End */}
                </div>

                <div className="col-lg-2 col-md-3">
                    {/* Footer Contact Information Start */}
                    <div className="footer-contact-info">
                        <h3>say hello</h3>
                        <p>info@domain.com</p>
                        <p><span>+1 840 841 256</span></p>
                    </div>
                    {/* Footer Contact Information End */}
                </div>
            </div>

            {/* Footer Copyright Section Start */}
            <div className="footer-copyright">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        {/* Footer Menu Start */}
                        <div className="footer-menu">
                            <ul>
                                <li><a href="/">home</a></li>
                                <li><a href="/about">about</a></li>
                                <li><a href="/service">services</a></li>
                                <li><a href="/contact">contact</a></li>
                            </ul>
                        </div>
                        {/* Footer Menu End */}
                    </div>

                    <div className="col-md-6">
                        {/* Footer Copyright Start */}
                        <div className="footer-copyright-text">
                            <p>Copyright Â© 2024 All Rights Reserved.</p>
                        </div>
                        {/* Footer Copyright End */}
                    </div>
                </div>
            </div>
            {/* Footer Copyright Section End */}
        </div>
    </footer>
    {/* Footer End */}

    {/* Jquery Library File */}
    <script src="js/jquery-3.7.1.min.js"></script>
    {/* Bootstrap js file */}
    <script src="js/bootstrap.min.js"></script>
    {/* Validator js file */}
    <script src="js/validator.min.js"></script>
    {/* SlickNav js file */}
    <script src="js/jquery.slicknav.js"></script>
    {/* Swiper js file */}
    <script src="js/swiper-bundle.min.js"></script>
    {/* Counter js file */}
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    {/* Magnific js file */}
    <script src="js/jquery.magnific-popup.min.js"></script>
    {/* SmoothScroll */}
    <script src="js/SmoothScroll.js"></script>
    {/* Parallax js */}
    <script src="js/parallaxie.js"></script>
    {/* MagicCursor js file */}
    <script src="js/gsap.min.js"></script>
    <script src="js/magiccursor.js"></script>
    {/* Text Effect js file */}
    <script src="js/SplitText.js"></script>
    <script src="js/ScrollTrigger.min.js"></script>
    {/* YTPlayer js File */}
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    {/* Wow js file */}
    <script src="js/wow.js"></script>
    {/* Main Custom js file */}
    <script src="js/function.js"></script>
    <script src="https://demo.awaikenthemes.com/assets/js/theme-panel.js"></script>

    </>
  );
}
