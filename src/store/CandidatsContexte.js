import { createContext, useState } from "react";

const CandidatContexte = createContext({
  tabCandidats: [],
  getAllCandidats: () => {},
  getCandidatById: () => {},
  addNewCandidat: () => {},
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

  function addCandidat(newCand) {
    fetch("http://localhost:3001/cv/persons", {
      method: "POST",
      body: JSON.stringify(newCand),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Candidat ajouté avec succès");
      });
  }

  const c = {
    tabCandidats: tabCands,
    getAllCandidats: getCandidats,
    getCandidatById: getCandById,
    addNewCandidat: addCandidat,
    selectedCandidat: selCand,
  };

  return (
    <CandidatContexte.Provider value={c}>
      {props.children}
    </CandidatContexte.Provider>
  );
}

export default CandidatContexte;
