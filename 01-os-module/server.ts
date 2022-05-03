import http, { IncomingMessage, Server, ServerResponse } from "http";
import os from "os";
const hostname:string = "127.0.0.1";
const port:number = 5000;


const server:Server = http.createServer( ( _request: IncomingMessage, _response:ServerResponse) => {

    _response.statusCode= 200;


    // os module

    let osData = {

        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        homeDir: os.homedir()
    }

    _response.setHeader('Content-Type', 'text/html');
    _response.end(`<pre>${JSON.stringify(osData)}</pre>`)

});

server.listen( port, hostname, () => {
    console.log(`node js server started at http://${hostname}:${port}`);

});