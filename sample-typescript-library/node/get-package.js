"use strict";
exports.__esModule = true;
exports.getPackage = void 0;
var fs = require("fs");
var path = require("path");
var getPackage = function () {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'));
};
exports.getPackage = getPackage;
//# sourceMappingURL=get-package.js.map