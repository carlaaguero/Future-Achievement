import "./ServicesSec.css"
import ServiceSecData from "./ServicesSecData"
import SERV1 from "../assets/serv-1.jpg"
import SERV2 from "../assets/servi-2.jpg"
import SERV3 from "../assets/serv-3.jpg"
import SERV4 from "../assets/serv-4.jpg"
import SERV5 from "../assets/serv-5.jpg"
import SERV6 from "../assets/serv-6.jpg"



function ServicesSec() {
    return (
        <div className="servicessec">
            <h1>Our Services</h1>
            <p>We provide a comprehensive range of engineering and consulting services, with particular emphasis on the following core offerings:</p>
            <div className="servicesseccard">
                <ServiceSecData 
                image={SERV1}
                heading="Capital project studies"
                />
                <ServiceSecData 
                image={SERV2}
                heading="Engineering and architectural consulting activities"
                />
                <ServiceSecData 
                image={SERV3}
                heading="Construction project management"
                />
                <ServiceSecData 
                image={SERV4}
                heading="Consulting in the field of marketing and business development"
                />
                <ServiceSecData 
                image={SERV5}
                heading="Engineering activities for electromechanical projects, smart systems and security systems"
                />
                <ServiceSecData 
                image={SERV6}
                heading="Consulting in the field of urban planning"
                />
            </div>
        </div>
    )
}

export default ServicesSec