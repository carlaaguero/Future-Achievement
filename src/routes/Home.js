import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeImg from "../assets/home.jpg"
import About from "../components/About";

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
        </>
    )
}

export default Home;