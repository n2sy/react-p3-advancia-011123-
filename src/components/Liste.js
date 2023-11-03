import React, { useContext } from "react";
import Item from "./Item";
import CandidatContexte from "../store/CandidatsContexte";

function Liste(props) {
  const CandCtx = useContext(CandidatContexte);
  CandCtx.getAllCandidats();
  return (
    <ol className="list-group">
      {CandCtx.tabCandidats.map((cand) => {
        return (
          <Item
            onSelected={props.onSelected}
            oneCand={cand}
            key={cand._id}
          ></Item>
        );
      })}
    </ol>
  );
}

export default Liste;
