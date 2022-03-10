import React, { useState, useEffect } from "react";
import {
  Alert,
  Table,
  Spinner,
  Card,
  CardGroup,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Toast,
  ToastBody,
  ToastHeader,
  CardText,
} from "reactstrap";

import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contacto = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <CardTitle className="text-center mt-4" tag="h5">
              Contacto
            </CardTitle>
            <hr />
            <CardImg
              alt="Card image cap"
              src="https://www.colegium.com/wp-content/uploads/2020/08/contacto-img.png"
              top
              width="100%"
            />
            <CardBody>
              <hr />
              <CardText>
                {" "}
                Recuerda Contactarnos a nuestros distintos medios de
                comunicación{" "}
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6 text-center">
          <div>
              <h1>Restaurant Siglo XXI</h1>
              <p>Estamos respondiendo atraves de Instagram, Whatsapp y Gmail.</p>
          </div>
          <div>
            <GrInstagram size={30} className="col-md-3"/>
            <BsWhatsapp size={30} className="col-md-3"/>
            <SiGmail size={30} className="col-md-3"/>
          </div>

          <div className="p-3 bg-danger mt-3">
            <Card>
                <CardTitle className="text-center" tag="h5">
                    <h1>Horario</h1>
                    <hr />
                </CardTitle>
                <CardBody>
              <CardText>
                <p>Lunes - 13:00 PM - 23:00 PM</p>
                <p>Martes - 13:00 PM  - 23:00 PM</p>
                <p>Miercoles - 13:00 PM  - 23:00 PM</p>
                <p>Jueves - 13:00 PM  - 23:00 PM</p>
                <p>Viernes - 13:00 PM  - 23:00 PM</p>
                <p>Sabado - 13:00 PM  - 23:00 PM</p>
                <p>Domingo - 13:00 PM  - 23:00 PM</p>
              </CardText>
            </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
