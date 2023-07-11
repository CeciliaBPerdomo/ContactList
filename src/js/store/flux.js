// Info en -->: https://assets.breatheco.de/apis/fake/contact/

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],
		},
		actions: {
			agregarContactos: async (nombre, email, telefono, direccion) => {
				try {
					let contacto = {
						"full_name": nombre,
						"email": email,
						"agenda_slug": "Agenda_de_Cecilia_Perdomo",
						"address": direccion,
						"phone": telefono,
					}

					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(contacto)
					})
					const data = await response.json()
					console.log(data)
					return true
				} catch (error) {
					console.error(error)
					return false
				}
			},

			mostrarContactos: async (agenda_slug) => {
				try {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + agenda_slug)
						.then(data => {
							return data.json();
						})
						.then(post => {
							setStore({
								contactos: post
							});
						});

				} catch (error) {
					console.error(error)
					return false
				}
			},
		}
	};
};

export default getState;
