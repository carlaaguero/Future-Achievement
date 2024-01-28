import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeImg from "../assets/home.jpg"
import About from "../components/About"
import Team from "../components/Team"
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
            url="/"
            btnClass="show"
         />
         <About />
         <Team />
         <Footer />
        </>
    )
}

export default Home;