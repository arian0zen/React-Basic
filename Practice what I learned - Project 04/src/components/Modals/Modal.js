import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="card modal">
      <header className="header">
        <h2>Invalid Input</h2>
      </header>
      <div className="error-content">
        <p>{props.error}</p>
        <button className="modal-button" onClick={props.OnClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay error={props.error} OnClick={props.OnClick}/>, document.getElementById('overlay-root'))}
  </React.Fragment>;
};

export default Modal;
