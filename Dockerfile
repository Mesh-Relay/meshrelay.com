# build environment
FROM node:13.6.0-alpine3.11 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --production

COPY . /app

RUN npm run build

# production environment
## Nginx Docker Hub - https://hub.docker.com/_/nginx
FROM nginx:1.17.7-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
