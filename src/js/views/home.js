import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Contactos } from "../component/contactos.jsx"

export const Home = () => (
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
);
