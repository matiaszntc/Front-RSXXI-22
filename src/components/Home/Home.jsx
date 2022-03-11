import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";

export const Home = () => {
  const [nombre, setNombre] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (localStorage.getItem("nombre")) {
      setNombre(localStorage.getItem("nombre"));
    }
  }, []);
  return (
    <div className="container">
      <div className="home">
        <div className="mt-2 text-center">
          {token ? (
            <h1 >Bienvenido  {nombre}</h1>
          ) : (
            <h1>Bienvenido  {nombre}</h1>
          )}
        </div>

        <div className="img mt-4">
          <UncontrolledCarousel
            items={[
              {
                altText: "",
                caption: "",
                key: 1,
                src: "https://www.recetaslider.cl/wp-content/uploads/2021/06/principal_5fb4243e331f1.jpg",
              },
              {
                altText: "",
                caption: "",
                key: 2,
                src: "https://www.recetaslider.cl/wp-content/uploads/2021/06/principal_5fb4243e331f1.jpg",
              },
              {
                altText: "",
                caption: "",
                key: 3,
                src: "https://www.recetaslider.cl/wp-content/uploads/2021/06/principal_5fb4243e331f1.jpg",
              },
            ]}
          />
        </div>

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            {/* <img
            src={userInfo ? userInfo.image : "/avatar.png"}
            src="/avatar.png"
            className="img-circle elevation-2"
            alt="User"
            alt="imagen"
          /> */}
          </div>
          <div className="info"></div>
        </div>
      </div>
    </div>
  );
};
