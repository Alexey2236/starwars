import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
function Header() {
  let classNamesActive = 'header-link'
  let classNamesNoActive = 'header-link'

  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="nav">
        <NavLink className={({navData})=> navData.isActive ? 'active-link'  : ''} to="/">
          Home
        </NavLink>
        <NavLink className={(navData)=> navData.isActive? 'active-link' : ''} to="/characters">
          Characters
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

