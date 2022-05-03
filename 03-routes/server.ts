import http, { IncomingMessage, Server, ServerResponse } from "http";
const hostname:string = "127.0.0.1";
const port:number = 5000;


const server:Server = http.createServer( ( _request: IncomingMessage, _response:ServerResponse) => {

    _response.statusCode= 200;

    _response.setHeader('Content-Type', 'text/html');
   
    
    let url: string | undefined = _request.url;
    let method: string | undefined = _request.method;
    if( method === 'POST' ){
        let body:any ='';
        _request.on('data',(chunk) => {
            body += chunk;
        }).on('end', () => {
            let fromData= JSON.parse(body);
            console.log (fromData);
        })
    }

    console.log(`URL: ${url}, METHOD: ${method}`);

});
 
server.listen( port, hostname, () => {
    console.log(`node js server started at http://${hostname}:${port}`);
});