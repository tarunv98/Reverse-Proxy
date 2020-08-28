const http = require('http');
const fs = require('fs');

const HTTPServer = http.createServer((req, res) => {
    // const headers = JSON.parse(req);
    console.log(req.headers);
    console.log(req.method);
    res.writeHead(200, {'content-type': 'text/html'})
    getResp(res);
});

HTTPServer.on('listening', () => {
    console.log("HTTP SERVER STARTED AT PORT 27017");
})

HTTPServer.on('connect', (req, clientSocket, head) => {
    console.log('INSIDE CONNECT EVENT LISTENER')
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                      'Proxy-agent: Node.js-Proxy\r\n' +
                      '\r\n');
    clientSocket.write('HELLO FROM SERVER');
    clientSocket.end();
});

async function getResp(res){
    let filedata = '';
    await fs.readFile('index.html', {encoding: 'utf-8'}, (err, data) => {
        filedata = data;
    
    console.log(filedata);
    res.end(filedata);
})
}

HTTPServer.listen(27017);
