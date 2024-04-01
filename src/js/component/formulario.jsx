import React, {useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Formulario = () => {
    const { actions } = useContext(Context);

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")


    const agregar = async (e) => {
        e.preventDefault()

        if (nombre != "" && mail !="" && direccion != "" && telefono != "") {
            let resp = await actions.agregarContactos(nombre, mail, telefono, direccion)

            if (resp === true) {
                setNombre("")
                setMail("")
                setDireccion("")
                setTelefono("")
            }
        } else {
            alert("Falta cargar datos")
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1>Agregar nuevo contacto</h1>
                </div>

                <br />

                <form style={{marginBottom: "50px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo:</label>
                        <input type="text" 
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">E-mail:</label>
                        <input type="text" 
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={mail}
                        onChange={(e) => setMail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono:</label>
                        <input type="text" 
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Dirección:</label>
                        <input type="text" 
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)} />
                    </div>

                    <br />
                    <button type="submit" 
                    className="btn btn-outline-dark w-50 float-end"
                    onClick={(e) => agregar(e)}>
                        Guardar
                    </button>
                </form>

                <h4 className="text-end">O ver todos los <Link to="/">contactos</Link></h4>
            </div>
        </>
    )
};
