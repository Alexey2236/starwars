import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          render={({ location }) => location.pathname !== "*" && <Header />}
        />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/characters" element={<CharactersPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
