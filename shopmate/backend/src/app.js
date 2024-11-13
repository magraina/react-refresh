import { createServer } from 'node:http';
import express from 'express';

const getApi = () => {
	const api = express.Router();

	api.get('/products', (req, res) => {
		res.send([
			{ id: 10002, name: 'Django Framework for Beginners', price: 29, in_stock: true },
			{ id: 10003, name: 'Basics To Advanced In React', price: 29, in_stock: true },
			{ id: 10004, name: 'Angular In Depth', price: 29, in_stock: true },
			{ id: 10005, name: 'Vue for Beginners', price: 29, in_stock: true },
			{ id: 10006, name: 'Svelte for Beginners', price: 29, in_stock: true },
			{ id: 10007, name: 'Node.js for Beginners', price: 29, in_stock: false },
		]);
	});

	return api;
}

const getApp = () => {
	const app = express();

	// Common Working Directory: /shopmate/dist
	app.use(express.static('dist'));
	app.use(express.json());

	app.use(getApi());

	return app;
};


const server = createServer(getApp());
server.listen(3000, () => {
	console.log('Server is running on port 3000');
});