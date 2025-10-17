'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Principal() {
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
                                    <h1 className="wow fadeInUp">The <span>principal</span></h1>
                                    
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
                                <h2 className="wow fadeInUp" data-wow-delay="0.25s">Principal <span> Dr. M. Venkatesan, M.Pharm., Ph.D.,</span></h2>
                                <h3 className="wow fadeInUp">JKKN College of Pharmacy</h3>
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
                                        <p>Welcome to our JKKN College of Pharmacy website. I salute the philanthropic efforts of Shri. J.K.K.Nattarajah, Founder of J.K.K. Nattraja Educational Institutions for establishing such an institution serving the noble cause of spreading education.</p>
                                    </div>
                                    <div className="row">
                                        <p>JKKN College of Pharmacy is one of the finest colleges in Pharmacy Education. The evolution of the institute over the past four decades has witnessed a strong blend of state-of-the-art infrastructure and intricately intertwined human resources committed to providing professional education with a thrust on creativity and innovation. The academic activities concentrate on helping the students to gain an excellent theoretical knowledge base and the development of skills to implement them. We are constantly reviewing our setup to update and improve while making sure that students gain thinking skills, analytical frameworks, entrepreneurial skills, and interpersonal and communication skills.</p>
                                    </div>
                                    <div className="row">
                                        <p>Our students excel in sports, curricular and co-curricular activities. Our Alumnae are working all over India and abroad and showing their excellence in discipline and devotion in the Pharmacy profession. The college has an excellent, efficient, and highly motivated faculty who plan meticulously all the curricular and co-curricular activities for the students.</p>
                                    </div>
                                    <div className="row">
                                        <p>I am proud to be the Principal of such a wonderful institution dedicated to the causes of a better India. I am confident that the college, with its rich legacy, will continue to shape the future of the young minds of our country and transform their potential into successful careers.</p>
                                    </div>
                                    <div className="row">
                                        <p>Thank you...</p>
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