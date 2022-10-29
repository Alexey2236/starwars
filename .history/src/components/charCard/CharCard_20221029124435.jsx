import "./charCard.css";

function CharCard({ openModalFn,  name }) {
  return (
    <div className="char-card" onClick={openModalFn}>
      <div className="char-name">{name.name}</div>
      <div className="char-options">
        <div className="height">
          <div className="value">144</div>
          <div className="name">height</div>
        </div>
        <div className="mass">
          <div className="value">144</div>
          <div className="name">mass</div>
        </div>
      </div>
      <div className="age-gender">
        <div className="param">male</div>
        <div className="param">41.9BBY</div>
      </div>
    </div>
  );
}

export default CharCard;
