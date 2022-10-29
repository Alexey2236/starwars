import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";
import { useState, useEffect } from "react";
import { charLoad, getDescrChar, searchChar } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import Pagination from "../../components/Pagination";

import "./characters.css";

function CharactersPage() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
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
    if (value === "") {
      dispatch(charLoad());
    }
    setValue(e.target.value);
    dispatch(searchChar(value));
  }

  function getDescrCharacters(url) {
    openModalFn(true);
    dispatch(getDescrChar(url));
  }

  useEffect(() => {
    dispatch(charLoad());
  }, []);

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

      {
        characters ? <Pagination characters={+characters}/> : null
      }
    </div>
  );
}

export default CharactersPage;

{
  /* <div className="button-wrapper">
<button
  className="home-page-btn"
  onClick={prevPage}
  disabled={page === 2 ? true : false}
>
  Prev Page
</button>
<h1>{page}</h1>
<button
  className="home-page-btn"
  onClick={nextPage}
  disabled={page === Math.ceil(characters.count / 10) ? true : false}
>
  Next Page
</button>
</div> */
}

// function nextPage() {
//   setPage(page + 1);

//   dispatch(charLoad(page));
// }

// function prevPage() {
//   setPage(page - 1);
//   dispatch(charLoad(page));
// }
