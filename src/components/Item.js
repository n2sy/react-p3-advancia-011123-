import React from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.onSelected(props.oneCand);
      }}
      className="list-group-item"
    >
      <img src={`../assets/${props.oneCand.avatar}`}></img>
      {`${props.oneCand.prenom} ${props.oneCand.nom}`}
    </li>
  );
}

export default Item;
