const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacto: [],
		},
		actions: {
			agregarContactos: async (nombre, email, telefono, direccion) => {
				try {
					let contacto = {
						"full_name": nombre,
						"email": email,
						"agenda_slug": "Agenda de Cecilia Perdomo",
						"address": direccion,
						"phone": telefono,
					}

					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST", 
						headers: { 'Content-Type': 'application/json'},
						body: JSON.stringify(contacto)
					})
					const data = await response.json()
					console.log(data)
					return true
				} catch(error) {
					console.error(error)
					return false
				}
			},

			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
