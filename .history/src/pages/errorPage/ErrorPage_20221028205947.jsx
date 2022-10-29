import { Link , generatePath} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./errorPage.css";
import errorBanner from "../../img/errorBanner.png";

function ErrorPage() {
  // const { goBack } = useHistory();
  // let history = useHistory();

  function handleClick() {
    HashRouter.push("/");
  }

  return (
    <div className="error-page">
      <div className="error">
        404
        <img className="banner" src={errorBanner} alt="errorBanner" />
      </div>

      <a href="!#" className="return" onClick={generatePath('/')} >
        Return
      </a>
    </div>
  );
}

export default ErrorPage;
