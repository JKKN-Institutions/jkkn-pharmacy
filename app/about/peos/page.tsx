'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function ProgramEducationPage() {
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
                  <h1 className="wow fadeInUp">Our <span>program educational</span></h1>
                  
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
                  <h3>PEO-1</h3>
                  <p>To prepare the graduates with sound knowledge in diverse areas of pharmaceutical sciences for a successful career in pharmacy profession and facilitate them to perform well in problem-solving and critical thinking in the emerging areas of pharmaceutical sciences</p>
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
                  <img src="/images/icon-services-2.svg" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  <h3>PEO-2</h3>
                  <p>To develop the professional excellence in order to meet the current challenges in pharmaceutical sciences.</p>
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
                  <img src="/images/icon-services-3.svg" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  <h3>PEO-3</h3>
                  <p>To develop abilities and talents in decision making potential, leading to creativity and productivity in the advancement of pharmaceutical sciences.</p>
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
                  <img src="/images/icon-services-4.svg" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  <h3>PEO-4</h3>
                  <p>To foster the students with efficient communication skills, leadership skills, and entrepreneurial skills with ethical and moral attitudes.</p>
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
                  <img src="/images/icon-services-5.svg" alt="" />
                </div>
                {/* Icon Box End */}

                {/* Service Item Content Start */}
                <div className="service-item-content">
                  <h3>PEO-5</h3>
                  <p>To nurture the students with life-long learning abilities to remain professionally competent and sound in the diverse fields of pharmaceutical sciences</p>
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


