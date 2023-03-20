import { FcOk } from "react-icons/fc";
import classes from "./Success.module.css";

const SuccessHeader = (props) => {
  return (
    <div className={classes["success-header"]}>
      
      <p className={classes.ok}><FcOk size={"40px"} />Successfully removed all duplicate charecters</p>
      <p>Original string: <span className={classes.old}>{props.inputString}</span></p>
      <p>Success string: <span className={classes.new}>{props.outputString}</span></p>
    </div>
  );
};

export default SuccessHeader;
