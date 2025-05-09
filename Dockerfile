FROM node

RUN mkdir -p /src/pracobot_frontend
COPY . /src/pracobot_frontend
WORKDIR /src/pracobot_frontend
RUN npm install
RUN npm run build .
ENTRYPOINT [ "npm", "run", "start" ]