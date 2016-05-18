const FS = require('fs');
const Path = require('path');
const RC = require('rc');

const Config = RC('worker', {
  amqp: {
    host: 'localhost',
    options: {}
  },
  capacity: 1,
  keyDir: '/keys',
  queue: 'rpc'
});

// read ssl files into strings (if present)
;['cert', 'key', 'ca'].forEach((key) => {
  let path = Path.join(Config.keyDir, `${key}.pem`)

  try {
    FS.accessSync(path, FS.R_OK);
    Config.amqp.options[key] = FS.readFileSync(path);
  } catch (e) { return; }
});

module.exports = Config;
