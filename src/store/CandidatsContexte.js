import { createContext, useState } from "react";

const CandidatContexte = createContext({
  tabCandidats: [],
  getAllCandidats: () => {},
});

export function CandidatContexteProvider(props) {
  const [tabCands, setTabCands] = useState([]);

  function getCandidats() {
    fetch("http://localhost:3001/cv/persons")
      .then((res) => res.json())
      .then((data) => {
        setTabCands(data);
      });
  }

  const c = {
    tabCandidats: tabCands,
    getAllCandidats: getCandidats,
  };

  return (
    <CandidatContexte.Provider value={c}>
      {props.children}
    </CandidatContexte.Provider>
  );
}

export default CandidatContexte;
