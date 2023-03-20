import { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const [isError, setIsError] = useState(false);

  const enteredStringRef = useRef();

  const changeHandler = (event) => {
    const enteredString = enteredStringRef.current.value;
    if(!isError){
        return
    } else if (enteredString.trim().length > 0) {
      setIsError(false);
      return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredString = enteredStringRef.current.value;
    if (enteredString.trim().length === 0) {
      setIsError(true);
      return;
    }
    if(!isError){
        props.onSuccess(enteredString);
    }
  };

  return (
    <>
      <form className={classes["input-form"]}>
        <input
          className={classes["input-field"]}
          type="text"
          placeholder="Enter your string here..."
          ref={enteredStringRef}
          onChange={changeHandler}
        />
        <Button type="submit" onClick={submitHandler}>
          Submit
        </Button>
        {isError && (
          <div className={classes["error-text"]}>
            <span>Bro ? write something..</span>
            <span> For people like you I had to do this extra task</span>
          </div>
        )}
      </form>
    </>
  );
};

export default InputForm;
