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
        <link className={({isActive})=> isActive ? 'active-link'  : 'hghg'} to="/">
          Home
        </link>
        <link className={({isActive})=> isActive ? 'active-link' : 'fhfh'} to="/characters">
          Characters
        </link>
      </nav>
    </div>
  );
}

export default Header;

