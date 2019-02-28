FROM node:carbon

RUN npm i pm2 -g

WORKDIR /app

COPY ./package*.json ./

RUN npm i && npm cache clean -f

COPY . .

CMD ["pm2", "start", "index.js", "--no-daemon" ]
