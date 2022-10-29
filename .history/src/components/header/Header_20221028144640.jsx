import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import './header.css'
function Header() {
  return (
    <div className="header">
    <div className="container">
    <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <Link className="header-link active" to="/">
          Home
        </Link>
        <Link className="header-link" to="/characters">
          Characters
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
