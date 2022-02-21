import React from 'react'

export const CancelarReserva = () => {
  return (
    <body data-spy="scroll" data-target="#navbar" class="static-layout">
            <div class="boxed-page">
                <section id="gtco-reservation" class="bg-fixed bg-white section-padding overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="section-content bg-white p-5 shadow">
                                    <div class="heading-section text-center">
                                        <span class="subheading">
                                            <h2>Cancela Tú Reserva</h2>
                                        </span>                                     
                                    </div>
                                    <form>
                                        <div class="row">
                                            <h3>Fecha</h3>
                                            <div class="col-md-6 form-group">
                                                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
                                                    <input id='fecha' type="dateTime-local" class="form-control datetimepicker-input" data-target="#datetimepicker4" placeholder="Fecha" />
                                                </div>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <br />
                                                <br />
                                                <div class="heading-section text-center">
                                                    <h2>
                                                        Cantidad De personas
                                                    </h2>
                                                </div>
                                                <br />
                                                <select class="form-control" id="cantidadPersonas">
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
                                            <div class="col-md-12 form-group">
                                                <textarea class="form-control" id="message" name="message" rows="6" placeholder="Deja tu comentario ..."></textarea>
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <button class="btn btn-primary btn-shadow btn-lg">Cancelar Reserva</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </body>
  )
}
