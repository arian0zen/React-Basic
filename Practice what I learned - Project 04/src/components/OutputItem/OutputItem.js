import React from "react";
import './OutputItem.css';

const OutputItem = (props)=>{
    return (
        <li onClick={props.onClick} className="output-item">
            {props.children}
        </li>
    )
}

export default OutputItem