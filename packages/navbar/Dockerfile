FROM node:alpine

RUN npm install -g npm@9.8.0

WORKDIR /front/build

COPY package.json ../../

RUN rm -rf node_modules

RUN yarn install

COPY . .


EXPOSE 5173


CMD ["yarn", "dev","--force"]
ENV HOST_API=$HOST_API

ENV TOKEN_API=$TOKEN_API
