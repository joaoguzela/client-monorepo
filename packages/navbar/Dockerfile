FROM node:alpine


WORKDIR /front/build

RUN npm install -g npm@9.8.0

COPY package.json ./

RUN rm -rf yarn-error.log

RUN apk add --no-cache bash

COPY front-command.sh front-command.sh

RUN chmod +x front-command.sh

ENTRYPOINT ["./front-command.sh"]

ENV HOST_API=$HOST_API

ENV TOKEN_API=$TOKEN_API
