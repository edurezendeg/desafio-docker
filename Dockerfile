FROM golang:1.18 AS GO
WORKDIR /go/src/
COPY hello.go .
RUN go build hello.go

FROM scratch
COPY --from=GO /go/src/ .
ENTRYPOINT [ "./hello" ]