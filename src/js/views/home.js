import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Contactos } from "../component/contactos.jsx"
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {actions} = useContext(Context)

	useEffect(() => {
		actions.crearAgenda()	
	}, [])

	return(
	<div className="container">
		<div className="d-flex justify-content-end" style={{marginBottom: "20px"}}>
			<button className="btn btn-outline-dark">
				<Link to="/addContact" style={{textDecoration: "none", color: "black"}}>
				Agregar contactos
				</Link>
			</button>
		</div>

		<div>
			<Contactos />
		</div>
	</div>
	)
};
