FROM node:alpine as builder

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN yarn
RUN yarn build

FROM nginx

RUN rm -r /etc/nginx/conf.d

COPY config/nginx /etc/nginx/conf.d

COPY --from=builder /app/build /app
