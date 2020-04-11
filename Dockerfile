FROM node:13.12.0-alpine3.11
# install simple http server for serving static content
RUN yarn global add http-server
WORKDIR .
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN yarn install
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
# build app for production with minification
RUN yarn build
EXPOSE 8080
CMD [ "http-server", "dist" ]
