import React from 'react'

export const Register = () => {
    const Register = async () => {
        


        if (!document.getElementById("email").value) {
            alert("El campo del email no puede estar vacio")
            return;
        }
        if (!document.getElementById("pass").value) {
            alert("El campo de la contrasena no puede estar vacio")
            return;
        }
        if (!document.getElementById("user").value) {
            alert("El campo del nombre no puede estar vacio")
            return;
        }
        if (!document.getElementById("apellido").value) {
            alert("El campo del apellido no puede estar vacio")
            return;
        }
        if (!document.getElementById("direccion").value) {
            alert("El campo de la direccion no puede estar vacio")
            return;
        }
        if (!document.getElementById("run").value) {
            alert("El campo de la Run no puede estar vacio")
            return;
        }

       const url = "http://localhost:8080/api/registro";
        const options = {
            method: "POST",
            body: JSON.stringify({
                correo: document.getElementById("email").value,
                contrasena: document.getElementById("pass").value,
                nombre: document.getElementById("user").value,
                nombreUsuario: document.getElementById("nombreUsuario").value,
                apellido: document.getElementById("apellido").value,
                direccion: document.getElementById("direccion").value,
                run: document.getElementById("run").value
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
          };

        try {
            localStorage.clear();
            await fetch(url, options);
            

            alert("Usuario Registrado")
            window.location.href = '/login'  // url del perfil de usuario
        } catch (error) {
            alert('Faltan datos por ingresar');
            console.log(error)
        }
    

       
    };
  return (
    <div className="login-wrap mt-5">
    <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Registraste</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" hidden="true" /><label for="tab-2" className="tab"></label>
        <div className="login-form">
            <div className="sign-in-htm">
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

                    <input type="submit" className="button" value="Registrarme" onClick={Register} />
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
}
