FROM node:6.2.2

COPY . /mnt/app
WORKDIR /mnt/app

RUN npm i npm@latest -gq && \
    npm install --production

ENTRYPOINT ["/mnt/app/bin/cli"]
CMD ["--help"]
