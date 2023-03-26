# FROM node:lts-alpine
FROM jjolon/vue-pg:latest

# RUN npm install -g http-server
# RUN npm install --global yarn

#
WORKDIR /var/www/html/dist
#
# COPY package*.json ./
#
# RUN yarn
#
COPY dist .
#
# RUN yarn build
#
EXPOSE 80
#
# CMD ["http-server", "dist"]