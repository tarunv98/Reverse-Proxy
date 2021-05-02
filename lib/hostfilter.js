const LOG = require("../logs/log");

const BLOCKED_IPS = [
    ''

];

/**
 * 
 * @param {string} hostname - hostname or IP to be verified
 * @returns {boolean} - returns true if access is valid else returns false
 */
exports.hostfilter = (hostname) => (BLOCKED_IPS.indexOf(hostname.toString()) == -1);