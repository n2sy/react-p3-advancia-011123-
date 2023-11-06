import { createContext, useState } from "react";

const CandidatContexte = createContext({
  tabCandidats: [],
  getAllCandidats: () => {},
  getCandidatById: () => {},
});

export function CandidatContexteProvider(props) {
  const [tabCands, setTabCands] = useState([]);
  const [selCand, setSelCand] = useState({});
  function getCandidats() {
    fetch("http://localhost:3001/cv/persons")
      .then((res) => res.json())
      .then((data) => {
        setTabCands(data);
      });
  }

  function getCandById(id) {
    fetch(`http://localhost:3001/cv/persons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelCand(data);
      });
  }

  const c = {
    tabCandidats: tabCands,
    getAllCandidats: getCandidats,
    getCandidatById: getCandById,
    selectedCandidat: selCand,
  };

  return (
    <CandidatContexte.Provider value={c}>
      {props.children}
    </CandidatContexte.Provider>
  );
}

export default CandidatContexte;
