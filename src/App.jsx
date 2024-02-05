import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Navbar from "./Components/NavBar/Navbar"
import './index.css'
import Rings from "./Screens/Rings/Rings"
import EarRing from "./Screens/EarRings/EarRings"
import Necklace from "./Screens/Necklace/Necklaces"
import More from "./Screens/More/More"
import Home from "./Screens/Home/Home"
import CustomSlider from "./Components/Slider/CustomSlider"

const App = () => {
  return (
    <div className="container" >
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/EarRings" element={<EarRing />} />
        <Route path="/Necklace" element={<Necklace />} />
        <Route path="/More" element={<More />} />
      </Routes>
      <div className="Main-container" >
      <CustomSlider />
      </div>
      
    </div>
  )
}

export default App