import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import OutputList from "./components/OutputList/OutpusList";
import "./App.css";

function App() {
  const initialUsers = [];

  const [usersList, setUsersList] = useState(initialUsers);

  const collectUserData = (userData) => {
    setUsersList((prevUser) => {
      return [userData, ...prevUser];
    });
  };

  let userListSection = <p> No user added yet 🎇</p>
  if(usersList.length > 0){
    userListSection = <OutputList users={usersList} />
  };



  return (
    <React.Fragment>
      <div className="inputs-container">
        <InputForm onSubmit={collectUserData} />
      </div>
      <div className="users-container">
        {userListSection}
      </div>
    </React.Fragment>
  );
}

export default App;
