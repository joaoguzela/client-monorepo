FROM node:alpine

RUN npm install -g npm@9.8.0

WORKDIR /app/build

COPY package.json ../../

RUN yarn install

COPY . .

RUN apk add --no-cache bash

COPY wait-for-it.sh wait-for-it.sh

RUN chmod +x  wait-for-it.sh

ENTRYPOINT ["./wait-for-it.sh"]

ENV FRONT_URL=$FRONT_URL
