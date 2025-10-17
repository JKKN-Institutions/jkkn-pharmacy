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
                                    <h1 className="wow fadeInUp">Our <span>Development Plan</span></h1>

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

            {/* Our FAQs Section Start */}
            <div className="our-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Our FAQs Content Start */}
                            <div className="our-faqs-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">JKKN</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.25s">Institutional Development Plan <span>JKKN College Of Pharmacy</span></h2>
                                </div>
                                {/* Section Title End */}

                                {/* FAQs CTA Box Start */}
                                <div className="faqs-cta-box wow fadeInUp" data-wow-delay="0.75s">

                                    <div className="faqs-cta-content">

                                        <p>JKKN College Of Pharmacy is a leading pharmaceutical education institution committed to excellence in pharmacy education, research, and healthcare innovation. This Institutional Development Plan outlines our strategic roadmap for short-term (5-year) and long-term (15-year) development, engaging with key stakeholders including faculty, staff, students, alumni, and industry partners to ensure alignment with our institution’s vision of being a premier center for pharmaceutical education and research.</p>

                                    </div>
                                </div>
                                {/* FAQs CTA Box End */}
                            </div>
                            {/* Our FAQs Content End */}
                        </div>

                        <div className="col-lg-6">
                            <div className="our-faq-section">
                                {/* FAQ Accordion Start */}
                                <div className="faq-accordion" id="faqaccordion">
                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp">
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Short-term Plan (5 years)
                                            </button>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                            <div className="accordion-body">
                                                <ul className='text-white'>                                   
                                                    <li>Academic Enhancements:</li>
                                                    <li>Apply for autonomous status to allow curriculum flexibility and innovation</li>
                                                    <li>Introduce new undergraduate/postgraduate programs in emerging pharmaceutical fields (Pharmacogenomics, Pharmaceutical Data Science, Clinical Research)</li>
                                                    <li>Enhance existing Pharm.D, B.Pharm, and M.Pharm programs with industry-specific specializations</li>
                                                    <li>Establish Centers of Excellence in Pharmaceutical Research and Drug Development</li>
                                                    <li>Optimize faculty-to-student ratio to ensure quality mentorship</li>
                                                    <li>Implement faculty development programs with national and international pharmaceutical research institutions</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}

                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                How does coaching differ from therapy?
                                            </button>
                                        </h2>
                                        <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                            <div className="accordion-body">
                                                <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                                    Coaches do not diagnose or treat mental health conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}

                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Who can benefit from life and business coaching?
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                            <div className="accordion-body">
                                                <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                                    Coaches do not diagnose or treat mental health conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}

                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                How long does the coaching process take?
                                            </button>
                                        </h2>
                                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                            <div className="accordion-body">
                                                <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                                    Coaches do not diagnose or treat mental health conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}

                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                Can coaching help my business grow?
                                            </button>
                                        </h2>
                                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                                            <div className="accordion-body">
                                                <p>Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward.
                                                    Coaches do not diagnose or treat mental health conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}
                                </div>
                                {/* FAQ Accordion End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our FAQs Section End */}


            <br />

            <Footer />
        </>
    );
}