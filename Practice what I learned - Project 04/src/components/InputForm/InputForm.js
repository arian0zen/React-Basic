import React, { useState, useRef } from "react";
import Modal from "../Modals/Modal";
import "./InputForm.css";

const InputForm = (props) => {

  const userNameInputRef = useRef();
  const ageInputRef = useRef();

  const [validORnot, setValidORnot] = useState(true);
  
  let errorContent = "Please enter a valid name and age (non-empty values).";
  
  const [errorMessage, setErrorMessage] = useState(errorContent);


  const submitHandler = (event) => {
    event.preventDefault();
    const userName_ref = userNameInputRef.current.value;
    const age_ref = ageInputRef.current.value;
    if (userName_ref.length === 0 || age_ref.length === 0) {
      setErrorMessage("Username and Age cannot be empty")
      setValidORnot(false);
      return;
    }
    if (parseInt(age_ref) <= 0) {
      setErrorMessage("Age cannot be less than 1");
      setValidORnot(false);
      return;
    }
    const userData = {
      username: userName_ref,
      age: age_ref,
      id: Math.random().toString(),
    };
    props.onSubmit(userData);
    userNameInputRef.current.value = "";
    ageInputRef.current.value = "";
    
  };

  const closeModalHandler = ()=>{
    setValidORnot(true);
  }

  const formClasses = !validORnot ? "input-form invalid" : "input-form";

  return (
    <React.Fragment>
      {!validORnot && <Modal error={errorMessage} OnClick={closeModalHandler}/>}

      <form onSubmit={submitHandler}>
        <div className={formClasses}>
          <label>Username</label>
          <input
            type="text"
            ref={userNameInputRef}
          />
          <label>Age (Years)</label>
          <input type="text" ref={ageInputRef} />
        </div>
        <button type="submit" className="input-button">Add User</button>
      </form>
    </React.Fragment>
  );
};

export default InputForm;
