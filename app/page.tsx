'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
            `}</style>

            <Header />

            {/* Hero Section Start */}
            <div className="hero bg-section parallaxie">
                <div className="hero-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-9">
                                {/* Hero Content Start */}
                                <div className="hero-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">Welcome to Our College.</h3>
                                        <h1 className="wow fadeInUp" data-wow-delay="0.2s">Jkkn <span>College of Pharmacy</span></h1>
                                    </div>
                                    {/* Section Title End */}

                                    {/* Hero Button Start */}
                                    <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="" className="btn-default">get in touch</a>
                                        <a href="" className="btn-default btn-highlighted">explore more</a>
                                    </div>
                                    {/* Hero Button End */}
                                </div>
                                {/* Hero Content End */}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="export-coaching-box wow fadeInUp" data-wow-delay="0.6s">
                                    {/* Export Coaching Step Start */}
                                    <div className="export-coaching-step">
                                        <div className="icon-box">
                                            <img src="/images/icon-export-coaching-1.svg" alt="" />
                                        </div>
                                        <div className="export-coaching-step-content">
                                            <p>Quality Pharmacy Education for Jkkn.</p>
                                        </div>
                                    </div>
                                    {/* Export Coaching Step End */}

                                    {/* Export Coaching Step Start */}
                                    <div className="export-coaching-step">
                                        <div className="icon-box">
                                            <img src="/images/icon-export-coaching-2.svg" alt="" />
                                        </div>
                                        <div className="export-coaching-step-content">
                                            <p>Advanced Learning with Practical Experience.</p>
                                        </div>
                                    </div>
                                    {/* Export Coaching Step End */}

                                    {/* Export Coaching Step Start */}
                                    <div className="export-coaching-step">
                                        <div className="icon-box">
                                            <img src="/images/icon-export-coaching-3.svg" alt="" />
                                        </div>
                                        <div className="export-coaching-step-content">
                                            <p>Complete Training in Health and Science.</p>
                                        </div>
                                    </div>
                                    {/* Export Coaching Step End */}

                                    {/* Export Coaching Step Start */}
                                    <div className="export-coaching-step">
                                        <div className="icon-box">
                                            <img src="/images/icon-export-coaching-4.svg" alt="" />
                                        </div>
                                        <div className="export-coaching-step-content">
                                            <p>Student-Focused Learning Environment.</p>
                                        </div>
                                    </div>
                                    {/* Export Coaching Step End */}

                                    {/* Export Coaching Step Start */}
                                    <div className="export-coaching-step">
                                        <div className="icon-box">
                                            <img src="/images/icon-export-coaching-5.svg" alt="" />
                                        </div>
                                        <div className="export-coaching-step-content">
                                            <p>Guidance from Experienced Faculty.</p>
                                        </div>
                                    </div>
                                    {/* Export Coaching Step End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}

            {/* About Us Section Start */}
            <div className="about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* About Us Image Start */}
                            <div className="about-us-images">
                                {/* About Us Img Start */}
                                <div className="about-us-img-1">
                                    <figure className="image-anime">
                                        <img src="/images/about-us-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* About Us Img End */}

                                {/* About Us Img Start */}
                                <div className="about-us-img-2">
                                    <figure className="image-anime">
                                        <img src="/images/about-us-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* About Us Img End */}

                                {/* About Experience Box Start */}
                                <div className="about-experience-box">
                                    <div className="icon-box">
                                        <img src="/images/icon-company-experience.svg" alt="" />
                                    </div>

                                    <div className="about-experience-content">
                                        <h3><span className="counter">30</span>+ years of experience</h3>
                                    </div>
                                </div>
                                {/* About Experience Box End */}


                            </div>
                            {/* About Us Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* About Us Content Start */}
                            <div className="about-us-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">about us</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Our College <span>Of Pharmacy.</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">JKKN College of Pharmacy, approved by AICTE, New Delhi and affiliated to The Tamil Nadu Dr.M.G.R. Medical University, Guindy, Chennai, has achieved recognition as one of INDIA’s TOP 50 Pharmacy Colleges. It earned this distinction in the National Institutional Ranking Framework – 2018 (NIRF), released by the Ministry of Human Resource Development (MHRD) and Govt. of India.</p>
                                </div>
                                {/* Section Title End */}


                            </div>
                            {/* About Us Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us Section End */}

            {/* Our Service Start */}
            <div className="our-service bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/* Service Content Start */}
                            <div className="service-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">JKKN</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.25s">Our <span>Courses</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">We offer a complete range of pharmacy programs to shape future healthcare professionals. From the Bachelor of Pharmacy (B.Pharm) foundation to advanced Master of Pharmacy (M.Pharm) specializations, our courses combine theory and practice. The Doctor of Pharmacy (Pharm.D) and Pharm.D (Post-Baccalaureate) focus on clinical expertise and patient care, while the Ph.D. in Pharmacy drives innovation and research for global healthcare advancements.</p>
                                </div>
                                {/* Section Title End */}

                                {/* Service Btn Start */}
                                <div className="service-btn wow fadeInUp" data-wow-delay="0.75s">
                                    <a href="" className="btn-default">view all services</a>
                                </div>
                                {/* Service Btn End */}
                            </div>
                            {/* Service Content End */}
                        </div>

                        <div className="col-lg-7">
                            {/* Service Item List Start */}
                            <div className="service-item-list">
                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp">
                                    <div className="icon-box">
                                        <img src="/images/icon-services-1.svg" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <h3>Bachelor of Pharmacy (B.Pharm)</h3>
                                        <p>Undergraduate program providing a foundation in pharmaceutical sciences and healthcare.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon-box">
                                        <img src="/images/icon-services-2.svg" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <h3>Master of Pharmacy (M.Pharm – 5 Specializations)</h3>
                                        <p>Postgraduate program offering advanced knowledge and research in chosen pharmacy fields.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon-box">
                                        <img src="/images/icon-services-3.svg" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <h3>Doctor of Pharmacy (Pharm.D)</h3>
                                        <p>Professional doctorate focusing on clinical practice, patient care, and hospital pharmacy.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon-box">
                                        <img src="/images/icon-services-4.svg" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <h3>Pharm.D (Post-Baccalaureate)</h3>
                                        <p>Advanced program for B.Pharm graduates to specialize in clinical pharmacy.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="icon-box">
                                        <img src="/images/icon-services-5.svg" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <h3>Doctor of Philosophy (Ph.D)</h3>
                                        <p>Research-oriented doctoral program advancing innovation and scientific contribution in pharmacy.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}


                            </div>
                            {/* Service Item List End */}


                        </div>
                    </div>
                </div>
            </div>
            {/* Our Service End */}


            {/* Our Expertise Section Start */}
            <div className="our-expertise">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Our Expertise Content Start */}
                            <div className="our-expertise-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">JKKN</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.25s">Our <span>Institutions</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">Our institution is committed to excellence in education, research, and healthcare. We provide world-class pharmacy programs that combine academic rigor with practical training, preparing students to excel as healthcare professionals, researchers, and innovators. With modern infrastructure, experienced faculty, and industry collaborations, we nurture talent and inspire future leaders to make a meaningful impact in the field of pharmacy and global healthcare.</p>
                                </div>
                                {/* Section Title End */}

                                {/* Expertise Button Start */}
                                <div className="expertise-btn wow fadeInUp" data-wow-delay="0.75s">
                                    <a href="/contact" className="btn-default">contact now</a>
                                </div>
                                {/* Expertise Button End */}
                            </div>
                            {/* Our Expertise Content End */}
                        </div>

                        <div className="col-lg-6">
                            <div className="expertise-list">
                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/dental.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN Dental College and Hospital</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/ahs.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN College of Allied Health Science</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/pharmacy.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>Jkkn College of Pharmacy</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/nursing.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>Sresakthimayeil Institute of Nursing and Research</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="1s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/edu.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN College of Education</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="1.2s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/arts.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN College of Arts and Science</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="1.4s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/engineering.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN College of Engineering and Technology</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}

                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="1.6s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/matric.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>JKKN Matriculation Higher Secondary School</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}
                                {/* Expertise Item Start */}
                                <div className="expertise-item wow fadeInUp" data-wow-delay="1.6s">
                                    <div className="expertise-image">
                                        <figure className="image-anime">
                                            <img src="/images/college/nv-school.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="expertise-content">
                                        <p>Nattraja Vidhyalya</p>
                                    </div>
                                </div>
                                {/* Expertise Item End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Expertise Section End */}

            {/* Intro Video Section Start */}
            <div className="intro-video bg-section parallaxie">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            {/* Section Title Start */}
                            <div className="section-title wow fadeInUp">
                                <h2>Watch our college <span>videos</span></h2>
                            </div>
                            {/* Section Title End */}
                        </div>

                        <div className="col-lg-6 col-md-4">
                            {/* Intro Video Box Start */}
                            <div className="intro-video-box">
                                {/* Video Play Button Start */}
                                <div className="video-play-button">
                                    <a href="https://youtu.be/REec8IdIeUY?si=HIKxiIcr3uMOjWG0" className="popup-video" target='_blank' data-cursor-text="Play">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <p>watch video</p>
                                </div>
                                {/* Video Play Button End */}
                            </div>
                            {/* Intro Video Box End */}
                        </div>

                        <div className="col-lg-12">
                            {/* Intro Video List Start */}
                            <div className="intro-video-list wow fadeInUp" data-wow-delay="0.25s">
                                <ul>
                                    <li>Pioneering Excellence in Pharmacy Education</li>
                                    <li>Transforming Healthcare Through Innovation and Research</li>
                                    <li>Nurturing Skilled and Compassionate Pharmacists</li>
                                    <li>Empowering Global Leaders in Pharmaceutical Science</li>
                                </ul>
                            </div>
                            {/* Intro Video List End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Intro Video Section End */}

            {/* How We Work Section Start */}
            <div className="how-we-work">
                <div className="container">

                </div>

                {/* Scrolling Ticker Start */}
                <div className="scrolling-ticker work-ticker">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Scrolling Ticker Box Start */}
                                <div className="scrolling-ticker-box">
                                    {/* Scrolling Ticker Content Start */}
                                    <div className="scrolling-content">
                                        <span><img src="/images/asterisk-icon.svg" alt="" />Jkkn </span>
                                        <span><img src="/images/asterisk-icon.svg" alt="" />College Of </span>
                                        <span><img src="/images/asterisk-icon.svg" alt="" />Pharmacy</span>
                                    </div>
                                    {/* Scrolling Ticker Content End */}

                                    {/* Scrolling Ticker Content Start */}
                                    <div className="scrolling-content">
                                        <span><img src="/images/asterisk-icon.svg" alt="" />Jkkn </span>
                                        <span><img src="/images/asterisk-icon.svg" alt="" />College Of </span>
                                        <span><img src="/images/asterisk-icon.svg" alt="" />Pharmacy</span>
                                    </div>
                                    {/* Scrolling Ticker Content End */}
                                </div>
                                {/* Scrolling Ticker Box End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scrolling Ticker End */}
            </div>
            {/* How We Work Section End */}






            {/* Our Blog Section Start */}
            <div className="our-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Our Blog Content Start */}
                            <div className="our-blog-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">news/post</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.25s">Latest updates for <span>pharmacy college</span></h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Blog Button Start */}
                                <div className="our-blog-btn wow fadeInUp" data-wow-delay="0.5s">
                                    <a href="/contact" className="btn-default">contact us</a>
                                </div>
                                {/* Our Blog Button End */}
                            </div>
                            {/* Our Blog Content End */}
                        </div>

                        <div className="col-lg-8">
                            {/* Blog Box Start */}
                            <div className="blog-box">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp">
                                    {/* Blog Featured Image Start */}
                                    <div className="blog-featured-image">
                                        <a href="" className="image-anime" data-cursor-text="View">
                                            <figure>
                                                <img src="/images/post-1.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Blog Featured Image End */}

                                    {/* Blog Item Body Start */}
                                    <div className="blog-item-body">
                                        {/* Blog Item Content Start */}
                                        <div className="blog-item-content">
                                            <h2><a href="">Placement Day Celebration 2025</a></h2>
                                            <p>JKKN Institutions’ Career Development Center (CDC) proudly organized Placement Day 2025 on 25th April 2025 at the Vibrant Arangam.</p>
                                        </div>
                                        {/* Blog Item Content End */}

                                        {/* Blog Item Button Start */}
                                        <div className="blog-item-btn">
                                            <a href="#" className="btn-default">read more</a>
                                        </div>
                                        {/* Blog Item Button End */}
                                    </div>
                                    {/* Blog Item Body End */}
                                </div>
                                {/* Blog Item End */}

                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Blog Featured Image Start */}
                                    <div className="blog-featured-image">
                                        <a href="" className="image-anime" data-cursor-text="View">
                                            <figure>
                                                <img src="/images/post-2.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Blog Featured Image End */}

                                    {/* Blog Item Body Start */}
                                    <div className="blog-item-body">
                                        {/* Blog Item Content Start */}
                                        <div className="blog-item-content">
                                            <h2><a href="">Kumarapalayam bypass marathon</a></h2>
                                            <p>India’s 1st AI Empowered MarathonWhat an amazing day filled with energy, enthusiasm, and endless smiles!.</p>
                                        </div>
                                        {/* Blog Item Content End */}

                                        {/* Blog Item Button Start */}
                                        <div className="blog-item-btn">
                                            <a href="#" className="btn-default">read more</a>
                                        </div>
                                        {/* Blog Item Button End */}
                                    </div>
                                    {/* Blog Item Body End */}
                                </div>
                                {/* Blog Item End */}

                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Blog Featured Image Start */}
                                    <div className="blog-featured-image">
                                        <a href="" className="image-anime" data-cursor-text="View">
                                            <figure>
                                                <img src="/images/post-3.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    {/* Blog Featured Image End */}

                                    {/* Blog Item Body Start */}
                                    <div className="blog-item-body">
                                        {/* Blog Item Content Start */}
                                        <div className="blog-item-content">
                                            <h2><a href="">Proud Moment for JKKN College of Pharmacy</a></h2>
                                            <p>Our students actively participated in the International Convention on Neuropharmacology at Karpagam College of Pharmacy, Coimbatore (Feb 27-28, 2025) . A platform filled with insights on neuropharmacological research, CADD, and drug development.</p>
                                        </div>
                                        {/* Blog Item Content End */}

                                        {/* Blog Item Button Start */}
                                        <div className="blog-item-btn">
                                            <a href="#" className="btn-default">read more</a>
                                        </div>
                                        {/* Blog Item Button End */}
                                    </div>
                                    {/* Blog Item Body End */}
                                </div>
                                {/* Blog Item End */}
                            </div>
                            {/* Blog Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Blog Section End */}

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
