# syntax=docker/dockerfile:1

FROM node:18

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

WORKDIR /server

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
