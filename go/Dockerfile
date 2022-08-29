FROM golang:alpine as golangImage

WORKDIR /app

COPY . .

RUN GOOS=linux go build main.go

FROM scratch

WORKDIR /app

COPY --from=golangImage /app/main .

CMD [ "/app/main", ";", "exit", ";" ]