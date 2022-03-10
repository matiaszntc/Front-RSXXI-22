import React, { useEffect, useState } from "react";

export const CrearReserva = () => {
    const [personas, setPersonas] = useState(0);
    const [fecha, setFecha] = useState();
    
    const [dia, setDia] = useState();
    const [hora, setHora] = useState();
    const [diaHora, setDiaHora] = useState();

  const crear = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/cliente/reserva";
    const options = {
      method: "POST",
      body: JSON.stringify({
        idUsuario: localStorage.getItem("IDusuario"),
        tipoUsuario: "CLI",
        idMesa: 6,
        fecha: diaHora,
        cantidadPersona: personas,
        estado: "R",
      }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await fetch(url, options);
      const data = await res.text();
      alert(data);
      window.location.href = "/reserva";
    } catch (error) {
      alert("Datos mal ingresados");
      console.log(error);
    }
  };


  useEffect(() => {
    setDiaHora(`${dia}T${hora}`)
  })

  return (
    <div className="container">
      <div className="justify-content-center">
        <div className="row">
          <div
            style={{ display: "block", marginRight: 'auto', marginLeft:'auto'}}
            className="col-lg-5 mt-5"
          >
            <div className="section-content bg-white p-5 shadow">
              <div className="heading-section text-center">
                <span className="subheading">Reservar</span>
                <h2>Agenda Tu Reserva Ahora!</h2>
                <hr />
              </div>
              <form>
                <div className="row">
                  <h3>Fecha</h3>
                  <div className="form-group">
                    <div
                      className="input-group date"
                      id="datetimepicker4"
                      data-target-input="nearest"
                    >
                      <input
                        id="fecha"
                        type="dateTime-local"
                        className="form-control datetimepicker-input"
                        data-target="#datetimepicker4"
                        placeholder="Fecha"
                        onChange={(e) => setFecha(e.target.value)}
                      />
                      <input type="date" className="form-control" min={new Date().toJSON().slice(0,10)} onChange={(e) => setDia(e.target.value)}/>

                      <input type="time" className="form-control" min="13:00" max="22" onChange={(e) => setHora(e.target.value)}/>
                    </div>
                  </div>

                  <div className="col-md-12 form-group">
                    <br />
                    <br />
                    <div className="heading-section text-center">
                      <h2>Cantidad De personas</h2>
                    </div>
                    <br />
                    <select
                      className="form-control mb-3"
                      id="cantidadPersonas"
                      onChange={(e) => setPersonas(parseInt(e.target.value))}
                    >
                      <option>Seleccione cantidad de personas</option>
                      <option>2</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Deja tu comentario ..."
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <button
                      className="btn btn-primary btn-shadow btn-lg"
                      onClick={crear}
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
