import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function about() {
    return (
        <div>
            {/* header start*/}
            <Header />
            {/* header end */}

            {/* Page Header Start */}
            <div className="page-header bg-section">
                {/* Page Header Box Start */}
                <div className="page-header-box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Page Header Content Start */}
                                <div className="page-header-content">
                                    <h1 className="wow fadeInUp">About us <span>overview</span></h1>
                                    
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

                                {/* About Experience Box Start */}
                                <div className="about-experience-box">
                                    <div className="icon-box">
                                        <img src="/images/icon-company-experience.svg" alt="" />
                                    </div>

                                    <div className="about-experience-content">
                                        <h3><span className="counter">30</span>+ years of experience</h3>
                                    </div>
                                </div>
                                {/* About Experience Box End */}


                            </div>
                            {/* About Us Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* About Us Content Start */}
                            <div className="about-us-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">about us</h3>
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Our College <span>Of Pharmacy.</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">J.K.K Nattraja College of Pharmacy, nestled just 2 kilometres east of Kumarapalayam along the NH-544 (Salem-Kochi Highway) in Tamil Nadu is a beacon of transformative education. Founded in 1985 by the visionary philanthropist Shri. Late. J.K.K. Natarajah, the institution emerged from a legacy of empowerment that began in the 1960s with the establishment of the J.K.K. Rangammal Girls Higher Secondary School (1965) and J.K.K. Nattraja Matriculation Higher Secondary School (1969). Driven by a passion for literacy and gender equality, Shri. Natarajah founded the J.K.K. Rangammal Charitable Trust in 1969, laying the foundation for a network of ten institutions under the dynamic leadership of his daughter, Smt. N. Sendamaraai, the Managing Trustee and Mr. S.Ommsharravana, Director. Guided by a vision to be a Leading Global Innovative Solutions provider for the ever-changing needs of the society and a mission to create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and cutting-edge research, empowering learners to become leaders in developing novel drugs and healthcare solutions, the college stands as a global leader in pharmaceutical education.</p>

                                </div>
                                {/* Section Title End */}


                            </div>
                            {/* About Us Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us Section End */}



            {/* footer start*/}
            <Footer />
            {/* footer end */}
        </div>
    );
}