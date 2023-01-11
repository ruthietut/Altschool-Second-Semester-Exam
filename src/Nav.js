import { findByLabelText } from "@testing-library/react";
import  React, {useState}from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars} from "react-icons/fa";
import "./NavStyles.css"
  const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const[color, setColor] = useState(false);
    const changecolor = () => {
      if(window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
      
    };
    window.addEventListener("scroll", changecolor);

  return (
    <nav className={color? "header header-bg" : "header"}>
      <ul className={click? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="list" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="list" to="/Users">
            Users
          </Link>
        </li>
        <li>
          <Link className="list" to="/SignIn">
            Sign in
          </Link>
        </li>
        <li>
          <Link className="list" to="/Errortest">
            Error Test
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}

export default Nav;
