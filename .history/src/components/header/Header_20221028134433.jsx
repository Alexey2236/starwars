import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </div>
    </div>
  );
}

export default Header;
