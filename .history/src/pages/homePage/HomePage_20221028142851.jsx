import { Link } from "react-router-dom";
import homebanner from "../../img/homebanner.png";
import "./homePage.css";
function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-descr">
        <div className="home-page-title">Find all your favorite character</div>
        <div className="home-page-subtitle">
          You can find out all the information about your favorite characters
        </div>
        <Link className="home-page-btn" to="/characters">
          See more...
        </Link>
      </div>
      <img src={homebanner} alt="homebanner" className="banner" />
    </div>
  );
}

export default HomePage;
