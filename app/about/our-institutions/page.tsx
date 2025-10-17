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
	            <div className="page-header bg-section" style={{ backgroundImage: 'url(/images/campus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Page Header Box Start */}
                <div className="page-header-box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Page Header Content Start */}
                                <div className="page-header-content">
                                    <h1 className="wow fadeInUp">Our <span>institutions</span></h1>

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
	            <div className="container">
	                <div className="row">
	                    <div className="col-lg-12">
	                        <div className="wow fadeInUp" data-wow-delay="0.1s">
	                            <p>At JKKN Institutions, our primary goal is to foster the technical knowledge and skill development of our students, preparing them to thrive in today’s competitive world. Through the implementation of effective teaching practices, we strive to establish a strong educational foundation.</p>
	                            <p>Our institution boasts well-constructed academic blocks, cutting-edge lab facilities, state-of-the-art operation centers, extensive knowledge resource libraries, and top-notch sports infrastructure. We provide separate accommodation for both male and female students, ensuring a safe and conducive learning environment. Additionally, our general and dental hospitals offer comprehensive healthcare services and practical training opportunities.</p>
	                            <p>With actively functioning placement cells, we guarantee promising placements for all our students. Furthermore, we have established valuable partnerships with leading manufacturing and commercial enterprises, facilitating invaluable industrial and corporate exposure for both students and faculty members.</p>
	                            <p>Located in Komarapalayam, just 15 km from Erode City, Tamil Nadu, India, our institutions are easily accessible. The Erode railway station and Salem/Coimbatore airports are conveniently nearby, enhancing connectivity for students from various locations.</p>
	                            <p>At JKKN Institutions, we foster a culture of commitment, transparency, and teamwork. Our institutions are renowned as knowledge centers that offer abundant opportunities and support, fueling a spirit of initiative and success. We continuously strive for progressive enhancements to cater to the evolving needs of our students and faculty members.</p>
	                            <p>JKKN Institutions are committed to providing exceptional educational experiences for our students, empowering them with the skills and knowledge necessary to excel. With a focus on continuous improvement and collaborative partnerships, we ensure that our institutions are recognized as premier centers of education and opportunity.</p>
	                        </div>
	                    </div>
	                </div>
	            </div>

            <Footer />
        </>
    );
}