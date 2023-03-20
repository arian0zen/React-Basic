import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/Input/InputForm";
import DisplayOutput from "./components/Output/Display";
function App() {
  const [input, setInput] = useState();
  const receiveInput = (input) => {
    setInput(input);
  };
  const clearInput = () => {
    console.log("clearing input");
    setInput();
  };

  return (
    <div className="app">
      {!input ? <InputForm onSuccess={receiveInput} /> : <DisplayOutput input={input} onClear={clearInput} />}
    </div>
  );
}

export default App;
