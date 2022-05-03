"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const hostname = "127.0.0.1";
const port = 5000;
const server = http_1.default.createServer((_request, _response) => {
    _response.statusCode = 200;
    _response.setHeader('Content-Type', 'text/html');
    _response.end('<h3> Welcome node JS</h3>');
});
server.listen(port, hostname, () => {
    console.log(`node js server started at http://${hostname}:${port}`);
});
//# sourceMappingURL=server.js.map