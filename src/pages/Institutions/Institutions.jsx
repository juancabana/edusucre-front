import React, { Component } from "react";
import Header from "../../components/Header/Header";
import './Institutions.css';
import ListInstitutions from "../../components/ListInstitutions/ListInstitutions";


const Institutions = () => {


    return (
      <div className="Institutions">
        <Header />
        <div className="content-list-institutions">
          <ListInstitutions/>

        </div>

        
      </div>
    );
}

export default Institutions;
