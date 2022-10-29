import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";
import { useState, useEffect } from "react";
import { charLoad } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

import "./characters.css";

function CharactersPage() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const openModalFn = () => {
    setOpenModal(true);
  };
  const closeModalFn = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(charLoad());
  }, []);

  console.log(characters)

  return (
    <div className="characters-page">
      <h1 className="char-title">60 Peoples for you to choose your favorite</h1>
      <input className="char-search" type="text" placeholder="find..." />
      <div className="char-list">
        {
          characters.results.map(char => {
            return <CharCard openModalFn={openModalFn}/>
          })
        }
      </div>
      {openModal === true ? <Modal closeModalFn={closeModalFn} /> : null}
    </div>
  );
}

export default CharactersPage;


{/* <CharCard openModalFn={openModalFn} />
        <CharCard openModalFn={openModalFn} />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard /> */}