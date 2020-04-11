# project brass frontend
based on [this article](https://medium.com/google-cloud/a-clearer-vue-in-google-cloud-2370a4b048cd)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## building

### build docker image
```
docker build -t project-brass/frontend .
```
### run docker image (for verification)
```
docker run -d -p 8080:8080 --rm vue-google-cloud/vue-app
```
## deploying to gcp 
First, store project id as environment var:
```
PROJECT_ID=$(gcloud config get-value core/project)
```
### push to google container registry
```
docker tag project-brass/frontend gcr.io/$PROJECT_ID/brass-frontend:v1
docker push gcr.io/$PROJECT_ID/brass-frontend:v1
```
