import React, { useState } from "react";
import Liste from "../components/Liste";
import Details from "../components/Details";

function Cv() {
  const [selCandidat, setSelCandidat] = useState();

  function changeSelectedCandidat(cand) {
    setSelCandidat(cand);
  }
  return (
    <div className="row">
      <div className="col-md-5">
        <Liste onSelected={changeSelectedCandidat}></Liste>
      </div>
      <div className="col-md-7">
        <Details selectedCandidat={selCandidat}></Details>
      </div>
    </div>
  );
}

export default Cv;
