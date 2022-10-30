import { useTransition, animated } from "react-spring";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
function App() {
  const location = useLocation();
  // const transition = useTransition(location, (location) => location.pathname, {
  //   from: {
  //     opacity: 0,
  //   },
  //   enter: {
  //     opacity: 1,
  //   },
  //   leave: {
  //     opacity: 0,
  //   },
  // });
  return (
    <>
      <Header />
      <div className="App">
        {transition.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Routes location={item}>
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
