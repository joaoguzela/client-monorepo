FROM node:alpine

RUN npm install -g npm@9.8.0

WORKDIR /app/build

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV FRONT_URL=$FRONT_URL
