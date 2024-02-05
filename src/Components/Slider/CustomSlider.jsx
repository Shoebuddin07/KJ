import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './SliderData.json'
import './Slider.css'

const CustomSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {
            data.map((d) => (
              <div key={d.id} >
                <h3> {d.name}</h3>
                <div>
                  <img className="card-image" src={d.image} ></img>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default CustomSlider