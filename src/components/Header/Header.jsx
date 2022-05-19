import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import './header.css';

class header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Logo/>          
          <nav className="nav">
            <ul className="content-it">
              <li>
                <NavLink className="Inicio" to="/">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className="instituciones" to="/instituciones">
                  Instituciones
                </NavLink>
              </li>
              <li>
                <NavLink className="contacto" to="/contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
    );
  }
}
export default header;
