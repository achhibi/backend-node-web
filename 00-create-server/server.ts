import http, { IncomingMessage, Server, ServerResponse } from "http";
const hostname:string = "127.0.0.1";
const port:number = 5000;


const server:Server = http.createServer( ( _request: IncomingMessage, _response:ServerResponse) => {

    _response.statusCode= 200;

    _response.setHeader('Content-Type', 'text/html');
    _response.end('<h3> Welcome node JS</h3>')

});

server.listen( port, hostname, () => {
    console.log(`node js server started at http://${hostname}:${port}`);
});