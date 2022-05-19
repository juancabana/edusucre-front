import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
  render() {
    return (
      <>
        <nav className="nav-wrapper-logo">
          <h1 className="text-Logo">EdSoft</h1>
          <h3 className="description">
            Portal web para instituciones educativas
          </h3>
        </nav>
      </>
    );
  }
}

export default Logo;
