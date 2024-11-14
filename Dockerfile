FROM node:22-slim
RUN apt-get update
RUN apt-get install -y \
    git
WORKDIR /app
COPY package*.json ./
RUN npm install