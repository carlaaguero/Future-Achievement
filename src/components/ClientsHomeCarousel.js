import React, { useState, useEffect } from 'react';
import "./ClientsHomeCarousel.css";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";
import icon7 from "../assets/icon-7.png";
import icon8 from "../assets/icon-8.png";
import icon9 from "../assets/icon-9.png";
import icon10 from "../assets/icon-10.png";
import icon11 from "../assets/icon-11.png";

function ClientsHomeCarousel() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const initialLogos = [
      icon1, icon2, icon3, icon4, icon5,
      icon6, icon7, icon8, icon9, icon10,
      icon11
    ];
    setLogos(initialLogos);

    const interval = setInterval(() => {
      setLogos(prevLogos => {
        const nextLogos = [...prevLogos.slice(1), prevLogos[0]];
        return nextLogos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} />
        ))}
        {logos.map((logo, index) => (
          <img key={`second-${index}`} src={logo} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ClientsHomeCarousel;
