import { useTransition, animated } from "react-spring";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  const location = useLocation();
  const transition = useTransition(location, (location) => location.key, {});
  return (
    <>
      <Header />
      <div className="App">
        {transition.map(({ item, props, key }) => (
          <animated.div>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/characters" element={<CharactersPage />} />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default App;
