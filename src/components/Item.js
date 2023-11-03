import React from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.onSelected(props.oneCand);
      }}
      className="list-group-item"
    >
      <img
        style={{ width: "50px", height: "50px", margin: "0 10px" }}
        src={require(`../assets/${props.oneCand.avatar}`)}
      ></img>
      {`${props.oneCand.prenom} ${props.oneCand.nom}`}
    </li>
  );
}

export default Item;
