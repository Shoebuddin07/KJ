import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <NavLink to="/">
          {" "}
          <p>KJ</p>
        </NavLink>
      </div>
      <div>
        <ul className="navItems">
          <li>
            <NavLink to="/Rings">
              Rings
              <ul className="submenu">
                <li>
                  {" "}
                  <NavLink to="#">Gold</NavLink>
                </li>
                <li>
                  <NavLink to="#">Silver</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="#">Platinum</NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink to="/EarRings">Ear Rings</NavLink>
          </li>
          <li>
            <NavLink to="Necklace">Necklace</NavLink>
          </li>
          <li>
            <NavLink to="/More">More</NavLink>
          </li>
          <li>
            <NavLink to="/Rings">Rings</NavLink>
          </li>
          <li>
            <NavLink to="/EarRings">Ear Rings</NavLink>
          </li>
          <li>
            <NavLink to="Necklace">Necklace</NavLink>
          </li>
          <li>
            <NavLink to="/More">More</NavLink>
          </li>
          <li>
            <NavLink to="/Rings">Rings</NavLink>
          </li>
          <li>
            <NavLink to="/EarRings">Ear Rings</NavLink>
          </li>
          <li>
            <NavLink to="Necklace">Necklace</NavLink>
          </li>
          <li>
            <NavLink to="/More">More</NavLink>
          </li>
        </ul>
      </div>

      <div className="Search">
        <IoSearchSharp color="white" />
        <input type="text" placeholder="search"></input>
      </div>
    </div>
  );
};

export default Navbar;
