import express from 'express';

const apiRouter:express.Router = express.Router();


//logic


apiRouter.get('/', (_request:express.Request, _response: express.Response) => {

    _response.status(200).send('<h1>Welcome to Express JS / API Router</h1>');
});


apiRouter.get('/test', (_request:express.Request, _response: express.Response) => {

    _response.status(200).send('<h1>Welcome to Express JS / API Router / Test PATH</h1>');
});




export default apiRouter;