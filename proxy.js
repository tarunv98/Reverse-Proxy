const net = require("net");
const LOG = require("./logs/log");
const { hostfilter } = require("./lib/hostfilter");
const proxy_conf = require('./conf/proxy.json');
const options = require('./conf/target.json')[proxy_conf.transport];

const proxyServer = net.createServer();

proxyServer.on('connection', (clientToProxySocket) => {
    LOG.info(`Client Connected ---- ${clientToProxySocket.remoteAddress}:${clientToProxySocket.remotePort}`);
    //Host Filteration
    if(!hostfilter(clientToProxySocket.remoteAddress)){
        console.log(`[PROXY][FIREWALL-BLOCK] ${clientToProxySocket.remoteAddress}`)
        clientToProxySocket.end();
    }else{
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
    }
})

proxyServer.on('error', (err) => {
    LOG.error(`[PROXY][PROXY-ERROR] ${err.message}`);
    console.log(`[PROXY][PROXY-ERROR] ${err.message}`);
})

proxyServer.listen(proxy_conf.port, () => {
    console.log(`[PROXY][START]Proxy running on port ${proxy_conf.port}`);
});