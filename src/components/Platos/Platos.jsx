import React, { useState, useEffect } from 'react'
import {

  Table,

} from "reactstrap";

export const Platos = () => {

  const [platos, setPlatos] = useState([]);

  // const traerPlatos = async () => {
  //     const platos = "http://localhost:8080/api/platos";
  //         fetch(platos, {
  //             method: "GET",
  //             headers: {
  //                 Accept: "application/json",
  //                 "Content-Type": "application/json",
  //                 //Authorization: localStorage.getItem("token")
  //             }
  //         })
  //             .then((response) => response.json())
  //             .then((data) => {
  //                 data.map(x => {
  //                     console.log("prueba;", x)
  //                     //console.log("intento 1 : ", x.descripcion)

  //                 })

  //             })
  // }
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
      console.log("Prueba:", setPlatos(data))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Platos";
    getPlatos();
  }, []); // saque  [] preguntarle al pelu pa que mierda sirve esa wea 



  return (
    <div>
      <h1>Hola</h1>
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
    </div>
  )
}
