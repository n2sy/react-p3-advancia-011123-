import React, { useContext } from "react";
import { useParams } from "react-router";
import CandidatContexte from "../store/CandidatsContexte";

function Ìnfos() {
  const { id } = useParams();
  const CandCtx = useContext(CandidatContexte);

  CandCtx.getCandidatById(id);

  return (
    <div class="d-flex justify-content-center">
      <div class="col-lg-8 push-lg-4">
        <div class="tab-content p-b-3">
          <div class="tab-pane active" id="profile">
            <div class="d-flex justify-content-center">
              <img
                width="150px"
                height="150px"
                class="rounded-circle align-content-center"
                src={
                  CandCtx.selectedCandidat.avatar
                    ? require(`../assets/${CandCtx.selectedCandidat?.avatar}`)
                    : ""
                }
                alt=""
              ></img>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h4 class="m-t-2">
                  <span class="fa fa-clock-o ion-clock pull-xs-right"></span>{" "}
                  Informations
                </h4>
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Prénom</strong>{" "}
                        {CandCtx.selectedCandidat?.prenom}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Nom</strong> {CandCtx.selectedCandidat?.nom}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Age</strong> {CandCtx.selectedCandidat?.age}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Profession</strong>
                        {CandCtx.selectedCandidat?.profession}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Image</strong> path
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-danger">Delete</button>
                  <button class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ìnfos;
