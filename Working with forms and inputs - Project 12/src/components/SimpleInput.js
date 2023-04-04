import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const submitChangeHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };
  const nameInputClasses = inputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={submitChangeHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {inputIsInvalid && (
        <p className="error-text">Please enter a valid name</p>
      )}
    </form>
  );
};

export default SimpleInput;
