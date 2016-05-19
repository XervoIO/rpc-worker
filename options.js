module.exports = [
  {
    name: 'version',
    alias: ['v'],
    help: 'output current version',
    helpIndex: '-v, --version'
  },
  {
    name: 'host',
    alias: ['h'],
    help: 'RabbitMQ host',
    helpIndex: '-h, --host',
    default: 'amqp://localhost'
  },
  {
    name: 'queue',
    alias: ['q'],
    help: 'RabbitMQ queue name',
    helpIndex: '-q, --queue',
    default: 'rpc-queue'
  },
  {
    name: 'capacity',
    alias: ['c'],
    help: 'Number of jobs to process in parallel',
    helpIndex: '-c, --capacity'
  },
  {
    name: 'tls',
    alias: ['t'],
    help: `Directory with TLS keys: /keys/ca.pem, /keys/cert.pem, /keys/key.pem`,
    helpIndex: '-t, --tls'
  },
  {
    name: 'opts',
    help: `Set net|tls options (eg: --opts.passphrase secret)`,
    helpIndex: '--opts'
  }
];
