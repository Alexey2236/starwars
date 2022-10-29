import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";

import { useState } from "react";

import "./characters.css";
function CharactersPage() {
  const [openModal, setOpenModal] = useState(false);
  const openModalFn = () => {
    setOpenModal(true);
  };
  const closeModalFn = () => {
    setOpenModal(false);
  };

  return (
    <div className="characters-page">
     
      <h1 className="char-title">60 Peoples for you to choose your favorite</h1>
      <input className="char-search" type="text" placeholder="find..." />
      <div className="char-list">
        <CharCard openModalFn={openModalFn} />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
      </div>
      {openModal === true ? <Modal closeModalFn={closeModalFn} /> : null}
    </div>
  );
}

export default CharactersPage;
