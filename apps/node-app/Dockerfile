FROM node:18-alpine

#initial setup for neovim
RUN apk add git
RUN  apk add neovim

WORKDIR /app
COPY package*.json ./
RUN npm install -g tsx
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]