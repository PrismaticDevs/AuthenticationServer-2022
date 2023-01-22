FROM node:18

WORKDIR /server

COPY package*.json ./

RUN yarn install

COPY . . 

EXPOSE 8080

CMD [ "node", "index.js" ]