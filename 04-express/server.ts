import express from 'express';
import apiRouter from './router/ApiRouter';
import appLogger from './router/Logger';
import userRouter from './router/UserRouter';

const app:express.Application = express();

const hostname ='127.0.0.1';
const port = 5000;
// configure express to recive data

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(appLogger);
app.get('/',appLogger, (_request:express.Request, _response: express.Response) => {

    _response.status(200).send('<h1>Welcome to Express JS</h1>');
});

app.use('/api', apiRouter);
app.use('/users', userRouter); 



app.listen(port , hostname,  () =>{

        console.log(`server started at: http://${hostname}:${port}`)

})