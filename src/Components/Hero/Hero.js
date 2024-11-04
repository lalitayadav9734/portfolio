import '../Hero/Hero.css';

const Hero = () => {
    return(
        <section id="hero">
            <div className='hero-content'>
                <h1>Hello,I'm Lalita Yadav</h1>
                <p>Web Developer | Digital Marketer</p>
                <a href='#contact' className="cta-button">Let's Connect</a>
            </div>
        </section>
    );
};

export default Hero;