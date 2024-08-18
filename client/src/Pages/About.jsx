export const About = () => {
    return (
        <>
            <section className="section-why-choose-us">
                <div className="container">
                    <div className="content">
                        <h1>Why Choose Us?</h1>
                        <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
                        <p>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>
                        <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.</p>
                        <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
                        <p>Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
                        <div className="btn-group">
                            <a href="/contact" style={{backgroundColor:"#646cff", color:"white"}} class="btn">Connect Now</a>
                            <a href="/services" className="btn">Learn More</a>
                        </div>
                    </div>
                    <div className="image">
                        <img src="images/about.png" alt="Why Choose Us Image"/>
                    </div>
                </div>
            </section>

            <div className="section-analytics">
                <div className="container grid gird-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registerd Companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>well known Devlopers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </div>

        </>
    )
};