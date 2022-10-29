import { Link, NavLink  } from "react-router-dom";
import logo from "../../img/logo.png";
import './header.css'
function Header() {
  return (
    <div className="header">
  
        <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <NavLink className="header-link active" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/characters">
          Characters
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
