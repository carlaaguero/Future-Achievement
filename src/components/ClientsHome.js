import ClientsHomeCarousel from "./ClientsHomeCarousel";
import "./ClientsHome.css";

function ClientsHome() {
    return (
        <div className="clientshome-container">
           <h1 className="carousel-home-title">Our Clients:</h1>
           <p>Discover some of our valued clients!</p>
            <div>
                <ClientsHomeCarousel />
            </div>
        </div>
    );
}

export default ClientsHome;
