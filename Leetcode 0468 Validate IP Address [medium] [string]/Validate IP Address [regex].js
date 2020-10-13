/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let regexIPv4 = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$")
    let regexIPv6 = new RegExp("^((([0-9a-fA-F]){1,4})\\:){7}(([0-9a-fA-F]){1,4})$");
    
    if (IP.match(regexIPv4)) {
        return "IPv4";
    } else if (IP.match(regexIPv6)) {
        return "IPv6";
    } else {
        return "Neither";
    }
};