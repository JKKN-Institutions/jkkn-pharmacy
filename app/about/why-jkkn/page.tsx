'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Why() {
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
                                    <h1 className="wow fadeInUp">Why <span>jkkn</span></h1>

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
	                            <p>The College of Pharmacy is dedicated to offering comprehensive programs that effectively equip students for the multifaceted demands of the pharmacy profession. These programs are meticulously designed to nurture a deep understanding of the technological, legal, civic, and ethical aspects intrinsic to the field. Rooted in a commitment to fostering professional, intellectual, social, and personal growth, the college strives to prepare its students to embark on their careers with competence and integrity.</p>
	                            <p>Central to an exemplary pharmacy education within the college is the cultivation of professional expertise in pharmaceutical sciences. This foundational knowledge not only lays the groundwork for future career paths but also imparts essential technical and experimental skills essential for success in the field. Simultaneously, the educational journey ignites intellectual growth by nurturing the development of creative instincts, critical problem-solving abilities, and logical reasoning. The pursuit of innovation and invention is encouraged, fostering a spirit of continuous advancement within each student.</p>
	                            <p>An ideal pharmacy education transcends technical proficiency and intellectual prowess. It extends to the realm of interpersonal dynamics, effective communication, and societal engagement. The college places significant emphasis on honing communication skills, the art of persuasion, and the ability to collaborate within a team. Leadership qualities are cultivated alongside a sense of responsibility towards society, fostering a spirit of unity and harmonious interaction within the larger community.</p>
	                        </div>
	                    </div>
	                </div>
	            </div>

            <Footer />
        </>
    );
}