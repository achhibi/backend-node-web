import express from 'express'
let appLogger = (req:express.Request, resp:Express.Response, next:express.NextFunction) => {

    let url = req.url;
    let method = req.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result:string = `[${url}] [${method}] [${date}] [${time}]`;
    console.log(result);
    next(); // mondatory & last line of the function
}

export default appLogger; 