import React from "react";
import './OutpusList.css';
import OutputItem from "../OutputItem/OutputItem"
const OutputList = (props) => {
    return (
        <ul className="list-item">
            {props.users.map(user => <OutputItem key={user.id}>{user.username} | {user.age} years old</OutputItem> )}
        </ul>
    )
};

export default OutputList