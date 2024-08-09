FROM denoland/deno:alpine

EXPOSE 3000

WORKDIR /app

ADD . /app

RUN deno cache main.ts

CMD ["run", "--allow-read", "--allow-env", "--allow-net", "main.ts"]