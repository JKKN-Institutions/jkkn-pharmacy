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
                        <h2 className="wow fadeInUp" data-wow-delay="0.25s">Let's work together to create <span>the life and business</span></h2>
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
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Unlock your potential with expert guidance! Schedule a free consultation toward personal and business success.</p>
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
                                <p>Call us today for personalized coaching and transformative growth!</p>
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>+1 840 841 256</h3>
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
                                <p>Email us now for expert coaching and tailored growth solutions!</p>
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-mail.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>info@domain.com</h3>
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
                                <p>Visit us for personalized coaching and guidance toward lasting success!</p>
                            </div>
                            {/* Contact Info Contact End */}

                            {/* Contact Info Body Start */}
                            <div className="contact-info-body">
                                <div className="icon-box">
                                    <img src="/images/icon-location.svg" alt="" />
                                </div>

                                <div className="contact-info-title">
                                    <h3>785 15h Street, Office 478 Berlin, De 81566 </h3>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* Google Map Iframe End */}
                </div>
            </div>
        </div>
    </div>
    {/* Google Map End */}

    {/* Our FAQs Section Start */}
    <div className="our-faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    {/* Our FAQs Content Start */}
                    <div className="our-faqs-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">FAQ</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.25s">Your coaching questions <span>answered simply here</span></h2>
                        </div>
                        {/* Section Title End */}

                        {/* FAQs CTA Box Start */}
                        <div className="faqs-cta-box wow fadeInUp" data-wow-delay="0.75s">
                            {/* Company Client Images Start */}
                            <div className="company-client-images">
                                <div className="client-image">
                                    <figure className="image-anime">
                                        <img src="/images/satisfy-client-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="client-image">
                                    <figure className="image-anime">
                                        <img src="/images/satisfy-client-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="client-image">
                                    <figure className="image-anime">
                                        <img src="/images/satisfy-client-img-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="client-image">
                                    <figure className="image-anime">
                                        <img src="/images/satisfy-client-img-4.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="client-image">
                                    <figure className="image-anime">
                                        <img src="/images/satisfy-client-img-5.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                            {/* Company Client Images End */}
                            <div className="faqs-cta-content">
                                <h3>Still have you any question?</h3>
                                <p>We're ready to help you to answer any questions.</p>
                                <a href="tel:789859664" className="btn-phone"><i className="fa-solid fa-phone-volume"></i>+01 789 859 664</a>
                            </div>
                        </div>
                        {/* FAQs CTA Box End */}
                    </div>
                    {/* Our FAQs Content End */}
                </div>

                <div className="col-lg-6">
                    <div className="our-faq-section">
                        {/* FAQ Accordion Start */}
                        <div className="faq-accordion" id="faqaccordion">
                            {/* FAQ Item Start */}
                            <div className="accordion-item wow fadeInUp">
                                <h2 className="accordion-header" id="heading1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        What is a Life & Business Coach?
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                        <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                            Coaches do not diagnose or treat mental health conditions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item End */}

                            {/* FAQ Item Start */}
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                <h2 className="accordion-header" id="heading2">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        How does coaching differ from therapy?
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                        <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                            Coaches do not diagnose or treat mental health conditions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item End */}

                            {/* FAQ Item Start */}
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                <h2 className="accordion-header" id="heading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Who can benefit from life and business coaching? 
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                        <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                            Coaches do not diagnose or treat mental health conditions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item End */}

                            {/* FAQ Item Start */}
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                <h2 className="accordion-header" id="heading4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        How long does the coaching process take?
                                    </button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                        <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                            Coaches do not diagnose or treat mental health conditions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item End */}

                            {/* FAQ Item Start */}
                            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                <h2 className="accordion-header" id="heading5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Can coaching help my business grow?
                                    </button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                                    <div className="accordion-body">
                                        <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                            Coaches do not diagnose or treat mental health conditions.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FAQ Item End */}
                        </div>
                        {/* FAQ Accordion End */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Our FAQs Section End */}

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
