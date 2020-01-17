#!/usr/bin/env bash
docker build -f Dockerfile -t meshrelay/frontend:prod .
docker push meshrelay/frontend:prod
echo "Build complete - Check https://hub.docker.com/repository/docker/meshrelay/frontend to confirm!"