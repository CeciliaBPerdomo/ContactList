import React, {useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const ContactoIndividual = () => {
    const { store, actions } = useContext(Context);

    const [nombre, setNombre] = useState(store.contacto?.full_name)
    const [mail, setMail] = useState(store.contacto?.email)
    const [direccion, setDireccion] = useState(store.contacto?.phone)
    const [telefono, setTelefono] = useState(store.contacto?.address)

    useEffect(() => {
        const info = async () => {
            await actions.mostrarContacto("5198")
        }
        info()
    }, [])

    
    const modificar = async (e) => {
        e.preventDefault()

        console.log(mail, nombre, direccion, telefono)
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1>Modificar contacto # {store.contacto.id}</h1>
                </div>

                <br />

                <form style={{marginBottom: "50px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo:</label>
                        <input type="text" 
                        className="form-control"
                        defaultValue={store.contacto.full_name}
                        onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">E-mail:</label>
                        <input type="text" 
                        className="form-control"
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        defaultValue={store.contacto.email}
                        onChange={(e) => setMail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono:</label>
                        <input type="text" 
                        className="form-control"
                        defaultValue={store.contacto.phone}
                        onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Dirección:</label>
                        <input type="text" 
                        className="form-control"
                        defaultValue={store.contacto.address}
                        onChange={(e) => setDireccion(e.target.value)} />
                    </div>

                    <br />
                    <button type="submit" 
                    className="btn btn-outline-dark w-50 float-end"
                    onClick={(e) => modificar(e)}>
                        Modificar
                    </button>
                </form>

                <h4 className="text-end">O ver todos los <Link to="/">contactos</Link></h4>
            </div>
        </>
    )
};
