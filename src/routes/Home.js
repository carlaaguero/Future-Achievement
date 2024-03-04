import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeImg from "../assets/home.jpg"
import About from "../components/About"
import Services from "../components/ServicesHome"
import Team from "../components/Team"
import Clients from "../components/ClientsHome"
import Footer from "../components/Footer"

function Home (){
    useEffect(() => {
        if (window.location.hash === "#team-section") {
            const teamSectionElement = document.getElementById('team-section');
            if (teamSectionElement) {
                teamSectionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    
    return(
        <>
         <Navbar />
         <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Future Achievement"
            text="Make your vision a reality!"
            buttonText="Contact us"
            url="/contact"
            btnClass="show"
         />
         <About />
         <Services />
         <div id="team-section">
            <Team />
         </div>         
         <Clients />
         <Footer />
        </>
    )
}

export default Home;