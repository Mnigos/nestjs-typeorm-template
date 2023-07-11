# NestJS Template

Nestjs template repository

## Tech stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Usage

### Setup

Make sure to have installed right version of Node.js in nvm

```bash
nvm use
```

Don't forget to install the dependencies:

```bash
yarn install
```

### Running the app

```bash
# Build Docker Image
yarn docker:build

# Run Docker Image
yarn docker:start

# Run app
yarn start

# Run app in watch mode
yarn start:dev

# Run app in debug mode
yarn start:debug

# Run app in production mode
yarn start:prod
```

### Test

```bash
# unit tests
yarn run test

# unit tests in watch mode
yarn run test:watch

# e2e tests
yarn run test:e2e

# e2e tests in watch mode
yarn run test:e2e:watch

# Runing tests in coverage mode
yarn test:coverage
```
