import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
function Header() {
  let classNamesActive = 'header-link active-link'
  let classNamesNoActive = 'header-link'

  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <NavLink className={({isActive})=> isActive ? classNamesActive : classNamesNoActive} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive})=> isActive ? classNamesActive : classNamesNoActive} to="/characters">
          Characters
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

