import "./characters.css";
function CharactersPage() {
  return (
    <div className="characters-page">
      <h1 className="char-title">60 Peoples for you to choose your favorite</h1>
      <input className="char-search" type="text" placeholder="find..." />
      <div className="char-list">
        <div className="char-card">
          <div className="char-name">Jango Fett</div>
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
      </div>
    </div>
  );
}

export default CharactersPage;