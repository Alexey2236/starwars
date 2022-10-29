import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/characters" element={<CharactersPage />} />
          </Routes>
        </div>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
