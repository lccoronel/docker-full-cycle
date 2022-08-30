FROM golang:alpine as golangImage

WORKDIR /app

COPY . .

RUN go build main.go

FROM scratch

WORKDIR /app

COPY --from=golangImage /app/main .

CMD [ "/app/main", ";", "exit", ";" ]

# Image url https://hub.docker.com/r/lccoornel/codeeducation