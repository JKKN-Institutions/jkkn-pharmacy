'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VisionMission() {
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
                                    <h1 className="wow fadeInUp">vision <span>mission</span></h1>
                                    
                                </div>
                                {/* Page Header Content End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header Box End */}
            </div>
            {/* Page Header End */}
            <br/>

            {/* Our Approach Start */}
            <div className="our-approach bg-section">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-7">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">jkkn</h3>
                                <h2 className="wow fadeInUp" data-wow-delay="0.25s">Our college<span> vision mission</span></h2>
                            </div>
                            {/* Section Title End */}
                        </div>

                        <div className="col-lg-5">
                            {/* Section Btn Start */}
                            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
                                <a href="/contact" className="btn-default">contact us</a>
                            </div>
                            {/* Section Btn End */}
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Our Approach Content Start */}
                            <div className="our-approach-content">
                                

                                {/* Mission Vision Item Start */}
                                <div className="mission-vision-list">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            {/* Mission Vision Item Start */}
                                            <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.2s">
                                                <div className="icon-box">
                                                    <img src="/images/icon-our-mission.svg" alt="" />
                                                </div>

                                                <div className="mission-vision-content">
                                                    <h3>our mission</h3>
                                                    <p>To be a Leading Global Innovative Solutions provider for the ever changing needs of the society.</p>
                                                </div>
                                            </div>
                                            {/* Mission Vision Item End */}
                                        </div>

                                        <div className="col-md-6 col-12">
                                            {/* Mission Vision Item Start */}
                                            <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.4s">
                                                <div className="icon-box">
                                                    <img src="/images/icon-our-vision.svg" alt="" />
                                                </div>

                                                <div className="mission-vision-content">
                                                    <h3>our vision</h3>
                                                    <p>Create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and cutting-edge research, Empower learners to become leaders in developing and applying novel drugs and healthcare solutions</p>
                                                </div>
                                            </div>
                                            {/* Mission Vision Item End */}
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            {/* Our Value Item Start */}
                                            <div className="mission-vision-item our-value-item wow fadeInUp" data-wow-delay="0.6s">
                                                <div className="icon-box">
                                                    <img src="/images/icon-our-value.svg" alt="" />
                                                </div>

                                                <div className="mission-vision-content">
                                                    <h3>our value</h3>
                                                    <p>At our institution, we are guided by a set of core values that shape our culture, learning environment, and contribution to society.</p>
                                                </div>
                                            </div>
                                            {/* Our Value Item End */}
                                        </div>
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
                <br/>
            <Footer />
        </>
    );
}
