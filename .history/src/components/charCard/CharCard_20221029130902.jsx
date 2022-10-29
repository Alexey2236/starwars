import "./charCard.css";

function CharCard({ openModalFn, char }) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = char;
  return (
    <div className="char-card" onClick={openModalFn}>
      <div className="char-name">{name}</div>
      <div className="char-options">
        <div className="height">
          <div className="value">{height}</div>
          <div className="name">height</div>
        </div>
        <div className="mass">
          <div className="value">{mass}</div>
          <div className="name">mass</div>
        </div>
      </div>
      <div className="age-gender">
       {gender !== 'n/a'  ?  <div className="param">{gender}</div> : null}
        <div className="param">{birth_year}</div>
      </div>
    </div>
  );
}

export default CharCard;
