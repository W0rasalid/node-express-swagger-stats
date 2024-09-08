# node-express-swagger-stats

<p align="center">
<img src="https://github.com/slanatech/swagger-stats/blob/master/screenshots/logo.png?raw=true" alt="swagger-stats"/>
</p>

# swagger-stats | API Observability

#### [https://swaggerstats.io](https://swaggerstats.io) | [Guide](https://swaggerstats.io/guide/)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/slanatech/swagger-stats/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/slanatech/swagger-stats/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/slanatech/swagger-stats/badge.svg?branch=master&dummy)](https://coveralls.io/github/slanatech/swagger-stats?branch=master&dummy)
[![npm version](https://badge.fury.io/js/swagger-stats.svg)](https://badge.fury.io/js/swagger-stats)
[![npm downloads](https://img.shields.io/npm/dm/swagger-stats.svg)](https://img.shields.io/npm/dm/swagger-stats)
[![Gitter](https://badges.gitter.im/swagger-stats/community.svg)](https://gitter.im/swagger-stats/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

#### Trace API calls and Monitor API performance, health and usage statistics in Node.js Microservices

### Express, Fastify, Koa, Hapi, Restify

**swagger-stats** traces REST API requests and responses in Node.js Microservices, and collects statistics per API Operation.
**swagger-stats** detects API operations based on express routes. You may also provide [Swagger (Open API) specification](https://swagger.io/specification/),
and swagger-stats will match API requests with API Operations defined in swagger specification.

## Description

This project uses Express and Swagger Stats to provide API monitoring and reporting.

## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Running the app

```bash
$ npm run dev
```
