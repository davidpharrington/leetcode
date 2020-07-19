/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g,'[.]')    
};


console.log(defangIPaddr ('101.102.103.104'))
