var fs = require('fs'),
  index = require('./');

index.save = function(db, destination) {
  destination = destination || 'db.json';
  fs.writeFileSync(destination, JSON.stringify(db));
};

index.load = function(source) {
  source = source || 'db.json';
  return JSON.parse(fs.readFileSync(source, 'utf-8'));
};

index.mixWith = function(lib) {
  index.set_(lib);
  lib.mixin(index);
};

module.exports = index;