import "./charCard.css";

function CharCard({ openModalFn, char }) {
  const {
    name,
    height,
    mass,
    birth_year,
    gender,
  } = char;
  let backgroundGender;
  switch (gender) {
    case "male":
      backgroundGender = "green";
      break;
    case "female":
      backgroundGender = "#c956ff";
      break;
    case "hermaphrodite":
      backgroundGender = "yellow";
      break;
    default:
      return backgroundGender;
  }
  return (
    <div className="char-card" onClick={openModalFn}>
      <div className="char-name">{name}</div>
      <div className="char-options">
        <div className="height">
          {height !== "unknown" ? (
            <div className="value">{height}</div>
          ) : (
            <div className="value">0</div>
          )}
          <div className="name">height</div>
        </div>
        <div className="mass">
          {mass !== "unknown" ? (
            <div className="value">{mass}</div>
          ) : (
            <div className="value">0</div>
          )}
          <div className="name">mass</div>
        </div>
      </div>
      <div className="age-gender">
        {gender !== "n/a" ? (
          <div className="param" style={{ background: backgroundGender }}>
            {gender}
          </div>
        ) : null}
        {birth_year !== "unknown" ? (
          <div className="param" style={{ background: "turquoise" }}>
            {birth_year}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CharCard;
