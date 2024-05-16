#Development

# FROM node:20.9-alpine

# WORKDIR /app

# COPY package.json .

# RUN yarn 

# COPY . .

# EXPOSE 3000

# CMD [ "yarn", "dev" ]

#Production

FROM node:20.9-alpine

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "preview" ]

