
FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.html ./
COPY ./app ./app

RUN npm install

EXPOSE 3003
CMD [ "npm", "start" ]
