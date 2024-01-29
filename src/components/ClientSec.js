import ClientCarousel from "./ClientCarousel"
import "./ClientSec.css"

function ClientSec() {
    return(
        <div className="clientsec-container">
            <h1>Our implementation works for engineering or artistic projects</h1>
            <p>Our cumulative achievements encompass a diverse range of projects including civil or architectural works, electrical works, mechanical works, security surveillance systems, and general supply works.</p>
            <h1>Our construction and development works for strategic or operational plans</h1>
            <p>Our cumulative achievements include the development and construction of various operational works, the creation of strategic plans for diverse institutional entities, the establishment and adoption of a new business model, the development of business process models, and the construction and implementation of database infrastructure automation.</p> 
        <div>

        <h1 className="carousel-title">Our Clients:</h1>

        <ClientCarousel />

        </div>
        
        </div>
    )

}

export default ClientSec