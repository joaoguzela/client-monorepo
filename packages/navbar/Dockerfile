FROM node:alpine

RUN npm install -g npm@9.8.0

WORKDIR /front/build

COPY package.json ../../

RUN yarn install

COPY . .

ENV HOST_API=$HOST_API

ENV TOKEN_API=$TOKEN_API

CMD ["yarn","dev"]
