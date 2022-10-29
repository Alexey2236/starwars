import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";
import { useState, useEffect } from "react";
import { charLoad, getDescrChar, searchChar } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";

import "./characters.css";

function CharactersPage() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  let characters = useSelector((state) => state.characters);
  const charDescrItem = useSelector((state) => state.charItemDescr);

  const openModalFn = () => {
    setOpenModal(true);
  };
  const closeModalFn = () => {
    setOpenModal(false);
  };

  function searchCharacters(e, value) {
    setValue(e.target.value);
    dispatch(searchChar(value));
  }

  useEffect(() => {
    dispatch(charLoad());
  }, []);

  function getDescrCharacters(url) {
    openModalFn(true);
    dispatch(getDescrChar(url));
  }

  return (
    <div className="characters-page">
      <h1 className="char-title">
        {characters.count} Peoples for you to choose your favorite
      </h1>
      <input
        className="char-search"
        type="text"
        placeholder="find..."
        value={value}
        onChange={(e) => searchCharacters(e, value)}
      />
      <div className="char-list">
        {characters.results ? (
          characters.results.map((char) => {
            return (
              <CharCard
                openModalFn={openModalFn}
                key={char.name}
                char={char}
                getDescrCharacters={getDescrCharacters}
              />
            );
          })
        ) : (
          <BeatLoader color="grey" />
        )}
      </div>
      {openModal === true ? (
        <Modal closeModalFn={closeModalFn} charDescrItem={charDescrItem} />
      ) : null}

      <div className="button-wrapper">
        <button className="home-page-btn"></button>
        <button className="home-page-btn"></button>
      </div>
    </div>
  );
}

export default CharactersPage;
