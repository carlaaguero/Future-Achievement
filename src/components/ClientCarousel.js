import "./ClientCarousel.css"
import { useState } from "react"
import Slider from "react-slick"
import icon1 from "../assets/icon-1.png"
import icon2 from "../assets/icon-2.png"
import icon3 from "../assets/icon-3.png"
import icon4 from "../assets/icon-4.png"
import icon5 from "../assets/icon-5.png"
import icon6 from "../assets/icon-11.png"
import icon7 from "../assets/icon-7.png"
import icon8 from "../assets/icon-8.png"
import icon9 from "../assets/icon-7.png"
import icon10 from "../assets/icon-10.png"
import icon11 from "../assets/icon-6.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const images = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11]

function ClientCarousel() {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);
    const small = window.matchMedia("(max-width: 850px)");
    
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)

    };

    if (small.matches) {
        settings.slidesToShow = 1;
    }

    return(
        <div className="carousel">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ClientCarousel