import aboutImage from "../images/about-image.jpg"

const About = () => {
    return ( 
        <section className="container-fluid about">
            <div className="container about-group">
                <div className="about-image-container">
                    <img src={aboutImage} alt="wrist watch in about section" className="about-image" />
                </div>
                <div className="about-content">
                    <h2 className="about-title">About WatchKing</h2>
                    <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper libero vel porta faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vehicula arcu quis blandit.
                    </p>
                    <a href="/" className="watchking-button">
                        Get Watch Now
                    </a>
                    
                </div>

            </div>
        </section>
     );
}
 
export default About;