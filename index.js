"use strict"
function convert(json) {
    return getCurrentNode(json,'');
}

function getCurrentNode(node, prefix) {
    var retVal = '';
    if (typeof node === 'object') {
        for (var key in node) {
            let newPrefix = prefix + ((prefix !== '') ? '.' : '') + key;
            retVal += getCurrentNode(node[key], newPrefix);
        }
        return retVal;
    }
    return prefix + ': ' + node+'\n';
}

module.exports.convert = convert;

