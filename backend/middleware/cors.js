function enableCors(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*'); // * all origin access
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,POST,PATCH,DELETE,OPTIONS'
	); // * all methods access
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // * all COntent-type which we had given as header in todoControllers
	next();
}

module.exports = enableCors;
