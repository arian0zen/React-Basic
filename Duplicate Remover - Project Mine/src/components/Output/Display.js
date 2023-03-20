import React, { useState, useEffect } from "react";
import ColorHash from "color-hash";
import { MdDeleteSweep, MdOutlineKeyboardBackspace } from "react-icons/md";
import Button from "../UI/Button/Button";
import SuccessHeader from "../Success/Success";
import classes from "./Display.module.css";

const DisplayOutput = (props) => {
  const [output, setOutput] = useState(props.input);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputArray = Array.from(output);
  const colorHash = new ColorHash();
  
  //   const getRandomColor = ()=>{
  //     const letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }

  //   const uniqueChars = [...new Set(inputArray)];
  //   const elementColors = uniqueChars.reduce((acc, element) => {
  //     acc[element] = getRandomColor();
  //     return acc;
  //   }, {});

  useEffect(() => {
    const uniqueChars = [...new Set(inputArray)];
    if (uniqueChars.length === inputArray.length) {
      setIsSuccess(true);
    }
  }, [inputArray]);

  const deleteHandler = (index) => {
    const clickedChar = inputArray[index];
    setOutput((prevArray) => {
      const newArray = [...prevArray];
      const duplicateIndexes = [];
      newArray.forEach((char, i) => {
        if (char === clickedChar && i !== index) {
          duplicateIndexes.push(i);
        }
      });
      duplicateIndexes.reverse().forEach((i) => newArray.splice(i, 1));
      return newArray;
    });
  };

  const goBackHandler = () => {
    props.onClear();
  };

  const outputDivs = inputArray.map((char, index) => {
    return (
      <div
        className={classes["output-card"]}
        key={index}
        id={index}
        style={{ backgroundColor: colorHash.hex(char) }}
      >
        {char}
        <MdDeleteSweep
          size={"16px"}
          onClick={deleteHandler.bind(null, index)}
        />
      </div>
    );
  });

  return (
    <>
      <div className={classes["original-input"]}>{output}</div>
      {isSuccess && (
        <SuccessHeader inputString={props.input} outputString={output} />
      )}
      <div className={classes["output-wrapper"]}>{outputDivs}</div>
      <Button className={classes["go-back"]} onClick={goBackHandler} >
        Go Back{" "}
        <MdOutlineKeyboardBackspace size={"20px"} />
      </Button>
    </>
  );
};

export default DisplayOutput;

// const deleteHandler = (index) => {
//     const char = inputArray[index];
//     setOutput(prevArray => {
//         const newArray = [...prevArray]; // copy the previous array
//         const duplicateIndexes = []; // array to hold the indexes of duplicates
//         newArray.forEach((c, i) => {
//           if (c === char && i !== index) {
//             duplicateIndexes.push(i); // add index of duplicate
//           }
//         });
//         duplicateIndexes.reverse().forEach(i => newArray.splice(i, 1)); // remove duplicates
//         return newArray;
//       });
//   };
