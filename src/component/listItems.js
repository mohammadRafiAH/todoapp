import React from "react";

function listItems(props) {
  
  return (
    <div>
      <li className="item" key={props.index}>
        <span className="items-features">
          <i
            className="fa-solid fa-trash"
            onClick={() => props.onDeleteClick(props.index)}
          ></i>
        </span>
        <span className="item-name">{props.value}</span>
      </li>
    </div>
  );
}

export default listItems;
