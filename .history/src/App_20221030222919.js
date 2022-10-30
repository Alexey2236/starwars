import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/characters" element={<CharactersPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
