import { Button } from "bootstrap";
import React, { Component } from "react";
import logo from "../../pokemon.png";
import { Link } from "react-router-dom";

import "./../../App.css";
import SignUpForm from "./SignUpForm";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  fixed-top ">
          <a className="navbar-logo" href="/">
            <img src={logo} />
          </a>
          <Link type="button" class="btn btn-outline-warning ml-auto">
            registrarse
          </Link>
          <Link type="button" class="btn btn-outline-warning ml-1" href="">
            iniciar sesion
          </Link>
        </nav>
      </div>
    );
  }
}
