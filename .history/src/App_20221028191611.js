import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/homePage/HomePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const openModalFn = (value) => {
    setOpenModal(value);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {openModal === true ? <Modal setOpenModal={setOpenModal} /> : null}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/characters"
            element={<CharactersPage openModalFn={openModalFn} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
