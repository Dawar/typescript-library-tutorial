"use strict";
exports.__esModule = true;
exports.timeout = void 0;
var timeout = function (ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(null);
        }, ms);
    });
};
exports.timeout = timeout;
//# sourceMappingURL=timeout.js.map