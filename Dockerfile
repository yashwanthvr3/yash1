
FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./
COPY ./app ./app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
