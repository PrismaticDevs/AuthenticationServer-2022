import React, { useState } from "react";
import "../App.css";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);
  const yes = () => {
    props.confirm();
  };
  const no = () => {
    setShowModal(false);
    window.location.reload();
  };

  return showModal ? (
    <div className="modalBG">
      <div className="modal">
        <h3>{props.message}</h3>
        <div>
          <button onClick={no} className="cancel">
            Cancel
          </button>
          <button onClick={yes} className="confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
