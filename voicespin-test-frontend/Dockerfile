FROM node:carbon as frontend

WORKDIR /app

COPY ./package*.json ./

RUN npm i && npm cache clean -f

COPY . .

RUN npm run build:prod

FROM nginx:mainline

COPY ./src/config/nginx/prod.conf /etc/nginx/conf.d/default.conf

COPY --from=frontend /app/dist/voicespin-test-frontend /dist

CMD ["sh", "-c", "nginx -g 'daemon off;'"]
