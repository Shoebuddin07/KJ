import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/NavBar/Navbar";
import CustomSlider from "../../Components/Slider/CustomSlider";
import Rings from "../Rings/Rings";
import EarRings from "../EarRings/EarRings";
import Necklaces from "../Necklace/Necklaces";
import More from "../More/More";
import "./Home.css";
import Cards from "../Cards/Cards";


const Home = () => {
  return (
    <div className="Main-container">
      <Header />
      <Navbar />
      <div className="slider-container">
        <div className="slider-component">
          <CustomSlider />
        </div>
      </div>
      <Routes>
        <Route path="/Rings" element={<Rings />} />
        <Route path="/EarRings" element={<EarRings />} />
        <Route path="/Necklace" element={<Necklaces />} />
        <Route path="/More" element={<More />} />
      </Routes>
      <div className="Cards-container"  >
       <Cards/>
      </div>
    </div>
  );
};

export default Home;
