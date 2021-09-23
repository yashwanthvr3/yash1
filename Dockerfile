
FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./
COPY ./app ./app

RUN npm install

EXPOSE 3003
CMD [ "npm", "start" ]
