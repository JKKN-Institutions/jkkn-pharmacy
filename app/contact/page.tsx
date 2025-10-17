'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>


    {/* Preloader Start */}
    {/* <div className="preloader">
        <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src="/images/loader.svg" alt="" /></div>
        </div>
    </div> */}
    {/* Preloader End */}

    <Header />

    {/* Page Header Start */}
    <div className="page-header bg-section parallaxie">
        {/* Page Header Box Start */}
        <div className="page-header-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Page Header Content Start */}
                        <div className="page-header-content">
                            <h1 className="wow fadeInUp">Contact <span>us</span></h1>
                            <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
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

    {/* Page Contact Us Start */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-7 col-md-9">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">get in touch</h3>
                        <h2 className="wow fadeInUp" data-wow-delay="0.25s">Join our <span>college</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Contact Us Form Start */}
                    <div className="contact-us-form">
                        {/* Contact Us Title Start */}
                        <div className="contact-us-title">
                            <h3 className="wow fadeInUp">send a message</h3>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Unlock your future in pharmacy! Schedule a free consultation to start your journey toward success.</p>
                        </div>
                        {/* Contact Us Title End */}

                        {/* Contact Us Form Start */}
                        <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.4s">
                            <div className="row">
                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone Number" required />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-12 mb-5">
                                    <textarea name="message" className="form-control" id="message" rows={4} placeholder="Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="contact-form-btn">
                                        <button type="submit" className="btn-default">submit message</button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* Contact Us Form End */}
                    </div>
                    {/* Contact Us Form End */}
                </div>

                <div className="col-lg-6">
                    {/* Contact Information Start */}
                    <div className="contact-information">
                        {/* Contact Info Item Start */}
                        <div className="contact-info-item wow fadeInUp">
                            {/* Contact Info Contact Start */}
                            <div className="contact-info-contant">
                                <h3>call us</h3>
                                
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>+919345855001</h3>
                                </div>
                            </div>
                            {/* Contact Info Body End */}
                        </div>
                        {/* Contact Info Item End */}

                        {/* Contact Info Item Start */}
                        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                            {/* Contact Info Contact Start */}
                            <div className="contact-info-contant">
                                <h3>email us</h3>
                                
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-mail.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>pharmacy@jkkn.ac.in</h3>
                                </div>
                            </div>
                            {/* Contact Info Body End */}
                        </div>
                        {/* Contact Info Item End */}

                        {/* Contact Info Item Start */}
                        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                            {/* Contact Info Contact Start */}
                            <div className="contact-info-contant">
                                <h3>visit us</h3>
                                
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-location.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>JKKN COLLEGE OF PHARMACY Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT). Tamil Nadu – 638183. </h3>
                                </div>
                            </div>
                            {/* Contact Info Body End */}
                        </div>
                        {/* Contact Info Item End */}
                    </div>
                    {/* Contact Information End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Contact Us End */}

    {/* Google Map Start */}
    <div className="google-map bg-section">
        <div className="container-flude">
            <div className="row no-gutters">
                <div className="col-lg-12">
                    {/* Google Map Iframe Start */}
                    <div className="google-map-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12077.703432975773!2d77.727798!3d11.4447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9681dbc1ee209%3A0x3f44c8e40841c21b!2sJKKN%20College%20of%20Pharmacy!5e1!3m2!1sen!2sin!4v1760699936437!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* Google Map Iframe End */}
                </div>
            </div>
        </div>
    </div>
    {/* Google Map End */}

    <br/>

    <Footer />
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
