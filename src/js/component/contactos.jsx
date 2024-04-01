import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Contactos = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.mostrarContactos()
    }, [])



    return (
        <>
            <div className="container">
                {store.contactos.map((item, id) => (
                    <div className="card mb-3" key={id} style={{}}>

                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://media.istockphoto.com/id/1069531070/es/foto/grupos-de-perros-cachorros-de-labrador-perro-perdiguero-de-labrador-cachorro-chocolate-delante.jpg?s=612x612&w=0&k=20&c=wXdA0f-P87Co9OWlwpUMEhW8q4kRucJPOAYnPJTvg40="
                                    className="img-fluid" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ marginBottom: "20px", color: "red" }}>
                                        <b>{item.full_name} # {item.id}</b>
                                      
                                        <button className="btn btn-outline-dark float-end" 
                                            style={{marginLeft: "10px", height: "40px"}}
                                            onClick={() => actions.borrarContacto(item.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        {/* <button className="btn btn-outline-dark float-end" style={{height: "40px"}}>
                                            <i className="fa fa-pen float-end"></i>
                                        </button>
                                    */}
                                        </h5>

                                    <hr />
                                </div>
                                <div className="row" style={{ marginLeft: "25px" }}>
                                    <div className="col">
                                        <p className="card-text"><b>Correo electrónico:</b></p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text">{item.email}</p>
                                    </div>
                                </div>

                                <div className="row" style={{ marginLeft: "25px" }}>
                                    <div className="col">
                                        <p className="card-text"><b>Télefono:</b></p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text">{item.address}</p>
                                    </div>
                                </div>

                                <div className="row" style={{ marginLeft: "25px" }}>
                                    <div className="col">
                                        <p className="card-text"><b>Dirección:</b></p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text">{item.phone}</p>
                                    </div>
                                </div>

                                <hr />



                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
};
