'use strict';

const supertest = require('supertest');
const faker = require('faker');

// What's up with the {}????
// It imports the value (`app`) corresponding to the server key
// from the import
const { barf, server } = require('../server.js');

// Mock implementations
const mockRequest = require('../__mocks__/request.js');
const mockResponse = require('../__mocks__/response.js');
const mockNext = require('../__mocks__/next.js');

// Not quite sure how to spy on `next`
// const express = require('express');
// jest.spyOn(express, 'next');
// jest.spyOn(express, 'next').mockImplementation(() => {});
// jest.spyOn(server, 'next').mockImplementation(() => {});
// jest.spyOn(server, 'next')

const mockClient = supertest(server);

// TESTING WITH SUPERTEST
describe('The Server - with SUPERTEST', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here?
    // mockClient returns a promise
    return mockClient
      .get('/a')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
  it('responds with a 500 on an error', () => {
    return mockClient
      .get('/e')
      .then(results => expect(results.status).toBe(500))
      .catch(console.error);
  });
  it('responds with a 404 on an unknown route', () => {
    const word = faker.lorem.word();
    return mockClient
      .get(`/${word}`)
      .then(results => expect(results.status).toBe(404))
      .catch(console.error);
  });
});

describe('barf - with MANUAL MOCKS', () => {
  it('Invokes `next` with `throws an error`', () => {
    expect(() => barf(mockRequest.get('/e'), mockResponse, mockNext)).toThrow();
  });
});

// TESTING WITH MANUAL MOCKS
describe('The Server - with MANUAL MOCKS', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here?
    // mockClient returns a promise
    return mockRequest
      .get('/a')
      .then(result => {
        expect(mockResponse(result).status).toEqual(200);
      })
      .catch(console.error);
  });
  it('responds with a 500 on an error', () => {
    return mockRequest
      .get('/e')
      .then(result => expect(mockResponse(result).status).toBe(500))
      .catch(console.error);
  });
  it('responds with a 404 on an unknown route', () => {
    const word = faker.lorem.word();
    return mockRequest
      .get(`/${word}`)
      .then(result => expect(mockResponse(result).status).toBe(404))
      .catch(console.error);
  });
});
