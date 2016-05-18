const Install = require('./lib/install');
const Rabbit = require('@modulus/rabbit-rpc');

module.exports = function Worker(opts) {
  // TODO assert properties
  const RPC = Rabbit(opts.amqp.host, opts.amqp.options);

  Install(opts.fn, (err, path) => {
    if (err) throw err;

    RPC.server(opts.queue, require(path), opts.capacity);
  });
};
