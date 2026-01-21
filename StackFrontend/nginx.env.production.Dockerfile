FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN rm -rf node_modules
RUN rm -rf package-lock.json
RUN rm -rf .next
RUN npm install
CMD [ "npm","run","build:production" ]