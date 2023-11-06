import React, { useState } from "react";

function CandidatForm() {
  const [formValue, setFormValue] = useState({
    prenom: "",
    nom: "",
    age: 0,
    profession: "",
    avatar: "",
  });

  function submitHandler(e) {
    e.preventDefault();
  }

  function changeHandler(e) {
    // e c'est l'event onChange
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Prénom</label>
      <input
        className="form-control"
        name="prenom"
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

export default CandidatForm;
