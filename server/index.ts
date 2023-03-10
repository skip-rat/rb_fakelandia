import * as express from 'express';
import * as cors from 'cors';
import { Server } from 'http';
import { initialiseRoutes } from './routes/routes';
import { printNewLine } from './helpers/helpers';

const PORT = 8080;

try {
	printNewLine();

	console.log('π« Initialising Server...');
	const app = express();

	console.log('π Enabling JSON middleware...');
	app.use(express.json());

	console.log('π Enabling URL-Encoded middleware...');
	app.use(express.urlencoded({ extended: true }));

	console.log('π Enabling CORS...');
	app.use(cors());

	initialiseRoutes(app);

	const server = app
		.listen(PORT, () => {
			console.log(`β­ Server is now listening on port: β ${PORT} β­`);
			printNewLine();
			console.log(
				`β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­`
			);
			console.log(
				`β­    Health check at "http://localhost:${PORT}/health"            β­`
			);
			console.log(
				`β­    Or try "http://localhost:${PORT}/api/misdemeanours/3"        β­`
			);
			console.log(
				`β­    πΊοΈ  Try changing the number of misdemeanours requested!    β­`
			);
			console.log(
				`β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­β­`
			);
		})
		.on('error', (error) => {
			console.error('π¨ Express Error Handler π¨ ');
			console.error(error);
		});

	process.on('SIGINT', () => handleShutdown(server));
	process.on('SIGTERM', () => handleShutdown(server));
	process.on('SIGHUP', () => handleShutdown(server));
} catch (e: unknown) {
	console.error('π¨ Top level Error caught π¨ ');
	console.error((e as Error).message);
}

function handleShutdown(server: Server) {
	console.log('πͺ Closing Server...');
	server.close(() => {
		console.log('π₯ Express server closed β');
		process.exit(0);
	});
}
