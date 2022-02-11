import React from 'react'

export const Platos = () => {

    const traerPlatos = async () => {
        const platos = "http://localhost:8080/api/platos";
            fetch(platos, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    //Authorization: localStorage.getItem("token")
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    data.map(x => {
                        console.log("prueba;", x)
                        //console.log("intento 1 : ", x.descripcion)
                
                    })

                })
    }

  return (
    <div>
        <h1>Hola</h1>
        <button onClick={traerPlatos}>Prueba</button>
    </div>
  )
}
