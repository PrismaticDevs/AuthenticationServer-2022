FROM node:18

WORKDIR /client

COPY package*.json ./

RUN yarn add

COPY . . 

EXPOSE 3000

CMD [ "node", "index.js" ]