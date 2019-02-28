import express from 'express';
const app = express();

import mainController from './controllers/main.controller';
import { RequestHandler } from 'express-serve-static-core';

app.set('port', process.env.PORT || 3000);

app.get('/v1', mainController.getAllPlanets as RequestHandler);

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
});
