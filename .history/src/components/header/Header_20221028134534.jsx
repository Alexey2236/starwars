import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/characters">
          Characters
        </Link>
      </div>
    </div>
  );
}

export default Header;
