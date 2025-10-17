'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function QualityPolicyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>


      {/* Header Start */}
      <Header />
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
                  <h1 className="wow fadeInUp">Our <span>quality policy</span></h1>
                  
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
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  <h3>Quality Policy</h3>
                  <p>JKKN College of Pharmacy is committed to excellence in pharmaceutical education,research, and healthcare, advancing knowledge while preparing individuals for leadership and success in both life and work.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Icon Box Start */}
                <div className="icon-box">
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To pursue excellence in education and research, fostering innovation and advancements in healthcare.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Icon Box Start */}
                <div className="icon-box">
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To continuously improve our processes, maintaining high standards across all academic and operational activities.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Icon Box Start */}
                <div className="icon-box">
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To promote a culture of integrity, innovation, and accountability among faculty, staff, and students.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                {/* Icon Box Start */}
                <div className="icon-box">
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To equip learners with the skills and knowledge needed to create sustainable and impactful healthcare solutions that address the needs of the 21st century</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="1.0s">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To cultivate strong communication, teamwork, leadership, and critical thinking skills in students to excel in various contexts.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="1.2s">
                {/* Icon Box Start */}
                <div className="icon-box">
                <img src="/images/quality.png" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  
                  <p>To uphold ethical practices that responsibly address society’s healthcare needs.</p>
                </div>
                {/* Service Item Content End */}

                
              </div>
              {/* Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Services End */}


      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      {/* Jquery Library File */}
      <script src="/js/jquery-3.7.1.min.js"></script>
      {/* Bootstrap js file */}
      <script src="/js/bootstrap.min.js"></script>
      {/* Validator js file */}
      <script src="/js/validator.min.js"></script>
      {/* SlickNav js file */}
      <script src="/js/jquery.slicknav.js"></script>
      {/* Swiper js file */}
      <script src="/js/swiper-bundle.min.js"></script>
      {/* Counter js file */}
      <script src="/js/jquery.waypoints.min.js"></script>
      <script src="/js/jquery.counterup.min.js"></script>
      {/* Magnific js file */}
      <script src="/js/jquery.magnific-popup.min.js"></script>
      {/* SmoothScroll */}
      <script src="/js/SmoothScroll.js"></script>
      {/* Parallax js */}
      <script src="/js/parallaxie.js"></script>
      {/* MagicCursor js file */}
      <script src="/js/gsap.min.js"></script>
      <script src="/js/magiccursor.js"></script>
      {/* Text Effect js file */}
      <script src="/js/SplitText.js"></script>
      <script src="/js/ScrollTrigger.min.js"></script>
      {/* YTPlayer js File */}
      <script src="/js/jquery.mb.YTPlayer.min.js"></script>
      {/* Wow js file */}
      <script src="/js/wow.js"></script>
      {/* Main Custom js file */}
      <script src="/js/function.js"></script>
      <script src="https://demo.awaikenthemes.com/assets/js/theme-panel.js"></script>
    </>
  );
}


