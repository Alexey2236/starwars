import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./errorPage.css";
import errorBanner from "../../img/errorBanner.png";

function ErrorPage() {
  let history = useNavigate();

  function handleClick() {
    history("/");
  }

  return (
    <div className="error-page">
      <div className="error">
        404
        <img className="banner" src={errorBanner} alt="errorBanner" />
      </div>

      <a className="return" onClick={handleClick}>
        Return
      </a>
    </div>
  );
}

export default ErrorPage;