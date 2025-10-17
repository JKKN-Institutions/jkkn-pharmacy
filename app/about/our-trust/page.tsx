'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Trust() {
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
                                    <h1 className="wow fadeInUp">Our <span>trust</span></h1>
                                    
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
                                <h2 className="wow fadeInUp" data-wow-delay="0.25s">Our <span> trust</span></h2>
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
                                        <p>In the 1960s, female children in Kumarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children’s education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women’s education, Shri J.K.K. Natarajah, a visionary philanthropist of the area, initiated a girls’ school in the town in 1965, four years before the inception of the trust.In the 1960s, female children in Kumarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children’s education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women’s education, Shri J.K.K. Natarajah, a visionary philanthropist of the area, initiated a girls’ school in the town in 1965, four years before the inception of the trust.</p>
                                    </div>
                                    <div className="row">
                                        <p>The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father’s footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls’ School and Matriculation schools.</p>
                                    </div>
                                    <div className="row">
                                        <p>The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust’s grand service to society remains immense, not only in terms of education but also in community welfare.</p>
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