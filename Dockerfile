FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000
RUN chown -R node:node /usr/src/app
USER node
CMD ["npm", "run", "dev"]