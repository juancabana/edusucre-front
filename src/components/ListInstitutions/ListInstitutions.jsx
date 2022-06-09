import React from "react";
import "./ListInstitutions.css";
import { useQuery, gql } from "@apollo/client";

const misions = gql`
  {
    institutions {
      name
    }
  }
`;

const ListInstitutions = () => {
  const { data, loading, error } = useQuery(misions);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="ListInstitutions">
      <div className="wrapper-title-institutions">
        <h1 className="title-table-institutions">Lista de instituciones</h1>
      </div>
      <div className="wrapper-table-institutions">
        {data.institutions.map((launch) => (
          <div className="container-data-institutions">
            <button className="text-name-institutions" key={launch.name}>
              {launch.name}
            </button>
            <button className="text-name-institutions">
              Dirección
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInstitutions;
