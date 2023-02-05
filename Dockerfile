FROM node:16.9.1-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --only=prod

COPY . .

EXPOSE 3000

RUN npm run serve