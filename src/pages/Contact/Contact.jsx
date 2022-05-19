// import React, { Component } from "react";
import React from "react";
import "../../components/Header/Header";
import Header from "../../components/Header/Header";

import { useQuery, gql } from "@apollo/client";

const misions = gql`
  {
    institutions {
      name
    }
  }
`;

const Contact = () => {
  const { data, loading, error } = useQuery(misions);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="App">
      <Header />
      <h1>Hellow, i'm Contact</h1>

      <h1>SpaceX Launches</h1>
      <ul>
        nombre de la misión
        {data.institutions.map((launch) => (
          <li key={launch.name}>
            {launch.name} se lanzó en el año {launch.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
