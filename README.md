![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 07 | Testing APIs

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-07-testing/pull/1)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-07-testing.svg?branch=submission)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-07-testing)


#### Documentation
N/A

### Modules
`./index.js`

`./server.js`

`./__mocks__/next.js`

`./__mocks__/request.js`

`./__mocks__/response.js`

##### Exported Values and Methods from `server.js`
N/A

##### Exported Values and Methods from `server.js`
`barf(req, res, next)`
`app`
`start(port)`

###### `barf(req, res, next)` -> `next('throws an error')`
###### `app` -> `express` application
###### `barf(req, res, next)` -> `next('throws an error')`

##### Exported Values and Methods from `./__mocks__/next.js`
###### `next(err, result)` -> `error` or `result`

##### Exported Values and Methods from `./__mocks__/request.js`
###### `get(url)` -> `Promise`

##### Exported Values and Methods from `./__mocks__/response.js`
###### `response(result)` -> `status` object

#### Running the app
* `node index.js` or
* `nodemon index.js` or 
* `npm run start`

#### Tests
* How do you run tests?

`npm run test`
`npm run test-watch`

* What assertions were made?
  
  * All tests are performed with both manual mocks from the `__mocks__` folder and with `supertest`.
  * A `GET` request to route `/a` responds with a `200` status code.
  * A `GET` request to route `/e` responds with a `500` status code.
  * A `GET` request to a dummy route implemented using the `faker` package response with a `404` status code.
  * The `barf` middleware throw an error on a `GET` request to route `/e`.

* What assertions need to be / should be made?

  * A Jest spy should be called when `next` is invoked.

#### UML
N/A
