const LOG = require("./log.js");

const BLOCKED_IPS = require("../conf/blockedips.json")

/**
 * 
 * @param {string} hostname - hostname or IP to be verified
 * @returns {boolean} - returns true if access is valid else returns false
 */
exports.hostfilter = (hostname) => (BLOCKED_IPS.indexOf(hostname.toString()) == -1);

// TODO: Add logging to host filteration