const Joi = require('joi');

const init = async () => {
	const server = Hapi.server({host: "localhost"...});
	await server.register({...});

	server.route([
	{
		method: "GET",
		path: "/",
		handler: (request, h) =>
			"Hello Hapi",
	},
	{
		method: "GET",
		path: "/companies/{id}"
		options:{
			decription: "show info on companies, including all vaccines",
			validate:{
				params: Joi.object(schema:{
					id: Joi.number().integer().min(limit:1),
				}),
			},
		},
		handler: async (request, h) => {
			const results = await Company.query()
				.where(col: "id", request.params.id)
				.withGraphFetched( expr: "vaccines");
			if(results.length !== 1){
				return h.response(`Company ${request.params.id} not found`).code(404);
			} else{
				return results[0];
			}
		}
	},
	{
		method: "GET",
		path: "/patients",
		handler: (request, h) =>
			return Patients;
	},

	])
}
