
FROM node

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

RUN npm install

EXPOSE 3003

RUN npm start
