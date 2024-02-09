import React from "react";
import "./kjCards.css";
import data from "./data.json";
import Slider from "react-slick";

const KJCards = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <Slider {...settings} >
        {data.map((a) => (
          <div key={a.id} className="cardContainer">
            <div
              className="cardTop"
              style={{ backgroundImage: `url(${a.img})` }}
            ></div>
            <div className="cardBottom">
              <span>{a.name}</span> 
             <span>{a.price}</span> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KJCards;
