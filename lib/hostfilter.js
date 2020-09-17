const LOG = require("../logs/log");

const BLOCKED_IPS = [
    ''

];

/**
 * 
 * @param {string} hostname - hostname to be verified
 * @returns {boolean} - returns true if access is valid else returns false
 */
exports.hostfilter = function hostfilter(hostname){
    const host = hostname.toString();

    for(let ip of BLOCKED_IPS){
        if(ip === host){
            LOG.block(`[FIREWALL][BLOCK] blocked ip ${ip}`);
            console.log(`[FIREWALL][BLOCK] blocked ip ${ip}`);
            return false;
        }else{
            LOG.info(`[FIREWALL][OKAY] connected to ip ${ip}`);
            return true;
        }
    }

}