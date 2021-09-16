FROM node:16.9.1-alpine3.12

RUN apk add --no-cache bash

#same version that we have in package.json
RUN npm install -g @nestjs/cli@8.0.0

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

USER node

WORKDIR /home/node/app


EXPOSE 3000

ENTRYPOINT /wait