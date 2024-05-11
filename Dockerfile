FROM node:20.9-alpine

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 5173

CMD [ "yarn", "build" ]
