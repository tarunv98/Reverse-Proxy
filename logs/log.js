const fs = require("fs");

exports.info = function info(logdata){
    fs.appendFile('logs.txt', `[INFO] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}

exports.error = function info(logdata){
    fs.appendFile('logs.txt', `[ERROR] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}

exports.block = function info(logdata){
    fs.appendFile('logs.txt', `[ERROR] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}
