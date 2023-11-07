FROM node:18-alpine

WORKDIR /app

# RUN npm install nodemon -g

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# COPY .next ./.next

CMD ["npm", "run", "dev-watch"]