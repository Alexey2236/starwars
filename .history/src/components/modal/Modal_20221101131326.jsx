import { useSelector } from "react-redux";
import man from "../../img/man.png";
import herm from "../../img/herm.png";
import woman from "../../img/woman.png";
import close from "../../img/close.png";
import { BeatLoader } from "react-spinners";

import "./modal.css";
function Modal({ closeModalFn}) {
  const charDescrItem = useSelector((state) => state.charItemDescr);

  const {
    gender,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
  } = charDescrItem;

  let backgroundGender;
  let iconGender;
  switch (gender) {
    case "male":
      backgroundGender = "green";
      iconGender = man;
      break;
    case "female":
      backgroundGender = "#c956ff";
      iconGender = woman;

      break;
    case "n/a":
      backgroundGender = "yellow";
      iconGender = herm;

      break;
    default:
      return backgroundGender;
  }
  return (
    <div className="overlay">
      <div className="modal">
        {charDescrItem ? (
          <>
            <img
              className="close"
              src={close}
              alt="close"
              onClick={closeModalFn}
            />

            <div className="modal-wrapper">
              <div className="gender-block">
                <img className="char-gender" src={iconGender} alt="gender" />
                <div className="age-gender-modal">
                  {gender !== "n/a" ? (
                    <div
                      className="param"
                      style={{ background: backgroundGender }}
                    >
                      {gender}
                    </div>
                  ) : (
                    <div
                      className="param"
                      style={{ background: backgroundGender }}
                    >
                      hermaphrodite
                    </div>
                  )}
                  {birth_year !== "unknown" ? (
                    <div className="param" style={{ background: "turquoise" }}>
                      {birth_year}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="desrc-char-block">
                <div className="name-char">{name}</div>
                <div className="skin">
                  {hair_color !== "n/a" ? (
                    <div>hair color: {hair_color}</div>
                  ) : null}
                  {skin_color !== "n/a" ? (
                    <div>skin color: {skin_color}</div>
                  ) : null}
                  {eye_color !== "n/a" ? (
                    <div>eye color: {eye_color}</div>
                  ) : null}
                </div>
                <div className="param-wrapper">
                  <div className="height-modal">
                    {height !== "unknown" ? (
                      <div className="value">{height}</div>
                    ) : (
                      <div className="value">0</div>
                    )}
                    <div className="name">height</div>
                  </div>
                  <div className="height-modal">
                    {mass !== "unknown" ? (
                      <div className="value">{mass}</div>
                    ) : (
                      <div className="value">0</div>
                    )}
                    <div className="name">mass</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <BeatLoader color="grey" />
        )}
      </div>
    </div>
  );
}

export default Modal;
