const fs = require("fs");

exports.info = function info(logdata){
    writeFile('../logs/logs.txt', `[INFO] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}

exports.error = function info(logdata){
    writeFile('../logs/logs.txt', `[ERROR] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}

exports.block = function info(logdata){
    writeFile('../logs/logs.txt', `[ERROR] ${new Date(Date.now()).toLocaleDateString()}:${new Date(Date.now()).toLocaleTimeString()} >> ${logdata.toString()} \n`, () => {});
}

/**
 * 
 * @param {string} file - file path to which data has to be appended
 * @param {string} data - data which is to be appended
 * @param {string} [callback] - callback function to be executed if exists
 */
function writeFile(file, data, callback){
  try{
    fs.appendFile(file, data, () => {});
  } catch (err){
      console.log(`[ERROR][LOGS] ${err}`);
  }
}
