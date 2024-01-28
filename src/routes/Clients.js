import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ClientsImg from "../assets/clients-2.jpg"
import Footer from "../components/Footer"


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
         <Footer />
        </>
    )
}

export default Clients;