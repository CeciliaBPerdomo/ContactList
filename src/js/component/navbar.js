import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container" style={{marginTop: "15px"}}>
			<div>
				<img src="https://static.vecteezy.com/system/resources/previews/020/428/056/non_2x/agenda-icon-vector.jpg" 
				style={{width: "100px"}}/>
				<h1 className="text-center" style={{marginTop: "-70px"}}>Lista de contactos</h1>
			</div>
			<br />
			<hr />
		</div>
	);
};
