FROM node:12.16.2-buster-slim AS build
WORKDIR /portfolio
COPY . ./
RUN npm install && npm run build
CMD ["node_modules/.bin/next", "start"]
