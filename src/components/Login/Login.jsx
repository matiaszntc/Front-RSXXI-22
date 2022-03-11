import React from 'react';

export const Login = () => {
    const conectar = async () => {

        if (!document.getElementById("usuario").value) {
            alert("El campo del usuario no puede estar vacio")
            return;
        }
        if (!document.getElementById("contrasena").value) {
            alert("El campo de la contrasena no puede estar vacio")
            return;
        }

        const url = "http://localhost:8080/api/login";
        const options = {
            method: "POST",
            body: JSON.stringify({
                correo: document.getElementById("usuario").value,
                contrasena: document.getElementById("contrasena").value
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
          };

        try {
            localStorage.clear();
            const res = await fetch(url, options);
            if(res.ok){
                const data = await res.json()

                localStorage.setItem("token", data.token)
                localStorage.setItem("nombre", data.nombre)
                localStorage.setItem("IDusuario", data.idUsuario)
                alert("Bienvenido "+ data.nombre + "!")
                window.location.href = '/'  // url del perfil de usuario}
            } else {
                alert('Usuario Incorrecto');
            }
        } catch (error) {
            alert('Usuario y/o contrasena incorrectos');
            console.log(error)
        }
    }

    return (
        <div className="login-wrap mt-5">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Iniciar Sesion</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab"></label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label for="user" className="label">Usuario</label>
                            <input id="usuario" name="usuario" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Contraseña</label>
                            <input id="contrasena" name="contrasena" type="password" className="input" data-type="password" required />
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" checked />
                            <label for="check"><span className="icon"></span>Mantener sesion iniciada</label>
                        </div>
                        <div className="group">

                            <input type="submit" className="danger button" value="Conectarme" onClick={conectar} />
                            <br />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Olvidaste la contraseña</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label for="pass" className="label">Correo</label>
                            <input id="email" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" required />
                        </div>
                        <div className="group">
                            <label for="user" className="label">Nombre</label>
                            <input id="user" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="user" className="label">Nombre de Usuario</label>
                            <input id="nombreUsuario" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="user" className="label">Apellido</label>
                            <input id="apellido" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="user" className="label">Direccion</label>
                            <input id="direccion" type="text" className="input" required />
                        </div>
                        <div className="group">
                            <label for="user" className="label">Run</label>
                            <input id="run" type="text" className="input" required />
                        </div>
                        <div className="group">

                            <input type="submit" className="button" value="Registrarme" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label for="tab-1">Ya eres miembro?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
