import "./errorPage.css";
import errorBanner from "../../img/errorBanner.png";
function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error">404</h1>
      <img src={errorBanner} alt="" />
    </div>
  );
}

export default ErrorPage;
