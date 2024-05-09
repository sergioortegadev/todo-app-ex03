import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
      </div>
    </>
  );
};
export default NavBar;
