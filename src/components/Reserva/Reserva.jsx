import React, { useState, useEffect } from 'react'
import {

    Table,

} from "reactstrap";

export const Reserva = () => {

    const [reserva, setReserva] = useState([]);

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

    useEffect(() => {
        document.title = "Reserva";
        getReserva();
    }, );


    return (
        <div>
            <h1>Hola</h1>
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
            </Table>
        </div>
    )
}
