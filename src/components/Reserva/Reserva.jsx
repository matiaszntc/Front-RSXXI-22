import React, { useState, useEffect } from 'react'
import {
    Spinner,
    Table,
    Alert,
    Button
} from "reactstrap";


export const Reserva = () => {
    const IDusuario = localStorage.getItem("IDusuario")
    const [reserva, setReserva] = useState([]);
    const [estado, setEstado] = useState(true);

    const URL = `http://localhost:8080/api`;
    const OPTIONS_GET = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
        },
    };

    const OPTIONS_PUT = {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
        },
    }

    const getReserva = async () => {
        try {
            const res = await fetch(`${URL}/reservas/${IDusuario}`, OPTIONS_GET);
            const data = await res.json();
            setReserva(data);
            console.log("Prueba:", data)
        } catch (error) {
            console.log(error);
        }
    };
    const Loading = () => {
        setEstado(true)
        setTimeout(() => { setEstado(false) }, 2990)
    }

    const cancelar = async (id) => {
        const URL2 = `http://localhost:8080/api/cliente/cancelar-reserva/${id}`
        try {
            const res = await fetch(URL2, OPTIONS_PUT); 
            const data = await res.text();
            console.log("id reserva:", data)
            alert(data)
            window.location.reload()
            // `${URL}/cliente/cancelar-reserva/${id}`
        } catch (error) {
            console.log(error);
        }
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
                        <th></th>
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
                             {reserva.estado === "C" ? null :  <Button color='danger' onClick={() => cancelar(reserva.idReserva)} >Cancelar</Button>}
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
