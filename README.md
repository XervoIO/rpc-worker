## RPC Worker

> installs a package and starts rpc-server using exported function


### Usage

```
> rpc-worker --help
Usage: rpc-worker [options] <pkg>

    -v, --version         output current version
    -h, --host            RabbitMQ host (default: "amqp://localhost")
    -q, --queue           RabbitMQ queue name (default: "rpc-queue")
    -c, --capacity        Number of jobs to process in parallel
    -t, --tls             Directory with TLS keys: /keys/ca.pem, /keys/cert.pem, /keys/key.pem
    --opts                Set net|tls options (eg: --opts.passphrase secret)
```

#### Examples

Start a worker connecting to a local RabbitMQ instance and using `request` to
answer three RPC calls in parallel:

`rpc-worker -c 3 request`

Process one request at a time from a secure RabbitMQ to get the gravatar
profile of a given email:

```
rpc-worker -h amqps://admin:pencil@rabbit.example.com \
  --tls /path/to/ssl/keys \
  --opts.passphrase mySecret1 \
  gravatar-profile
```
