import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ClientsImg from "../assets/clients.jpg"


function Clients (){
    return(
        <>
         <Navbar />
         <Hero
            cName="hero-mid"
            heroImg={ClientsImg}
            title="Clients"
            btnClass="hide"
         />
        </>
    )
}

export default Clients;