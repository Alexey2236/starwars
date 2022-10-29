import { Link } from "react-router-dom";
import "./errorPage.css";
import errorBanner from "../../img/errorBanner.png";
function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error">
        404
        <img className="error-banner" src={errorBanner} alt="" />
      </div>
      <Link className="return" to='/'>Return</Link>
    </div>
  );
}

export default ErrorPage;
