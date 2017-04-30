FROM node:6.10-alpine
RUN mkdir -p /home/web
COPY *.html /home/web/
COPY public /home/web/public/
COPY src /home/web/src/
COPY *.json /home/web/
WORKDIR "/home/web"
RUN npm install
ENTRYPOINT npm run start
