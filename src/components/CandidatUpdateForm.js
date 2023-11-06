import React, { useContext, useState, useEffect } from "react";
import CandidatContexte from "../store/CandidatsContexte";
import { useNavigate, useParams } from "react-router-dom";

function CandidatUpdateForm() {
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    prenom: "",
    nom: "",
    age: 0,
    profession: "",
    avatar: "",
  });

  const CandCtx = useContext(CandidatContexte);
  const navigate = useNavigate();
  useEffect(() => {
    CandCtx.getCandidatById(id);
  }, []);
  console.log(CandCtx.selCand);

  function submitHandler(e) {
    e.preventDefault();
    CandCtx.addNewCandidat(formValue);
    navigate("/cv");
  }

  function changeHandler(e) {
    setFormValue((prev) => {
      prev[e.target.name] = e.target.value;
      console.log(prev);
      return prev;
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Prénom</label>
      <input
        className="form-control"
        name="prenom"
        value={CandCtx.selCand?.prenom}
        onChange={changeHandler}
      ></input>
      <label>Nom</label>
      <input
        className="form-control"
        name="nom"
        onChange={changeHandler}
      ></input>
      <label>Age</label>
      <input
        className="form-control"
        type="number"
        name="age"
        onChange={changeHandler}
      ></input>
      <label>Profession</label>
      <input
        className="form-control"
        name="profession"
        onChange={changeHandler}
      ></input>
      <label>Avatar</label>
      <input
        className="form-control"
        name="avatar"
        onChange={changeHandler}
      ></input>
      <button
        type="submit"
        style={{ margin: "20px 0" }}
        className="btn btn-primary"
      >
        Ajouter Candidat
      </button>
    </form>
  );
}

export default CandidatUpdateForm;
