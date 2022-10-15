module.exports = app => {
	const controller = app.controllers.anima.anima;

	app.route('/api/v1/inserirInscricao')
		.post(controller.inserirInscricao);
}