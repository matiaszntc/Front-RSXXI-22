import React, { useState, useEffect } from 'react'
import {
    Spinner,
    Table,
    Alert
} from "reactstrap";

export const Reserva = () => {

    const [reserva, setReserva] = useState([]);
    const [estado, setEstado] = useState(true);

    const URL = `http://localhost:8080/api/reservas/${localStorage.getItem("IDusuario")}`;
    const OPTIONS_GET = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
        },
    };

    const getReserva = async () => {
        try {
            const res = await fetch(URL, OPTIONS_GET);
            const data = await res.json();
            setReserva(data);
            console.log("Prueba:", setReserva(data))
        } catch (error) {
            console.log(error);
        }
    };
    const Loading = () => {
        setEstado(true)
        setTimeout(() => { setEstado(false) }, 2990)
    }

    useEffect(() => {
        document.title = "Reserva";
        getReserva();
        Loading();
    }, []);


    return (
        <div>
            <h1>Hola</h1>
            {estado ? (<Spinner color="info">
                Loading...
            </Spinner>) : reserva.length > 0 ? (
            <Table>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>idReserva</th>
                        <th>Nombre</th>
                        <th>Dia</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                {reserva.map((reserva) => (
                    <tbody>
                        <tr>
                            <td>{reserva.estado}</td>
                            <td>{reserva.idReserva}</td>
                            <td>{reserva.Nombre}</td>
                            <td>Jueves xD</td>
                            <td>12:00 pm</td>
                            <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>) :
                (<Alert
                    color="danger"
                >
                    Usted no esta logueado o no tiene reservas activas
                </Alert>)}
        </div>
    )
}
