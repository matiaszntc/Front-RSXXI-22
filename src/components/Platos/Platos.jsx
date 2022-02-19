import React, { useState, useEffect } from 'react'
import {
  Alert,
  Table,
  Spinner,

} from "reactstrap";

export const Platos = () => {

  const [platos, setPlatos] = useState([]);
  const [estado, setEstado] = useState(true);

  const URL = "http://localhost:8080/api/platos";
  const OPTIONS_GET = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getPlatos = async () => {
    try {
      const res = await fetch(URL, OPTIONS_GET);
      const data = await res.json();
      setPlatos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const Loading = () => {
    setEstado(true)
    setTimeout(() => { setEstado(false) }, 2990)
  }

  useEffect(() => {
    document.title = "Platos";
    getPlatos();
    Loading();
  }, []);



  return (
    <div>
      <h1>Hola</h1>
      {estado ? (<Spinner color="info">
        Loading...
      </Spinner>) : platos.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Valor </th>
            </tr>
          </thead>
          {platos.map((plato) => (
            <tbody>
              <tr>
                <td>{plato.descripcion}</td>
                <td>{plato.precio}</td>
                <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      ) : (<Alert
        color="danger"
      >
        No hay platos en este momento
      </Alert>)}
    </div>
  )
}

