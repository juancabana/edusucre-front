import React, { Component } from "react";
import "./Login.css";
import Logo from "./../../components/Logo/Logo";
import { Switch } from "@mui/material";
const label = { inputProps: { 'aria-label': 'Switch demo' } };

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="wrapper-login">
          <div className="wrapper-form">
            <div className="header-login">
              <Logo />
              <div className="wrapper-description-contact-logo">
                <h3 className="description-header-login">
                  ¿No tienes una cuenta?
                </h3>
                <a href="mailto: juand.guerreroj@unac.edu.co" target="_blank" className="contact-us">
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="wrapper-title-form">
              <h1 className="title-institution">
                Institución Educativa San Marcos - Mañana
              </h1>
              <h2 className="subtitle-form">Inicia sesión en tu cuenta</h2>
            </div>

            <div className="wrapper-inputs">
              <input
                className="input-form input-form-email"
                placeholder="Usuario"
                type="email"
                name=""
                id=""
              />
              <input
                className="input-form input-form-password"
                placeholder="Contraseña"
                type="password"
              />
            </div>
            <div className="chechboxwrapper">
              <Switch  className="switchLogin" {...label} defaultChecked/>              
              <h4 className="remember-password">Recuerda tu contraseña</h4>
            </div>
            <button className="button-form">Inicia sesión</button>
          </div>
        </div>
        <div className="wrapper-img"></div>
      </div>
    );
  }
}

export default Login;
