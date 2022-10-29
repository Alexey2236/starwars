import CharCard from "../../components/charCard/CharCard";
import Modal from "../../components/modal/Modal";
import "./characters.css";
function CharactersPage() {
  return (
    <div className="characters-page">
      <Modal/>
      <h1 className="char-title">60 Peoples for you to choose your favorite</h1>
      <input className="char-search" type="text" placeholder="find..." />
      <div className="char-list">
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
       <CharCard/>
      </div>
    </div>
  );
}

export default CharactersPage;
