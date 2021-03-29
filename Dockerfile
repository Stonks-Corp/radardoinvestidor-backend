FROM node:latest

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY . /app

EXPOSE 4000
