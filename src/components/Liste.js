import React, { useContext, useEffect } from "react";
import Item from "./Item";
import CandidatContexte from "../store/CandidatsContexte";

function Liste(props) {
  console.log("Dans liste");
  const CandCtx = useContext(CandidatContexte);
  useEffect(() => {
    CandCtx.getAllCandidats();
  }, []);
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
