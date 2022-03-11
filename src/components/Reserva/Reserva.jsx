import React, { useState, useEffect } from "react";
import {
  Spinner,
  Table,
  Alert,
  Button,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
} from "reactstrap";

export const Reserva = () => {
  const IDusuario = localStorage.getItem("IDusuario");
  const [reserva, setReserva] = useState([]);
  const [estado, setEstado] = useState(true);

  const URL = `http://localhost:8080/api`;
  const OPTIONS_GET = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const OPTIONS_PUT = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  const getReserva = async () => {
    try {
      const res = await fetch(`${URL}/reservas/${IDusuario}`, OPTIONS_GET);
      const data = await res.json();
      setReserva(data);
      console.log("Prueba:", data);
    } catch (error) {
      console.log(error);
    }
  };
  const Loading = () => {
    setEstado(true);
    setTimeout(() => {
      setEstado(false);
    }, 2990);
  };

  const cancelar = async (id) => {
    const URL2 = `http://localhost:8080/api/cliente/cancelar-reserva/${id}`;
    try {
     if(window.confirm("Estas Seguro que desea cancelar la reserva?")){
      const res = await fetch(URL2, OPTIONS_PUT);
      const data = await res.text();
      console.log("id reserva:", data);
      alert(
        "Lastima que canceles tú reserva: ",
        localStorage.getItem("nombre")
      );
      window.location.reload();
      // `${URL}/cliente/cancelar-reserva/${id}`
     }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Reserva";
    getReserva();
    Loading();
  }, []);

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h1>Reserva</h1>
        <hr />
      </div>
      {estado ? (
        <Spinner color="info">Loading...</Spinner>
      ) : reserva.length > 0 ? (
        <div className="row">
          {reserva.map((reserva) => (
            <div className="col-md-3">
              <Card className="mx-1 my-3">
              <CardBody>
              <CardTitle tag="h5">
                    Estado
                </CardTitle>
                <CardTitle tag="h5">
                  {reserva.estado} / {reserva.idReserva}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Nombre
                </CardSubtitle>
                <CardText>{reserva.Nombre}</CardText>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Fecha
                </CardSubtitle>
                <CardText>{reserva.fecha}</CardText>
                {reserva.estado === "C" ? null : (
                  <Button
                    color="danger"
                    onClick={() => cancelar(reserva.idReserva)}
                  >
                    Cancelar
                  </Button>
                )}
              </CardBody>
            </Card>
            </div>
          ))}
        </div>
      ) : (
        <Alert color="danger">
          Usted no esta logueado o no tiene reservas activas
        </Alert>
      )}
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Glosario</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Estado</CardSubtitle>
            <CardText>
              R = Reservado | C = Cancelado
            </CardText>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Número Reserva</CardSubtitle>
            <CardText>
              Ejemplo : "C 19"
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

// <Table>
//     <thead>
//         <tr>
//             <th>Estado</th>
//             <th>Numero Reserva</th>
//             <th>Nombre</th>
//             <th>Dia</th>

//         </tr>
//     </thead>
//     {reserva.map((reserva) => (
//         <tbody>
//             <tr>
//                 <td>{reserva.estado}</td>
//                 <td>{reserva.idReserva}</td>
//                 <td>{reserva.Nombre}</td>
//                 <td>{reserva.fecha}</td>
//                 <td align='right'>
//                  {reserva.estado === "C" ? null :  <Button color='danger' onClick={() => cancelar(reserva.idReserva)} >Cancelar</Button>}
//                 </td>
//             </tr>
//         </tbody>
//     ))}
// </Table>
