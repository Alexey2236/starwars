import man from '../../img/man.png'
import "./modal.css";
function Modal() {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="gender-block">
            <img  className="char-gender" src={man} alt="gender" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
