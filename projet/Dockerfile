FROM node:alpine3.14

WORKDIR /app

COPY package*.json .

RUN  npm install
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/app" \
    --no-create-home \
    --uid 5001 \
    appjs

RUN chown -R appjs:appjs /app
USER appjs

COPY . .



EXPOSE 3000
CMD [ "node", "app.js"]