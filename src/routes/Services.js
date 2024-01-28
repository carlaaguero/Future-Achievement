import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesImg from "../assets/services-2.jpg"
import Footer from "../components/Footer"



function Services (){
    return(
        <>
         <Navbar />
         <Hero
            cName="hero-mid"
            heroImg={ServicesImg}
            title="Services"
            btnClass="hide"
         />
         <Footer />
        </>
    )
}

export default Services;