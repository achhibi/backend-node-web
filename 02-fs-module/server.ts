import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from 'fs';
import path from 'path';
const hostname:string = "127.0.0.1";
const port:number = 5000;


const server:Server = http.createServer( ( _request: IncomingMessage, _response:ServerResponse) => {

    _response.statusCode= 200;


    // fs module
    fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (_error, _result) => {
        if ( _error ){
            console.log(_error);
        }
          // fs module
    fs.writeFile(path.join(__dirname, 'data', 'data.txt'), _result,'utf-8', () => {
        if ( _error ){
            console.log(_error);
        }
        _response.end(`<pre>OK</pre>`)
    });
        _response.end(`<pre>${_result}</pre>`)
    });


    _response.setHeader('Content-Type', 'text/html');
  

});

server.listen( port, hostname, () => {
    console.log(`node js server started at http://${hostname}:${port}`);

});