import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";
import { useState, useEffect } from "react";
import { charLoad, getDescrChar } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";

import "./characters.css";

function CharactersPage() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const charDescrItem = useSelector((state) => state.charItemDescr);

  const openModalFn = () => {
    setOpenModal(true);
  };
  const closeModalFn = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(charLoad());
  }, []);

  function getDescrCharacters(url) {
    openModalFn(true);
    dispatch(getDescrChar(url));
    console.log('item', charDescrItem )
  }
  
  return (
    <div className="characters-page">
      <h1 className="char-title">
        {characters.count} Peoples for you to choose your favorite
      </h1>
      <input className="char-search" type="text" placeholder="find..." />
      <div className="char-list">
        {characters.results ? (
          characters.results.map((char) => {
            return (
              <CharCard openModalFn={openModalFn} key={char.name} char={char} getDescrCharacters={getDescrCharacters} />
            );
          })
        ) : (
          <BeatLoader color="grey" />
        )}
      </div>
      {openModal === true ? <Modal closeModalFn={closeModalFn} /> : null}
    </div>
  );
}

export default CharactersPage;
