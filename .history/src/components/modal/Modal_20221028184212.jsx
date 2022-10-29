import man from "../../img/man.png";
import herm from "../../img/herm.png";
import "./modal.css";
function Modal() {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="gender-block">
          <img className="char-gender" src={man} alt="gender" />
          <div className="age-gender-modal">
            <div className="param">male</div>
            <div className="param">41.9BBY</div>
          </div>
        </div>
        <div className="desrc-char-block">
          <div className="name-char">Jabba Desilijic Tiure</div>
          <div className="skin">
            <div>hair color: brown: brown</div>
            <div>skin color - white</div>
            <div>hair color: brown</div>
          </div>
          <div className="param-wrapper">
            <div className="height-modal">
              <div className="value">144</div>
              <div className="name">height</div>
            </div>
            <div className="height-modal">
              <div className="value">144</div>
              <div className="name">mass</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
