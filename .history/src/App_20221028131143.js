import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withRouter } from "react-router";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App({ location }) {
  return (
    <BrowserRouter>
      <div className="App">
        {location.parthname !== "*" && <Header />}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/characters" element={<CharactersPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default  withRouter(App)
