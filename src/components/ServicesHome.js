import "./ServicesHome.css"
import ServicesHomeData from "./ServicesHomeData"
import SERV1 from "../assets/serv-1.jpg"
import SERV2 from "../assets/servi-2.jpg"
import SERV3 from "../assets/serv-3.jpg"
import { Link } from 'react-router-dom'


function ServicesHome() {
    return (
        <div className="serviceshome">
            <h1>Our Services</h1>
            <p>We offer a comprehensive range of engineering and consultancy services, with particular focus on the following core offerings:</p>
            <div className="serviceshomecard">
                <ServicesHomeData 
                    image={SERV1}
                    heading="Capital Project Studies"
                />
                <ServicesHomeData 
                    image={SERV2}
                    heading="Engineering and Architectural Consulting Activities"
                />
                <ServicesHomeData 
                    image={SERV3}
                    heading="Construction Project Management"
                />
            </div>
            <div className="button-services">
            <Link to="/services"><button>More Details</button></Link></div>
        </div>
    );
}

export default ServicesHome;
