FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @nestjs/cli && npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
 