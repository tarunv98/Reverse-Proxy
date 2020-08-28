const net = require("net");
const LOG = require("./logs/log");

const proxyServer = net.createServer();

const options = { // can specify your server options
    host: 'localhost',
    port: 27017
}

proxyServer.on('connection', (clientToProxySocket) => {
    LOG.info(`Client Connected ---- ${clientToProxySocket.remoteAddress}:${clientToProxySocket.remotePort}`);
    clientToProxySocket.once('data', (data) => {
        const req = data.toString();
        console.log(req);

        const proxyToServerSocket = net.connect(options); //connect to your server
        proxyToServerSocket.write(req);
        proxyToServerSocket.pipe(clientToProxySocket);
        clientToProxySocket.pipe(proxyToServerSocket);

        proxyToServerSocket.on('error', (err) => {
            LOG.error(`[PROXY][SERVER-ERROR] ${err.message}`);
            console.log(`[PROXY][SERVER-ERROR] ${err.message}`);
            clientToProxySocket.end();
        })

        // console.log(clientToProxySocket.remoteAddress, clientToProxySocket.remotePort); // perform filterations here
    })
    clientToProxySocket.on('error', (err) => {
        LOG.error(`[PROXY][CLIENT-ERROR] ${err.message}`);
        console.log(`[PROXY][CLIENT-ERROR] ${err.message}`);
        clientToProxySocket.end();
    })
    clientToProxySocket.on('close', () => {
        LOG.info(`Client Disconnected ---- ${clientToProxySocket.remoteAddress}:${clientToProxySocket.remotePort}`);
        console.log("Client disconnected");
    })
})

proxyServer.on('error', (err) => {
    LOG.error(`[PROXY][PROXY-ERROR] ${err.message}`);
    console.log(`[PROXY][PROXY-ERROR] ${err.message}`);
})

proxyServer.listen(8888, () => {
    console.log("[PROXY][START]Proxy running on port 8888");
});