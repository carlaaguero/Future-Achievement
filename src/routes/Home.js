import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeImg from "../assets/home.jpg"
import About from "../components/About"
import Services from "../components/ServicesHome"
import Team from "../components/Team"
import Clients from "../components/ClientsHome"
import Footer from "../components/Footer"

function Home (){
    return(
        <>
         <Navbar />
         <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Future Achievement"
            text="Make your vision a reality!"
            buttonText="Contact us"
            url="tel:+966550870588"
            btnClass="show"
         />
         <About />
         <Services />
         <Team />
         <Clients />
         <Footer />
        </>
    )
}

export default Home;