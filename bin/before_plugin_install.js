'use strict';

module.exports = function (context) {
  var req = context.require,

      path = require ('path'),
      pathParse = require ('./lib/path-parse');

  path.parse = path.parse || pathParse;

  return true;
};
