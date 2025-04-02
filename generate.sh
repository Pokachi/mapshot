#!/bin/sh
npm --prefix frontend install
npm --prefix frontend run build
go generate ./...