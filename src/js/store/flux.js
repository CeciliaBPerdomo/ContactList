// Info en -->: https://assets.breatheco.de/apis/fake/contact/
const url = "https://playground.4geeks.com/contact/agendas/"
const slug = "ceciper"
const urlCompleta = url + slug + "/contacts"

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			contactos: [],
			contacto: {},
		},

		actions: {
			crearAgenda: async () => {
				try {
					const response = await fetch(url + slug, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
					})
					console.log(response)
				} catch (error) {
					console.log(error)
				}
			},

			agregarContactos: async (nombre, email, telefono, direccion) => {
				try {

					// const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					const response = await fetch(urlCompleta, {
						method: "POST",
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							name: nombre,
							phone: telefono,
							email: email,
							address: direccion,
						})
					})
					const data = await response.json()
					console.log(data)
					return true
				} catch (error) {
					console.error(error)
					return false
				}
			},

			borrarContacto: async (id) => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: { 'Content-Type': 'application/json' },
					})
					const data = await response.json()
					console.log(data)
					getActions().mostrarContactos("Agenda_de_Cecilia_Perdomo")
					return true

				} catch (error) {
					console.error(error)
					return false
				}
			},

			mostrarContactos: async () => {
				const dire = url + slug + "/contacts"
				try {
					const resp = await fetch(dire)
					const data = await resp.json()
					console.log(data)
					setStore({ contactos: data.contacts })
				} catch (error) {
					console.error(error)
					return false
				}
			},

			mostrarContacto: async (id) => {
				try {
					fetch("https://assets.breatheco.de/apis/fake/contact/" + id)
						.then(data => { return data.json() })
						.then(post => { setStore({ contacto: post }) });
				} catch (error) {
					console.error(error)
					return false
				}
			},

		}
	};
};

export default getState;
