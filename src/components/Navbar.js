import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <Link class="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/cv">
          Cv
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/cv/add">
          Add CV
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
