const NPM = require('npm')
const OS = require('os');
const Path = require('path');
const UUID = require('uuid');

// installs package and yields require path
module.exports = function (pkg, done) {
  let opts = { loaded: false, loglevel: 'silent' }

  NPM.load(opts, (err) => {
    if (err) return done(err);

    let dest = Path.join(OS.tmpdir(), UUID.v4());
    NPM.commands.install(dest, [pkg], (err, data) => {
      if (err) return done(err);

      let path = data.pop()[1];
      done(null, path);
    });
  });
};
