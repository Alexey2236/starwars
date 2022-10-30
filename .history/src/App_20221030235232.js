import { useTransition, animated } from "react-spring";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)'
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)'

    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)'

    },
  });
  return transition((props, item) => (
    <>
      <Header />
      <div className="App">
        <animated.div style={props}>
          <Routes location={item}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/characters" element={<CharactersPage />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </animated.div>
      </div>
    </>
  ));
}

export default App;
