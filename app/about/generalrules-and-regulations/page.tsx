'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function GeneralRulesAndRegulationsPage() {
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
                                    <h1 className="wow fadeInUp">Our <span>general rules and regulations</span></h1>

                                </div>
                                {/* Page Header Content End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header Box End */}
            </div>
            {/* Page Header End */}

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




                            </div>
                            {/* About Us Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* About Us Content Start */}
                            <div className="about-us-content">
                                {/* Section Title Start */}
                                <div className="section-title">

                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Our College <span>Rules And Regulations.</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">The leave application with the counter signature of the parent/guardian/Deputy guardian and the Tutor should be submitted in advance or on the first day of his/her return to the college.
                                        In case of absence on medical reasons, the student should produce a medical certificate from a registered medical practitioner.
                                        The Principal may take appropriate disciplinary action in case of continued violation of leave rules.
                                        Students should have a minimum of 85% attendance in both theory and practical separately in each subject, to be eligible for the University exam. Candidates with less than 85% attendance will not be allowed to appear for the university exams.</p>
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
                                    <h2 className="wow fadeInUp" data-wow-delay="0.25s">Our <span>Dress code</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">Students of the Pharmacy College are required to maintain a neat, modest, and professional appearance that reflects the dignity of the pharmacy profession. Boys must wear formal trousers and shirts with proper grooming, while girls should wear formal salwar kameez or sarees with a dupatta, ensuring simplicity and decency. White lab coats with the college logo are mandatory during practical sessions, laboratory work, and hospital postings. Identity cards must be worn at all times within the campus. Slippers, flashy accessories, or casual attire are not permitted during academic hours. Students are expected to adhere to the dress code strictly as a symbol of discipline, professionalism, and respect for the institution and their chosen field.</p>
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
                                        <img src="/images/quality.png" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <p>Students are expected to attend college with neat and proper dress.</p>

                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon-box">
                                        <img src="/images/quality.png" alt="" />
                                    </div>

                                    <div className="service-item-content">
                                        <p>Boys shall attend college wearing well-ironed shirts and pants. The shirt should be buttoned properly and tucked in the pant. T-Shirt and jeans pant is not allowed. Leather shoes with socks are the prescribed footwear.</p>

                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon-box">
                                        <img src="/images/quality.png" alt="" />
                                    </div>

                                    <div className="service-item-content">

                                        <p>Girls are permitted to wear salwar kameezes. No other form of dress is allowed. Leather shoes with socks are the prescribed footwear.</p>
                                    </div>
                                </div>
                                {/* Service Item Start */}

                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon-box">
                                        <img src="/images/quality.png" alt="" />
                                    </div>

                                    <div className="service-item-content">

                                        <p>During lab sessions, Students should wear the prescribed white lab coat over the regular uniform and closed footwear.</p>
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

            {/* Page Services Start */}
            <div className="page-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                                {/* Icon Box Start */}
                                <div className="icon-box">
                                    <img src="/images/quality.png" alt="" />
                                </div>
                                {/* Icon Box End */}

                                {/* Service Item Content Start */}
                                <div className="service-item-content">
                                    <h3>Code of Conduct</h3>
                                    <ul>
                                        <li>The working day is divided into two sessions. The forenoon session and the afternoon session (College Timings: 9.00 am to 5.00 pm) and Lunch 1 hour.</li>
                                        <li>At the stroke of the bell before each session, students should go to their respective classes and take their seats.</li>
                                        <li>No student should leave the classroom during a lecture without the permission of the lecturer.</li>
                                        <li>Latecomers will not be permitted to attend the class without an admission slip from the H.O.D/Principal.</li>
                                        <li>Students are expected to keep the classroom and the campus clean. Waste materials should be disposed of only in the dustbins provided.</li>
                                        <li>Students should read the notices/Circulars and other notifications displayed on the Notice Board and abid as directed therein.</li>
                                        <li>Change of address & phone / mobile numbers must be promptly intimated to the office.</li>
                                        <li>Students should wear their ID cards as long as they are on campus. It should be produced on demand.</li>
                                        <li>Students should move silently from the classroom to the laboratory/ library.</li>
                                        <li>The use of cell phones is strictly prohibited inside the college campus.</li>
                                        <li>Students are forbidden from writing, scribbling, painting on the walls, desks, etc. Anyone found guilty of damaging, or destroying college property shall replace the same at their own cost.</li>
                                        <li>Students can meet the principal from 1 pm to 2 pm/5 pm to 6 pm regarding academic and other related matters.</li>
                                        <li>Any student found violating any of the rules and regularities of the institution or found disturbing the peace on campus as well as off-campus, will be liable for suspension by the head of the institution, which has the right to dismiss the student without any explanation or refund of fees and other charges remitted.</li>
                                        <li>Students who travel to the institution by vehicles should have a copy of their driving license, Insurance and Registration. Those who travel by two-wheelers must wear helmet while coming to college in their vehicle.</li>
                                    </ul>
                                </div>
                                {/* Service Item Content End */}
                            </div>
                            {/* Service Item End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                                {/* Icon Box Start */}
                                <div className="icon-box">
                                    <img src="/images/quality.png" alt="" />
                                </div>
                                {/* Icon Box End */}

                                {/* Service Item Content Start */}
                                <div className="service-item-content">
                                    <h3>Ragging</h3>
                                    <ul>
                                        <li>The guidelines to curb the menace of ragging in pharmacy colleges are as under: –</li>
                                        <li>Every students for the purposes of his/her admission to Pharmacy College shall furnish a Character Certificate from the institutions wherefrom he/she has passed his qualifying examination, which would mention the status of his/her behavioural pattern specially in terms as to whether he/she has displayed persistent violent or aggressive behaviour or any desire to harm others.</li>
                                        <li>The admitting Pharmacy institution shall keep intense watch upon students who has a negative entry in this regard.</li>
                                        <li>An annual undertaking signed by each student, whether fresher or senior and his/her parent (s) jointly stating that each of them have read the relevant instructions/regulations against ragging, as well as punishments, and that if the ward has been found guilty he/she shall be proceeded against, shall be procured.</li>
                                        <li>Such an undertaking shall be furnished in English as well as in vernacular (mother tongue of the parent) at the beginning of each academic year by every student.</li>
                                        <li>An undertaking to the similar effect should be obtained every year from each student admitted to the hostel.</li>
                                        <li>The undertaking should be appended to the brochure containing the guidelines and other relevant instructions in regard to ragging and consequences of indulging in ragging.</li>
                                        <li>The compliance to the above effect shall be ensured by each of the affiliating university to which the concerned pharmacy institution is affiliated and would be verified by the council annually.</li>
                                        <li>If any student found to violate this, the students will be punished in accordance with the anti-ragging act (1987), Govt. of India.</li>
                                    </ul>
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


