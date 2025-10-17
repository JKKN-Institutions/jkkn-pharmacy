'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Management() {
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

            {/* Page Header Start */}
            <div className="page-header bg-section">
                {/* Page Header Box Start */}
                <div className="page-header-box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Page Header Content Start */}
                                <div className="page-header-content">
                                    <h1 className="wow fadeInUp">Our <span>management</span></h1>

                                </div>
                                {/* Page Header Content End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header Box End */}
            </div>
            {/* Page Header End */}

            <br />
            {/* Our Approach Start */}
            <div className="our-approach bg-section">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-7">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Chairperson - JKKN Educational Institutions</h3>
                                <h2 className="wow fadeInUp" data-wow-delay="0.25s"><span> Smt.N.Sendamaraai</span></h2>
                            </div>
                            {/* Section Title End */}
                        </div>


                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Our Approach Content Start */}
                            <div className="our-approach-content">


                                {/* Mission Vision Item Start */}
                                <div className="mission-vision-list">
                                    <div className="row">
                                        <p>As the Chairperson of JKKN Educational Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. “Leadership and Excellence” is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure and the exceptional quality of our community.</p>
                                    </div>
                                    <div className="row">
                                        <p>Our institution provides the necessary infrastructure along with a team of qualified and highly motivated faculty all under one roof for the benefit of our students. Beyond offering world-class education, we instil a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Educational Institutions, setting us apart. I warmly welcome you to our lush, green campus!</p>
                                    </div>

                                </div>
                                {/* Mission Vision Item End */}


                            </div>
                            {/* Our Approach Content End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Our Approach Image Start */}
                            <div className="our-approach-image">
                                <figure className="image-anime reveal">
                                    <img src="/images/vision-mission.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Our Approach Image End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Approach End */}
            <br />
            {/* Our Approach Start */}
            <div className="our-approach bg-section">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-7">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Director - JKKN Educational Institutions</h3>
                                <h2 className="wow fadeInUp" data-wow-delay="0.25s"><span>Mr.S.Ommsharravana</span></h2>
                            </div>
                            {/* Section Title End */}
                        </div>


                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Our Approach Content Start */}
                            <div className="our-approach-content">
                                {/* Our Approach Image Start */}
                            <div className="our-approach-image">
                                <figure className="image-anime reveal">
                                    <img src="/images/vision-mission.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Our Approach Image End */}
                            </div>
                            {/* Our Approach Content End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Mission Vision Item Start */}
                            <div className="mission-vision-list">
                                    <div className="row">
                                        <p>I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation.</p>
                                    </div>
                                    <div className="row">
                                        <p>Together, we strive to make JKKN a premier temple of learning, guiding and inspiring students in their unique paths. Our aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.</p>
                                    </div>

                                </div>
                                {/* Mission Vision Item End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Approach End */}
            <br />

            <Footer />
        </>
    );
}