import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesImg from "../assets/services-2.jpg"
import Footer from "../components/Footer"
import ServicesSec from "../components/ServicesSec"



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
         <ServicesSec />
         <Footer />
        </>
    )
}

export default Services;