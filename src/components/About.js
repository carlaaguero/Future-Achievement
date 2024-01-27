import ABOUT1 from "../assets/about-1.png"
import ABOUT2 from "../assets/about-2.jpg"
import ABOUT3 from "../assets/about-3.png"
import ABOUT4 from "../assets/home.jpg"
import AboutData from "./AboutData"
import "./AboutStyles.css"

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>Shaping Tomorrow's Solutions Today: Discover Our Expertise in Engineering and Development.</p>

        <AboutData 
        className="first-text"
        heading="Who we are?"
        text="We are a Saudi company specialized in providing engineering solutions and development services in various specialties, through a group of qualified individuals with extensive practical and academic experience derived from the expertise and professionalism of our engineers and consultants. At Injaaz Almustaqbaliya Company, we aim to lead the future by developing and implementing projects with a high degree of quality and efficiency, in accordance with the best local, regional, and international standards, by leveraging our network of local, regional, and international developers and moderators. This constantly drives us to seek the best and most innovative technologies to enhance our outputs, making them more efficient and sustainable."
        img1={ABOUT1}
        img2={ABOUT2}

        />

        <AboutData 
        className="first-text-reverse"
        heading="We are here"
        text="Enhancing our contribution to the local output as a comprehensive engineering solution, based on our extensive experiences and significant capabilities.Our goal is to provide high-quality and sustainable engineering and technical solutions to keep pace with the significant development in the sector as a key enabler of Vision 2030."
        img1={ABOUT3}
        img2={ABOUT4}

        />

        </div>
    )
}

export default About