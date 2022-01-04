# Dockerized Angular/Cypress

This project was created as a proof-of-concept for dockerizing an Angular app with Cypress

## There are 3 different Dockerfiles... one for each way to use Docker with Cypress

# Installation

Build the images and spin up the containers:

```sh
$ docker compose build
$ docker compose run --rm angular npm install
$ docker compose up -d
```

## Navigate to http://localhost:4200 to be sure that the app is up and running


## Option 1: (RECOMMENDED APPROACH)
### ================================================================
### Running Cypress Included

#### Advantages:
> Uses scripts in package.json to add additional cypress commands
> Uses custom image extending "cypress included" image to add additional packages
> mounts volumes to local file system to save recordings and reports

#### Examples:
#### Run the docker container cypress-included and run the script "chrome:test"
#### Note: the --rm spins up the container, runs the commands, and removes it once finished.
####     If you want the container to persist then remove the --rm option
```sh
$ docker compose run --rm cypress-included chrome:test
```

## Note: You can choose to run a container for each browser - see docker-compose.yml

## Updating tests
### A volume mounting of ./cypress:/usr/src/app/cypress in the cypress-included container automatically syncs up changes, so no need to run any extra commands to deploy tests to the container as it is mounted

## Option 2: Running Cypress Browser
### ================================================================
### Installs Cypress with browser support within the container

#### Run the test
```sh
$ docker compose run cypress-browser ./node_modules/.bin/cypress run
```

#### Run a particular test
```sh
$ docker compose run cypress-browser ./node_modules/.bin/cypress run --spec "cypress/integration/spec.js"
```

#### Record the test run
```sh
$ docker compose run cypress-browser ./node_modules/.bin/cypress run --record --key "cypress-test-key1"
```
#### See here for other run options:  https://docs.cypress.io/guides/guides/command-line#cypress-run

# Further Reading
> Viewing the spec runner within a container:
https://github.com/bahmutov/cypress-open-from-docker-compose
> Using "--exit-code-from cypress" is useful for reporting test results back to CI

# References

> https://github.com/qaboxletstest/cypress-docker-mochawesome-crossbrowser
> https://www.youtube.com/watch?v=Ze0LF3ERRh0
> https://mtlynch.io/painless-web-app-testing/
> https://testdriven.io/blog/testing-angular-with-cypress-and-docker/
> https://github.com/cypress-io/cypress-example-docker-compose-included
> https://hub.docker.com/r/cypress/included/tags
