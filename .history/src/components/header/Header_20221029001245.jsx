import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
function Header() {


  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <lNavLinkink className={({isActive})=> isActive ? 'active-link'  : 'hghg'} to="/">
          Home
        </lNavLinkink>
        <NavLink className={({isActive})=> isActive ? 'active-link' : 'fhfh'} to="/characters">
          Characters
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

