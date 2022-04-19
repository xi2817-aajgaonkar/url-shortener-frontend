FROM node:16.10-alpine as builder
WORKDIR /app
COPY ./ ./
RUN npm i
RUN npm run build

# Install `serve` to run the application.
FROM caddy:2-alpine
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY ./Caddyfile /etc/caddy/Caddyfile
# Tell Docker about the port we`'ll run on.
EXPOSE 3000
