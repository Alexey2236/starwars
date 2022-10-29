import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";
function Header() {
  let styles = "header-link";
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <NavLink
          className={(isActive) => styles + (!isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink className={(isActive) => "header-link" + (!isActive ? "active" : "")} to="/characters">
          Characters
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

<li>
  <NavLink
    end
    style={({ isActive }) => ({ color: isActive ? "red" : "inherit" })}
    to="/"
  >
    Characters
  </NavLink>
</li>;
