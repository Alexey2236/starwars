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
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(2);

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

  function nextPage() {
    dispatch(charLoad(page));
    setPage((page) => page + 1);
    console.log(page);
  }

  function prevPage() {
    dispatch(charLoad(page));
    setPage((page) => page - 2);
    console.log(page);
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
        {loading !== true ? (
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
        <button
          className="home-page-btn"
          onClick={prevPage}
          disabled={page === 2 ? true : false}
        >
          Prev Page
        </button>
        <h1>{page - 1}</h1>
        <button
          className="home-page-btn"
          onClick={nextPage}
          disabled={page === Math.ceil(characters.count / 10) ? true : false}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default CharactersPage;
