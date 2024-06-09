FROM node:18.20.3 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
ENV REACT_APP_BASE_URL=https://insight-challenge-production.up.railway.app
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]