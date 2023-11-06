import React from "react";
import { Link } from "react-router-dom";

function Details(props) {
  if (!props.selectedCandidat) {
    return <div></div>;
  } else
    return (
      <div class="card-container">
        <div class="card">
          <div class="front">
            <div class="cover">
              <img src={require(`../assets/rotating_card_thumb2.png`)} />
            </div>
            <div class="user">
              <img
                class="img-circle"
                src={require(`../assets/${props.selectedCandidat.avatar}`)}
              ></img>
            </div>
            <div class="content">
              <div class="main">
                <h3 class="name">{`${props.selectedCandidat?.prenom} ${props.selectedCandidat?.nom}`}</h3>
                <p class="profession">{props.selectedCandidat?.age}</p>

                <p class="text-center">{props.selectedCandidat?.profession}</p>
              </div>
              <div class="footer">
                <div class="rating">
                  <i class="fa fa-mail-forward"></i> Auto Rotation
                </div>
              </div>
            </div>
          </div>
          <div class="back">
            <div class="header">
              <h5 class="motto">
                "To be or not to be, this is my awesome motto!"
              </h5>
            </div>
            <div class="content">
              <div class="main">
                <h4 class="text-center">Job Description</h4>
                <p class="text-center">
                  Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                  others...
                </p>

                <div class="stats-container">
                  <div class="stats">
                    <h4>235</h4>
                    <p>Followers</p>
                  </div>
                  <div class="stats">
                    <h4>114</h4>
                    <p>Following</p>
                  </div>
                  <div class="stats">
                    <h4>35</h4>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="social-links text-center">
                <button className="btn btn-info">
                  <Link to={`/cv/${props.selectedCandidat._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Details;
