'use client';

import { useEffect, useState } from 'react';

export default function ServicePage() {
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
                            <h1 className="wow fadeInUp">Our <span>services</span></h1>
                            <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">services</li>
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

    {/* Page Services Start */}
    <div className="page-services">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-1.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>personal coaching</h3>
                            <p>Transforming lives through tailored coaching for personal success.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-2.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>business coaching</h3>
                            <p>Unlock potential and drive success with expert coaching.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-3.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>career development</h3>
                            <p>Fostering skills and growth for organizational career advancement.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-4.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>team coaching</h3>
                            <p>Enhancing collaboration and performance through effective team coaching.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-5.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>relationship coaching</h3>
                            <p>Transforming workplace dynamics through expert relationship coaching services.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1s">
                        {/* Icon Box Start */}
                        <div className="icon-box">
                            <img src="/images/icon-services-6.svg" alt="" />
                        </div>
                        {/* Icon Box End */}

                        {/* Service Item Content Start */}
                        <div className="service-item-content">
                            <h3>spiritual coaching</h3>
                            <p>Guiding teams toward purpose through spiritual coaching practices.</p>
                        </div>
                        {/* Service Item Content End */}

                        {/* Service Btn Start */}
                        <div className="service-btn">
                            <a href="/service-single" className="readmore-btn">learn more</a>
                        </div>
                        {/* Service Btn End */}
                    </div>
                    {/* Service Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Services End */}

    {/* Company Growth Section Start */}
    <div className="company-growth bg-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    {/* Company Growth Image Start */}
                    <div className="company-growth-image">
                        <figure className="image-anime reveal">
                            <img src="/images/company-growth-img.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Company Growth Image End */}
                </div>

                <div className="col-lg-7">
                    {/* Company Growth Content Start */}
                    <div className="company-growth-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">wo we are</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.25s">Unlock your potential <span>with our expertise</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        </div>
                        {/* Section Title End */}

                        {/* Company Growth Button Start */}
                        <div className="company-growth-btn wow fadeInUp" data-wow-delay="0.75s">
                            <a href="/contact" className="btn-default">get started</a>
                        </div>
                        {/* Company Growth Button End */}
                    </div>
                    {/* Company Growth Content End */}
                </div>

                <div className="col-lg-12">
                    {/* Company Growth Box Start */}
                    <div className="company-growth-box">
                        {/* Company Growth Item Start */}
                        <div className="company-growth-item">
                            <h2><span className="counter">9,857</span></h2>
                            <h3>business success</h3>
                            <p>Achieving sustainable growth through strategic business success initiatives.</p>
                        </div>
                        {/* Company Growth Item End */}

                        {/* Company Growth Item Start */}
                        <div className="company-growth-item">
                            <h2><span className="counter">90</span>%</h2>
                            <h3>business strategy</h3>
                            <p>Driving success through innovative and adaptive business strategies.</p>
                        </div>
                        {/* Company Growth Item End */}

                        {/* Company Growth Item Start */}
                        <div className="company-growth-item">
                            <h2><span className="counter">60</span>%</h2>
                            <h3>profit upscale</h3>
                            <p>Maximizing revenue through strategic profit upscale initiatives.</p>
                        </div>
                        {/* Company Growth Item End */}

                        {/* Company Growth Item Start */}
                        <div className="company-growth-item">
                            <h2><span className="counter">30</span>+</h2>
                            <h3>years experience</h3>
                            <p>Over twenty years of industry expertise and insight.</p>
                        </div>
                        {/* Company Growth Item End */}
                    </div>
                    {/* Company Growth Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Company Growth Section End */}

    {/* Why Choose Us Start */}
    <div className="why-choose-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="why-choose-us-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">why choose us ?</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.25s">Personalized coaching tailored to <span>your needs</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.5s">We understand that no two clients are the same. That's why we create personalized coaching plans designed to address your specific challenges and goals. Whether you're focusing on personal growth or business development, our
                                tailored approach ensures you get the exact guidance you need to succeed.</p>
                        </div>
                        {/* Section Title End */}

                        <div className="why-choose-skillbar">
                            {/* Skills Progress Bar Start */}
                            <div className="skills-progress-bar">
                                {/* Skill Item Start */}
                                <div className="skillbar" data-percent="90%">
                                    <div className="skill-data">
                                        <div className="skill-title">client success rattings</div>
                                        <div className="skill-no">90%</div>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="count-bar"></div>
                                    </div>
                                </div>
                                {/* Skill Item End */}
                            </div>
                            {/* Skills Progress Bar End */}

                            {/* Skills Progress Bar Start */}
                            <div className="skills-progress-bar">
                                {/* Skill Item Start */}
                                <div className="skillbar" data-percent="65%">
                                    <div className="skill-data">
                                        <div className="skill-title">projects completed ratio</div>
                                        <div className="skill-no">65%</div>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="count-bar"></div>
                                    </div>
                                </div>
                                {/* Skill Item End */}
                            </div>
                            {/* Skills Progress Bar End */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    {/* Why Choose Us Image Start */}
                    <div className="why-choose-us-image">
                        <div className="why-choose-us-img-1">
                            <figure className="image-anime reveal">
                                <img src="/images/why-choose-us-img-1.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="why-choose-us-img-2">
                            <figure className="image-anime reveal">
                                <img src="/images/why-choose-us-img-2.jpg" alt="" />
                            </figure>
                        </div>

                        {/* Why Choose Contact Circle Start */}
                        <div className="why-choose-contact-circle">
                            <img src="/images/why-choose-contact-circle.svg" alt="" />
                        </div>
                        {/* Why Choose Contact Circle End */}
                    </div>
                    {/* Why Choose Us Image End */}
                </div>
            </div>
        </div>
    </div>
    {/* Why Choose Us End */}

    {/* Our Testimonial Section Start */}
    <div className="our-testimonial bg-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-8">
                    <div className="our-testimonial-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">testimonial</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.25s">Real success stories from our <span>coaching clients</span></h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="col-lg-8">
                    {/* Testimonial Slider Start */}
                    <div className="testimonial-slider">
                        <div className="swiper">
                            <div className="swiper-wrapper" data-cursor-text="Drag">
                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-slider-image">
                                            <figure className="image-anime">
                                                <img src="/images/testimonial-img-1.jpg" alt="" />
                                            </figure>
                                        </div>

                                        <div className="testimonial-slider-content">
                                            <div className="testimonial-header">
                                                <div className="testimonial-rating-company">
                                                    <img src="/images/icon-testimonial-rating-4.svg" alt="" />
                                                </div>
                                                <div className="testimonial-quote">
                                                    <img src="/images/testimonial-quote.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Our backyard has been completely transformed! The team was professional, attentive, and delivered beyond our expectations. the quality of work is outstanding.</p>
                                            </div>
                                            <div className="author-content">
                                                <h3>annette black</h3>
                                                <p>Sr. Gardener</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Slide End */}

                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-slider-image">
                                            <figure className="image-anime">
                                                <img src="/images/testimonial-img-2.jpg" alt="" />
                                            </figure>
                                        </div>

                                        <div className="testimonial-slider-content">
                                            <div className="testimonial-header">
                                                <div className="testimonial-rating-company">
                                                    <img src="/images/icon-testimonial-rating-4.svg" alt="" />
                                                </div>
                                                <div className="testimonial-quote">
                                                    <img src="/images/testimonial-quote.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Our backyard has been completely transformed! The team was professional, attentive, and delivered beyond our expectations. the quality of work is outstanding.</p>
                                            </div>
                                            <div className="author-content">
                                                <h3>claire peterson</h3>
                                                <p>content writer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Slide End */}

                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-slider-image">
                                            <figure className="image-anime">
                                                <img src="/images/testimonial-img-3.jpg" alt="" />
                                            </figure>
                                        </div>

                                        <div className="testimonial-slider-content">
                                            <div className="testimonial-header">
                                                <div className="testimonial-rating-company">
                                                    <img src="/images/icon-testimonial-rating-4.svg" alt="" />
                                                </div>
                                                <div className="testimonial-quote">
                                                    <img src="/images/testimonial-quote.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Our backyard has been completely transformed! The team was professional, attentive, and delivered beyond our expectations. the quality of work is outstanding.</p>
                                            </div>
                                            <div className="author-content">
                                                <h3>natalie brooks</h3>
                                                <p>graphic designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Slide End */}
                            </div>
                            <div className="testimonial-btn">
                                <div className="testimonial-button-prev"></div>
                                <div className="testimonial-button-next"></div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial Slider End */}
                </div>

                <div className="col-lg-12">
                    {/* Testimonial Rating Box Start */}
                    <div className="testimonial-rating-box">
                        {/* Testimonial Rating Item Start */}
                        <div className="testimonial-rating-item">
                            <div className="icon-box">
                                <img src="/images/icon-testimonial-rating-1.svg" alt="" />
                            </div>
                            <div className="testimonial-rating-content">
                                <p><span className="counter">982</span>+ Trustpilot 4.8 start reviews</p>
                            </div>
                        </div>
                        {/* Testimonial Rating Item End */}

                        {/* Testimonial Rating Item Start */}
                        <div className="testimonial-rating-item">
                            <div className="icon-box">
                                <img src="/images/icon-testimonial-rating-2.svg" alt="" />
                            </div>
                            <div className="testimonial-rating-content">
                                <p><span className="counter">487</span>+ Airbng 5 start reviews</p>
                            </div>
                        </div>
                        {/* Testimonial Rating Item End */}

                        {/* Testimonial Rating Item Start */}
                        <div className="testimonial-rating-item">
                            <div className="icon-box">
                                <img src="/images/icon-testimonial-rating-3.svg" alt="" />
                            </div>
                            <div className="testimonial-rating-content">
                                <p><span className="counter">182</span>+ Yelp 5 start reviews</p>
                            </div>
                        </div>
                        {/* Testimonial Rating Item End */}

                        {/* Testimonial Rating Item Start */}
                        <div className="testimonial-rating-item">
                            <div className="icon-box">
                                <img src="/images/icon-testimonial-rating-4.svg" alt="" />
                            </div>
                            <div className="testimonial-rating-content">
                                <p><span className="counter">897</span>+ Google 5 start reviews</p>
                            </div>
                        </div>
                        {/* Testimonial Rating Item End */}
                    </div>
                    {/* Testimonial Rating Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Testimonial Section End */}

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
