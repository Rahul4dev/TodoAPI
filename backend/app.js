const express = require('express');

const db = require('./data/database');
const todoRoutes = require('./routes/todos.routes');
const enableCorsMiddleware = require('./middleware/cors');

const app = express();

// middleware to parse the request body as json and expose it under req.body
app.use(enableCorsMiddleware);
app.use(express.json());

// route handler
app.use('/todos', todoRoutes);

app.use(function (error, req, res, next) {
	res.status(500).json({
		message: 'Something went wrong!',
	});
});

db.initDb()
	.then(function () {
		app.listen(3000);
	})
	.catch(function (error) {
		console.log('Connecting to the database failed!');
	});
