import { Link, Redirect } from "react-router-dom";
import "./errorPage.css";
import errorBanner from "../../img/errorBanner.png";
function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error">
        404
        <img className="banner" src={errorBanner} alt="errorBanner" />
      </div>

      <Redirect className="return" to="/">
        Return
      </Redirect>
    </div>
  );
}

export default ErrorPage;
