import man from "../../img/man.png";
import herm from "../../img/herm.png";
import woman from "../../img/woman.png";
import close from "../../img/close.png";

import "./modal.css";
function Modal({openModalFn}) {
  return (
    <div className="overlay">
      <div className="modal">
        <img className="close" src={close} alt="close"  onClick={()=> openModalFn(false)}/>

        <div className="modal-wrapper">
          <div className="gender-block">
            <img className="char-gender" src={herm} alt="gender" />
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
    </div>
  );
}

export default Modal;
