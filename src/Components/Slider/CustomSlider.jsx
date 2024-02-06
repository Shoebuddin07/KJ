import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './SliderData.json'
import './Slider.css'

const CustomSlider = () => {

  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // pauseonhover:true  
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings} className="slider" >
          {
            data.map((d) => (
              <div key={d.id} >
                <h3 className="image-title" > {d.name}</h3>
                <div className="image-container" >
                  <img className="custom-image" src={d.image} ></img>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default CustomSlider