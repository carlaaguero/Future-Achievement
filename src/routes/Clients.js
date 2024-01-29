import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ClientsImg from "../assets/clients-2.jpg"
import Footer from "../components/Footer"
import ClientSec from "../components/ClientSec"


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
         <ClientSec />
         <Footer />
        </>
    )
}

export default Clients;