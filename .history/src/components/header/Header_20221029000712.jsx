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
        <NavLink className={({isActive})=> isActive ? 'active-link'  : classNamesNoActive} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive})=> isActive ? classNamesActive : classNamesNoActive} to="/characters">
          Characters
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

